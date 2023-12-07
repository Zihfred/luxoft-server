const express = require("express");

const router = express.Router();

// /api/users/:id
router.get("/:id", async (req, res) => {
  try {
    const user = {
      id: req.body.id,
    };
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
    console.log(error);
  }
});

module.exports = router;
