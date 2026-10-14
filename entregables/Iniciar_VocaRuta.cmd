@echo off
cd /d "%~dp0.."
echo VocaRuta estara disponible en http://127.0.0.1:5173/
echo Mantenga abierta esta ventana durante la demostracion.
npm run dev -- --host 127.0.0.1
pause
