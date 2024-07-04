import express , {Request , Response} from 'express';
import cors from "cors";
import "dotenv/config";
import mongoose from 'mongoose';
const userRoute = require("./routes/userRoutes");


mongoose.connect(process.env.MONGODB_KEY as string).then(()=>console.log("Connected to Mongodb database"));


const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
}));

app.use("/api/user", userRoute)

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});
