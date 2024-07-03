import express , {Request , Response} from 'express';
import cors from "cors";
import "dotenv/config";
import mongoose from 'mongoose';


mongoose.connect(process.env.MONGODB_KEY as string).then(()=>console.log("Connected to Mongodb database"));


const app = express();
app.use(express.json());
app.use(cors());

app.get('/test', async(req:Request, res:Response) => {
    res.json({message : "test message"}); 
});

app.listen(5000, () => {
    console.log(`Server is running on port 5000`);
});
