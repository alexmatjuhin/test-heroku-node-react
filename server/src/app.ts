import express, { Express, Request, Response } from "express";
import path from "path";
import { getConstantsAsync } from "./services/constants"

getConstantsAsync()
  .then(constants => {
    const app: Express = express();
    app.use(express.static(path.join(__dirname, "../client/dist")));

    app.get("/api", async (req, res) => {
      res.json({ message: `Hello from server running on ${constants.environment}!` });
    });

    app.get("*", (req: Request, res: Response, next: any) => {
      res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
    });

    app.listen(constants.port, async () => {
      console.log(`[server]: Server is running at http://localhost:${constants.port}`);
    });
  })
  .catch(err => {
    console.error(err);
  });