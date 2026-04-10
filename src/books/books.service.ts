import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BookEntity } from './entities/Book.entity';
import { CreateBookDto } from './dtos/createBook.dto';
import { UpdateBookDto } from './dtos/updateBook.dto';

@Injectable()
export class BooksService {

    constructor(
        @InjectRepository(BookEntity)
        private booksRepository: Repository<BookEntity>
    ) { }

    getAllBooks() {
        return this.booksRepository.find();
    }

    getBookById(id: string) {
        return this.booksRepository.findOne({ where: { id } });
    }

    async createBook(bookDto: CreateBookDto) {
        const book = this.booksRepository.create(bookDto);
        return this.booksRepository.save(book);
    }

    async updateBook(id: string, updateBookDto: UpdateBookDto) {
        const foundBook = await this.booksRepository.findOne({ where: { id } });

        if (!foundBook) {
            return { message: `El libro con el id ${id} no fue encontrado` };
        }

        const updated = { ...foundBook, ...updateBookDto };
        return this.booksRepository.save(updated);
    }

    async deleteBook(id: string) {
        const foundBook = await this.booksRepository.findOne({ where: { id } });

        if (!foundBook) {
            return { message: `El libro con el id ${id} no fue encontrado` };
        }

        return this.booksRepository.delete(id);
    }

}
