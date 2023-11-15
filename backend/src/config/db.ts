import { Sequelize } from "sequelize";

const dbConfig = new Sequelize({
	host: "localhost",
	port: 5432,
	database: "app",
	username: "heri",
	password: "Heriberto1995**",
	dialect: "postgres",
	logging: false
});


const dbAuth = async () => {
	try {
		await dbConfig.authenticate();
		console.log("Database connected");
	} catch (err) {
		console.error("Database not connected:", err);
	}
};

dbAuth();

export default dbConfig;
