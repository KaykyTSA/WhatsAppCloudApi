import express, {Request, Response} from "express";
import  * as ff from "@google-cloud/functions-framework"
import routes from "./webhook";

const app = express();

app.use(express.json(), express.urlencoded({extended: false}), routes);

ff.http("app", app);