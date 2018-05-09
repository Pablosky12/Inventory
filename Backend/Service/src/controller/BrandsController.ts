import {getRepository, getConnection} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Brand } from "../entity/Brand";

export class BrandsController {

    private brandsRepository = getConnection().getRepository(Brand);

    async getBrands(request: Request, response: Response, next: NextFunction) {
       return this.brandsRepository.find();        
    }

} 