import {getRepository, getConnection} from "typeorm";
import {NextFunction, Request, Response} from "express";
import { Operation } from "../entity/Operation";
import { type } from "os";

export class OperationsController {
    
    private operationsRepository = getConnection().getRepository(Operation);

    async all(request: Request, response: Response, next: NextFunction) {
        
        let allOps = await this.operationsRepository.find();
        if (allOps.length){
            return allOps;
        }
        else return "No operations Found";
    }

    async byType(request: Request, response: Response, next: NextFunction){
        let purchases = await this.operationsRepository.find({where: {type: request.params.type}});
        return purchases;
    }

    async addOrEdit(request: Request, response: Response, next: NextFunction){
        let buyResult = await this.operationsRepository.save(request.body);
        return buyResult
    }
    
}