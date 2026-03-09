import mongoose, { Schema, model, models, Document } from "mongoose";

export interface IBlog extends Document {
    title: string;
    paragraph: string;
    image: string;
    author: {
        name: string;
        image: string;
        designation: string;
    };
    tags: string[];
    publishDate: string;
    content?: string;
    createdAt: Date;
    updatedAt: Date;
}

const BlogSchema = new Schema<IBlog>(
    {
        title: { type: String, required: true },
        paragraph: { type: String, required: true },
        image: { type: String, required: true },
        author: {
            name: { type: String, required: true },
            image: { type: String, required: true },
            designation: { type: String, required: true },
        },
        tags: [{ type: String }],
        publishDate: { type: String, required: true },
        content: { type: String }, // For detailed blog content
    },
    { timestamps: true }
);

const Blog = models.Blog || model<IBlog>("Blog", BlogSchema);
export default Blog;
