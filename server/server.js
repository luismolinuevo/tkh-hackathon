import express from "express";
import postRouter from "./routes/post.js"
import cors from "cors"


const app = express();
app.use(cors());
app.use(express.json());

app.use("/post", postRouter);

const port = 3000; // You can use any port number you prefer
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});