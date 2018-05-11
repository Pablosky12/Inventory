import {getRepository, getConnection} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Operation } from "../entity/Operation";
import { Shoe } from "../entity/Shoe";

export class OperationsController {
    
    private operationsRepository = getConnection().getRepository(Operation);

    async all(request: Request, response: Response, next: NextFunction) {
        
        return this.operationsRepository.find({relations: ['productId']});
    }

    async byType(request: Request, response: Response, next: NextFunction){
        return this.operationsRepository.find({relations: ['productId'], where: {type: request.params.type}});
    }

    async addOrEdit(request: Request, response: Response, next: NextFunction){
        return this.operationsRepository.save(request.body);
    }
    async remove(request: Request, response: Response, next: NextFunction) {
        return this.operationsRepository.delete(request.params.id);
    }
    
}