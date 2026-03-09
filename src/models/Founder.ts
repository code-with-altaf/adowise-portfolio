import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IFounder extends Document {
    name: string;
    role: string;
    image: string;
    bio: string;
    portfolio?: string;
    social?: {
        linkedin?: string;
        twitter?: string;
    };
    order: number;
    createdAt: Date;
    updatedAt: Date;
}

const FounderSchema = new Schema<IFounder>(
    {
        name: { type: String, required: true },
        role: { type: String, required: true },
        image: { type: String, required: true },
        bio: { type: String, required: true },
        portfolio: { type: String },
        social: {
            linkedin: { type: String },
            twitter: { type: String },
        },
        order: { type: Number, default: 0 },
    },
    { timestamps: true }
);

const Founder = models.Founder || model<IFounder>("Founder", FounderSchema);
export default Founder;
