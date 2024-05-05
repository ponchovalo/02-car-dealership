import { Body, Controller, Delete, Get, MethodNotAllowedException, Param, ParseIntPipe, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

@Controller('cars')
export class CarsController {

    constructor( private carsService: CarsService) {}

    //Obtiene todos los datos de la lista de carros
    @Get()
    getAllCars(){
        return this.carsService.findAll();
    }

    //metod que obtiene un solo elemento de la lista de carro con un id dado
    @Get(':id')
    getById(@Param('id', new ParseUUIDPipe({version: '4'}) ) id: string ){
        return this.carsService.findOneById(id);
    }

    // Metodo post para la creacion de un elemento del arreglo de carros
    @Post()
    create( @Body() createCarDto: CreateCarDto) {
        return this.carsService.create(createCarDto);
    }

    //Metodo para la edicion de un elemento del arreglo de carros
    @Patch(':id')
    updateCar( 
        @Param('id', new ParseUUIDPipe({version: '4'})) id: string, 
        @Body() updateCarDto: UpdateCarDto ) 
        {
            return this.carsService.update(id, updateCarDto);
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
