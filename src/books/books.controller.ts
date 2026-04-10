import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  ValidationPipe,
} from '@nestjs/common';

import { BooksService } from './books.service';
import { CreateBookDto } from './dtos/createBook.dto';
import { UpdateBookDto } from './dtos/updateBook.dto';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  getAllBooks() {
    return this.booksService.getAllBooks();
  }

  @Get(':id')
  getBookByID(
    @Param('id', ParseUUIDPipe) id: string
  ) {
    return this.booksService.getBookById(id);
  }

  @Post()
  createBook(
    @Body(new ValidationPipe()) bookDto: CreateBookDto
  ) {
    return this.booksService.createBook(bookDto);
  }

  @Patch(':id')
  updateBook(
    @Param('id', ParseUUIDPipe) id: string,
    @Body(new ValidationPipe()) updateDto: UpdateBookDto
  ) {
    return this.booksService.updateBook(id, updateDto);
  }

  @Delete(':id')
  deleteBook(
    @Param('id', ParseUUIDPipe) id: string
  ) {
    return this.booksService.deleteBook(id);
  }
}