import Banner from './componentes/Banner';
import Form from './componentes/Form'; 
import Rodape from './componentes/Rodape';
import Time from './componentes/Time';
import { useState } from 'react';

function App() {

  const posicoes = [
    {
      nome: 'Goleiro',
      corPrimaria: '#57c278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Zagueiro',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Lateral Direito',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Lateral Esquerdo',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Volante',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Meio Campo',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
     {
      nome: 'Atacante',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }
  ]

  const [jogadores, setJogadores] = useState([])
  const aoNovoJogador = (jogador) => {
  debugger
 setJogadores([...jogadores, jogador])
  }
  return (
      <div className="App">
        <Banner/>
        <Form posicoes={posicoes.map(posicao => posicao.nome)} aoJogador={jogador => aoNovoJogador(jogador)}/>
        {posicoes.map(posicao =><Time
            key={posicao.nome}
            nome={posicao.nome}
            corPrimaria={posicao.corPrimaria}
            corSecundaria={posicao.corSecundaria}
            jogadores={jogadores.filter(jogador => jogador.posicao === posicao.nome)}
            />)}
          <Rodape/>
      </div>
  );
}

export default App;
