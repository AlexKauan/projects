function book(nome, ano, autor) {
  const livro = {
    nome: nome.toUpperCase(),
    ano: 2024 - ano,
    autor: autor,
    frase: nome + " por " + autor,
  };
  return livro;
}

const result = book("O senhor dos anéis", 1954, "J. R. R. Tolkien");

console.log(result);
