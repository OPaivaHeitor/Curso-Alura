import { useState } from "react";
import Button from "../Button";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./form.css";

const Form = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  const onSave = (event) => {
    event.preventDefault();
    props.aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  return (
    <div>
      <section className="formulario">
        <form onSubmit={onSave}>
          <div>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
          </div>
          <CampoTexto
            required={true}
            label="Nome"
            placeholder="Digite seu nome"
            valor={nome}
            onChange={(valor) => setNome(valor)}
          />
          <CampoTexto
            required={true}
            label="Cargo"
            placeholder="Digite seu Cargo"
            valor={cargo}
            onChange={(valor) => setCargo(valor)}
          />
          <CampoTexto
            required={true}
            label="Imagem"
            placeholder="Digite o endereço da sua imagem"
            valor={imagem}
            onChange={(valor) => setImagem(valor)}
          />
          <ListaSuspensa
            label="Time"
            itens={props.times}
            required={true}
            valor={time}
            onChange={(valor) => setTime(valor)}
          />
          <Button>Criar card</Button>
        </form>
      </section>
    </div>
  );
};

export default Form;
