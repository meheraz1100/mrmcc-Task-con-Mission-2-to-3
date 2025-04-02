import { Request, Response } from "express";
import { tourService } from "./tour.service"

const createTour = async (req: Request, res: Response) => {
    try {
        const body = req.body;
        const result = await tourService.createTour(body);

    res.send({
        success: true,
        message: "Tour Created Successfully",
        result,
    })
    } catch (error) {
        res.send({
            success: false,
            message: "Something went wrong",
            error
        })
    }
}


const getTours = async (req: Request, res: Response) => {
    try {
        const result = await tourService.getTours();

    res.send({
        success: true,
        message: "Tours getting Successfully",
        result,
    })
    } catch (error) {
        res.send({
            success: false,
            message: "Something went wrong",
            error
        })
    }
}


const getSingleTours = async (req: Request, res: Response) => {
    try {
    const id = req.params.id;
        const result = await tourService.getSingleTour(id);

    res.send({
        success: true,
        message: "Tour getting Successfully",
        result,
    })
    } catch (error) {
        res.send({
            success: false,
            message: "Something went wrong",
            error
        })
    }
}


const updateTour = async (req: Request, res: Response) => {
    try {
    const id = req.params.id;
    const body = req.body;
        const result = await tourService.updateTour(id, body);

    res.send({
        success: true,
        message: "Tour updated Successfully",
        result,
    })
    } catch (error) {
        res.send({
            success: false,
            message: "Something went wrong",
            error
        })
    }
}


const deleteTour = async (req: Request, res: Response) => {
    try {
    const id = req.params.id;
        const result = await tourService.deleteTour(id);

    res.send({
        success: true,
        message: "Tour deleted Successfully",
        result,
    })
    } catch (error) {
        res.send({
            success: false,
            message: "Something went wrong",
            error
        })
    }
}


const getNextSchedule = async (req: Request, res: Response) => {
    try {
    const id = req.params.id;
        const result = await tourService.getNextSchedule(id);

    res.send({
        success: true,
        message: "Next Schedule tour getting Successfully",
        result,
    })
    } catch (error) {
        res.send({
            success: false,
            message: "Something went wrong",
            error
        })
    }
}




export const tourController = {
    createTour,
    getTours,
    getSingleTours,
    updateTour,
    deleteTour,
    getNextSchedule
}