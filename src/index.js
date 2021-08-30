const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");

const route = require("./routes");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// MiddleWare
// 1. Xử lý data từ form
app.use(
    express.urlencoded({
        extended: true,
    })
);

// 2. Xử lý data bằng JS hoặc html
// XMLHttpRequest, fetch, axios, ...
app.use(express.json());

// HTTP logger
// app.use(morgan("combined"));

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

// console.log("PATH: ", path.join(__dirname, "resources\\views"));

// Router init
route(app);

// app.post("/search", (req, res) => {
//   console.log(req.body);
//   res.send("");
// });

app.listen(port, () =>
    console.log(`Example app listening at http://localhost:${port}`)
);
