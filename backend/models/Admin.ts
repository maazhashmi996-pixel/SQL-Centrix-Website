import { Schema, models, model, type InferSchemaType } from "mongoose";

const AdminSchema = new Schema(
  {
    name: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

export type IAdmin = InferSchemaType<typeof AdminSchema>;

// Reuse the existing model in dev (hot reload) instead of recompiling it.
const Admin = models.Admin || model("Admin", AdminSchema);

export default Admin;
