param()

$ErrorActionPreference = 'Stop'
$credentialDir = Join-Path $env:LOCALAPPDATA 'RainyBlogPublisher'
$credentialFile = Join-Path $credentialDir 'credentials.json'

Write-Host 'Rainy. / Typora 发布器首次设置' -ForegroundColor Cyan
$email = Read-Host '请输入博客后台的作者邮箱'
if ([string]::IsNullOrWhiteSpace($email)) { throw '邮箱不能为空。' }
$password = Read-Host '请输入博客后台密码（输入内容不会显示）' -AsSecureString
$encryptedPassword = ConvertFrom-SecureString $password

New-Item -ItemType Directory -Force -Path $credentialDir | Out-Null
@{
  email = $email.Trim()
  encryptedPassword = $encryptedPassword
} | ConvertTo-Json | Set-Content -Encoding UTF8 -LiteralPath $credentialFile

Write-Host ''
Write-Host '设置完成。密码已使用当前 Windows 账户加密保存。' -ForegroundColor Green
Write-Host "凭据位置：$credentialFile"
