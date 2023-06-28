import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import Dropdown from '../Dropdown'
import './Form.css'
import { useCallback, useState } from 'react'

const Form = (props) =>{

const [nome, setNome] = useState('')
const [classi, setClassi] = useState('')
const [imagem, setImagem] = useState('')
const [posicao, setPosicao] = useState('')


const aoSalvar = (evento) =>{
    evento.preventDefault()
    props.aoJogador({
        nome,
        posicao,
        classi,
        imagem
    })
    setClassi('')
    setNome('')
    setImagem('')
    setPosicao('')
}

return (
    <section className='formulario'>
        <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o jogador FIFA 23!</h2>    
        <CampoTexto 
            obrigatorio={true} 
            label="Nome" 
            placeholder="Digite o Nome" 
            valor={nome} 
            aoAlterado ={valor => setNome(valor)}/>
        <Dropdown 
            obrigatorio={true} 
            label="Posição" 
            itens={props.posicoes} 
            valor={posicao} 
            aoAlterado={valor => setPosicao(valor)}/>
        <CampoTexto 
            obrigatorio={true} 
            label="Classificação Geral" 
            placeholder="Digite classificação geral" 
            valor={classi} 
            aoAlterado ={valor => setClassi(valor)}/>
        <CampoTexto 
            obrigatorio={true} 
            label="Imagem" 
            placeholder="Digite o endereço da imagem" 
            valor={imagem} 
            aoAlterado ={valor => setImagem(valor)}/>
        <Botao>
        Criar card  
        </Botao>
        </form>
    </section>
)

}

export default Form