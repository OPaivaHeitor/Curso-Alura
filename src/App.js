import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Rodape from "./components/Rodape";
import Time from "./components/Time";

function App() {
  const times = [
    {
      nome: "Programação",
      corPrimaria: "#d9f7e9",
      corSecundaria: "#57c278",
    },
    {
      nome: "Frontend",
      corPrimaria: "#E8F8FF",
      corSecundaria: "#82CFFA",
    },
    {
      nome: "Devops",
      corPrimaria: "#FDE7E8",
      corSecundaria: "#E06B69",
    },
    {
      nome: "UX e Design",
      corPrimaria: "#FAE9F5",
      corSecundaria: "#DB6EBF",
    },
    {
      nome: "Mobile",
      corPrimaria: "#FFF5D9",
      corSecundaria: "#FFBA05",
    },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FFEEDF",
      corSecundaria: "#FF8A29",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger;
    setColaboradores([...colaboradores, colaborador]);
  };

  return (
    <div className="App">
      <Banner />
      <Form
        times={times.map((time) => time.nome)}
        aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
      />
      {times.map((time) => (
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(
            (colaborador) => colaborador.time === time.nome
          )}
        />
      ))}
      <Rodape />
    </div>
  );
}

export default App;
