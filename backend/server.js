import mongoose from "mongoose";
import app from "./src/app.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => 
        console.log(`Server is running on port http://localhost:${PORT}`));
}).catch((error) => {
    console.error("Failed to connect to MongoDB", error);
});
