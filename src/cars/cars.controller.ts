import { Body, Controller, Delete, Get, MethodNotAllowedException, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {

    constructor( private carsService: CarsService) {}

    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    @Get(':id')
    getById(@Param('id', ParseIntPipe ) id: number ){
        return this.carsService.findOneById(id);
    }
    // Metodo post para la creacion de un elemento del arreglo de carros
    @Post()
    create( @Body() body: any) {
        return body 
    }

    //Metodo para la edicion de un elemento del arreglo de carros
    @Patch(':id')
    updateCar( 
        @Param('id', ParseIntPipe) id: number, 
        @Body() body: any ) 
        {
            return body;
        }

    //Metodo para la eliminacion de un elemento del arreglo de carros
    @Delete(':id')
    deleteCar( @Param('id', ParseIntPipe ) id: number ) {
        return {
            method: 'DELETE',
            id
        }  
    }

}
