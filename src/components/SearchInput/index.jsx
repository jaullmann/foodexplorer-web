import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { Container, Input } from "./styles";
import { useNavigate } from "react-router-dom";
import { useSearch } from "../../hooks/search";


export function SearchInput() {

  const { inputValue, handleInputValue } = useSearch();

  function handleInputChange(e) {
    const value = e.target.value;
    handleInputValue(value);
  };

  return (
    <Container id="search">
      <Input
        autoFocus
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Busque por pratos ou ingredientes"
      />
      <button>
        <FiSearch />
      </button>
    </Container>
  );
}
