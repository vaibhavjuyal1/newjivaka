# Simple Deploy Instructions - Do This Exactly

## 🎯 Goal: Make Your Website Public in 10 Minutes

Follow these steps **EXACTLY** as written:

---

## PART 1: Deploy Backend (5 minutes)

### Step 1: Open Vercel
1. Open your browser
2. Go to: **https://vercel.com**
3. Click **"Sign Up"** (or **"Log In"**)

### Step 2: Upload Backend
1. After login, click **"Add New..."** button (top right corner)
2. Click **"Project"**
3. You'll see options - choose one:

   **Option A (Easiest):**
   - Drag and drop your **`D:\jivaka\backend`** folder
   - OR click **"Browse"** and find `D:\jivaka\backend` folder
   - Click **"Open"**

   **Option B (If you have GitHub):**
   - Click **"Import Git Repository"**
   - Connect GitHub account
   - Select your repository

### Step 3: Configure Backend
After uploading, you'll see settings. Fill these:

- **Root Directory:** Type `backend` (or leave blank if auto-filled)
- **Framework Preset:** Select **"Other"** (or leave default)
- **Build Command:** Leave **EMPTY**
- **Output Directory:** Leave **EMPTY**
- **Install Command:** Type `npm install`
- **Start Command:** Type `node server.js`

### Step 4: Add Environment Variables
1. Scroll down to **"Environment Variables"** section
2. Click **"Add"** button
3. Add these **TWO variables** (one at a time):

   **Variable 1:**
   - Name: `NODE_ENV`
   - Value: `production`
   - Click **"Add"**

   **Variable 2:**
   - Name: `PORT`
   - Value: `5000`
   - Click **"Add"**

### Step 5: Deploy Backend
1. Scroll down
2. Click **"Deploy"** button (big blue button)
3. Wait 2-3 minutes (watch the progress)
4. When it says **"Deployment successful"** (green checkmark):
   - You'll see a URL like: `https://jivaka-backend-xxx.vercel.app`
   - **COPY THIS URL** - Click on it, then copy from address bar
   - **SAVE THIS URL** - You need it for Part 2!

---

## PART 2: Deploy Frontend (5 minutes)

### Step 1: Upload Frontend
1. Still on Vercel website
2. Click **"Add New..."** button again (top right)
3. Click **"Project"**
4. Upload frontend:

   **Option A (Easiest):**
   - Drag and drop your **`D:\jivaka\frontend`** folder
   - OR click **"Browse"** and find `D:\jivaka\frontend` folder
   - Click **"Open"**

   **Option B (If you have GitHub):**
   - Click **"Import Git Repository"**
   - Select frontend folder

### Step 2: Configure Frontend
After uploading, fill these:

- **Root Directory:** Type `frontend`
- **Framework Preset:** Select **"Create React App"** (important!)
- **Build Command:** Type `npm run build`
- **Output Directory:** Type `build`
- **Install Command:** Type `npm install`

### Step 3: Add Environment Variable (IMPORTANT!)
1. Scroll down to **"Environment Variables"** section
2. Click **"Add"** button
3. Add this variable:

   - Name: `REACT_APP_API_URL`
   - Value: `https://YOUR-BACKEND-URL/api`
   
   **IMPORTANT:** Replace `YOUR-BACKEND-URL` with the URL you copied in Part 1!
   
   **Example:** If your backend URL was `https://jivaka-backend-xxx.vercel.app`
   Then type: `https://jivaka-backend-xxx.vercel.app/api`
   
   **Note:** Make sure to add `/api` at the end!

4. Click **"Add"**

### Step 4: Deploy Frontend
1. Scroll down
2. Click **"Deploy"** button (big blue button)
3. Wait 2-3 minutes
4. When it says **"Deployment successful"**:
   - You'll see a URL like: `https://jivaka.vercel.app`
   - **CLICK ON THIS URL** - Your website is now live! 🎉

---

## ✅ Test Your Website

1. Open the frontend URL in your browser
2. You should see the Jivaka home page
3. Try:
   - Click **"Talk to Jivaka Bot"** → Should work ✅
   - Go to **"Health Tracker"** → Calculate BMI → Should work ✅

---

## 🐛 If Something Doesn't Work

### Frontend can't connect to backend?
1. Go to your **frontend project** on Vercel
2. Click **"Settings"** → **"Environment Variables"**
3. Check `REACT_APP_API_URL` has:
   - Your backend URL
   - `/api` at the end
4. If wrong, click **"Edit"** → Fix it → Click **"Save"**
5. Go to **"Deployments"** tab
6. Click **"..."** (three dots) on latest deployment
7. Click **"Redeploy"**

### Build failed?
1. Click on the failed deployment
2. Look at the **"Logs"** tab
3. Read the error message
4. Common fixes:
   - Missing file? Check you uploaded everything
   - Wrong path? Check Root Directory setting

---

## 📋 Quick Checklist

- [ ] Signed up on Vercel
- [ ] Backend uploaded
- [ ] Backend environment variables set (NODE_ENV, PORT)
- [ ] Backend deployed - got URL
- [ ] Frontend uploaded
- [ ] Frontend environment variable set (REACT_APP_API_URL)
- [ ] Frontend deployed - got URL
- [ ] Website works! ✅

---

## 🎉 You're Done!

Your website is now publicly accessible at your frontend URL!

**Share this URL with anyone** - they can access your Jivaka website from anywhere in the world!

---

**Still confused?** Let me know which step you're stuck on and I'll help! 😊



