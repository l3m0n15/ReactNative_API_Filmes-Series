#!/usr/bin/env pwsh

# Auto-commit a cada 30 segundos
$interval = 30

Write-Host "🚀 Auto-commit iniciado - A cada $interval segundos" -ForegroundColor Green
Write-Host "Pressione Ctrl+C para parar" -ForegroundColor Yellow

while ($true) {
    Start-Sleep -Seconds $interval
    
    $timestamp = Get-Date -Format "HH:mm:ss"
    $datestr = Get-Date -Format "dd/MM/yyyy HH:mm:ss"
    
    # Verificar se há mudanças
    $status = git status --porcelain
    
    if ($status) {
        Write-Host "[$timestamp] ✏️  Mudanças detectadas, comitando..." -ForegroundColor Cyan
        git add .
        git commit -m "Auto-commit #$(Get-Random -Minimum 1000 -Maximum 9999) [$datestr]" | Out-Null
        git push origin main | Out-Null
        Write-Host "[$timestamp] ✅ Enviado para GitHub" -ForegroundColor Green
    } else {
        Write-Host "[$timestamp] ⏸️  Nenhuma mudança detectada" -ForegroundColor Gray
    }
}
