import "./campoTexto.css";

const CampoTexto = (props) => {
  const onType = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="campo-texto">
      <label htmlFor="campo">{props.label}</label>
      <input
        value={props.valor}
        onChange={onType}
        required={props.required}
        type="text"
        name="campo"
        id="nome"
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default CampoTexto;
