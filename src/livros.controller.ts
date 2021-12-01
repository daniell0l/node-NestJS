import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Livro } from './livro.mudel';
import { LivrosService } from './livros.service';

@Controller('livros')
export class LivrosController {
  constructor(private livrosService: LivrosService) {}
  livros: Livro[] = [
    // new Livro('LIV01', 'Livro TDD e BDD na prática', 29.9),
    // new Livro('LIV02', 'Livro iniciando com Flutter', 39.9),
    // new Livro('LIV03', 'Inteligência artificial', 29.9),
  ];

  @Get()
  obterTodos(): Livro[] {
    return this.livrosService.obtertodo();
  }

  @Get(':id')
  obterUm(@Param() params): Livro {
    return this.livrosService.obterUm(params.id);
  }

  @Post()
  criar(@Body() livro: Livro) {
    livro.id = 100;
    this.livrosService.criar(livro);
  }

  @Put()
  alterar(@Body() livro: Livro): Livro {
    return this.livrosService.alterar(livro);
  }

  @Delete(':id')
  apagar(@Param() params) {
    this.livrosService.apagar(params.id);
  }
}
