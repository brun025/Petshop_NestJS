import { Controller, Post, Param, Body, UseInterceptors, HttpException, HttpStatus } from "@nestjs/common";
import { Result } from "../models/result.model";
import { ValidatorInterceptor } from "src/interceptors/validator.interceptor";
import { Pet } from "../models/pet.model";
import { CreatePetContract } from "../contracts/pet/create-pet.contract";
import { PetService } from "../services/pet.service";

// localhost:3000/v1/customers
@Controller('v1/pets')
export class PetController {
    constructor(
        private readonly service: PetService
        ){}

    @Post(':document')
    @UseInterceptors(new ValidatorInterceptor(new CreatePetContract()))
    async create(@Param('document') document, @Body() model: Pet){
        try {
            await this.service.create(document, model);
            return new Result(null, true, model, null);
        } catch (error) {
            throw new HttpException(
                new Result('Não foi possível adicionar seu pet', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }

    @Post(':document/:id')
    @UseInterceptors(new ValidatorInterceptor(new CreatePetContract()))
    async update(@Param('document') document, @Param('id') id, @Body() model: Pet){
        try {
            await this.service.update(document, id, model);
            return new Result(null, true, model, null);
        } catch (error) {
            throw new HttpException(
                new Result('Não foi possível atualizar seu pet', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }
}
