# How to Start Jivaka - Manual Instructions

Since automatic startup isn't working, follow these steps manually in separate terminal windows:

## Method 1: Using VS Code/Cursor Terminal

### Step 1: Start Backend Server

1. **Open VS Code/Cursor**
2. **Open a terminal** (Press `Ctrl + ` or `Ctrl + Shift + `)
3. **Type these commands:**
   ```bash
   cd D:\jivaka\backend
   npm start
   ```

4. **You should see:**
   ```
   🚀 Jivaka server is running on port 5000
   📍 API available at http://localhost:5000/api
   ```

5. **KEEP THIS TERMINAL OPEN!** ✅

### Step 2: Start Frontend Server

1. **Open a NEW terminal** in VS Code/Cursor:
   - Click the **"+" button** next to the terminal tab
   - Or press `` Ctrl + Shift + ` `` to open a new terminal
   - Or go to: Terminal → New Terminal

2. **Type these commands:**
   ```bash
   cd D:\jivaka\frontend
   npm start
   ```

3. **Wait 30-60 seconds** for compilation

4. **Your browser should automatically open** to:
   ```
   http://localhost:3000
   ```

## Method 2: Using Separate PowerShell/Command Prompt Windows

### Window 1: Backend

1. **Open PowerShell or Command Prompt**
2. **Navigate to backend:**
   ```powershell
   cd D:\jivaka\backend
   npm start
   ```

3. **Keep this window open!**

### Window 2: Frontend

1. **Open a NEW PowerShell or Command Prompt** window
2. **Navigate to frontend:**
   ```powershell
   cd D:\jivaka\frontend
   npm start
   ```

3. **Wait for browser to open** or manually go to `http://localhost:3000`

## 🔍 Troubleshooting

### "Error: listen EADDRINUSE: address already in use :5000"
- Something is already using port 5000
- Close other programs or restart your computer

### "Error: Cannot find module"
- Dependencies not installed properly
- Run: `npm install` again in the backend/frontend folder

### Browser doesn't open automatically
- Wait 1-2 minutes for compilation
- Manually go to: `http://localhost:3000`

### "npm start" doesn't do anything
- Make sure you're in the correct folder (`backend` or `frontend`)
- Check if `package.json` exists: `dir package.json`

## ✅ Success Indicators

**Backend Terminal Should Show:**
```
🚀 Jivaka server is running on port 5000
📍 API available at http://localhost:5000/api
```

**Frontend Terminal Should Show:**
```
Compiled successfully!

You can now view jivaka-frontend in the browser.

  Local:            http://localhost:3000
```

## 🎯 Quick Checklist

- [ ] Backend terminal is running and showing the server message
- [ ] Frontend terminal is compiling (waiting...)
- [ ] Browser opened to http://localhost:3000
- [ ] Website is displaying correctly

---

**Follow these manual steps and the website should work!** 🚀



