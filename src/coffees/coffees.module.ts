import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';
import { Event } from '../events/entities/event.entity';
import { COFFEE_BRANDS } from './coffees.constants';

export class COffeesBrandsFactory {
  create() {
    return ['test1', 'test2'];
  }
}

@Module({
  imports: [TypeOrmModule.forFeature([Coffee, Flavor, Event])],
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    COffeesBrandsFactory,
    {
      provide: COFFEE_BRANDS,
      useFactory: (brandFactory: COffeesBrandsFactory) => brandFactory.create(),
      inject: [COffeesBrandsFactory],
    },
  ],
  exports: [CoffeesService],
})
export class CoffeesModule {}
