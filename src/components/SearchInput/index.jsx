import { useState, useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { Container, Input } from "./styles";
import { useNavigate } from "react-router-dom";

export function SearchInput() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  useEffect(() => {
    if (searchQuery) {
      const timer = setTimeout(() => {
        navigate(`/search/${searchQuery}`);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [searchQuery, navigate]);

  return (
    <Container id="search">
      <Input
        autoFocus
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Busque por pratos ou ingredientes"
      />
      <button>
        <FiSearch />
      </button>
    </Container>
  );
}
