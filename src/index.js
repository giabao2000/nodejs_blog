const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// HTTP logger
app.use(morgan("combined"));

// Template engine
// Config đuôi file handlebars => hbs (cho gọn)
app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
  })
);

app.set("view engine", "hbs");

// Cài đặt lại đường dẫn thư mục cho thư mục views
app.set("views", path.join(__dirname, "resources\\views"));

console.log("PATH: ", path.join(__dirname, "resources\\views"));

// Router
app.get("/", (req, res) => res.render("home"));

// News
app.get("/news", (req, res) => res.render("news"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
