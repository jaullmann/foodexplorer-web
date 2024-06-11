import { MainLogoGray } from "../MainLogoGray";
import { Section } from "./styles";

export function Footer(){
  return (
    <Section id="footer">
      <div>
        <MainLogoGray />
        <h4>© 2023 - Todos os direitos reservados.</h4>
      </div>      
    </Section>
  );
}