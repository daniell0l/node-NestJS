import { Injectable } from '@nestjs/common';
import { Produto } from './produto.mudel';

@Injectable()
export class ProdutosService {
  produtos: Produto[] = [
    new Produto('LIV01', 'Livro TDD e BDD na prática', 29.9),
    new Produto('LIV02', 'Livro iniciando com Flutter', 39.9),
    new Produto('LIV03', 'Inteligência artificial', 29.9),
  ];

  obtertodo(): Produto[] {
    return this.produtos;
  }

  obterUm(id: number): Produto {
    return this.produtos[0];
  }

  criar(produto: Produto) {
    this.produtos.push(produto);
  }

  alterar(produto: Produto): Produto {
    return produto;
  }

  apagar(id: number) {
    this.produtos.pop();
  }
}
