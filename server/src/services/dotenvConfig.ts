import dotenv from "dotenv";
import path from "path";
import * as fileService from "../services/fileService";

const envPath = path.join(__dirname, ".env");

const dotenvOptions: dotenv.DotenvConfigOptions = {
    path: envPath,
    encoding: "latin1"
}

const dotenvConfig: dotenv.DotenvConfigOutput = fileService.checkFileCanRead(envPath) ? dotenv.config(dotenvOptions) : {} as dotenv.DotenvConfigOutput;
export default dotenvConfig;