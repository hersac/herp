import { Request, Response } from "express";
import Item from "../models/itemModel";

const getItems = async (req: Request, res: Response)=>{
	try {
		const itemDB = await Item.findAll();
		res.status(200).json(itemDB);
	} catch (err) {
		res.status(400).json({
			message: "Ha ocurrido un error",
			err
		});
	}
};

const getItemById = async (req: Request, res: Response)=>{
	const id = req.params.id;
	try {
		const itemDB = await Item.findByPk(id);

		if (!itemDB) {
			res.status(400).json({
				message: "No se encuentra el item con ese ID"
			});
		} else {
			res.status(200).json(itemDB);
		}
	} catch (err) {
		res.status(400).json({
			message: "Ha ocurrido un error",
			err
		});
	}
};

const createItem = async (req: Request, res: Response)=>{
	const body = req.body;
	try {
		const itemDB = await Item.create(body);
		res.status(200).json(itemDB);
	} catch (err) {
		res.status(400).json({
			message: "Ha ocurrido un error",
			err
		});
	}
};

const updateItem = async (req: Request, res: Response)=>{
	const id = req.params.id;
	const body = req.body;
	try {
		const itemDB = await Item.findByPk(id);

		if (!itemDB) {
			res.status(400).json({
				message: "No se encuentra el item con ese ID"
			});
		} else{
			itemDB?.update(body);
			res.status(200).json(itemDB);
		}
	} catch (err) {
		res.status(400).json({
			message: "Ha ocurrido un error",
			err
		});
	}
};

const deleteItemById = async (req: Request, res: Response)=>{
	const id = req.params.id;
	try {
		const itemDB = await Item.findByPk(id);

		if (!itemDB) {
			res.status(400).json({
				message: "No se encuentra el item con ese ID"
			});
		} else {
			itemDB?.destroy();
			res.status(200).json({
				message: "Se ha borrado el item correctamente"
			});
		}
	} catch (err) {
		res.status(400).json({
			message: "Ha ocurrido un error",
			err
		});
	}
};

export default {
	getItems,
	getItemById,
	createItem,
	updateItem,
	deleteItemById
}
