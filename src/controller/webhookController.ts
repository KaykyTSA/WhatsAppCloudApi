import { Request, Response } from "express";

class WebhookController {

    static verifyConnection(req: Request, res: Response) {
        try {
            if (
              req.query['hub.mode'] == 'subscribe' &&
              req.query['hub.verify_token'] == 'TESTE'
            ) {
              res.status(200).send(req.query['hub.challenge']);
            } else {
              res.status(400).send("deu ruim");
            }
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    }

    static webhookPayloadHandler(req: Request, res: Response) {
        try {
            const messages = JSON.stringify(req.body.entry[0].changes[0].value.messages[0].text.body)
            const name = JSON.stringify(req.body.entry[0].changes[0].value.contacts[0].profile.name)
            console.log(`${name}: ` + messages);
    
            res.status(200);
        } catch (error) {
            console.log(new Error(`Algo está errado: ${error}`))
            res.status(400).send(error)
        }
    }
}

export default WebhookController;