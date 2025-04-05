import mongoose from "mongoose";
import Tour from "../tour/tour.model";
import { IBooking } from "./booking.interface";
import Booking from "./booking.model";


const createBooking = async (payload: IBooking): Promise<IBooking> => {

  // const { tour, bookedSlots } = payload

  // const requiredTour = await Tour.findById(tour)

  // if (!requiredTour) {
  //     throw new Error('Tour not found')
  // }

  // const totalPrice = requiredTour.price * bookedSlots

  // payload.totalPrice = totalPrice
  // payload.bookingStatus = 'pending'

  // if (requiredTour.availableSeats < bookedSlots) {
  //     throw new Error('Not enough seats available')
  // }

  // const booking = await Booking.create(payload)

  // // throw new Error('Failed to create booking');

  // // availableSeats = availableSeats - bookedSlots

  // const updatedTour = await Tour.findByIdAndUpdate(tour, { $inc: { availableSeats: -bookedSlots } }, { new: true });

  // console.log(updatedTour);

  // if (!updatedTour) {
  //     throw new Error('Failed to update tour')
  // }

  // return booking

  // Clone database
  // sandbox - test database
  // database - error 
  // database - delete
  // database - success
  // database - merge

  const session = await mongoose.startSession()

  session.startTransaction()

  try {

      const { tour, bookedSlots } = payload

      const requiredTour = await Tour.findById(tour)

      if (!requiredTour) {
          throw new Error('Tour not found')
      }

      const totalPrice = requiredTour.price * bookedSlots

      payload.totalPrice = totalPrice
      payload.bookingStatus = 'pending'

      if (requiredTour.availableSeats < bookedSlots) {
          throw new Error('Not enough seats available')
      }

      const booking = await Booking.create([payload], { session })

      console.log(booking);
      // throw new Error('Failed to create booking');

      // availableSeats = availableSeats - bookedSlots

      const updatedTour = await Tour.findByIdAndUpdate(booking[0].tour, { $inc: { availableSeats: -bookedSlots } }, { new: true, session });

      // console.log(updatedTour);

      if (!updatedTour) {
          throw new Error('Failed to update tour')
      }

      await session.commitTransaction()

      await session.endSession()

      return booking[0]

  } catch (error) {
      await session.abortTransaction()
      await session.endSession()
      throw error
  }
}


/**
* 
* Booking update -
* 
* Booking cancel - Booking Model
* 
* Tour AvailableSeats =   availableSeats + BookedSlot  - Tour Model
* 
*/

export const BookingService = {
  createBooking
}



// const createBooking = async (payload: IBooking): Promise<IBooking> => {
//   const { tour, bookedSlots } = payload;

//   const requiedTour = await Tour.findById(tour);

//   if (!requiedTour) {
//     throw new Error("Tour not found");
//   }

//   const totalPrice = requiedTour.price * bookedSlots;

//   payload.totalPrice = totalPrice;
//   payload.bookingStatus = "pending";

  // availableSeats = 2
  // bookedSlots = 3

//   if (requiedTour.availableSeats < bookedSlots) {
//     throw new Error("Not enough available seats");
//   }

//   const booking = await Booking.create(payload);

//   // availableSeats = availableSeats - bookedSlots

//   const updatedTour = await Tour.findByIdAndUpdate(
//     tour,
//     {
//       $inc: {
//         availableSeats: -bookedSlots,
//       },
//     },
//     { new: true }
//   );

//   if (!updatedTour) {
//     throw new Error("failed to update tour");
//   }

//   return booking;
// };

// export const bookingService = {
//   createBooking,
// };

/*
 * user - id
 * tour - id
 *
 * bookedSlots
 *
 * bookingDate
 * bookingStatus
 */

/*
* Bus - Dhaka - coxsbazar 
* 30 seat
* 
* 1 -> 4 tickets
* 
* 30 seats - 4 booked - 26 available


*/
