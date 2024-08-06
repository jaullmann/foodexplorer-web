import { PiCaretDownBold } from "react-icons/pi";
import { api } from "../../services/api";
import { useSearch } from "../../hooks/search";
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionLabel } from "../../components/SectionLabel";
import { formatStatus, formatDatetime } from "../../functions";
import { useNavigate } from "react-router-dom";

export function Orders() {
    const [data, setData] = useState(null);
    const [orderStatuses, setOrderStatuses] = useState({});
    const { handleInputValue } = useSearch();
    const navigate = useNavigate();
    const { user } = useAuth();
    const admin = user.role === "admin";

    function handleOrderDetails(orderId) {
        navigate(`/orders/${orderId}`)
    }

    async function updateOrderStatus(orderId, status) {
        try {
            await api.patch(`orders/${orderId}`, { status }, { withCredentials: true });
            setOrderStatuses(prevStatuses => ({
                ...prevStatuses,
                [orderId]: status,
            }));
        } catch (e) {
            alert("Não foi possível atualizar o status do pedido, tente mais tarde.");
        }
    }

    async function fetchOrders() {
        try {
            const response = await api.get(`/orders`, { withCredentials: true });
            setData(response.data);            
            const initialStatuses = {};
            response.data.forEach(order => {
                initialStatuses[order.order_id] = order.status;
            });                   
        } catch (e) {
            navigate("/notfound");
        }
    }

    useEffect(() => {
        fetchOrders();
        handleInputValue("");        
    }, [orderStatuses, navigate])

    return (
        <Container>
            <Header orderStatuses={orderStatuses} />
            {data && (
                <Main>
                    {data.length > 0 && <SectionLabel title={"Histórico de pedidos"} />}
                    {data.length > 0 && (
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
                                        {data.map(order => (
                                            <tr key={"tr-order-" + order.order_id}>
                                                <td key={"tr-order-status-" + order.order_id} className="tr-status">
                                                    {!admin && (
                                                        <div key={"tr-order-status-div-" + order.order_id} className="status-div">
                                                            <div className={"status-color " + order.status.toLowerCase()} />
                                                            <p>{formatStatus(order.status)}</p>
                                                        </div>
                                                    )}
                                                    {admin && 
                                                        <div className="status-select-div">
                                                            <div className={"status-color-select " + order.status.toLowerCase()} />
                                                            <select
                                                                value={orderStatuses[order.order_id] || order.status}
                                                                className="status-select"
                                                                onChange={e => updateOrderStatus(order.order_id, e.target.value)}
                                                            >
                                                                <option value={"pendente"}>Pendente</option>
                                                                <option value={"aprovado"}>Aprovado</option>
                                                                <option value={"preparando"}>Preparando</option>
                                                                <option value={"entregue"}>Entregue</option>
                                                                <option value={"cancelado"}>Cancelado</option>
                                                            </select>
                                                            <PiCaretDownBold className="select-caret-down" />
                                                        </div>
                                                    }
                                                </td>
                                                <td
                                                    key={"tr-order-id-" + order.order_id}
                                                    className="order-id"
                                                    onClick={() => handleOrderDetails(`${order.order_id}`)}
                                                >
                                                    {String(order.order_id).padStart(8, '0')}
                                                </td>
                                                <td
                                                    key={"tr-order-details-" + order.order_id}
                                                    className="details"
                                                    onClick={() => handleOrderDetails(`${order.order_id}`)}
                                                >
                                                    {order.details.map((details, index, list) => (
                                                        details.dish_amount + " x " + details.title + `${index === list.length - 1 ? "" : ", "}`
                                                    ))}
                                                </td>
                                                <td
                                                    key={"tr-order-datetime-" + order.order_id}
                                                    className="datetime"
                                                    onClick={() => handleOrderDetails(`${order.order_id}`)}
                                                >
                                                    {formatDatetime(order.ordered_at)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                    {data.length > 0 && (
                        <div id="mobile-table">
                            {data.map(order => (
                                <div
                                    key={"order-" + order.order_id}
                                    className="order-card"                                    
                                >
                                    <div 
                                        key={"order-header-" + order.order_id} 
                                        className="order-card-header"
                                        onClick={() => handleOrderDetails(`${order.order_id}`)}
                                    >
                                        <h3>{String(order.order_id).padStart(8, '0')}</h3>
                                        {
                                            !admin && 
                                            <div className="status-div">
                                                <div className={"status-color " + order.status.toLowerCase()} />
                                                <p>{formatStatus(order.status)}</p>
                                            </div>
                                        }                                        
                                        <h3>{formatDatetime(order.updated_at)}</h3>
                                    </div>
                                    <div 
                                        key={"order-details-" + order.order_id}
                                        onClick={() => handleOrderDetails(`${order.order_id}`)}
                                    >
                                        {order.details.map((details, index, list) => (
                                            details.dish_amount + " x " + details.title + `${index === list.length - 1 ? "" : ", "}`
                                        ))}
                                    </div>
                                    {admin && 
                                        <div className="status-select-div">
                                            <div className={"status-color-select " + order.status.toLowerCase()} />
                                            <select
                                                value={orderStatuses[order.order_id] || order.status}
                                                className="status-select"
                                                onChange={e => updateOrderStatus(order.order_id, e.target.value)}
                                            >
                                                <option value={"pendente"}>Pendente</option>
                                                <option value={"aprovado"}>Aprovado</option>
                                                <option value={"preparando"}>Preparando</option>
                                                <option value={"entregue"}>Entregue</option>
                                                <option value={"cancelado"}>Cancelado</option>
                                            </select>
                                            <PiCaretDownBold className="select-caret-down" />
                                        </div>
                                    }
                                </div>
                            ))}
                        </div>
                    )}
                    {data.length === 0 && <h1>Sem pedidos até o momento</h1>}
                </Main>
            )}
            <Footer />
        </Container>
    );
}
