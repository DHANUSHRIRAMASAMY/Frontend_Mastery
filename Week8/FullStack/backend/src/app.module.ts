import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';

// AppModule is the root module — it ties everything together
@Module({
  imports: [ProductsModule],
})
export class AppModule {}
