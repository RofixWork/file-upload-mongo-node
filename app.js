import 'express-async-errors';
import dotenv from 'dotenv';
dotenv.config()
import express from "express";
import morgan from "morgan";
import errorHandlerMiddleware from "./middlewares/error-handler.js";
import notFoundMiddleware from "./middlewares/not-found.js";
import helmet from 'helmet';
import xss from 'xss-clean'
import path from 'path';
import connectDB from './db/connect.js';
import productRouter from './routes/product.routes.js';
import fileUpload from 'express-fileupload';
import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({ 
    cloud_name: process.env.CLOUD_NAME, 
    api_key: process.env.CLOUD_API_KEY, 
    api_secret: process.env.CLOUD_SECRET_KEY
});
const app = express()


app.use(express.static(path.resolve('public')))
app.use(express.json())
app.use(helmet())
app.use(xss())
app.use(morgan('dev'))
app.use(fileUpload({useTempFiles:true}));

//routes
app.use('/api/v1/products', productRouter);


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware)

const PORT = process.env.PORT || process.env.LOCAL_PORT;

(async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`)
        })
    } catch (error) {
        console.error("Error starting server", error);
    }
})();