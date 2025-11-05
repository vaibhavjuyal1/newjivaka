# After Uploading ZIP - Next Steps

## ✅ Step 1: Configure Settings

After uploading backend.zip, you'll see configuration options. Fill these:

### Project Settings:
1. **Root Directory:** 
   - Leave blank or type: `backend`
   - Vercel might auto-detect this

2. **Framework Preset:**
   - Select: **"Other"** or leave default

3. **Build Command:**
   - Leave **EMPTY** (don't type anything)

4. **Output Directory:**
   - Leave **EMPTY**

5. **Install Command:**
   - Type: `npm install`

6. **Start Command:**
   - Type: `node server.js`

---

## ✅ Step 2: Add Environment Variables

1. **Scroll down** to find **"Environment Variables"** section
2. **Click "Add"** button (you'll add 2 variables)

### Variable 1:
- **Name:** Type: `NODE_ENV`
- **Value:** Type: `production`
- **Click "Add"** or **"Save"**

### Variable 2:
- **Click "Add"** again (add another variable)
- **Name:** Type: `PORT`
- **Value:** Type: `5000`
- **Click "Add"** or **"Save"**

---

## ✅ Step 3: Deploy

1. **Scroll down** to bottom of page
2. **Find the big blue "Deploy" button**
3. **Click "Deploy"**
4. **Wait 2-3 minutes** - you'll see progress

---

## ✅ Step 4: Get Your Backend URL

1. **When deployment finishes:**
   - You'll see a **green checkmark** ✅
   - Status will say: **"Deployment successful"**

2. **You'll see a URL** like:
   ```
   https://jivaka-backend-xxx.vercel.app
   ```

3. **Click on that URL** or **copy it**
4. **SAVE THIS URL** - You'll need it for frontend deployment!

---

## 🆘 If You See Errors

**Common Issues:**
- If "Root Directory" error: Type `backend` or leave blank
- If build fails: Make sure "Build Command" is EMPTY
- If deployment fails: Check that "Start Command" is `node server.js`

---

## 📝 Quick Checklist

- [ ] Configured settings (Install Command: npm install, Start Command: node server.js)
- [ ] Added NODE_ENV = production
- [ ] Added PORT = 5000
- [ ] Clicked Deploy
- [ ] Got backend URL (like https://jivaka-backend-xxx.vercel.app)
- [ ] Saved the backend URL

---

**Once you have the backend URL, tell me and we'll deploy the frontend!** 🚀



