import { api } from "../../services/api";
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
    const [category, setCategory] = useState("refeição");
    const [price, setPrice] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [prevDishes, setPrevDishes] = useState([]);

    async function fetchProducts() {
        try {
            const response = await api.get("dishes", { withCredentials: true });
            const ProductNames = response.data.map((product) => product.title.toLowerCase())
            setPrevDishes(ProductNames)
        } catch(e) {
            if (e.response) {
                alert(e.response.data.message);
            } else {
                alert("Erro ao obter dados de produtos já cadastrados");
            }
        }        
    }    

    async function uploadProductImage(dishId) {
        if (imageFile) {
            const fileUploadForm = new FormData();
            fileUploadForm.append("image", imageFile); 
            
            try {
                await api.patch(`dishes/image/${dishId}`, 
                    fileUploadForm, 
                    {
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    }
                );            
            } catch(e) {
                if (e.response) {
                    alert(e.response.data.message);
                } else {
                    alert("Não foi possível gravar a imagem do novo produto.");
                }
            } 
        }
    }

    async function createProduct() {        
        await fetchProducts()  
        if (!isFormValidated()) {
            return
        }
        try {
            const response = await api.post("dishes", {
                title: title,
                category: category,
                description: description,
                ingredients: ingredients,
                price: price
            },
                { withCredentials: true }
            );
            const dishId = await response.data.dish_id;

            uploadProductImage(dishId);            
            window.location.reload();
            
        } catch(e) {
            if (e.response) {
                alert(e.response.data.message);
            } else {
                alert("Não foi possível registrar o novo produto.");
            }
        }               
    }

    async function handleProduct(event) {
        event.preventDefault();
        await createProduct();
        alert("Prato criado com sucesso!");
    }    

    function handleUploadPicture(event) {
        const file = event.target.files[0];
        setImageFile(file);
        console.log(file)
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
            alert("Atenção: são permitidos até 14 ingredientes por produto!");
        }
    }

    function handleRemoveIngredient(deletedIngredient) {
        setIngredients(prevState => prevState.filter(
            ingredient => ingredient !== deletedIngredient
        ));
    }

    function isFormValidated() {
        if (!title?.trim() || title.trim().length < 3) {
            alert("O produto precisa ter um nome válido com pelo menos três caracteres.");
            return false;
        }
        if (prevDishes.includes(title.toLowerCase())) {
            alert("Já existe outro produto cadastrado com este nome.");
            return false;
        }
        if (ingredients.length === 0) {
            alert("O produto precisa ter ao menos um ingrediente cadastrado.");
            return false;
        }
        if (!price || price < 1 || price > 100) {
            alert("O produto precisa ter um preço registrado com valor entre 1,00 e 99,99.");
            return false;
        }
        if (!imageFile) {
            const noImage = confirm("Você não selecionou nenhuma imagem para o produto. Deseja cadastrá-lo inicialmente sem uma foto associada?")
            if (!noImage) {
                return false;
            }
        }
        return true;
    }

    
    return (
        <Container>

            <Header />

            <Main>
                <BackButton id="back-button" />
                <SectionLabel
                    id={"main-label"}
                    title={newDish ? "Adicionar prato" : "Editar prato"}
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
                                <option value="refeição">Refeição</option>
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
                            onChange={e => setPrice(e.target.value)}
                        />
                    </div>

                    <div id="form-description">
                        <h3>Descrição</h3>
                        <textarea
                            value={description}
                            placeholder="Registre aqui uma descrição para o seu prato"
                            onChange={e => setDescription(e.target.value)}
                        />
                    </div>

                    {newDish &&
                        <div id="form-buttons">
                            <Button
                                title={"Salvar alterações"}
                                color={"tomato_400"}
                                onClick={handleProduct}
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
                                onClick={handleProduct}
                            />
                        </div>
                    }

                </form>

            </Main>

            <Footer />

        </Container>
    );
}