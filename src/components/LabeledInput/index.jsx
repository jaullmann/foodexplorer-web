import { useState, useRef, useEffect } from 'react';
import { Container, Input } from "./styles";

export function LabeledInput({ label, placeholder, altStyle = false, value, onChange, currency = false, ...rest }) {
  const [formattedValue, setFormattedValue] = useState(value);
  const inputRef = useRef(null);

  useEffect(() => {
    if (currency && value) {
      setFormattedValue(formatToBRL(value));
    } else {
      setFormattedValue(value);
    }
  }, [value, currency]);

  function formatToBRL(value) {
    const cleanedValue = value.replace(/\D/g, ''); // Remove all non-digit characters
    if (!cleanedValue) return ''; // Return empty string if value is not a valid number
    const numberValue = parseFloat(cleanedValue) / 100; // Convert to float and divide by 100 to get the correct value
    return numberValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  const handleInputChange = (e) => {
    const rawValue = e.target.value;
    let formatted = rawValue;
    if (currency) {
      const cleanedValue = rawValue.replace(/\D/g, ''); // Remove all non-digit characters
      formatted = formatToBRL(cleanedValue);
    }

    setFormattedValue(formatted);
    onChange && onChange(rawValue); // Pass the raw value (or cleaned value for currency) to the parent
  };

  return (
    <Container>
      <label>{label}</label>
      <Input
        ref={inputRef}
        $alternativeStyle={altStyle}
        placeholder={placeholder}
        value={formattedValue}
        onChange={handleInputChange}
        {...rest}
      />
    </Container>
  );
}


// Fonte: ChatGPT - 26/07/2024 às 15h39