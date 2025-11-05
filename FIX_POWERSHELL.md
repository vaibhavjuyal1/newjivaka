# Fix PowerShell Execution Policy Error

If you see: "running scripts is disabled on this system"

## Quick Fix - Run This Command

Open PowerShell as Administrator (or just regular PowerShell) and run:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Type `Y` when asked.

## Alternative: Use Command Prompt Instead

If you don't want to change PowerShell settings, use Command Prompt (cmd) instead:

1. Press `Win + R`
2. Type `cmd` and press Enter
3. Then type:
   ```bash
   cd D:\jivaka\backend
   npm start
   ```

And in another Command Prompt window:
   ```bash
   cd D:\jivaka\frontend
   npm start
   ```

## Method 3: Bypass Execution Policy for One Session

In PowerShell, run:
```powershell
powershell -ExecutionPolicy Bypass -Command "cd D:\jivaka\frontend; npm start"
```

## After Fixing

Once the execution policy is set, you can run npm commands normally.



