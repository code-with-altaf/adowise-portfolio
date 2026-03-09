import mongoose, { Schema, model, models } from "mongoose";

const VisitorSchema = new Schema(
    {
        ip: { type: String, required: true },
        userAgent: { type: String },
        location: {
            country: { type: String },
            city: { type: String },
        },
        coordinates: {
            lat: { type: Number },
            lng: { type: Number },
        },
        path: { type: String },
        language: { type: String },
    },
    { timestamps: true }
);

const Visitor = models.Visitor || model("Visitor", VisitorSchema);
export default Visitor;
