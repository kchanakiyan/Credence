@echo off
title Credence - Dev Server
echo ==============================================
echo Starting Credence Dev Server...
echo URL: http://localhost:3000
cd /d "%~dp0"
npm run dev
pause
