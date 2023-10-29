import app from "./src/app";

const db = require('./src/config/db');

app.set('port', process.env.PORT || 2000);

app.listen(app.get('port'), ()=>{
	console.log("Server run on port:", app.get('port'));
});
