# 📓 NoteBook App

A full-stack note-taking application with a beautiful landing page, secure note management, and rate-limiting capabilities.

![NoteBook App Screenshot](frontend/public/screenshot-for-readme.png)

## ✨ Features

### 🌟 Landing Page
- Modern, responsive design with Tailwind CSS
- Feature showcase section
- Call-to-action for getting started
- Clean and professional footer

### 📝 Core Features
- **Create Notes**: Rich text notes with titles and content
- **View All Notes**: Grid layout with all your notes
- **Note Details**: View individual notes in detail
- **Search & Filter**: Find notes quickly
- **Rate Limiting**: Built-in protection against abuse

### 🔒 Security & Performance
- MongoDB with Mongoose for data persistence
- Rate limiting using Upstash Redis
- CORS protection
- Environment-based configuration

## 🏗️ Tech Stack

### Backend
- **Node.js** & **Express** - Server framework
- **MongoDB** & **Mongoose** - Database & ODM
- **Upstash Redis** - Rate limiting
- **dotenv** - Environment configuration
- **cors** - Cross-origin resource sharing

### Frontend
- **React 18** - Frontend library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client

## 📁 Project Structure

```
Note-Book-App/
├── backend/
│   ├── src/
│   │   ├── config/          # Database and Upstash configuration
│   │   ├── controllers/     # Note controller logic
│   │   ├── middleware/      # Rate limiter middleware
│   │   ├── models/          # Mongoose Note model
│   │   ├── routes/          # API routes
│   │   └── server.js        # Express server setup
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utilities and Axios config
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── public/             # Static assets
│   ├── package.json
│   └── vite.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account or local MongoDB instance
- Upstash Redis account (for rate limiting)

### 1. Clone the Repository
```bash
git clone https://github.com/MohammadAli-14/Note-Book-App.git
cd Note-Book-App
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:
```env
MONGODB_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_rest_token
PORT=5000
CORS_ORIGIN=http://localhost:5173
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

### 4. Access the Application
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000

## 🔧 API Endpoints

### Notes API
```
GET    /api/notes          # Get all notes
GET    /api/notes/:id      # Get single note
POST   /api/notes          # Create new note
PUT    /api/notes/:id      # Update note
DELETE /api/notes/:id      # Delete note
```

### Rate Limiting
- **10 requests per minute** per IP address
- Implemented using Upstash Redis
- Returns 429 status code when limit exceeded

## 🎨 Features in Detail

### Landing Page
- Responsive hero section
- Feature highlights
- Smooth animations
- Mobile-friendly design

### Note Management
- **Create**: Add new notes with title and content
- **Read**: View notes in card grid or detail view
- **Update**: Edit existing notes
- **Delete**: Remove notes with confirmation
- **Search**: Filter notes by content

### Error Handling
- Graceful error messages
- Rate limit notifications
- Network error handling
- Loading states

## 🔐 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname
UPSTASH_REDIS_REST_URL=https://your-redis-url.upstash.io
UPSTASH_REDIS_REST_TOKEN=your_token_here
PORT=5000
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
```

### Frontend (Vite)
```env
VITE_API_BASE_URL=http://localhost:5000
```

## 📦 Deployment

### Backend Deployment (Render/Railway)
1. Push code to GitHub
2. Connect repository to Render/Railway
3. Add environment variables
4. Deploy

### Frontend Deployment (Vercel/Netlify)
1. Push code to GitHub
2. Import project to Vercel/Netlify
3. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Add environment variables
5. Deploy

### MongoDB Setup
1. Create MongoDB Atlas account
2. Create a new cluster
3. Get connection string
4. Add IP whitelist (0.0.0.0/0 for development)

### Upstash Redis Setup
1. Create Upstash account
2. Create new Redis database
3. Get REST URL and token

## 🧪 Running Tests

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Development Guidelines
- Follow existing code style
- Add comments for complex logic
- Update documentation
- Test changes thoroughly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Vite](https://vitejs.dev/) for amazing build tooling
- [Tailwind CSS](https://tailwindcss.com/) for utility-first CSS
- [Mongoose](https://mongoosejs.com/) for MongoDB object modeling
- [Upstash](https://upstash.com/) for serverless Redis

## 📞 Support

For support, email mohammadali@example.com or open an issue in the GitHub repository.

---

Made with ❤️ by [MohammadAli-14](https://github.com/MohammadAli-14)
