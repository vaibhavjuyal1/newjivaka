# Installing Node.js - Required First Step

**Node.js is NOT currently installed on your computer.** You need to install it before running the Jivaka website.

## 🚀 Quick Installation Steps

### Step 1: Download Node.js

1. **Go to the official Node.js website:**
   - Visit: https://nodejs.org/
   - Or go directly to: https://nodejs.org/en/download/

2. **Download the LTS (Long Term Support) version:**
   - Click the big green "LTS" button
   - Choose the Windows Installer (.msi) - 64-bit recommended
   - The file will be named something like: `node-v20.x.x-x64.msi`

### Step 2: Install Node.js

1. **Run the downloaded installer** (double-click the .msi file)
2. **Follow the installation wizard:**
   - Click "Next" through all screens
   - ✅ **IMPORTANT**: Make sure "Add to PATH" is checked (it usually is by default)
   - Click "Install"
   - Wait for installation to complete
   - Click "Finish"

### Step 3: Verify Installation

1. **Open a NEW terminal/PowerShell window** (important: close and reopen!)
   - Press `Win + X` and select "Windows PowerShell" or "Terminal"
   - Or press `Win + R`, type `cmd`, press Enter

2. **Type these commands to verify:**
   ```bash
   node --version
   npm --version
   ```

3. **You should see version numbers like:**
   ```
   v20.x.x
   10.x.x
   ```

✅ **If you see version numbers, Node.js is installed correctly!**

### Step 4: Now Run Jivaka

After installing Node.js, come back and I can run the commands for you, or follow the PREVIEW_GUIDE.md instructions.

## 📝 Alternative: Using Chocolatey (Advanced)

If you have Chocolatey package manager:

```powershell
choco install nodejs-lts
```

## ❓ Troubleshooting

### "node is not recognized" after installation?
1. **Close and reopen** your terminal/PowerShell
2. If still not working, restart your computer
3. Check if Node.js was added to PATH during installation

### Need Help?
- Node.js official docs: https://nodejs.org/en/docs/
- Check installation: https://nodejs.org/en/download/package-manager/

## 🎯 After Installing Node.js

Once Node.js is installed, you can:

1. **Open terminal in the jivaka folder**
2. **Install dependencies:**
   ```bash
   cd D:\jivaka\backend
   npm install
   
   cd ..\frontend
   npm install
   ```

3. **Start the servers** (see PREVIEW_GUIDE.md)

---

**Install Node.js first, then come back and let me know when it's installed!** 🚀





