import { Controller, Get, Post, Param, Body, HttpException, HttpStatus, Put, Delete } from "@nestjs/common";
import { Result } from "src/modules/backoffice/models/result.model";
import { ProductService } from "../services/product.service";
import { Product } from "../entities/product.entity";

// localhost:3000/v1/products
@Controller('v1/products')
export class ProductController {
    constructor(private readonly service: ProductService){}

    @Get()
    async getAll(){
        try {
            const products = await this.service.get();
            return new Result(null, true, products, null);
        } catch (error) {
            throw new HttpException(new Result('Não foi possível listar os produtos', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }

    @Post()
    async post(@Body() model: Product){
        try {
            await this.service.post(model);
            return new Result('Produto criado com sucesso!', true, model, null);
        } catch (error) {
            throw new HttpException(new Result('Não foi possível incluir o produto', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':id')
    async update(@Param('id') id, @Body() model: Product){
        try {
            await this.service.put(id, model);
            return new Result(null, true, model, null);
        } catch (error) {
            throw new HttpException(new Result('Não foi possível atualizar o produto', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }

    @Delete(':id')
    async delete(@Param('id') id){
        try {
            await this.service.delete(id);
            return new Result('Produto removido com sucesso!', true, null, null);
        } catch (error) {
            throw new HttpException(new Result('Não foi possível remover o produto', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }
}
