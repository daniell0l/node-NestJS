import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

@Controller('produtos')
export class ProdutosController {
  @Get()
  obterTodos(): string {
    return 'lista todos os produtos';
  }

  @Get(':id')
  obterUm(@Param() Params): string {
    return `Retorna os dasdos do produto ${Params.id}`;
  }

  @Post()
  criar(@Body() produto): string {
    console.log(produto);
    return 'Produto criado';
  }

  @Put()
  alterar(@Body() produto): string {
    console.log(produto);
    return 'Produto atualizado';
  }

  @Delete(':id')
  apagar(@Param() params): string {
    return `Apagar o produto ${params.id}`;
  }
}
