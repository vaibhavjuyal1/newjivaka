# Easy Deployment Guide - Make Jivaka Publicly Available

## 🚀 Quick Deployment Options

Choose the easiest option for you:

---

## Option 1: Deploy Both on Vercel (Easiest - Recommended)

Vercel is free and very easy to use!

### Step 1: Deploy Backend

1. **Go to https://vercel.com**
2. **Sign up/Login** (use GitHub, Google, or email)
3. **Click "New Project"**
4. **Import your project:**
   - Connect GitHub repository (if you have one)
   - OR: Drag and drop the `jivaka/backend` folder
5. **Configure:**
   - Root Directory: `backend`
   - Build Command: (leave empty or `npm install`)
   - Output Directory: (leave empty)
   - Install Command: `npm install`
6. **Environment Variables:**
   - Add: `NODE_ENV=production`
   - Add: `PORT=5000`
7. **Click "Deploy"**
8. **Wait 2-3 minutes** → You'll get a URL like: `https://jivaka-backend.vercel.app`

### Step 2: Deploy Frontend

1. **Click "New Project" again** in Vercel
2. **Import frontend:**
   - Drag and drop the `jivaka/frontend` folder
3. **Configure:**
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `build`
   - Install Command: `npm install`
4. **Environment Variables:**
   - Add: `REACT_APP_API_URL=https://your-backend-url.vercel.app/api`
   - Replace `your-backend-url` with your actual backend URL
5. **Click "Deploy"**
6. **Wait 2-3 minutes** → You'll get a URL like: `https://jivaka.vercel.app`

### Step 3: Update Frontend to Use Backend URL

1. Go to your frontend project on Vercel
2. Go to **Settings** → **Environment Variables**
3. Update `REACT_APP_API_URL` with your backend URL
4. **Redeploy** the frontend

### ✅ Done!

Your website will be live at the frontend URL!

---

## Option 2: Netlify (Frontend) + Railway (Backend)

### Deploy Frontend to Netlify (Free)

1. **Go to https://netlify.com**
2. **Sign up/Login**
3. **Drag and drop** the `jivaka/frontend` folder
4. **Wait for build** → Your site will be live!
5. **Add environment variable:**
   - Go to Site Settings → Build & Deploy → Environment
   - Add: `REACT_APP_API_URL=https://your-backend-url.railway.app/api`

### Deploy Backend to Railway (Free)

1. **Go to https://railway.app**
2. **Sign up/Login** (use GitHub)
3. **Click "New Project"** → **Deploy from GitHub**
4. **Select your repository** (or create one)
5. **Select the `backend` folder**
6. **Add environment variable:**
   - `NODE_ENV=production`
7. **Deploy** → Railway will auto-detect Node.js
8. **Wait 2-3 minutes** → You'll get a URL like: `https://jivaka-backend.railway.app`

### ✅ Done!

Your website will be live on Netlify!

---

## Option 3: Render (Full Stack - Easiest Alternative)

1. **Go to https://render.com**
2. **Sign up/Login**
3. **New Web Service** → **Connect GitHub** (or upload)
4. **Backend:**
   - Root Directory: `backend`
   - Build Command: (leave empty)
   - Start Command: `node server.js`
   - Environment: Node
5. **Frontend (New Static Site):**
   - Root Directory: `frontend`
   - Build Command: `npm install && npm run build`
   - Publish Directory: `build`
6. **Add environment variables** for frontend:
   - `REACT_APP_API_URL=https://your-backend.onrender.com/api`

---

## 📝 Before Deploying

### 1. Build the Frontend Locally (Test)

```bash
cd D:\jivaka\frontend
npm run build
```

This creates a `build` folder. Make sure it works!

### 2. Update Backend CORS Settings

Update `backend/server.js` to allow your frontend domain:

```javascript
// Around line 16, update CORS:
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
};
app.use(cors(corsOptions));
```

### 3. Environment Variables Needed

**Backend:**
- `NODE_ENV=production`
- `PORT=5000`
- `FRONTEND_URL=https://your-frontend-url.com`

**Frontend:**
- `REACT_APP_API_URL=https://your-backend-url.com/api`

---

## 🎯 Recommended: Vercel (Easiest)

**Why Vercel?**
- ✅ Free tier
- ✅ Easy drag-and-drop
- ✅ Automatic HTTPS
- ✅ Fast deployment
- ✅ No credit card needed

**Steps:**
1. Deploy backend on Vercel (get URL)
2. Deploy frontend on Vercel (use backend URL in env vars)
3. Done! Website is live!

---

## 🌐 After Deployment

Your website will be available at:
- **Frontend URL:** `https://jivaka.vercel.app` (or similar)
- **Backend URL:** `https://jivaka-backend.vercel.app/api` (or similar)

Anyone can access your website using the frontend URL!

---

## ❓ Troubleshooting

**Backend not responding?**
- Check environment variables
- Make sure `NODE_ENV=production` is set
- Check deployment logs

**Frontend can't connect to backend?**
- Verify `REACT_APP_API_URL` is correct
- Make sure backend URL ends with `/api`
- Redeploy frontend after changing env vars

**CORS errors?**
- Update backend CORS to allow your frontend domain
- Redeploy backend

---

**Choose Vercel (Option 1) - it's the easiest!** 🚀



