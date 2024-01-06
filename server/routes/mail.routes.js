const express = require("express");
const router = express.Router();
const { sendEmail } = require("../controllers/mail.controller");

router.post("/send-email", async (req, res) => {
    try {
      const { to, subject, text } = req.body;
      await sendEmail(to, subject, text);
      res.json({ msg: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

module.exports = router;
