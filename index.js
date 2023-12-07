const express = require("express");
const config = require("config");
const cors = require("cors");

const User = require("./modules/user/routes");

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));
app.use("/api/v1/users", User);

const PORT = process.env.PORT || config.get("port");
const HOST = "localhost";

async function start() {
  try {
    app.listen(PORT, () =>
      console.log(`Server runniцng at http://${HOST}:${PORT}/`)
    );
  } catch (e) {
    console.log("Server Error", e.message);
    process.exit(1);
  }

  app.get("/", function (req, res) {
    res.json("Cors enabled");
  });
}

start();
