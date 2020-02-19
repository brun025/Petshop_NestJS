import { Injectable } from "@nestjs/common";
import { Room } from "../models/room.model";

@Injectable()
export class RoomRepository{
    async checkAvailability(id: string, date: Date): Promise<Room>{
        // TODO: Ler do banco
        console.log('RoomRepository:checkAvailability')

        return new Room('123456789');
    }

    async book(room: Room){
        // TODO: Salvar no banco
        console.log('RoomRepository:book')
    }
}