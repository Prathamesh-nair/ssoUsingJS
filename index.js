const express = require("express");
const path = require("path");
const app = express();
const favicon = require("serve-favicon");
const port = process.env.PORT || 8000;
const faviconPath = path.join(__dirname, "public/images", "favicon.ico");

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(faviconPath));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
