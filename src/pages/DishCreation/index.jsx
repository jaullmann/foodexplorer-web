import { api } from "../../services/api";
import { PiCaretDownBold } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Button } from "../../components/Button";
import { BackButton } from "../../components/BackButton";
import { IngredientEditing } from "../../components/IngredientEditing";
import { SectionLabel } from "../../components/SectionLabel";
import { UploadButton } from "../../components/UploadButton";
import { LabeledInput } from "../../components/LabeledInput";
import { LabeledCurrencyInput } from "../../components/LabeledCurrencyInput";

export function DishCreation() {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("refeição");
    const [price, setPrice] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    const [description, setDescription] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [prevDishes, setPrevDishes] = useState([]);
    const [newDish, setNewDish] = useState(true);
    const { dishId } = useParams();
    const navigate = useNavigate();

    async function fetchProducts() {
        try {
            const response = await api.get("dishes", { withCredentials: true });
            const ProductNames = response.data.map((product) => product.title.toLowerCase())
            setPrevDishes(ProductNames)
        } catch (e) {
            if (e.response) {
                alert(e.response.data.message);
            } else {
                alert("Erro ao obter dados de produtos já cadastrados.");
            }
        }
    }

    async function fetchEditingProduct() {
        try {
            const response = await api.get(`dishes/${dishId}`, { withCredentials: true });
            setTitle(response.data.title);
            setCategory(response.data.category);
            setIngredients(response.data.ingredients);
            setDescription(response.data.description);
            setPrice(response.data.price * 100);
        } catch (e) {
            if (e.response) {
                alert(e.response.data.message);
            } else {
                alert("Erro ao obter dados do produto.");
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
            } catch (e) {
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
            return false;
        }
        try {
            const response = await api.post("dishes", {
                title: title,
                category: category,
                description: description,
                ingredients: ingredients,
                price: Number(price)/100
            },
                { withCredentials: true }
            );
            const dishId = await response.data.dish_id;

            imageFile && uploadProductImage(dishId);
            window.location.reload();
            return true;

        } catch (e) {
            if (e.response) {
                alert(e.response.data.message);
            } else {
                alert("Não foi possível registrar o novo produto.");
            }
            return false;
        }
    }

    async function updateProduct() {
        await fetchProducts()
        if (!isFormValidated()) {
            return false;
        }
        try {
            await api.put(`dishes/${dishId}`, {
                title: title,
                category: category,
                description: description,
                ingredients: ingredients,
                price: Number(price)/100
            },
                { withCredentials: true }
            );    

            imageFile && uploadProductImage(dishId);            
            return true;

        } catch (e) {
            if (e.response) {
                alert(e.response.data.message);
            } else {
                alert("Não foi possível atualizar os dados do produto.");
            }
            return false;
        }
    }

    async function handleProduct(event) {
        event.preventDefault();
        if (newDish) {
            const productCreated = await createProduct();
            productCreated && alert("Produto criado com sucesso!");
        } else {
            const productUpdated = await updateProduct();
            if (productUpdated) {
                alert("Produto atualizado com êxito!");
                navigate(-1);
            }             
        }

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
        if (prevDishes.includes(title.toLowerCase()) && newDish) {
            alert("Já existe outro produto cadastrado com este nome.");
            return false;
        }
        if (ingredients.length === 0) {
            alert("Necessário cadastrar ao menos um ingrediente para o produto.");
            return false;
        }
        if (!price || price / 100 < 1 || price / 100 > 100) {
            alert("Necessário informar um valor entre 1,00 e 99,99.");
            return false;
        }
        if (!description || description.trim().length < 3 || description.length > 500) {
            alert("Necessário registrar uma descrição ao produto com até 500 caracteres.");
            return false;
        }
        if (!imageFile && newDish) {
            const noImage = confirm("Você não selecionou nenhuma imagem para o produto. Deseja cadastrá-lo inicialmente sem uma foto associada?")
            if (!noImage) {
                return false;
            }
        }
        return true;
    }

    useEffect(() => {
        if (dishId) {
            setNewDish(false);
            fetchEditingProduct();
        }
    }, [navigate])


    return (
        <Container>

            <Header />

            <Main>
                <BackButton id="back-button" />
                <SectionLabel
                    id={"main-label"}
                    title={newDish ? "Adicionar produto" : "Editar produto"}
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
                        <LabeledCurrencyInput
                            id="form-price"
                            label={"Preço"}
                            placeholder={"R$ 00,00"}
                            value={price}
                            onChange={setPrice}
                        />
                    </div>

                    <div id="form-description">
                        <h3>Descrição</h3>
                        <textarea
                            value={description}
                            placeholder="Registre aqui uma descrição para o seu produto"
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
                                title={"Excluir produto"}
                                color={"dark_800"}
                            />
                            <Button
                                title={newDish ? "Salvar" : "Salvar alterações"}
                                color={"tomato_200"}
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
