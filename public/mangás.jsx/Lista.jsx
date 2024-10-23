const App = () => {
  const produtos = [
   
    <div>
      <h1>Lista de Produtos</h1>
      <ul>
        {produtos.map(produto => (
          <li key={produto.id}>
            <img src={produto.image} alt={produto.nome} style={{ width: '100px', height: 'auto' }} />
            {produto.nome} - {produto.preco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
