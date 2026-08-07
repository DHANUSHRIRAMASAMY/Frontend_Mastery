import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

// The service handles all database logic
// The controller calls the service — they're kept separate on purpose
@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  // Get all products from the database
  async findAll() {
    return this.prisma.product.findMany();
  }

  // Get a single product by its id
  async findOne(id: number) {
    return this.prisma.product.findUnique({
      where: { id },
    });
  }

  // Create a new product
  async create(data: { name: string; price: number }) {
    return this.prisma.product.create({
      data,
    });
  }
}
