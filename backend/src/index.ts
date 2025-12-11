import app from "./app";
import dotenv from "dotenv";
import "./config/database";

dotenv.config();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("🚀 Server Started");
  console.log(`🌐 Running on http://localhost:${PORT}`);
});
