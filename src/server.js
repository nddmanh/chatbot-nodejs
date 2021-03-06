import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./configs/viewEngine";
import webRoutes from "./routes/web";

let app = express();

// config view engine
viewEngine(app);

// config web routes
webRoutes(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`App running on port: ${port}`);
})

