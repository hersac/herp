import express from "express";
import itemController from "../controllers/itemController";

const router = express.Router();

router.get("/item", itemController.getItems);
router.get("/item/:id", itemController.getItemById);
router.post("/item", itemController.createItem);
router.put("/item/:id", itemController.updateItem);
router.delete("/item/:id", itemController.deleteItemById);

export default router;
