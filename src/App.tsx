import { Header, Banner, OpcaoProduto, ProdutosTecnologia, Parceiros, Secaomarcas , Footer} from './Components';

import './App.css'

function App() {
  return (
    <>
      <Header />
      <Banner />
      <OpcaoProduto />
      <ProdutosTecnologia quantidade={4} />
      <Parceiros />

      <ProdutosTecnologia
        titulo='Produtos Relacionados'
        ocultarAbas={true}
        quantidade={4}
      />

      <Parceiros />
      <Secaomarcas />

      <ProdutosTecnologia
        titulo='Produtos Relacionados'
        ocultarAbas={true}
        quantidade={4}
      />

      <Footer />
      
    </>
  )
}

export { App }
