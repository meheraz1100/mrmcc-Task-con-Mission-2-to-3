import { Router } from "express";
import { tourController } from "./tour.controller";

const tourRouter = Router()

tourRouter.get("/schedule/:id", tourController.getNextSchedule) 
tourRouter.get("/:id", tourController.getSingleTours) 
tourRouter.get("/", tourController.getTours)
tourRouter.post("/create-tour", tourController.createTour)
tourRouter.put("/:id", tourController.updateTour)
tourRouter.delete("/:id", tourController.deleteTour)

export default tourRouter