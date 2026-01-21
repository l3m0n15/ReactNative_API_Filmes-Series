# Script PowerShell para autosave para GitHub
$repoPath = "c:\Users\snand\ReactNative_API_Filmes-Series"
Set-Location $repoPath

Write-Host "================================================" -ForegroundColor Green
Write-Host "    Auto-Save GitHub Iniciado!                 " -ForegroundColor Green
Write-Host "================================================" -ForegroundColor Green
Write-Host "Repositorio: $repoPath" -ForegroundColor Cyan
Write-Host "Intervalo: 30 segundos" -ForegroundColor Cyan
Write-Host "Branch: main" -ForegroundColor Cyan
Write-Host ""

$commitCount = 0

while ($true) {
    try {
        $timestamp = Get-Date -Format 'HH:mm:ss'
        Write-Host "[$timestamp] Sincronizando com GitHub..." -ForegroundColor Yellow
        
        # Pull para trazer mudancas remotas
        $pullResult = git pull origin main --ff-only 2>&1
        if ($LASTEXITCODE -ne 0) {
            Write-Host "[$timestamp] Aviso: Nao foi possivel fazer pull (sem conexao?)" -ForegroundColor Yellow
        }
        
        # Verifica se ha mudancas
        $status = git status --porcelain
        
        if ($status) {
            # Add all changes (mas respeita .gitignore)
            git add .
            
            # Commit apenas se houver mudancas
            $commitCount++
            $commitMsg = "auto commit #$commitCount [$(Get-Date -Format 'HH:mm:ss')]"
            git commit -m $commitMsg
            
            # Push
            $pushResult = git push origin main 2>&1
            if ($LASTEXITCODE -eq 0) {
                Write-Host "[$timestamp] Sincronizado com sucesso! (Commit #$commitCount)" -ForegroundColor Green
            } else {
                Write-Host "[$timestamp] Erro ao fazer push: $pushResult" -ForegroundColor Red
            }
        } else {
            Write-Host "[$timestamp] Nenhuma mudanca detectada" -ForegroundColor Gray
        }
    }
    catch {
        Write-Host "[$timestamp] Erro: $_" -ForegroundColor Red
    }
    
    # Aguarda 30 segundos
    Start-Sleep -Seconds 30
}
