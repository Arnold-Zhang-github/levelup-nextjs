import connect from "@/app/lib/db";
import Feedback from "@/app/lib/models/feedback";
import { NextResponse } from "next/server";
import { Types } from "mongoose";
import { error } from "console";

const ObjectId = require("mongoose").Types.ObjectId;

export const GET = async (request: Request) => {
   try {
      await connect();
      const feedback = await Feedback.find();
      return new NextResponse(JSON.stringify(feedback), { status: 200 });
   } catch (error: any) {
      return new NextResponse(JSON.stringify({ error: error.message }), {
         status: 500,
      });
   }
};

export const POST = async (request: Request) => {
   try {
      const body = await request.json();

      // console.log(body);

      await connect();

      // check for duplicate feedback
      const existingFeedback = await Feedback.findOne({ email: body.email });

      if (existingFeedback) {
         return new NextResponse(
            JSON.stringify({
               error: "You already submitted with this email address",
            }),
            {
               status: 400, 
            }
         );
      }
      //check same name
      const existingName = await Feedback.findOne({ name: body.name });

      if (existingName) {
         return new NextResponse(
            JSON.stringify({ error: "You already submitted with this name" }),
            {
               status: 400,
            }
         );
      }

      // create new feedback
      const newFeedback = new Feedback(body);

      // console.log(newFeedback);

      await newFeedback.save();

      return new NextResponse(
         JSON.stringify({ message: "Feedback is created", user: newFeedback }),
         {
            status: 201,
         }
      );
   } catch (error: any) {
      return new NextResponse(JSON.stringify({ error: error.message }), {
         status: 500,
      });
   }
};

export const PATCH = async (request: Request) => {
   try {
      const body = await request.json();
      console.log(body);
      const { feedbackId, newFeedback } = body;

      await connect();

      if (!feedbackId || !newFeedback) {
         return new NextResponse(
            JSON.stringify({ message: "ID or new feedback not found" }),
            {
               status: 400,
            }
         );
      }
      if (!Types.ObjectId.isValid(feedbackId)) {
         return new NextResponse(JSON.stringify({ message: "Invalid id" }), {
            status: 400,
         });
      }

      const updateFeedback = await Feedback.findOneAndUpdate(
         { _id: new ObjectId(feedbackId) },
         { feedback: newFeedback },
         { new: true }
      );

      if (!updateFeedback) {
         return new NextResponse(
            JSON.stringify({ message: "User not found in the database" }),
            {
               status: 400,
            }
         );
      }

      return new NextResponse(
         JSON.stringify({ message: "User is updated", user: updateFeedback }),
         {
            status: 200,
         }
      );
   } catch (error: any) {
      return new NextResponse("Error in updating user" + error.message, {
         status: 500,
      });
   }
};

export const DELETE = async (request: Request) => {
   try {
      const { searchParams } = new URL(request.url);
      const userId = searchParams.get("userId");

      if (!userId) {
         return new NextResponse(
            JSON.stringify({ message: "ID or new username not found" }),
            {
               status: 400,
            }
         );
      }

      if (!Types.ObjectId.isValid(userId)) {
         return new NextResponse(
            JSON.stringify({ message: "Invalid User id" }),
            {
               status: 400,
            }
         );
      }

      await connect();

      const deleteUser = await Feedback.findByIdAndDelete(
         new Types.ObjectId(userId)
      );

      if (!deleteUser) {
         return new NextResponse(
            JSON.stringify({ message: "User not found in the database" }),
            {
               status: 400,
            }
         );
      }

      return new NextResponse(
         JSON.stringify({ message: "User is deleted", user: deleteUser }),
         {
            status: 200,
         }
      );
   } catch (error: any) {
      return new NextResponse("Error in deleting user" + error.message, {
         status: 500,
      });
   }
};
