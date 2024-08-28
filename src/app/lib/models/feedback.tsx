import { Schema, model, models } from "mongoose";

const FeedbackSchema = new Schema(
   {
      name: { type: "string", required: true },
      email: { type: "string", required: true},
      feedback: { type: "string", required: true },
   },
   {
      timestamps: true,
   }
);

const Feedback = models.Feedback || model("Feedback", FeedbackSchema);

export default Feedback;
