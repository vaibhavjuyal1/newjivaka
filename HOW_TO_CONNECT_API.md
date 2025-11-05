# How to Connect Frontend to Backend API

This guide explains how to connect your Jivaka frontend to the backend API, both locally and in production.

---

## 🔍 Current API Configuration

The frontend is already configured to connect to the API. Here's how it works:

### Frontend API Connection Code

The frontend uses this code in each page:

```javascript
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';
```

**What this means:**
- **Locally:** Uses `http://localhost:5000/api` (when running on your computer)
- **In Production:** Uses the URL from environment variable `REACT_APP_API_URL`

---

## 📍 Current Setup (Already Working Locally)

Your website is already connected! Here's what's happening:

### Local Connection (Current)
- **Backend:** Running on `http://localhost:5000`
- **Frontend:** Running on `http://localhost:3000`
- **API Connection:** Frontend automatically connects to `http://localhost:5000/api`

✅ **This is already working!** That's why your website works locally.

---

## 🌐 Connecting API in Production (After Deployment)

When you deploy to Vercel, Netlify, or any hosting platform, you need to:

### Step 1: Deploy Backend First

1. Deploy your backend (as explained in deployment guide)
2. Get your backend URL (e.g., `https://jivaka-backend.vercel.app`)
3. Your API will be at: `https://jivaka-backend.vercel.app/api`

### Step 2: Configure Frontend Environment Variable

#### Option A: Using Vercel Dashboard

1. Go to your **frontend project** on Vercel
2. Click **Settings** → **Environment Variables**
3. Click **Add New**
4. Enter:
   - **Key:** `REACT_APP_API_URL`
   - **Value:** `https://your-backend-url.vercel.app/api`
     - Replace `your-backend-url` with your actual backend URL
5. Click **Save**
6. Go to **Deployments** tab → Click **"..."** on latest deployment → **Redeploy**

#### Option B: Using .env File (Before Deploying)

1. In your `D:\jivaka\frontend` folder, create a file named `.env`
2. Add this line:
   ```
   REACT_APP_API_URL=https://your-backend-url.vercel.app/api
   ```
3. Replace `your-backend-url` with your actual backend URL
4. Then deploy to Vercel (it will automatically use this value)

---

## 🔧 How API Connection Works

### Files That Use API

These pages connect to the backend:

1. **Chatbot Page** (`src/pages/Chatbot.js`)
   - Connects to: `/api/chatbot`
   - Connects to: `/api/analyze-image`

2. **Health Tracker Page** (`src/pages/HealthTracker.js`)
   - Connects to: `/api/calculate-bmi`
   - Connects to: `/api/check-vitals`

3. **Contact Page** (`src/pages/Contact.js`)
   - Connects to: `/api/contact`

### Example API Call

Here's how the frontend makes API calls:

```javascript
// In Chatbot.js
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Making a request:
const response = await axios.post(`${API_BASE_URL}/chatbot`, {
  message: "Hello",
  conversationHistory: []
});
```

**This automatically:**
- Uses `http://localhost:5000/api` when running locally
- Uses your production API URL when deployed (from environment variable)

---

## ✅ Testing API Connection

### Test Locally

1. **Make sure backend is running:**
   ```bash
   cd D:\jivaka\backend
   npm start
   ```
   Should show: `🚀 Jivaka server is running on port 5000`

2. **Make sure frontend is running:**
   ```bash
   cd D:\jivaka\frontend
   npm start
   ```

3. **Test in browser:**
   - Open `http://localhost:3000`
   - Go to **Chatbot** page
   - Type a message → Should get a response ✅
   - Go to **Health Tracker** → Calculate BMI → Should work ✅

### Test API Directly

You can test the backend API directly in your browser:

1. Open: `http://localhost:5000/api/health`
2. Should see: `{"status":"OK","message":"Jivaka API is running"}`

---

## 🌐 Production API Connection Checklist

After deploying:

- [ ] Backend deployed and has public URL
- [ ] Frontend has environment variable `REACT_APP_API_URL` set
- [ ] Environment variable value is: `https://your-backend-url/api` (with `/api` at end)
- [ ] Frontend redeployed after setting environment variable
- [ ] Test chatbot on live site - should work
- [ ] Test health tracker on live site - should work

---

## 🐛 Troubleshooting

### API Not Working in Production?

**Check 1: Environment Variable**
- Go to Vercel dashboard → Settings → Environment Variables
- Verify `REACT_APP_API_URL` is set correctly
- Make sure it ends with `/api`
- Redeploy frontend after adding/changing

**Check 2: Backend CORS**
- Backend must allow your frontend domain
- I've already updated the code to handle this
- In production, set `FRONTEND_URL` environment variable in backend

**Check 3: Backend URL**
- Backend URL must be publicly accessible
- Test by visiting: `https://your-backend-url/api/health`
- Should show: `{"status":"OK","message":"Jivaka API is running"}`

**Check 4: Browser Console**
- Open browser DevTools (F12)
- Go to Console tab
- Look for errors mentioning API or CORS
- These will tell you what's wrong

---

## 📝 Quick Reference

### Local Development
```
Frontend: http://localhost:3000
Backend API: http://localhost:5000/api
✅ Works automatically - no configuration needed
```

### Production
```
Frontend: https://jivaka.vercel.app
Backend API: https://jivaka-backend.vercel.app/api
✅ Need to set REACT_APP_API_URL environment variable
```

---

## 🎯 Summary

**Locally:** ✅ Already connected! No action needed.

**In Production:**
1. Deploy backend → Get URL
2. Set `REACT_APP_API_URL` environment variable in frontend
3. Value should be: `https://your-backend-url/api`
4. Redeploy frontend
5. Done! ✅

---

**Your API is already connected locally!** For production, just set the environment variable when you deploy. 🚀



