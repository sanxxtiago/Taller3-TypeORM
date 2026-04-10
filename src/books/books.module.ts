import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './entities/Book.entity';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BookEntity])],
  providers: [BooksService],
  controllers: [BooksController],
  exports: [BooksService],
})
export class BooksModule {}