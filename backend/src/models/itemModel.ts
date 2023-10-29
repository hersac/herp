import { DataTypes } from "sequelize";
import dbConfig from "../config/db";

const Item = dbConfig.define("item", {
	itemId: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	itemName: {
		type: DataTypes.STRING,
		allowNull: true
	},
	itemDescription: {
		type: DataTypes.STRING,
		allowNull: true
	},
	itemActive: {
		type: DataTypes.BOOLEAN,
		defaultValue: true
	}
});

Item.sync();

export default Item;
