import { useRef, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { Container, Input } from "./styles";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/search";

export function SearchInput() {
  const inputRef = useRef(null);
  const { inputValue, handleInputValue } = useSearch();
  const navigate = useNavigate();

  function handleInputChange(e) {
    const value = e.target.value;
    handleInputValue(value);
  };

  function handleSearch() {    
    if (inputValue.length > 2) {
      navigate("/search");
    } else {
      alert("Palavra chave deve possuir ao menos 3 caracteres");
    }
  }

  useEffect(() => {
    if (inputValue.length > 2) {
      inputRef.current.focus();
    }
  }, [inputValue]);

  return (
    <Container id="search">
      <Input
        ref={inputRef}
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Busque por pratos ou ingredientes"
      />
      <button>
        <FiSearch 
          onClick={handleSearch}
        />
      </button>
    </Container>
  );
}
