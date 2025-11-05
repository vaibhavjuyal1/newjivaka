# Quick Start Guide - Jivaka

Get Jivaka up and running in 5 minutes!

## ⚡ Quick Setup

### Step 1: Install Dependencies

Open terminal in the `jivaka` folder and run:

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies (in a new terminal)
cd ../frontend
npm install
```

**Or use the automated script:**
```bash
npm run install-all
```

### Step 2: Start the Application

**Terminal 1 - Start Backend:**
```bash
cd backend
npm start
```
✅ Backend running on http://localhost:5000

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm start
```
✅ Frontend running on http://localhost:3000

### Step 3: Open in Browser

Navigate to: **http://localhost:3000**

🎉 **You're all set!**

## 🧪 Test the Features

1. **Home Page**: See the hero section and introduction
2. **Chatbot**: Click "Talk to Jivaka Bot" and try:
   - Type a message
   - Click 🎤 for voice input
   - Click 📷 to upload an image
3. **Health Tracker**: 
   - Calculate your BMI
   - Check your vitals
4. **About & Contact**: Navigate to learn more

## 📝 Notes

- Voice features work best in Chrome/Edge/Safari
- Backend must be running for API features
- All features work offline with placeholder responses

## ❓ Troubleshooting

**Port already in use?**
- Backend: Change `PORT` in `backend/.env`
- Frontend: Change port in `frontend/package.json` scripts

**Dependencies not installing?**
- Check Node.js version: `node --version` (should be v16+)
- Delete `node_modules` and `package-lock.json`, then reinstall

**API not working?**
- Ensure backend is running on port 5000
- Check `REACT_APP_API_URL` in frontend `.env` file

---

**Need more details?** Check [README.md](README.md) for full documentation.

