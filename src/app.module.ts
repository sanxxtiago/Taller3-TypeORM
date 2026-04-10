import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BookEntity } from './books/entities/Book.entity';

@Module({
  imports: [
    // Carga variables del .env
    BooksModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // Conexión a Postgres
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'),
        port: Number(config.get<number>('DB_PORT')),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASSWORD'),
        database: config.get<string>('DB_NAME'),
        entities: [BookEntity],
        synchronize: true, // SOLO desarrollo
      }),
    }),

    BooksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}