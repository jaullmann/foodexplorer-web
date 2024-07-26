import { PiCaretDownBold } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
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

    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("refeicao");
    const [price, setPrice] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    const [imageFile, setImageFile] = useState(null);

    function handleUploadPicture(event) {
        const file = event.target.file;
        setImageFile(file);
    }

    function handleAddIngredient() {        
        if (ingredients.length < 15) {
          if (newIngredient.length < 3 || newIngredient.length > 20) {
            alert("Ingrediente deve possuir entre 3 e 20 caracteres.")
            setNewIngredient("");
          } else if ((ingredients.map(
                ingredient => ingredient.toLowerCase()))
                .includes(newIngredient.toLowerCase())
            ) {
            alert("Já existe um ingrediente com este nome associado ao produto.")
            setNewIngredient("");
          } else {
            setIngredients(prevState => [...prevState, newIngredient.toLowerCase()]);           
            setNewIngredient("");  
          }    
        } else {
          alert("Atenção: são permitidos até 14 ingredientes por produto!")
        }    
      }

    function handleRemoveIngredient(deletedIngredient) {
        setIngredients(prevState => prevState.filter(
            ingredient => ingredient !== deletedIngredient
        ));
    }
    
    return (
        <Container>

            <Header />           

            <Main>
                <BackButton id="back-button" />
                <SectionLabel 
                    id={"main-label"}
                    title={ newDish ? "Adicionar prato" : "Editar prato" }
                />
                <form>

                    <div id="form-section-1">
                        <UploadButton 
                            id="form-upload-button"
                            newDish={true}
                            onChange={handleUploadPicture}
                        />
                        <LabeledInput id="form-dish-title"
                            label={"Nome"}
                            placeholder={"Ex.: Salada Ceasar"}
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                        <div id="form-category">
                            <h3>Categoria</h3>
                            <select 
                                id="form-category"
                                value={category}
                                onChange={e => setCategory(e.target.value)}
                            >
                                <option value="refeicao">Refeição</option>
                                <option value="sobremesa">Sobremesa</option>
                                <option value="bebida">Bebida</option>
                            </select>
                            <PiCaretDownBold />
                        </div>
                    </div>

                    <div id="form-section-2">
                        <div id="form-ingredients">
                            <h3>Ingredientes</h3>
                            <div id="ingredients-area"> 
                                {
                                    ingredients.map((ingredient, index) => (
                                        <IngredientEditing 
                                            key={index}
                                            name={ingredient}                
                                            onClick={() => handleRemoveIngredient(ingredient)}
                                        /> 
                                    ))
                                }      
                                <div id="new-ingredient">                                        
                                    <input 
                                        type="text" 
                                        placeholder="Adicionar"
                                        value={newIngredient}
                                        onChange={e => setNewIngredient(e.target.value)}              
                                        />
                                        <FiPlus 
                                            onClick={handleAddIngredient}
                                        />
                                </div>
                            </div>                                               
                        </div>
                        <LabeledInput id="form-price"
                            label={"Preço"}
                            placeholder={"R$ 00,00"}
                            value={price}
                            currency
                            onChange={e => setPrice(e.target.value)}
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