# Deployment Guide for Jivaka

This guide provides step-by-step instructions for deploying Jivaka to various hosting platforms.

## 📋 Pre-Deployment Checklist

- [ ] Test the application locally
- [ ] Build the frontend successfully
- [ ] Set up environment variables
- [ ] Configure CORS settings for production
- [ ] Update API URLs in frontend
- [ ] Test all features (chatbot, health tracker, contact form)

## 🚀 Deployment Options

### 1. Vercel (Frontend) + Railway (Backend)

#### Deploy Frontend to Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Build the React app**
   ```bash
   cd frontend
   npm run build
   ```

3. **Deploy**
   ```bash
   vercel
   ```
   Follow the prompts and choose production deployment.

4. **Set Environment Variables in Vercel Dashboard**
   ```
   REACT_APP_API_URL=https://your-backend-url.railway.app/api
   ```

#### Deploy Backend to Railway

1. **Create Railway account** at https://railway.app
2. **New Project** → **Deploy from GitHub** (or upload files)
3. **Set Environment Variables**:
   ```
   PORT=5000
   NODE_ENV=production
   ```
4. **Deploy** - Railway will auto-detect Node.js and deploy

### 2. Netlify (Frontend) + Heroku (Backend)

#### Deploy Frontend to Netlify

1. **Build the app**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy via Netlify Dashboard**:
   - Go to https://app.netlify.com
   - Drag and drop the `frontend/build` folder
   - Or connect GitHub repository for auto-deploy

3. **Set Environment Variables**:
   ```
   REACT_APP_API_URL=https://your-backend.herokuapp.com/api
   ```

#### Deploy Backend to Heroku

1. **Install Heroku CLI**
   ```bash
   npm i -g heroku
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku app**
   ```bash
   cd backend
   heroku create jivaka-backend
   ```

4. **Set Environment Variables**
   ```bash
   heroku config:set NODE_ENV=production
   heroku config:set PORT=5000
   ```

5. **Deploy**
   ```bash
   git push heroku main
   ```

### 3. Replit (Full Stack)

1. **Create Replit account** at https://replit.com
2. **Create new Repl** → Choose "Node.js"
3. **Upload project files**
4. **Set up environment variables** in Replit Secrets:
   ```
   PORT=5000
   NODE_ENV=production
   REACT_APP_API_URL=http://localhost:5000/api
   ```
5. **Configure Run Commands**:
   - Main: `node backend/server.js`
   - Or use separate Repls for frontend and backend

6. **Deploy** - Replit provides instant hosting

### 4. Render (Full Stack)

#### Deploy Backend to Render

1. **Create account** at https://render.com
2. **New Web Service** → Connect GitHub repository
3. **Configure**:
   - Build Command: `cd backend && npm install`
   - Start Command: `cd backend && node server.js`
   - Environment: Node
4. **Set Environment Variables**:
   ```
   NODE_ENV=production
   PORT=5000
   ```

#### Deploy Frontend to Render

1. **New Static Site** → Connect GitHub repository
2. **Configure**:
   - Build Command: `cd frontend && npm install && npm run build`
   - Publish Directory: `frontend/build`
3. **Set Environment Variables**:
   ```
   REACT_APP_API_URL=https://your-backend.onrender.com/api
   ```

## 🔧 Production Configuration

### Backend Production Settings

Update `backend/server.js` to serve React build in production:

```javascript
// Already included in server.js
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });
}
```

### CORS Configuration

Ensure CORS allows your frontend domain:

```javascript
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
};
app.use(cors(corsOptions));
```

### Environment Variables

**Backend (.env):**
```env
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.com
```

**Frontend (.env.production):**
```env
REACT_APP_API_URL=https://your-backend-url.com/api
```

## 📝 Post-Deployment Steps

1. **Test all features** on the live site
2. **Check console** for any errors
3. **Verify API endpoints** are accessible
4. **Test voice features** in production browser
5. **Check mobile responsiveness**
6. **Monitor logs** for any issues

## 🔒 Security Considerations

- ✅ Use HTTPS in production
- ✅ Keep API keys secure (never commit to Git)
- ✅ Enable CORS only for your frontend domain
- ✅ Use environment variables for sensitive data
- ✅ Add rate limiting for API endpoints (optional)

## 🐛 Troubleshooting

### Common Issues

**CORS Errors:**
- Ensure backend CORS allows your frontend domain
- Check that API URL is correct in frontend

**Voice Features Not Working:**
- Web Speech API requires HTTPS in production
- Check browser compatibility

**API Not Responding:**
- Verify backend is running
- Check environment variables
- Review server logs

**Build Failures:**
- Ensure all dependencies are installed
- Check Node.js version compatibility
- Review build logs for specific errors

## 📞 Support

For deployment issues:
- Check platform-specific documentation
- Review error logs
- Test locally first
- Contact platform support

---

Happy Deploying! 🚀

