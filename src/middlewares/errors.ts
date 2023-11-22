import { NextFunction } from "express";

interface Error {
    name: string;
    message: string;
    stack?: string;
    code :number;
    date:any
}
interface Response {
    status?: any
    json(data: any, init?: ResponseInit | undefined): Response;
}



const errorHandler=async (err: Error, req: Request, res: Response, next: NextFunction)=>{
    console.error(err);
    const status=err.code || 500
    const message=err.message
    const data=err.date
res.status(status).json({message,data})  
}

export default errorHandler