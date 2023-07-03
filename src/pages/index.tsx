import Layout from '../components/Layout'
import Tabela from '../components/Tabela'
import Cliente from '../core/Cliente';
import Botao from '../components/Botao';

export default function Home() {
  const clientes = [
                    new Cliente('Ana',34,''),
                    new Cliente('Carlos',23,''),
                    new Cliente('Pedro',18,''),
                    new Cliente('Marcos',45,'')
                  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(cliente.nome)
  }
  return (
    <div className={`flex justify-center items-center h-screen
    bg-gradient-to-r from-blue-500 to-purple-500
    text-white`}>
     <Layout titulo="Cadastro Simples">
        <div className="flex justify-end">
          <Botao cor = 'gray' className='mb-4'  >Novo Cliente</Botao>
        </div>
        <Tabela clientes={clientes} 
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}> </Tabela>
     </Layout>
    </div>
  )
}
