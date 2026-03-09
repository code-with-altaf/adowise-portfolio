import mongoose, { Schema, model, models } from "mongoose";

const TestimonialSchema = new Schema(
    {
        name: { type: String, required: true },
        role: { type: String, required: true },
        image: { type: String },
        content: { type: String, required: true },
        rating: { type: Number, default: 5 },
        active: { type: Boolean, default: true },
    },
    { timestamps: true }
);

const Testimonial = models.Testimonial || model("Testimonial", TestimonialSchema);
export default Testimonial;
