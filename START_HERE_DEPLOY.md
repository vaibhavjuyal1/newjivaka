# 🚀 START HERE - Deploy Your Website in 10 Minutes

I've prepared everything for you! Just follow these **EXACT** steps:

---

## ⚡ SUPER SIMPLE VERSION

### STEP 1: Go to Vercel
1. Open: **https://vercel.com**
2. Click **"Sign Up"**
3. Use **Google** or **GitHub** (easiest) - OR email
4. **Done with signup!**

### STEP 2: Deploy Backend (3 minutes)

1. Click **"Add New..."** button (top right corner)
2. Click **"Project"**
3. Find your `D:\jivaka\backend` folder in File Explorer
4. **Drag and drop** the `backend` folder into Vercel
5. Fill these boxes:
   - **Start Command:** Type: `node server.js`
   - **Install Command:** Type: `npm install`
6. Scroll down to **"Environment Variables"**
7. Click **"Add"** button **TWICE** (for 2 variables):
   
   **Variable 1:**
   - Name: `NODE_ENV`
   - Value: `production`
   - Click "Add"
   
   **Variable 2:**
   - Name: `PORT`
   - Value: `5000`
   - Click "Add"

8. Scroll down, click big blue **"Deploy"** button
9. Wait 2-3 minutes
10. When you see green checkmark ✅, you'll see a URL like: `https://jivaka-backend-xxx.vercel.app`
11. **CLICK on that URL** - it will open
12. **COPY the URL** from the address bar (Ctrl+C)

**✅ Backend done! Save that URL!**

---

### STEP 3: Deploy Frontend (3 minutes)

1. On Vercel, click **"Add New..."** button again
2. Click **"Project"** again
3. Find your `D:\jivaka\frontend` folder in File Explorer
4. **Drag and drop** the `frontend` folder into Vercel
5. Fill these boxes:
   - **Root Directory:** Type: `frontend`
   - **Framework Preset:** Select `Create React App`
   - **Build Command:** Type: `npm run build`
   - **Output Directory:** Type: `build`
   - **Install Command:** Type: `npm install`
6. Scroll down to **"Environment Variables"**
7. Click **"Add"** button **ONCE**:
   
   **Variable:**
   - Name: `REACT_APP_API_URL`
   - Value: Paste your backend URL + `/api`
     - Example: If backend URL was `https://jivaka-backend-xxx.vercel.app`
     - Then type: `https://jivaka-backend-xxx.vercel.app/api`
     - **IMPORTANT:** Make sure there's `/api` at the end!
   - Click "Add"

8. Scroll down, click big blue **"Deploy"** button
9. Wait 2-3 minutes
10. When you see green checkmark ✅, you'll see a URL like: `https://jivaka.vercel.app`
11. **CLICK on that URL** - Your website is LIVE! 🎉

---

## ✅ DONE!

Your website is now public at that frontend URL!

**Share that URL with anyone** - they can access your website!

---

## 🆘 If You Get Stuck

**Tell me:**
- Which step number you're on (e.g., "Step 2, number 5")
- What you see on your screen
- Any error messages

**I'll help you right away!** 😊

---

## 📝 Example Values

**Backend URL example:**
```
https://jivaka-backend-abc123.vercel.app
```

**Frontend Environment Variable Value:**
```
https://jivaka-backend-abc123.vercel.app/api
```
(Notice the `/api` at the end!)

---

**Ready? Start with Step 1!** 🚀



