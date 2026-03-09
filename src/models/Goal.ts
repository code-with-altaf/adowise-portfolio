import mongoose, { Schema, model, models } from "mongoose";

const GoalSchema = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String },
        status: {
            type: String,
            enum: ["pending", "in-progress", "completed"],
            default: "pending"
        },
        deadline: { type: Date },
        priority: {
            type: String,
            enum: ["low", "medium", "high", "critical"],
            default: "medium"
        }
    },
    { timestamps: true }
);

const Goal = models.Goal || model("Goal", GoalSchema);
export default Goal;
