# NoteBook App - Full Stack

<div align="center">

**A complete, modern note-taking application with React frontend and Node.js/Express backend**

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-Available-green?style=for-the-badge)](https://note-book-app-frontend.vercel.app/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-7.x-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

</div>

## 📋 Overview

NoteBook App is a full-featured, modern note-taking application built with a **React frontend** and **Node.js/Express backend**. The application provides a complete CRUD (Create, Read, Update, Delete) experience with rate limiting, responsive design, and a clean user interface.

**Live Demo:** [https://note-book-app-frontend.vercel.app/](https://note-book-app-frontend.vercel.app/)

## ✨ Features

### Frontend
- **📝 Note Management**: Create, read, update, and delete notes
- **🎨 Modern UI**: Clean, responsive interface built with Tailwind CSS
- **📱 Fully Responsive**: Works on desktop, tablet, and mobile
- **⚡ Fast Performance**: Built with Vite for optimal performance
- **🔍 Search & Filter**: Find notes easily with filtering capabilities
- **🛡️ Rate Limiting UI**: Visual feedback for API rate limits
- **🎯 Landing Page**: Professional landing page with feature showcase
- **📄 Note Detail View**: View and manage individual notes

### Backend
- **🔒 Rate Limiting**: API rate limiting with Upstash Redis
- **🗄️ Database**: MongoDB with Mongoose ODM for data persistence
- **🛡️ CORS Protection**: Secure cross-origin resource sharing
- **📦 RESTful API**: Clean, well-structured API endpoints
- **🌐 Environment Configuration**: Easy environment variable setup
- **⚡ Performance**: Optimized database queries and middleware

## 🏗️ Tech Stack

### Frontend
| Technology | Purpose |
|------------|---------|
| **React 18** | UI Library |
| **Vite** | Build Tool & Dev Server |
| **Tailwind CSS** | Styling Framework |
| **React Router** | Client-side Routing |
| **Axios** | HTTP Client |
| **ESLint** | Code Quality |

### Backend
| Technology | Purpose |
|------------|---------|
| **Node.js** | Runtime Environment |
| **Express** | Web Framework |
| **MongoDB** | Database |
| **Mongoose** | ODM for MongoDB |
| **Upstash Redis** | Rate Limiting |
| **CORS** | Cross-Origin Resource Sharing |
| **dotenv** | Environment Management |

## 📁 Project Structure

```
NoteBook-App/
├── backend/                    # Backend server
│   ├── src/
│   │   ├── config/            # Configuration files
│   │   │   ├── db.js          # MongoDB connection
│   │   │   └── upstash.js     # Upstash Redis configuration
│   │   ├── controllers/       # Request handlers
│   │   │   └── notesController.js
│   │   ├── middleware/        # Custom middleware
│   │   │   └── rateLimiter.js
│   │   ├── models/           # Database models
│   │   │   └── Note.js
│   │   ├── routes/           # API routes
│   │   │   └── notesRoutes.js
│   │   └── server.js         # Entry point
│   ├── package.json          # Backend dependencies
│   └── .env                  # Environment variables
│
├── frontend/                  # Frontend application
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   │   ├── Navbar.jsx
│   │   │   ├── NoteCard.jsx
│   │   │   ├── NotesNotFound.jsx
│   │   │   ├── RateLimitedUI.jsx
│   │   │   └── landing/     # Landing page components
│   │   │       ├── CTA.jsx
│   │   │       ├── Features.jsx
│   │   │       ├── Footer.jsx
│   │   │       └── Header.jsx
│   │   ├── pages/           # Page components
│   │   │   ├── app/         # App pages
│   │   │   │   ├── CreatePage.jsx
│   │   │   │   ├── HomePage.jsx
│   │   │   │   └── NoteDetailPage.jsx
│   │   │   └── landing/     # Landing pages
│   │   │       └── LandingPage.jsx
│   │   ├── lib/            # Utilities
│   │   │   ├── axios.js    # API client
│   │   │   └── utils.js    # Helper functions
│   │   ├── App.jsx         # Main app component
│   │   ├── main.jsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── package.json        # Frontend dependencies
│   ├── vite.config.js      # Vite configuration
│   ├── tailwind.config.js  # Tailwind CSS config
│   └── .env                # Environment variables
│
├── package.json            # Root package.json (optional)
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or Atlas)
- Upstash Redis account (for rate limiting)

### 1. Clone the Repository
```bash
git clone https://github.com/MohammadAli-14/NoteBook-App.git
cd NoteBook-App
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/notebook
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
RATE_LIMIT_WINDOW=60
RATE_LIMIT_MAX_REQUESTS=10
```

Start the backend server:
```bash
npm start
# Development mode with nodemon:
npm run dev
```

The backend will run at `http://localhost:5000`

### 3. Frontend Setup
```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:
```env
VITE_API_URL=http://localhost:5000/api
```

Start the frontend development server:
```bash
npm run dev
```

The frontend will run at `http://localhost:5173`

## ⚙️ Environment Configuration

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/notebook
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
RATE_LIMIT_WINDOW=60  # Time window in seconds
RATE_LIMIT_MAX_REQUESTS=10  # Max requests per window
```

### Frontend (.env)
```env
# Backend API Configuration
VITE_API_URL=http://localhost:5000/api

# Optional: Feature flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_DEBUG=true
```

## 🛠️ Available Scripts

### Backend Scripts
```bash
cd backend

# Development
npm run dev        # Start with nodemon (auto-restart)
npm start          # Start production server

# Database
npm run seed       # Seed database with sample data (if available)
```

### Frontend Scripts
```bash
cd frontend

# Development
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build

# Code Quality
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

## 🔌 API Endpoints

The backend provides the following RESTful API endpoints:

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get a specific note |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

### Example API Requests

**Create a note:**
```bash
curl -X POST http://localhost:5000/api/notes \
  -H "Content-Type: application/json" \
  -d '{"title":"My Note","content":"This is my note content"}'
```

**Get all notes:**
```bash
curl http://localhost:5000/api/notes
```

**Get a specific note:**
```bash
curl http://localhost:5000/api/notes/:id
```

**Update a note:**
```bash
curl -X PUT http://localhost:5000/api/notes/:id \
  -H "Content-Type: application/json" \
  -d '{"title":"Updated Title","content":"Updated content"}'
```

**Delete a note:**
```bash
curl -X DELETE http://localhost:5000/api/notes/:id
```

## 🗄️ Database Schema

The Note model uses the following schema:

```javascript
{
  title: { type: String, required: true },
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}
```

## 🛡️ Rate Limiting

The application implements rate limiting using Upstash Redis to prevent API abuse:

- **Window**: 60 seconds (configurable)
- **Max Requests**: 10 requests per window (configurable)
- **Response**: Returns HTTP 429 (Too Many Requests) with reset time

### Rate Limiter Configuration
```javascript
const limiter = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(
    parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 10,
    `${process.env.RATE_LIMIT_WINDOW || 60} s`
  ),
  analytics: true,
  prefix: "notebook-ratelimit",
});
```

## 📱 Frontend Components

### Key Components

#### **NoteCard.jsx**
Displays individual notes in a card format with title, content preview, and actions.

#### **Navbar.jsx**
Responsive navigation bar with links to different sections.

#### **RateLimitedUI.jsx**
Shows user-friendly message when API rate limits are exceeded.

#### **CreatePage.jsx**
Form for creating new notes with validation.

#### **HomePage.jsx**
Main dashboard displaying all notes with search and filtering.

## 🚀 Deployment

### Frontend Deployment (Vercel)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on each push

**Live Frontend:** [https://note-book-app-frontend.vercel.app/](https://note-book-app-frontend.vercel.app/)

### Backend Deployment
The backend can be deployed to platforms like:
- **Railway.app**
- **Render.com**
- **Heroku**
- **AWS Elastic Beanstalk**

#### Railway.app Deployment (Recommended)
1. Create a new project on Railway
2. Connect your GitHub repository
3. Add environment variables
4. Deploy automatically

### Build for Production

**Frontend:**
```bash
cd frontend
npm run build
# Output in 'dist' directory
```

**Backend:**
```bash
cd backend
npm start
```

## 🧪 Testing

### Running Tests
```bash
# Backend tests (if configured)
cd backend
npm test

# Frontend tests (if configured)
cd frontend
npm test
```

### API Testing with Postman
Import the Postman collection from `docs/postman-collection.json` (if available) to test all API endpoints.

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines
- Follow existing code style and conventions
- Add comments for complex logic
- Update documentation for new features
- Test changes thoroughly
- Ensure responsive design compatibility

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Mohammad Ali** - *Full Stack Developer* - [MohammadAli-14](https://github.com/MohammadAli-14)

## 🙏 Acknowledgments

- **Vite Team** for the excellent build tool and development experience
- **Tailwind CSS** for the utility-first CSS framework
- **React Community** for the amazing ecosystem and tools
- **MongoDB** for the database solution
- **Upstash** for Redis-based rate limiting

## 🔗 Important Links

- **Live Demo**: [https://note-book-app-frontend.vercel.app/](https://note-book-app-frontend.vercel.app/)
- **Frontend Repository**: [NoteBook-App-Frontend](https://github.com/MohammadAli-14/NoteBook-App-Frontend)
- **Backend Repository**: [NoteBook-App-Backend](https://github.com/MohammadAli-14/NoteBook-App-Backend)
- **Full Stack Repository**: [NoteBook-App](https://github.com/MohammadAli-14/NoteBook-App)

---
<div align="center">

**Built with ❤️ by [Mohammad Ali](https://github.com/MohammadAli-14)**

⭐ **Star this repo if you found it useful!** ⭐

</div>

**Note**: This is a full-stack application requiring both frontend and backend to be running for full functionality. Make sure to configure all environment variables and start both servers before using the application.
