import Cliente from '../core/Cliente'

export default interface CienteRepositorio{
    
    salvar(cliente:Cliente): Promise<Cliente>
    excluir(cliente:Cliente): Promise<void>
    obterTodos(): Promise<Cliente[]>
    
}