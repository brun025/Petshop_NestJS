import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './controllers/product.controller';
import { ProductService } from './services/product.service';
import { Product } from './entities/product.entity';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/order-item.entity';
import { OrderController } from 'src/modules/store/controllers/order.controller';
import { OrderService } from './services/order.service';
import { OrderItemService } from './services/order-item.service';

@Module({
    imports: [TypeOrmModule.forFeature([
        Product,
        Order,
        OrderItem
    ])],
    controllers: [
        ProductController,
        OrderController
    ],
    providers: [
        ProductService,
        OrderService,
        OrderItemService
    ],
})
export class StoreModule {}
