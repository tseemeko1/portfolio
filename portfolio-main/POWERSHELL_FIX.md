# PowerShell npm Fix - Permanent Solution

## What Was Done

A PowerShell profile has been created that automatically refreshes your PATH environment variable every time you open a new PowerShell window. This ensures npm and Node.js are always available.

## Profile Location

The profile is located at:
```
C:\Users\tseem\OneDrive - serge365\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1
```

## How It Works

Every time you open a new PowerShell window, the profile will:
1. Automatically refresh the PATH to include Node.js and npm
2. Display a confirmation message if npm is ready
3. Show a warning if npm is not found

## Testing

To test if it works:
1. **Close your current PowerShell window**
2. **Open a new PowerShell window**
3. You should see: `npm is ready!` in green
4. Type `npm --version` - it should work without any errors

## Manual Refresh (Current Session)

If you're in an existing PowerShell session and need npm immediately:
```powershell
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
```

## Starting Your App

Now you can simply run:
```powershell
cd "C:\Users\tseem\OneDrive - serge365\Documents\portfolio-github\portfolio-main"
npm start
```

No more PATH refresh needed! 🎉

## Troubleshooting

If the profile doesn't load:
1. Check execution policy: `Get-ExecutionPolicy -Scope CurrentUser`
2. If it's "Restricted", run: `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser`
3. Restart PowerShell

