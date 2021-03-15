import React from 'react';
import { useState } from 'react';
import './App.css';
import { Background, Header } from './components/Styled';
import Form from './components/TeamForm.js'
import Champion from './components/Members.js'

const initialValues = {
  name: "",
  champion: "",
  role: ""
}


function App() {
  const [champions, setChampions] = useState([]);
  const [formValues, setFormValues] = useState(initialValues);
  const newChamp = (inputName, inputValue) => {
    setFormValues({...formValues,[inputName]: inputValue})
  }

  const submitChamp = () => {

    const newChamp = {
      name: formValues.name,
      champion: formValues.champion,
      role: formValues.role
    }

    setChampions([...champions, newChamp])
    setFormValues(initialValues)
  }

  return (
    <Background className="App">

      <Header>League of Legends Team</Header>
      <Form
      values={formValues}
      update={newChamp}
      submit={submitChamp}/>

      <ul>
        {
          champions.map(champion => {
            return (
              <Champion key={champion.id} details={champion} onSubmit={submitChamp} />
            )
          })
        }
      </ul>

    </Background>
   
  );
}

export default App;
