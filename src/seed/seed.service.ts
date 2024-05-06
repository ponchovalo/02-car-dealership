import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {

  constructor(
    private carsService: CarsService, 
    private brandsService: BrandsService){}

  populateSEED(){
    this.carsService.fillCarsWithSeedData(CARS_SEED);
    this.brandsService.fillBrandWithSeedData(BRAND_SEED)
    return `Seed executed succesfully`
  }
  
}
