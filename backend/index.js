

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes.js";
dotenv.config();
const app = express();

app.use(
  cors({
    origin: [
      "https://portfolio-2-on6z.onrender.com",
    ],
    methods: [
      "GET",
      "POST"
    ],
    credentials: true
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/api/contact",
  contactRoutes
);
app.get("/", (req,res)=>{
  res.status(200).json({
    message:"Portfolio Backend is running "
  });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
  console.log(
    ` Server running on port ${PORT}`
  );
});
