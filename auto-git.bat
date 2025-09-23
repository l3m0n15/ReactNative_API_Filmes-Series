@echo off
echo 🔄 Auto Commit + Push iniciado...
:loop
git add .
git commit -m "auto commit"
git push origin main
timeout /t 30 >nul
goto loop
