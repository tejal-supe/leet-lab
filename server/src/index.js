import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import problemRoutes from "./routes/problem.routes.js";

dotenv.config()
const PORT = process.env.PORT;

const app = express();
app.use(express.json())
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("Helllo very excited!!")
})

app.use("/api/v1/auth", authRoutes);
app.use("api/v1/problems",problemRoutes)

app.listen((PORT), () => {
    console.log(`Server running on port ${PORT}`);
})
