import mongoose, { Schema, model, models } from "mongoose";

const NotificationSchema = new Schema(
    {
        title: { type: String, required: true },
        message: { type: String, required: true },
        type: {
            type: String,
            enum: ["info", "success", "warning", "promo"],
            default: "info"
        },
        isActive: { type: Boolean, default: true },
        expiresAt: { type: Date },
    },
    { timestamps: true }
);

const Notification = models.Notification || model("Notification", NotificationSchema);
export default Notification;
