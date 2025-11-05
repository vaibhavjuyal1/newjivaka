# Verify Node.js Installation

It looks like Node.js isn't recognized yet. Follow these steps:

## 🔍 Step 1: Make Sure Installation is Complete

1. **Check if you ran the installer**
   - Did you download the .msi file? ✅
   - Did you double-click it and run it? ⚠️ **This is important!**
   - Just downloading isn't enough - you need to INSTALL it

2. **If you haven't run the installer yet:**
   - Find the downloaded file (usually in Downloads folder)
   - File name: `node-v20.x.x-x64.msi` or similar
   - **Double-click it** and follow the installation wizard
   - Click "Next" → "Next" → "Install" → "Finish"

## 🔄 Step 2: Restart Your Terminal/VS Code

**IMPORTANT**: After installing Node.js, you MUST:

1. **Close VS Code/Cursor completely**
2. **Close any open terminals/PowerShell windows**
3. **Reopen VS Code/Cursor**
4. **Open a new terminal** (Press `Ctrl + ` in VS Code/Cursor)

## ✅ Step 3: Verify Installation

In your NEW terminal, type:
```bash
node --version
npm --version
```

**You should see:**
```
v20.11.0    (or similar version number)
10.2.4      (or similar version number)
```

## ❓ If It Still Doesn't Work

1. **Restart your computer** (sometimes needed for PATH to update)
2. **Check if installation completed:**
   - Press `Win + R`
   - Type: `appwiz.cpl`
   - Press Enter
   - Look for "Node.js" in the list - is it there?

3. **Reinstall Node.js** if needed:
   - Make sure "Add to PATH" option is checked during installation

## 🚀 Once Node.js Works

After you can run `node --version` successfully, let me know and I'll help you:
1. Install project dependencies
2. Start the backend server
3. Start the frontend server
4. Open the website!





