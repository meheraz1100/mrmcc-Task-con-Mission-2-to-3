import { Response } from "express";

export const handleValidationError = (err: any, res: Response) => {
    // 
    // err - array of errors
    const issues = Object.values(err.errors).map((item : any) => {
        return {
            name: item.name,
            path: item.path,
            message: item.message,
        }
    });

    console.log(issues);


    res.status(400).json({
        success: false,
        message: err.message,
        issues: issues,
        error: err,
    });
}