import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from Express with TypeScript!");
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
