import {getRepository, getConnection} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Shoe } from "../entity/Shoe";

export class ShoesController {

    private shoesRepository = getConnection().getRepository(Shoe);

    async all(request: Request, response: Response, next: NextFunction) {
        
        let allShoes = await this.shoesRepository.find();
        if (allShoes.length){
            return allShoes;
        }
        else return "No Shoes Found";
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.shoesRepository.findOne(request.params.id);
    }

    async addOrUpdate(request: Request, response: Response, next: NextFunction) {
        return this.shoesRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        return await this.shoesRepository.delete(request.params.id);
    }
    
    async getByBrand(request: Request, response: Response, next: NextFunction) {

        console.log(request.params);
        let shoesByBrand = await this.shoesRepository.find({select: ["id","codename", "brand"], relations: ["brand"], where: {brand: request.params.id}})
        console.log(shoesByBrand);
        return shoesByBrand
    }

} 