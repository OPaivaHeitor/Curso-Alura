import "./listaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        onChange={(event) => props.onChange(event.target.value)}
        required={props.required}
        value={props.valor}
      >
        <option value="">Escolha seu time</option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
