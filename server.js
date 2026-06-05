import app from './app.js';

// Define a porta onde a API ficará disponível.
// Quando acessarmos:
//
// http://localhost:3000
//
// estaremos acessando esta aplicação.
const PORT = 3000;

// Inicia o servidor.
//
// app.listen() faz a aplicação "escutar"
// requisições na porta definida.
//
// A partir desse momento a API fica disponível
// para receber requisições do Postman, navegador
// ou outras aplicações.
app.listen(PORT, () => {

  // Exibe uma mensagem no terminal para indicar
  // que o servidor iniciou corretamente.
  console.log(`Servidor rodando na porta ${PORT}`);

});