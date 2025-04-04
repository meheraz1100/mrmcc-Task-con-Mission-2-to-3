import { model, Schema } from "mongoose";
import { IBooking } from "./booking.interface";

const bookingSchema = new Schema<IBooking>({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    tour: {
        type: Schema.Types.ObjectId,
        ref: "Tour",
        required: true,
    },
    bookedSlots: {
        type: Number,
        required: true,
    },
    bookingStatus: {
        type: String,
        enum: ["pending", "paid", "cancelled"],
        default: "pending",
    },
    totalPrice: {
        type: Number,
        required: true,
    },
}, {
    timestamps: true,
})


const Booking = model<IBooking>("Tour", bookingSchema);

export default Booking;