import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

// The controller defines your API routes
// @Controller('products') means all routes here start with /products
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  // GET /products — returns all products
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  // GET /products/:id — returns one product
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(Number(id));
  }

  // POST /products — creates a new product
  // @Body() reads the JSON sent in the request body
  @Post()
  create(@Body() body: { name: string; price: number }) {
    return this.productsService.create(body);
  }
}
