import { log } from "console";
import fs from "fs";
fs.copyFile("./build/index.html", "./build/404.html", (err) =>log(err));