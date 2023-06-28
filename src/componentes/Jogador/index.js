import './Jogador.css'

const Jogador=({nome, imagem, classi, corDeFundo}) => {

    return (
        
    <div className='colaborador'> 
        <div className='cabecalho' style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{classi}</h5>
        </div>
            
    </div>
    )
}

export default Jogador