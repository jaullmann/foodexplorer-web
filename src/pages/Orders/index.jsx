import { api } from "../../services/api";
import { useSearch } from "../../hooks/search";
import { useState, useEffect } from "react";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionLabel } from "../../components/SectionLabel";
import { formatStatus, formatDatetime } from "../../functions";
import { useNavigate } from "react-router-dom";

export function Orders() {

    const [data, setData] = useState(null);
    const { handleInputValue } = useSearch();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchOrders() {
            try {
                const response = await api.get(`/orders`, { withCredentials: true });
                setData(response.data);                
            } catch (e) {
                return navigate("/notfound");
            }
        }

        fetchOrders();
        handleInputValue("");        
    }, []);

    function handleOrderDetails(orderId) {
        navigate(`/orders/${orderId}`)
    }

    return (

        <Container>

            <Header />

            {
                data &&
                <Main>

                    {
                        data.length > 0 &&
                        <SectionLabel title={"Histórico de pedidos"}/>  
                    }    

                        {
                            data.length > 0 &&
                            <div id="desktop-table-fr">
                                <div id="desktop-table">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th id="th-status">Status</th>
                                                <th id="th-order-id">Código</th>
                                                <th id="th-detail">Detalhamento</th>
                                                <th id="th-timestamp">Data e hora</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data.map((order) => (
                                                    <tr
                                                        key={"tr-order-" + order.order_id}
                                                        onClick={() => handleOrderDetails(`${order.order_id}`)}
                                                    >
                                                        <td
                                                            key={"tr-order-status-" + order.order_id}
                                                            className="status"
                                                        >
                                                            <div
                                                                key={"tr-order-status-div-" + order.order_id}
                                                                className="status-div"
                                                            >
                                                                <div className={"status-color " + order.status.toLowerCase()} />
                                                                <p>{formatStatus(order.status)}</p>
                                                            </div>
                                                        </td>
                                                        <td
                                                            key={"tr-order-id-" + order.order_id}
                                                            className="order-id"
                                                        >
                                                            {String(order.order_id).padStart(8, '0')}
                                                        </td>
                                                        <td
                                                            key={"tr-order-details-" + order.order_id}
                                                            className="details"
                                                        >
                                                            {
                                                                order.details.map((details, index, list) => (
                                                                    details.dish_amount +
                                                                    " x " +
                                                                    details.title + `
                                                                    ${index == list.length - 1 ? "" : ", "}`
                                                                ))
                                                            }
                                                        </td>
                                                        <td
                                                            key={"tr-order-datetime-" + order.order_id}
                                                            className="datetime"
                                                        >
                                                            {formatDatetime(order.ordered_at)}
                                                        </td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        }                 

                        {
                            data.length > 0 &&
                            <div id="mobile-table">
                                {
                                    data.map((order) => (
                                        <div
                                            key={"order-" + order.order_id}
                                            className="order-card"
                                            onClick={() => handleOrderDetails(`${order.order_id}`)}
                                        >

                                            <div
                                                key={"order-header-" + order.order_id}
                                                className="order-card-header"
                                            >
                                                <h3>{String(order.order_id).padStart(8, '0')}</h3>
                                                <div className="status-div">
                                                    <div className={"status-color " + order.status.toLowerCase()} />
                                                    <p>{formatStatus(order.status)}</p>
                                                </div>
                                                <h3>{formatDatetime(order.updated_at)}</h3>
                                            </div>

                                            <div key={"order-details-" + order.order_id}>
                                                {
                                                    order.details.map((details, index, list) => (
                                                        details.dish_amount +
                                                        " x " +
                                                        details.title + `
                                                        ${index == list.length - 1 ? "" : ", "}`
                                                    ))
                                                }
                                            </div>

                                        </div>
                                    ))
                                }
                            </div>
                        }                                        

                {
                    data.length===0 &&                    
                    <h1>Sem pedidos até o momento</h1>
                }

                </Main>
            }

            <Footer />

        </Container>
    )
}