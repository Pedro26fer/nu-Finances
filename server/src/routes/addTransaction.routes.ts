import { Express } from "express";
import addTransactionController from "../controllers/transactions/addTransactions.controller";
import { isLoggedMiddleware } from "../middlewares/isLogged.midleware";

export const addTransactionRoute = (app: Express) => {
    app.post("/addTransaction/:account", isLoggedMiddleware, addTransactionController)
}