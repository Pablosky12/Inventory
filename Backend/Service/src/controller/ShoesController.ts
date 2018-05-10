import {getRepository, getConnection} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Shoe } from "../entity/Shoe";

export class ShoesController {

    private shoesRepository = getConnection().getRepository(Shoe);

    async all(request: Request, response: Response, next: NextFunction) {
       return this.shoesRepository.find(({relations: ["brand"]}));        
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.shoesRepository.findOne(request.params.id);
    }
    
    addOrUpdate(request: Request, response: Response, next: NextFunction) {
        this.shoesRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        return this.shoesRepository.delete(request.params.id);
    }
    
    getByBrand(request: Request, response: Response, next: NextFunction) {

        return this.shoesRepository.find({relations: ["brand"], where: {brand: request.params.id}})
    }

} 