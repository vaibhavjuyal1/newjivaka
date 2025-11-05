# How to Preview Jivaka Website

Follow these steps to run and preview the Jivaka website locally.

## 📋 Step-by-Step Instructions

### Step 1: Install Dependencies

**Option A: Install everything at once (from jivaka folder)**
```bash
cd jivaka
npm run install-all
```

**Option B: Install separately**
```bash
# Install backend dependencies
cd jivaka/backend
npm install

# Install frontend dependencies (in a new terminal or after backend)
cd jivaka/frontend
npm install
```

### Step 2: Start the Backend Server

Open a terminal and run:
```bash
cd jivaka/backend
npm start
```

✅ You should see: `🚀 Jivaka server is running on port 5000`
✅ Backend API is now available at: http://localhost:5000

**Keep this terminal window open!**

### Step 3: Start the Frontend (React App)

**Open a NEW terminal window** (keep backend running) and run:
```bash
cd jivaka/frontend
npm start
```

✅ You should see: `Compiled successfully!`
✅ The site will automatically open in your browser at: **http://localhost:3000**

If it doesn't open automatically, manually go to: **http://localhost:3000**

### Step 4: Preview the Site! 🎉

The website should now be running. You can:
- Navigate between pages using the menu
- Try the chatbot (voice and text)
- Use the health tracker tools
- Explore all features

## 🛠️ Quick Commands Reference

**From the `jivaka` folder:**

```bash
# Install all dependencies
npm run install-all

# Start backend (Terminal 1)
cd backend && npm start

# Start frontend (Terminal 2 - NEW TERMINAL)
cd frontend && npm start
```

## 🚨 Troubleshooting

### Port Already in Use?
If port 3000 or 5000 is already in use:

**Backend (change port 5000):**
```bash
# Create backend/.env file with:
PORT=5001
```

**Frontend (change port 3000):**
```bash
# Create frontend/.env file with:
PORT=3001
```

### Dependencies Not Installing?
```bash
# Delete node_modules and try again
cd backend
rm -rf node_modules package-lock.json
npm install

cd ../frontend
rm -rf node_modules package-lock.json
npm install
```

### Backend Not Starting?
- Check if Node.js is installed: `node --version` (should be v16+)
- Make sure you're in the `backend` folder when running `npm start`

### Frontend Not Starting?
- Check if backend is running first (should see it on port 5000)
- Make sure you're in the `frontend` folder when running `npm start`
- Check for errors in the terminal

### API Not Working?
- Ensure backend is running on port 5000
- Check browser console for errors
- Make sure both servers are running simultaneously

## 📱 What You'll See

1. **Home Page**: Welcome screen with hero section
2. **Jivaka Bot**: Chatbot page with voice/text/image features
3. **Health Tracker**: BMI calculator and vitals checker
4. **About Us**: Mission and platform information
5. **Contact**: Contact form

## 💡 Tips

- Keep both terminals open while previewing
- The React app auto-refreshes when you make changes
- Use Chrome/Edge for best voice feature support
- Check browser console (F12) for any errors

## 🎯 Next Steps

Once previewing works, you can:
- Customize colors, content, or styling
- Connect real AI APIs (see README.md)
- Deploy to production (see DEPLOYMENT.md)

---

**Happy Previewing!** 🚀





