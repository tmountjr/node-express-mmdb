import fs from "fs";
import * as mmdb from "mmdb-lib";
import express, { NextFunction } from "express";

const dbFilename = "/path/to/database/download.mmdb";

const db = fs.readFileSync(dbFilename);
const mmdbReader = new mmdb.Reader(db);

const ipinfoMiddleware = (req: any, _: any, next: NextFunction) => {
  const ip = req.ip;
  let ipinfo = {};
  if (ip) {
    ipinfo = Object.assign({}, mmdbReader.get(ip));
  }
  req.ipinfo = ipinfo;
  next();
};

const app = express();
const port = 3000;

app.use(ipinfoMiddleware);
app.enable("trust proxy");

app.get("/", (req: any, res: any) => {
  res.json(req.ipinfo);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
