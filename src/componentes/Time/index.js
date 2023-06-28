import Jogador from '../Jogador'
import './Time.css' 


const Time = (props) =>
{
    const css = {borderColor:props.corPrimaria}  
return (
    (props.jogadores.length > 0) && <section className='time' style={{backgroundColor: props.corSecundaria}}>
        <h3 style={css}>{props.nome}</h3>
        <div className='jogadores'>
        {props.jogadores.map(jogador => <Jogador corDeFundo={props.corPrimaria} key={jogador.nome} nome={jogador.nome} classi={jogador.classi} imagem={jogador.imagem}/>)}
        </div>
    </section>
)

}

export default Time