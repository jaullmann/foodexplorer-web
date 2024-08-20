import { api } from "../../services/api";
import { PiCaretDownBold } from "react-icons/pi";
import { PiCameraSlash } from "react-icons/pi";
import { FiPlus } from "react-icons/fi";
import { PiTrash } from "react-icons/pi";
import { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useAlerts } from "../../hooks/alerts";
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
    const [prevImageFile, setPrevImageFile] = useState(null);
    const [deletedImageFile, setDeletedImageFile] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [prevDishes, setPrevDishes] = useState([]);
    const [newDish, setNewDish] = useState(true);
    const [formFilled, setFormFilled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const { dishId } = useParams();
    const { showAlert } = useAlerts();
    const navigate = useNavigate();
    const location = useLocation();

    async function fetchProducts() {
        setIsLoading(true);
        try {
            const response = await api.get("dishes", { withCredentials: true });
            const ProductNames = response.data.map((product) => product.title.toLowerCase())
            setPrevDishes(ProductNames)
        } catch (e) {
            if (e.response) {
                showAlert({message: e.response.data.message});
            } else {
                showAlert({message: "Erro ao obter dados de produtos já cadastrados."});
            }
        } finally {
            setIsLoading(false);
        }
    }

    async function fetchEditingProduct() {
        setIsLoading(true);
        try {
            const response = await api.get(`dishes/${dishId}`, { withCredentials: true });
            setTitle(response.data.title);
            setCategory(response.data.category);
            setIngredients(response.data.ingredients);
            setDescription(response.data.description);
            setPrice(response.data.price * 100);
            setPrevImageFile(response.data.image_file);            
        } catch (e) {
            if (e.response) {
                showAlert({message: e.response.data.message});
            } else {
                showAlert({message: "Erro ao obter dados do produto."});
            }
        } finally {
            setIsLoading(false);
        }
    }

    async function uploadProductImage(dishId) {
        if (imageFile) {
            const fileUploadForm = new FormData();
            fileUploadForm.append("image", imageFile);

            setIsLoading(true);           
            try {
                await api.patch(`pictures/${dishId}`,
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
                    showAlert({message: e.response.data.message});
                } else {
                    showAlert({message: "Não foi possível gravar a imagem do novo produto."});
                }
            } finally {
                setIsLoading(false);
            }
        }
    }

    async function deleteProductImage() {
        setIsLoading(true);
        try {
            await api.delete("pictures", {
                data: {
                    image_file: deletedImageFile || prevImageFile
                },
                withCredentials: true
            });
        } catch (e) {
            if (e.response) {
                showAlert({message: e.response.data.message});
            } else {
                showAlert({message: "Erro ao excluir imagem da base de dados"});
            }
        } finally {
            setIsLoading(false);
        }
    }

    async function createProduct() {       
        await fetchProducts()
        if (!isFormValidated()) {
            return false;
        }

        setIsLoading(true);
        try {
            const response = await api.post("dishes",
                {
                    title: title,
                    category: category,
                    description: description,
                    ingredients: ingredients,
                    price: Number(price) / 100
                },
                {
                    withCredentials: true
                }
            );
            const dishId = await response.data.dish_id;
            
            imageFile && uploadProductImage(dishId);
            clearForm()
            return true;

        } catch (e) {
            if (e.response) {
                showAlert({message: e.response.data.message});
            } else {
                showAlert({message: "Não foi possível registrar o novo produto."});
            }
            return false;
        } finally {
            setIsLoading(false);
        }
    }

    async function updateProduct() {
        await fetchProducts()
        if (!isFormValidated()) {
            return false;
        }
        try {             
            if ((!imageFile && !prevImageFile) || (imageFile && deletedImageFile)) {
                deleteProductImage();
            }
            setIsLoading(true);
            await api.put(`dishes/${dishId}`, {
                title: title,
                category: category,
                description: description,
                ingredients: ingredients,
                price: Number(price) / 100,
                image_file: `${deletedImageFile ? "" : prevImageFile}`
            },
                { withCredentials: true }
            );
            uploadProductImage(dishId);              
            return true;
        } catch (e) {
            if (e.response) {
                showAlert({message: e.response.data.message});
            } else {
                showAlert({message: "Não foi possível atualizar os dados do produto."});
            }
            return false;
        } finally {
            setIsLoading(false);
        }
    }

    async function deleteProduct(event) {
        event.preventDefault();
        const message = title
            ? `Deseja realmente excluir o produto "${title}"? \nTodos os dados serão perdidos.`
            : `Deseja realmente excluir o produto? \nTodos os dados serão perdidos.`;

        const isConfirmed = confirm(message);
        if (!isConfirmed) {
            return;
        }
        
        setIsLoading(true);
        try {
            await api.delete(`dishes/${dishId}`, { withCredentials: true });
            prevImageFile && deleteProductImage();
            showAlert({message: "Produto excluído com sucesso!"});
            return navigate("/");
        } catch (e) {
            if (e.response) {
                return showAlert({message: e.response.data.message});
            } else {
                return showAlert({message: "Não foi possível fazer a exclusão do produto."});
            }
        } finally {
            setIsLoading(false);
        }
    };

    async function handleProduct(event) {
        event.preventDefault();
        if (newDish) {
            const productCreated = await createProduct();
            productCreated && showAlert({message: "Produto criado com sucesso!", type: "info", buttonMessage: "OK"});
        } else {
            const productUpdated = await updateProduct();
            if (productUpdated) {
                showAlert({message: "Produto atualizado com êxito!", type: "info", buttonMessage: "OK"});
                navigate(-1);
            }
        }

    }

    function handleUploadPicture(event) {
        const file = event.target.files[0];
        setImageFile(file);

        const imagePreview = URL.createObjectURL(file);
        setImageUrl(imagePreview);
    }

    function deleteCurrentPicture() {
        setDeletedImageFile(prevImageFile);
        setPrevImageFile(null);
        setImageFile(null);
        setImageUrl(null);
    }

    function handleAddIngredient(event) {
        if (event.key && event.key !== 'Enter' && event.button !== 0) {
            return
        }
        if (ingredients.length < 15) {
            if (newIngredient.length < 3 || newIngredient.length > 24) {
                showAlert({message: "Ingrediente deve possuir entre 3 e 20 caracteres.", type: "warning"})
                setNewIngredient("");
            } else if ((ingredients.map(
                ingredient => ingredient.toLowerCase()))
                .includes(newIngredient.toLowerCase())
            ) {
                showAlert({message: "Já existe um ingrediente com este nome associado ao produto.", type: "warning"})
                setNewIngredient("");
            } else {
                setIngredients(prevState => [...prevState, newIngredient.toLowerCase()]);
                setNewIngredient("");
            }
        } else {
            showAlert({message: "Atenção: são permitidos até 14 ingredientes por produto!", type: "warning"});
        }
    }

    function handleRemoveIngredient(deletedIngredient) {
        setIngredients(prevState => prevState.filter(
            ingredient => ingredient !== deletedIngredient
        ));
    }

    function isFormValidated() {
        if (!title?.trim() || title.trim().length < 3) {
            showAlert({message: "O produto precisa ter um nome válido com pelo menos três caracteres.", type: "warning"});
            return false;
        }
        if (prevDishes.includes(title.toLowerCase()) && newDish) {
            showAlert({message: "Já existe outro produto cadastrado com este nome.", type: "warning"});
            return false;
        }
        if (ingredients.length === 0) {
            showAlert({message: "Necessário cadastrar ao menos um ingrediente para o produto.", type: "warning"});
            return false;
        }
        if (!price || price / 100 < 1 || price / 100 > 100) {
            showAlert({message: "Necessário informar um valor entre 1,00 e 99,99.", type: "warning"});
            return false;
        }
        if (!description || description.trim().length < 8 || description.length > 500) {
            showAlert({message: "Descrição do produto deve possuir entre 8 e 500 caracteres.", type: "warning"});
            return false;
        }
        if (!imageFile && !prevImageFile) {
            const noImage = confirm(
                "Você não selecionou nenhuma imagem para o produto." +
                "\nDeseja salvar assim mesmo?"
            )
            if (!noImage) {
                return false;
            }
        }
        return true;
    }

    function checkFormFilled() {
        const validTitle = Boolean(title);
        const validPrice = Boolean(price) && price > 0;
        const validDescription = Boolean(description);
        setFormFilled(validTitle && validPrice && validDescription);
    }

    function clearForm() {
        setTitle("");
        setNewDish(true);
        setTitle("");
        setCategory("refeicao");
        setPrice("");
        setIngredients([]);
        setNewIngredient("");
        setDescription("");
        setImageFile(null);
        setPrevImageFile(null);
        setImageUrl(null);        
    }

    useEffect(() => {
        if (dishId) {
            setNewDish(false);
            fetchEditingProduct();
        } else {
            clearForm();
        }       

    }, [dishId, location.key]);

    useEffect(() => {
        checkFormFilled();
    }, [title, price, description])


    return (
        <Container>

            <Header isLoading={isLoading}/>

            <Main>
                <BackButton id="back-button" />
                <SectionLabel
                    id={"main-label"}
                    title={newDish ? "Adicionar produto" : "Editar produto"}
                />
                <form>                  

                    <div id="form">

                        <div id="product-image">
                            { 
                                (imageUrl || prevImageFile) &&
                                <>
                                    <img
                                        src={imageUrl ? imageUrl : `${api.defaults.baseURL}/files/${prevImageFile}`}
                                        alt="Foto do prato"
                                    />
                                    <PiTrash 
                                        id="delete-img-btn"
                                        onClick={deleteCurrentPicture} 
                                    />
                                </>                                
                            }
                            {
                                (!imageUrl && !prevImageFile) &&
                                <PiCameraSlash id="placeholder" />                                
                            }                            
                        </div>

                        <div id="form-fields">
                            <div id="form-section-1">
                                <UploadButton
                                    id="form-upload-button"
                                    newDish={newDish}
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
                                        id="form-category-select"
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
                                                onKeyDown={handleAddIngredient}
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
                        </div>
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
                                disabled={!formFilled}
                                title={"Salvar alterações"}
                                color={formFilled ? "tomato_200" : "tomato_400"}
                                onClick={handleProduct}
                            />
                        </div>
                    }
                    {!newDish &&
                        <div id="form-buttons">
                            <Button
                                title={"Excluir produto"}
                                color={"light_700"}
                                onClick={deleteProduct}
                            />
                            <Button
                                disabled={!formFilled}
                                title={newDish ? "Salvar" : "Salvar alterações"}
                                color={formFilled ? "tomato_200" : "tomato_400"}
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
