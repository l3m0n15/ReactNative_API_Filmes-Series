# Script PowerShell para autosave para GitHub
$repoPath = "c:\Users\snand\ReactNative_API_Filmes-Series"
Set-Location $repoPath

Write-Host "AutoSave GitHub iniciado!" -ForegroundColor Green
Write-Host "Repositório: $repoPath" -ForegroundColor Cyan
Write-Host "Intervalo: 30 segundos" -ForegroundColor Cyan
Write-Host ""

while ($true) {
    try {
        Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Sincronizando com GitHub..." -ForegroundColor Yellow
        
        # Pull
        git pull origin main 2>$null | Out-Null
        
        # Add all changes
        git add . 2>$null
        
        # Commit
        $result = git commit -m "auto commit [$(Get-Date -Format 'HH:mm:ss')]" --allow-empty 2>&1
        
        # Push
        git push origin main 2>$null
        
        Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Sincronizado com sucesso!" -ForegroundColor Green
    }
    catch {
        Write-Host "[$(Get-Date -Format 'HH:mm:ss')] Erro: $_" -ForegroundColor Red
    }
    
    # Aguarda 30 segundos
    Start-Sleep -Seconds 30
}
