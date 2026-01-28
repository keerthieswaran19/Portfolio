@echo off
setlocal enabledelayedexpansion

:menu
cls
echo ==========================================
echo    PORTFOLIO PROJECT MANAGEMENT MENU
echo ==========================================
echo 1. Start Dev Server (Vite)
echo 2. Build Project
echo 3. Run Lint
echo 4. Run Preview (Local Build Test)
echo 5. Deploy to Netlify (Production)
echo 6. Clean (Delete Build/Modules)
echo 7. Install Dependencies
echo 8. Open Resume (PDF)
echo 9. Exit
echo ==========================================
set /p choice="Enter your choice (1-9): "

if "%choice%"=="1" goto dev
if "%choice%"=="2" goto build
if "%choice%"=="3" goto lint
if "%choice%"=="4" goto preview
if "%choice%"=="5" goto deploy
if "%choice%"=="6" goto clean
if "%choice%"=="7" goto install
if "%choice%"=="8" goto resume
if "%choice%"=="9" goto end
goto menu

:dev
echo [INFO] Starting Dev Server...
if not exist "ui\node_modules\" (
    echo [WARN] node_modules not found. Running install first...
    pushd ui
    call npm install
    popd
)
pushd ui
call npm run dev
popd
goto end

:build
echo [INFO] Building Project...
pushd ui
call npm run build
popd
echo.
echo [SUCCESS] Build complete.
pause
goto menu

:lint
echo [INFO] Running Lint...
pushd ui
call npm run lint
popd
pause
goto menu

:preview
echo [INFO] Starting Preview of Local Build...
pushd ui
call npm run preview
popd
goto end

:deploy
echo [INFO] Deploying to Netlify...
call npx netlify deploy --prod --dir=ui/dist
pause
goto menu

:clean
echo [CAUTION] This will delete node_modules and dist.
set /p confirm="Are you sure? (y/n): "
if /i "%confirm%"=="y" (
    echo [INFO] Cleaning...
    if exist "ui\node_modules\" rmdir /s /q "ui\node_modules"
    if exist "ui\dist\" rmdir /s /q "ui\dist"
    echo [SUCCESS] Cleaned.
)
pause
goto menu

:install
echo [INFO] Installing Dependencies...
pushd ui
call npm install
popd
pause
goto menu

:resume
echo [INFO] Opening Resume...
start "" "..\\Keerthie Resume.pdf"
pause
goto menu

:end
echo Exiting...
exit /b

