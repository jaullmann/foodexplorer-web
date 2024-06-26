import { PiCaretDownBold } from "react-icons/pi";
import { useState, useEffect } from "react";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import { IngredientEditing } from "../../components/IngredientEditing";
import { SectionLabel } from "../../components/SectionLabel";
import { UploadButton } from "../../components/UploadButton";
import { LabeledInput } from "../../components/LabeledInput";

export function DishCreation({ newDish = false }) {
    
    return (
        <Container>

            <Header />           

            <Main>
                <BackButton id="back-button" />
                <SectionLabel title={ newDish ? "Adicionar prato" : "Editar prato" }/>
                <form>

                    <div id="form-section-1">
                        <UploadButton id="form-upload-button"
                            newDish={true}
                        />
                        <LabeledInput id="form-dish-name"
                            label={"Nome"}
                            placeholder={"Ex.: Salada Ceasar"}
                        />
                        <div id="form-category">
                            <h3>Categoria</h3>
                            <select id="form-category">
                                <option value={1}>Refeição</option>
                                <option value={2}>Sobremesa</option>
                                <option value={3}>Bebida</option>
                            </select>
                            <PiCaretDownBold />
                        </div>
                    </div>

                    <div id="form-section-2">
                        <div id="form-ingredients">
                            <h3>Ingredientes</h3>
                            <div id="ingredients-area">
                                <IngredientEditing name={"Pão Naan"} />
                                <IngredientEditing name={"Gergelim"} />
                                <IngredientEditing name={"Pão Naan"} />                                               
                                <IngredientEditing toAdd /> 
                            </div>                                               
                        </div>
                        <LabeledInput id="form-price"
                            label={"Preço"}
                            placeholder={"R$ 00,00"}
                        />
                    </div>                    
                    
                    <div id="form-description">
                        <h3>Descrição</h3>
                        <textarea                             
                            placeholder="Registre aqui uma descrição para o seu prato"
                        />
                    </div>

                    {newDish && 
                        <div id="form-buttons">
                            <Button 
                                title={"Salvar alterações"}
                                color={"tomato_400"}
                            />
                        </div>
                    }
                    {!newDish && 
                        <div id="form-buttons">
                            <Button 
                                title={"Excluir prato"}
                                color={"dark_800"}
                            />
                            <Button 
                                title={"Salvar alterações"}
                                color={"tomato_400"}
                            />
                        </div>
                    }
                        
                </form>

            </Main>

            <Footer />

        </Container>
    );
}