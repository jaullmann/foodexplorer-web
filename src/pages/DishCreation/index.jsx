import { PiPlus } from "react-icons/pi";
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

export function DishCreation({ newDish = true }) {
    
    return (
        <Container>

            <Header />           

            <Main>
                <BackButton id="back-button" />
                <SectionLabel title={ newDish ? "Adicionar prato" : "Editar prato" }/>
                <form id="dish-data">
                    <UploadButton id="form-upload-button" className="flex-item"
                        newDish={true}
                    />
                    <LabeledInput id="form-dish-name" className="flex-item"
                        label={"Nome"}
                        placeholder={"Ex.: Salada Ceasar"}
                    />
                    <LabeledInput id="form-category" className="flex-item"
                        label={"Categoria"}
                        placeholder={"Refeição"}
                    />
                    <div id="form-ingredients" className="flex-item">
                        <h3>Ingredientes</h3>
                        <div id="ingredients-area">
                            <IngredientEditing name={"Pão Naan"} />
                            <IngredientEditing name={"Gergelim"} />
                            <IngredientEditing toAdd /> 
                        </div>                                               
                    </div>
                    <LabeledInput id="form-price" className="flex-item"
                        label={"Preço"}
                        placeholder={"R$ 00,00"}
                    />
                    <div id="form-description" className="flex-item">
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