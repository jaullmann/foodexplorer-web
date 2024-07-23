import { useState } from "react";
import { Container, Input } from "./styles";

export function LabeledCreditInput({ label, placeholder, altStyle, value, inputType, onChange, ...rest }) {
  const [innerValue, setInnerValue] = useState("");  
  
  function handleInputChange(e) {
    const inputValue = e.target.value;
    let formattedValue = inputValue;    

    if (inputType === 'creditCard') {
      formattedValue = inputValue
        .replace(/\D/g, "") 
        .replace(/(.{4})/g, '$1 ') 
        .trim();

    } else if (inputType === 'expiryDate') {
      formattedValue = inputValue
        .replace(/\D/g, "") 
        .replace(/(\d{2})(\d{1,2})/, '$1/$2') 
        .substring(0, 5); 

      if (formattedValue.length === 5 && !isValidExpiryDate(formattedValue)) {     
        setInnerValue(""); 
        return alert("Data de validade inválida!");  
      }

    } else if (inputType === 'cvv') {
      formattedValue = inputValue
        .replace(/\D/g, "") 
        .substring(0, 3);

    }

    setInnerValue(formattedValue);    
    if (onChange) {
      onChange(formattedValue);
    }
  };

  function isValidExpiryDate(date) {
    const [month, year] = date.split('/').map(Number);
    if (!month || !year || month < 1 || month > 12) {
      return false;
    }
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100; 
    const currentMonth = currentDate.getMonth() + 1; 
    return (year === currentYear && month >= currentMonth) ||  year > currentYear;
  };

  return (
    <Container>
      <label>{label}</label>
      <Input
        $alternativeStyle={altStyle} 
        type="text"
        value={innerValue}
        onChange={(e) => handleInputChange(e)}
        placeholder={placeholder}
        maxLength={inputType === 'creditCard' ? 19 : inputType === 'expiryDate' ? 5 : 3}
      />
    </Container>
  );
};