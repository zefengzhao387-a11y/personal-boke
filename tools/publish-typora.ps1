param(
  [Parameter(Position = 0)]
  [string]$MarkdownFile
)

$ErrorActionPreference = 'Stop'
$credentialFile = Join-Path (Join-Path $env:LOCALAPPDATA 'RainyBlogPublisher') 'credentials.json'
$nodeScript = Join-Path $PSScriptRoot 'publish-typora.mjs'

if ([string]::IsNullOrWhiteSpace($MarkdownFile)) {
  Add-Type -AssemblyName System.Windows.Forms
  $dialog = New-Object System.Windows.Forms.OpenFileDialog
  $dialog.Title = 'Select a Markdown article to publish'
  $dialog.Filter = 'Markdown files (*.md)|*.md|All files (*.*)|*.*'
  $dialog.InitialDirectory = [Environment]::GetFolderPath('MyDocuments')
  if ($dialog.ShowDialog() -ne [System.Windows.Forms.DialogResult]::OK) { exit 0 }
  $MarkdownFile = $dialog.FileName
}

if (-not (Test-Path -LiteralPath $MarkdownFile)) { throw "找不到 Markdown 文件：$MarkdownFile" }
if (-not (Test-Path -LiteralPath $credentialFile)) {
  & (Join-Path $PSScriptRoot 'setup-typora.ps1')
}

$credential = Get-Content -Raw -Encoding UTF8 -LiteralPath $credentialFile | ConvertFrom-Json
$securePassword = ConvertTo-SecureString $credential.encryptedPassword
$passwordPointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($securePassword)

try {
  $env:RAINY_AUTHOR_EMAIL = $credential.email
  $env:RAINY_AUTHOR_PASSWORD = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($passwordPointer)
  & node $nodeScript (Resolve-Path -LiteralPath $MarkdownFile).Path
  if ($LASTEXITCODE -ne 0) { throw "发布失败，退出码：$LASTEXITCODE" }
} finally {
  $env:RAINY_AUTHOR_EMAIL = $null
  $env:RAINY_AUTHOR_PASSWORD = $null
  if ($passwordPointer -ne [IntPtr]::Zero) {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($passwordPointer)
  }
}
