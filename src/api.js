const express = require("express");
const serverless = require("serverless-http");

const app = express();
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    answer: "hi from API",
  });
});

app.use("/.netlify/functions/api", router);

export const handler = serverless(app);
