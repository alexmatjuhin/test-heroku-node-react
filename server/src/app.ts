import express, { Express, Request, Response } from "express";
import path from "path";
import variables from "./services/variables"

const app: Express = express();
const PORT: string = process.env.PORT || "8080";

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/api", (req, res) => {
  res.json({ message: `Hello from server running on ${variables.environment}!` });
});

app.get("*", (req: Request, res: Response, next: any) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

app.listen(PORT, () => {
  console.log(`[server]: Server is running at https://localhost:${PORT}`);
});