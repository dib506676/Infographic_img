const express = require("express");
const puppeteer = require("puppeteer");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.post("/screenshot", async (req, res) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}`, { waitUntil: "networkidle2" });

  const screenshot = await page.screenshot({ type: "png", fullPage: true });
  await browser.close();

  res.set({
    "Content-Type": "image/png",
    "Content-Disposition": 'attachment; filename="screenshot.png"',
  });
  res.send(screenshot);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
