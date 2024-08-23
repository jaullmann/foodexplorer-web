import { useState, useEffect } from "react";
import { Container, Input } from "./styles";

export function LabeledCurrencyInput({ label, placeholder, altStyle = false, value, onChange, ...rest }) {

  const [formattedValue, setFormattedValue] = useState("");

  useEffect(() => {
    formatCurrencyValue(value);
  }, [value]);

  function handleInputChange(e) {
    const { value } = e.target;
    const digitsOnly = value.replace(/\D/g, "");
    onChange(digitsOnly);
  }

  function formatCurrencyValue(value) {
    if (value === "") {
      setFormattedValue("");
      return;
    }
    const options = { style: 'currency', currency: 'BRL' };
    const formatted = new Intl.NumberFormat('pt-BR', options).format(value / 100);
    setFormattedValue(formatted);
  }

  return (
    <Container>
      <label>{label}</label>
      <Input        
        $alternativeStyle={altStyle}
        value={formattedValue}
        placeholder={placeholder}        
        onChange={handleInputChange}
        {...rest}
      />
      <span className="sr-only">Campo de formulário para digitação do valor com duas casas decimais, somente números</span>
    </Container>
  );
}
