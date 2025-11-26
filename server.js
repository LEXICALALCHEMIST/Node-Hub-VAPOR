// Node-Hub/server.js — YOUR HUB, YOUR RULES, 14 LINES
import express from "express";
import cors from "cors";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();

// Kill CORS forever
app.use(cors());

// Serve everything in this folder as raw files
app.use(express.static(__dirname));

const PORT = 3001;
app.listen(PORT, "0.0.0.0", () => {
  console.log("NODE-HUB SERVER RUNNING");
  console.log("→ http://localhost:3001");
  console.log("→ http://localhost:3001/calculator_os.mjs");
});