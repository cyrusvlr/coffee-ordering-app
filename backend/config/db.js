import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://cyrusvlr:montangangGAG0@cluster0.dg3hvig.mongodb.net/coffee-ordering-app').then(() => console.log("DB Connected"))
}