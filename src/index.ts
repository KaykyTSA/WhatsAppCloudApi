import express, {Request, Response} from "express";
import  * as ff from "@google-cloud/functions-framework"

const app = express();

app.use(express.json(), express.urlencoded({extended: false}))

app.get('/webhook', function(req: Request, res: Response) {
    if (
      req.query['hub.mode'] == 'subscribe' &&
      req.query['hub.verify_token'] == 'TESTE'
    ) {
      res.send(req.query['hub.challenge']);
    } else {
      res.status(400).send("deu ruim");
    }
});
  
app.post("/webhook", function (req: Request, res: Response) {

    const messages = JSON.stringify(req.body.entry[0].changes[0].value.messages[0].text.body)
    const name = JSON.stringify(req.body.entry[0].changes[0].value.contacts[0].profile.name)
    console.log(`${name}: ` + messages);

    res.status(200);
});

ff.http("app", app)