import express from "express";



const app = express();
app.use(express.json());

const port = 3000; // You can use any port number you prefer
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});