import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Footer from './components/Footer';
import Team from './components/Team';



function App() {



  const times = [{
    nome:  'Programação', 
    corPrimaria: '#57C278', 
    corSecundaria: '#D9F7E9'
  }, {
    nome: 'Front End', 
    corPrimaria: '#82CFFA', 
    corSecundaria: '#E8F8FF'
  }, {
    nome: 'Data Science', 
    corPrimaria: '#A6D157', 
    corSecundaria: '#F0F8E2'
  }, {
    nome: 'Devops', 
    corPrimaria: '#E06869', 
    corSecundaria: '#FDE7E8'
  },{
    nome: 'UX e Design', 
    corPrimaria: '#DB6EBF', 
    corSecundaria: '#FAE9E5'
  },{
    nome: 'Mobile', 
    corPrimaria: '#FFBA05', 
    corSecundaria: '#FFF5D9'
  },{
    nome: 'Inovação e gestão', 
    corPrimaria: '#FF8A29', 
    corSecundaria: '#FFEEDF'
  }
]

  const [colaboradores, setColaboradores] = useState([])


  const aoNovoColaboradorAdicionado = (colaborador) => {
    
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }


  return (
    <div className="App">
        <Banner/>
        <Form times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
       
       {times.map(time => 
       <Team 
       key={time.nome} 
       nome={time.nome} 
       corPrimaria={time.corPrimaria} 
       corSecundaria={time.corSecundaria}
       colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}>

       </Team>)}
        
        <Footer/>
    
    </div>
  );
}

export default App;
