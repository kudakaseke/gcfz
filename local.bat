@echo off
cd /d "%~dp0"
echo Starting GCFZ website at http://localhost:5500
start "" http://localhost:5500
py -m http.server 5500
if errorlevel 1 python -m http.server 5500
pause
