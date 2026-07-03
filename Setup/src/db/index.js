import mongoose from "mongoose";
import { DB_name } from "../constant.js";

const connect_DB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${process.env.MONGODB_URL}/${DB_name}`
        );

        console.log(`MongoDB Connected!! DB HOST: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MongoDB Connection Error:", error);
        process.exit(1);
    }
};

export default connect_DB;