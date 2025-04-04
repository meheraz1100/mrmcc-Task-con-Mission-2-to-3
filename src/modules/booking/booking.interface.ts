/* 
* user - id
* tour - id
* 
* bookedSlots
* 
* bookingDate
* bookingStatus
*/

import mongoose from "mongoose"

/*
* Bus - Dhaka - coxsbazar 
* 30 seat
* 
* 1 -> 4 tickets
* 
* 30 seats - 4 booked - 26 available


*/ 


export interface IBooking {
    user : mongoose.Schema.Types.ObjectId
    tour : mongoose.Schema.Types.ObjectId
    bookedSlots : number
    bookingStatus : "pending" | "paid" | "cancelled"
    totalPrice: number
}