const express = require('express')
const app = express()
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");


dotenv.config();

const MONGO_URL = process.env.MONGO_URL

mongoose
.connect(MONGO_URL)
  .then(() => console.log('DB Connected!'))
  .catch((error) =>{
    console.log(error);
  });

// to accept json format and can pass any json file
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);

app.listen(4000, () => {
    console.log("Backend Server is running on 4000!");
})