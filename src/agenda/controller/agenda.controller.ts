import { Controller, Post, Body, UseGuards, HttpException, HttpStatus, Req } from "@nestjs/common";
import { RoomBookService } from "../services/room-book.service";
import { BookRoomDto } from "../dtos/book-room.dto";
import { JwtAuthGuard } from "src/modules/shared/guards/auth.guard";
import { ResultDto } from "src/modules/backoffice/dtos/result.dto";
import { BookRoomCommand } from "../commands/book-room.command";

@Controller('v1/rooms')
export class AgendaController{
    constructor(private readonly service: RoomBookService){}

    @Post()
    @UseGuards(JwtAuthGuard)
    async Book(@Req() request, @Body() model: BookRoomDto){
        try {
            console.log('AppController:Book - Iniciando a requisição');
            var command = new BookRoomCommand(request.user.document, model.roomId, model.date)
            await this.service.Book(command);
        } catch (error) {
            throw new HttpException(new ResultDto('Não foi possível reservar sua sala', false, null, error), HttpStatus.BAD_REQUEST);
        }
    }
}