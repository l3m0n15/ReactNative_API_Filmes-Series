@echo off
:loop
git add .
git commit -m "auto commit" --allow-empty
git pull origin main --rebase --no-edit
git push origin main
timeout /t 30 >nul
goto loop
