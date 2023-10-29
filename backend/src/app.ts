import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import itemRoute from './routes/itemRoute';

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(morgan('tiny'));

app.use("/hersac", itemRoute);


export default app;
