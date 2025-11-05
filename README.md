# Jivaka - AI Healthcare Assistant Platform

A modern, responsive healthcare platform that provides AI-powered general healthcare assistance through voice and text chatbot, along with health tracking tools.

![Jivaka](https://img.shields.io/badge/Jivaka-Healthcare%20AI-green) ![React](https://img.shields.io/badge/React-18.2-blue) ![Node.js](https://img.shields.io/badge/Node.js-Express-green)

## 🌟 Features

### 🤖 AI-Powered Chatbot (Jivaka Bot)
- **Voice Input/Output**: Use Web Speech API for natural voice conversations
- **Text Chat**: Type messages and get instant AI responses
- **Image Upload**: Share images (e.g., meal photos) for general wellness insights
- **Empathetic AI**: Friendly, informative responses focused on general wellness

### 📊 Health Tracking Tools
- **BMI Calculator**: Calculate Body Mass Index with personalized suggestions
- **Vitals Checker**: Check heart rate, pulse rate, and blood pressure against normal ranges
- **Health Insights**: Get friendly improvement tips based on your results

### 🎨 Modern UI/UX
- Responsive design for mobile and desktop
- Soothing healthcare colors (white, pastel green, light blue)
- Smooth animations and transitions
- Clean, modern interface with Poppins font

## 📁 Project Structure

```
jivaka/
├── frontend/                 # React frontend application
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/      # Reusable components
│   │   │   ├── Navbar.js
│   │   │   └── Footer.js
│   │   ├── pages/           # Page components
│   │   │   ├── Home.js
│   │   │   ├── Chatbot.js
│   │   │   ├── HealthTracker.js
│   │   │   ├── About.js
│   │   │   └── Contact.js
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
├── backend/                  # Node.js/Express backend
│   ├── server.js            # Express server with API routes
│   └── package.json
├── package.json             # Root package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** (v7 or higher) or **yarn**
- A modern web browser with Web Speech API support (Chrome, Edge, Safari)

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd jivaka
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

3. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

   Or install both at once:
   ```bash
   npm run install-all
   ```

### Running Locally

1. **Start the backend server**
   ```bash
   cd backend
   npm start
   ```
   The backend will run on `http://localhost:5000`

2. **In a new terminal, start the frontend**
   ```bash
   cd frontend
   npm start
   ```
   The frontend will run on `http://localhost:3000`

3. **Open your browser**
   Navigate to `http://localhost:3000` to see Jivaka in action!

### Development Mode

For auto-reload during development:

```bash
# Backend with nodemon
cd backend
npm run dev

# Frontend (React auto-reloads by default)
cd frontend
npm start
```

## 🌐 Deployment

### Option 1: Deploy to Vercel (Recommended for Frontend)

1. **Build the React app**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Vercel**
   - Install Vercel CLI: `npm i -g vercel`
   - Navigate to frontend folder: `cd frontend`
   - Run: `vercel`
   - Follow the prompts

3. **Deploy Backend to Heroku or Railway**
   ```bash
   # In backend folder
   # Set NODE_ENV=production in environment variables
   ```

### Option 2: Deploy to Netlify

1. **Build the React app**
   ```bash
   cd frontend
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `frontend/build` folder to Netlify
   - Or use Netlify CLI: `netlify deploy --prod`

### Option 3: Deploy to Replit

1. **Upload project to Replit**
2. **Set up environment variables** in Replit secrets
3. **Configure run commands**:
   - Backend: `cd backend && npm start`
   - Frontend: `cd frontend && npm start`

### Environment Variables

Create a `.env` file in the `backend` directory:

```env
PORT=5000
NODE_ENV=development

# Optional: AI API Keys (for production)
# OPENAI_API_KEY=your_openai_api_key_here
# DIALOGFLOW_PROJECT_ID=your_dialogflow_project_id
# HUGGINGFACE_API_KEY=your_huggingface_api_key
```

For frontend, create `.env` in `frontend` directory:

```env
REACT_APP_API_URL=http://localhost:5000/api
# For production: REACT_APP_API_URL=https://your-backend-url.com/api
```

## 🔧 Configuration

### Connecting AI APIs

To connect real AI services, update `backend/server.js`:

#### Using OpenAI:
```javascript
const OpenAI = require('openai');
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// In chatbot endpoint:
const completion = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [
    { role: "system", content: "You are Jivaka, a helpful healthcare assistant..." },
    { role: "user", content: message }
  ]
});
```

#### Using Hugging Face:
```javascript
const axios = require('axios');
const response = await axios.post(
  'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium',
  { inputs: message },
  { headers: { Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}` } }
);
```

### Image Analysis

For real image analysis, integrate OpenAI Vision API or Google Cloud Vision:

```javascript
// Example with OpenAI Vision
const response = await openai.chat.completions.create({
  model: "gpt-4-vision-preview",
  messages: [{
    role: "user",
    content: [
      { type: "text", text: "Analyze this meal image and provide general wellness tips." },
      { type: "image_url", image_url: { url: imageBase64 } }
    ]
  }]
});
```

## 📝 API Endpoints

### Backend API Routes

- `GET /api/health` - Health check endpoint
- `POST /api/chatbot` - Send text message to chatbot
- `POST /api/analyze-image` - Upload and analyze image
- `POST /api/calculate-bmi` - Calculate BMI
- `POST /api/check-vitals` - Check vital signs
- `POST /api/contact` - Submit contact form

### Example API Request

```javascript
// Chatbot
const response = await axios.post('http://localhost:5000/api/chatbot', {
  message: 'What are some healthy eating tips?',
  conversationHistory: []
});

// BMI Calculator
const response = await axios.post('http://localhost:5000/api/calculate-bmi', {
  weight: 70,
  height: 175
});
```

## 🎨 Customization

### Colors

Edit `frontend/src/index.css` to change theme colors:

```css
:root {
  --primary-color: #4CAF50;
  --secondary-color: #2196F3;
  --background-color: #f5f9f6;
}
```

### Fonts

Change fonts in `frontend/public/index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## ⚠️ Important Notes

### Disclaimer

**Jivaka provides general health information and wellness guidance only.**

- Jivaka is NOT a substitute for professional medical consultation, diagnosis, or treatment
- The AI chatbot provides general health information only
- Health tracking tools are for informational purposes
- Always consult healthcare professionals for medical concerns
- For medical emergencies, contact emergency services immediately

### Browser Compatibility

- **Voice Features**: Work best in Chrome, Edge, or Safari (Web Speech API support)
- **Image Upload**: Supported in all modern browsers
- **Responsive Design**: Tested on mobile, tablet, and desktop

## 🛠️ Technologies Used

### Frontend
- **React 18.2** - UI library
- **React Router 6** - Navigation
- **Axios** - HTTP client
- **Web Speech API** - Voice input/output
- **CSS3** - Styling with modern features

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing

## 📚 Resources

- [React Documentation](https://react.dev)
- [Express Documentation](https://expressjs.com)
- [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [OpenAI API](https://platform.openai.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Support

For questions or support:
- Email: contact@jivaka.com
- Create an issue in the repository

---

**© 2025 Jivaka – Empowering Health Through AI.**

Built with ❤️ for better healthcare accessibility.

