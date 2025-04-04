// create booking
// get all booking
// get booking by id
// get booking by user id = myBookings
//  update booking
// delete booking = soft delete

import express from "express"
import { Request, Response } from "express"

const router = express.Router()

router.post('/create-booking', (req: Request, res: Response) => {
    res.send('create booking')
})