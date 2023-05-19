import express from "express";
import postRouter from "./routes/post.js"


const app = express();
app.use(express.json());

app.use("/post", postRouter);

const port = 3000; // You can use any port number you prefer
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});