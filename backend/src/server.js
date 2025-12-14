import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// =================================================================
//  CORS CONFIGURATION (THE FIX)
// =================================================================
// We use an array to allow both the Production URL and Localhost.
// This middleware is now applied in ALL environments, not just dev.
app.use(
  cors({
    origin: [
      "https://note-book-app-frontend.vercel.app", // Your Vercel Frontend
      "http://localhost:5173",                     // Your Local Vite Frontend
    ],
    credentials: true, // Allow cookies/headers to be sent if needed
  })
);

app.use(express.json()); // this middleware will parse JSON bodies: req.body
app.use(rateLimiter);

// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

// =================================================================
//  STATIC FILES (Optional fallback)
// =================================================================
// Since your frontend is on Vercel, this block is less critical, 
// but we keep it to prevent breaking any existing hybrid setup.
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});