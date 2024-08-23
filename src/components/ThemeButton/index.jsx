import { useEffect } from "react";
import { Button } from "./styles";
import { PiSun, PiMoon } from "react-icons/pi";

export function ThemeButton({ currentTheme, onClick }){

  return (
    <Button
      onClick={onClick}
    >
      {
        currentTheme === "darkTheme" ? 
        <PiSun id={"light-theme-icon"} /> 
        :
        <PiMoon id={"dark-theme-icon"} />      
      }
      <span className="sr-only">Botão para alterar entre o tema visual claro e escuro</span>
    </Button>
  )
}