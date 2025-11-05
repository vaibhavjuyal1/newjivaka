# API Connection Guide - Quick Reference

## ✅ Locally (Already Connected!)

**Your API is already connected locally!** ✅

- **Backend:** `http://localhost:5000`
- **Frontend:** `http://localhost:3000`
- **API Connection:** Automatic (`http://localhost:5000/api`)

**No action needed for local development!**

---

## 🌐 Production (After Deployment)

### Step 1: Deploy Backend First

1. Deploy backend to Vercel/Railway/Render
2. Get your backend URL: `https://jivaka-backend-xxx.vercel.app`
3. Your API endpoint: `https://jivaka-backend-xxx.vercel.app/api`

### Step 2: Connect Frontend to Backend API

**Method 1: Vercel Dashboard (Easiest)**

1. Open your **frontend project** on Vercel
2. Go to **Settings** → **Environment Variables**
3. Click **Add New**
4. Enter:
   - **Key:** `REACT_APP_API_URL`
   - **Value:** `https://your-backend-url.vercel.app/api`
5. Click **Save**
6. Go to **Deployments** → Click **"..."** → **Redeploy**

**Method 2: .env File**

1. Create file: `D:\jivaka\frontend\.env`
2. Add this line:
   ```
   REACT_APP_API_URL=https://your-backend-url.vercel.app/api
   ```
3. Replace `your-backend-url` with your actual backend URL
4. Deploy to Vercel (it will use this automatically)

---

## 🔍 How to Test API Connection

### Test Backend API Directly

Open in browser:
```
https://your-backend-url.vercel.app/api/health
```

**Should show:**
```json
{"status":"OK","message":"Jivaka API is running"}
```

### Test from Frontend

1. Open your deployed frontend website
2. Go to **Chatbot** page
3. Type a message → Should get response ✅
4. Go to **Health Tracker** → Calculate BMI → Should work ✅

### Check Browser Console (F12)

If API is not working:
1. Open browser DevTools (F12)
2. Go to **Console** tab
3. Look for errors mentioning:
   - `API` or `fetch` or `axios`
   - `CORS` or `network error`
4. These errors will tell you what's wrong

---

## 📋 API Endpoints

Your frontend connects to these endpoints:

### Chatbot
- `POST /api/chatbot` - Send messages
- `POST /api/analyze-image` - Upload images

### Health Tracker
- `POST /api/calculate-bmi` - Calculate BMI
- `POST /api/check-vitals` - Check vitals

### Contact
- `POST /api/contact` - Submit contact form

### Health Check
- `GET /api/health` - Check if API is running

---

## ✅ Checklist

**Before deployment:**
- [ ] Test locally - API works ✅
- [ ] Build frontend - `npm run build` works ✅

**After deploying backend:**
- [ ] Backend URL accessible
- [ ] Test `/api/health` in browser ✅

**After deploying frontend:**
- [ ] Set `REACT_APP_API_URL` environment variable
- [ ] Value is: `https://your-backend-url/api` (with `/api`)
- [ ] Frontend redeployed
- [ ] Test chatbot on live site ✅
- [ ] Test health tracker on live site ✅

---

## 🐛 Common Issues

**Problem:** Frontend can't connect to backend

**Solutions:**
1. Check `REACT_APP_API_URL` is set correctly
2. Make sure URL ends with `/api`
3. Verify backend is running and accessible
4. Check CORS settings in backend
5. Redeploy frontend after changing env vars

**Problem:** CORS errors in browser console

**Solutions:**
1. Backend CORS must allow frontend domain
2. Check `FRONTEND_URL` environment variable in backend
3. Redeploy backend after setting `FRONTEND_URL`

---

## 📝 Summary

**Locally:** ✅ Already connected! No configuration needed.

**Production:**
1. Deploy backend → Get URL
2. Set `REACT_APP_API_URL` environment variable in frontend
3. Value: `https://your-backend-url/api` (with `/api`)
4. Redeploy frontend
5. Done! ✅

---

**Your API is already connected locally!** Just set the environment variable when deploying to production. 🚀



