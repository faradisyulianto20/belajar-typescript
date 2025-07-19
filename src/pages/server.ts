// backend/server.ts
import express from "express";
import type {Request, Response} from "express"
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors()); // penting kalau akses dari frontend React

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello from backend!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
