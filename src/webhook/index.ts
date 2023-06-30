import { Router, Request, Response } from "express";
import WebhookController from "../controller/webhookController";

const routes = Router()

routes.get('/webhook', WebhookController.verifyConnection);

routes.post("/webhook",WebhookController.webhookPayloadHandler);

export default routes;