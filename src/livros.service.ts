import { Injectable } from '@nestjs/common';
import { Livro } from './livro.mudel';

@Injectable()
export class LivrosService {
  livros: Livro[] = [
    new Livro('LIV01', 'Livro TDD e BDD na prática', 29.9),
    new Livro('LIV02', 'Livro iniciando com Flutter', 39.9),
    new Livro('LIV03', 'Inteligência artificial', 29.9),
  ];

  obtertodo(): Livro[] {
    return this.livros;
  }

  obterUm(id: number): Livro {
    return this.livros[0];
  }

  criar(livro: Livro) {
    this.livros.push(livro);
  }

  alterar(livro: Livro): Livro {
    return livro;
  }

  apagar(id: number) {
    this.livros.pop();
  }
}
