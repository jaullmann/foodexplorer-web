import { useState, useEffect } from "react";
import { Container, Main } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SectionLabel } from "../../components/SectionLabel";

export function Orders(){

    function formatStatus(orderStatus) {
        return orderStatus.charAt(0).toUpperCase() + orderStatus.slice(1);
    }

    function formatDatetime(timestamp) {
        const date = new Date(timestamp);
        const day = date.getDate();
        const month = date.getMonth() + 1; 
        const year = date.getFullYear();
        const hour = date.getHours();
        const minute = date.getMinutes();
    
        const formattedDate = `${String(day).padStart(2, '0')}/${String(month).padStart(2, '0')}/${String(year).padStart(2, '0')}`;
        const formattedTime = `${String(hour).padStart(2, '0')}h${String(minute).padStart(2, '0')}`;
    
        return `${formattedDate} às ${formattedTime}`;
    }

    // data sample 
    const userOrders = [
        {
            "order_id": 4,
            "user_id": 1,
            "payment_method": "pix",
            "status": "pendente",
            "ordered_at": "2024-04-29 23:34:05",
            "updated_at": "2024-04-06 04:03:23",
            "details": [                
                {
                    "order_id": 4,
                    "dish_id": 3,
                    "title": "Espaguete à Bolonhesa",
                    "dish_amount": 3,
                    "dish_price_paid": 22.9
                },                
                {
                    "order_id": 5,
                    "dish_id": 1,
                    "title": "Lasanha de Frango",
                    "dish_amount": 1,
                    "dish_price_paid": 21.9
                },
                {
                    "order_id": 5,
                    "dish_id": 2,
                    "title": "Lasanha de Carne",
                    "dish_amount": 1,
                    "dish_price_paid": 22.9
                },
                {
                    "order_id": 5,
                    "dish_id": 5,
                    "title": "Espaguete ao Alho e Óleo",
                    "dish_amount": 4,
                    "dish_price_paid": 23.9
                },
                {
                    "order_id": 5,
                    "dish_id": 5,
                    "title": "Espaguete ao Alho e Óleo",
                    "dish_amount": 4,
                    "dish_price_paid": 23.9
                }
            ]
        },
        {
            "order_id": 5,
            "user_id": 1,
            "payment_method": "crédito",
            "status": "preparando",
            "ordered_at": "2024-04-29 23:34:05",
            "updated_at": "2024-04-30 04:03:23",
            "details": [
                {
                    "order_id": 5,
                    "dish_id": 1,
                    "title": "Lasanha de Beringela",
                    "dish_amount": 1,
                    "dish_price_paid": 22.9
                },
                {
                    "order_id": 5,
                    "dish_id": 3,
                    "title": "Espaguete à Putanesca",
                    "dish_amount": 4,
                    "dish_price_paid": 25.9
                }
            ]
        },
        {
            "order_id": 6,
            "user_id": 1,
            "payment_method": "crédito",
            "status": "entregue",
            "ordered_at": "2024-04-29 23:34:05",
            "updated_at": "2024-04-30 04:03:23",
            "details": [
                {
                    "order_id": 5,
                    "dish_id": 1,
                    "title": "Lasanha de Frango",
                    "dish_amount": 1,
                    "dish_price_paid": 21.9
                },
                {
                    "order_id": 5,
                    "dish_id": 2,
                    "title": "Lasanha de Carne",
                    "dish_amount": 1,
                    "dish_price_paid": 22.9
                },
                {
                    "order_id": 5,
                    "dish_id": 5,
                    "title": "Espaguete ao Alho e Óleo",
                    "dish_amount": 4,
                    "dish_price_paid": 23.9
                }
            ]
        },
        {
            "order_id": 7,
            "user_id": 1,
            "payment_method": "crédito",
            "status": "entregue",
            "ordered_at": "2024-04-29 23:34:05",
            "updated_at": "2024-04-30 04:03:23",
            "details": [
                {
                    "order_id": 5,
                    "dish_id": 1,
                    "title": "Lasanha de Frango",
                    "dish_amount": 1,
                    "dish_price_paid": 21.9
                },
                {
                    "order_id": 5,
                    "dish_id": 2,
                    "title": "Lasanha de Carne",
                    "dish_amount": 1,
                    "dish_price_paid": 22.9
                },
                {
                    "order_id": 5,
                    "dish_id": 5,
                    "title": "Espaguete ao Alho e Óleo",
                    "dish_amount": 4,
                    "dish_price_paid": 23.9
                },
                {
                    "order_id": 5,
                    "dish_id": 1,
                    "title": "Lasanha de Frango",
                    "dish_amount": 1,
                    "dish_price_paid": 21.9
                },
                {
                    "order_id": 5,
                    "dish_id": 2,
                    "title": "Lasanha de Carne",
                    "dish_amount": 1,
                    "dish_price_paid": 22.9
                },
                {
                    "order_id": 5,
                    "dish_id": 5,
                    "title": "Espaguete ao Alho e Óleo",
                    "dish_amount": 4,
                    "dish_price_paid": 23.9
                }
            ]
        },
        {
            "order_id": 8,
            "user_id": 1,
            "payment_method": "crédito",
            "status": "entregue",
            "ordered_at": "2024-04-29 23:34:05",
            "updated_at": "2024-04-30 04:03:23",
            "details": [
                {
                    "order_id": 5,
                    "dish_id": 1,
                    "title": "Lasanha de Frango",
                    "dish_amount": 1,
                    "dish_price_paid": 21.9
                },
                {
                    "order_id": 5,
                    "dish_id": 2,
                    "title": "Lasanha de Carne",
                    "dish_amount": 1,
                    "dish_price_paid": 22.9
                },
                {
                    "order_id": 5,
                    "dish_id": 5,
                    "title": "Espaguete ao Alho e Óleo",
                    "dish_amount": 4,
                    "dish_price_paid": 23.9
                }
            ]
        },
        {
            "order_id": 9,
            "user_id": 1,
            "payment_method": "crédito",
            "status": "entregue",
            "ordered_at": "2024-04-29 23:34:05",
            "updated_at": "2024-04-30 04:03:23",
            "details": [
                {
                    "order_id": 5,
                    "dish_id": 1,
                    "title": "Lasanha de Frango",
                    "dish_amount": 1,
                    "dish_price_paid": 21.9
                },
                {
                    "order_id": 5,
                    "dish_id": 2,
                    "title": "Lasanha de Carne",
                    "dish_amount": 1,
                    "dish_price_paid": 22.9
                },
                {
                    "order_id": 5,
                    "dish_id": 5,
                    "title": "Espaguete ao Alho e Óleo",
                    "dish_amount": 4,
                    "dish_price_paid": 23.9
                },
                {
                    "order_id": 5,
                    "dish_id": 1,
                    "title": "Lasanha de Frango",
                    "dish_amount": 1,
                    "dish_price_paid": 21.9
                },
                {
                    "order_id": 5,
                    "dish_id": 2,
                    "title": "Lasanha de Carne",
                    "dish_amount": 1,
                    "dish_price_paid": 22.9
                },
                {
                    "order_id": 5,
                    "dish_id": 5,
                    "title": "Espaguete ao Alho e Óleo",
                    "dish_amount": 4,
                    "dish_price_paid": 23.9
                },
                {
                    "order_id": 5,
                    "dish_id": 1,
                    "title": "Lasanha de Frango",
                    "dish_amount": 1,
                    "dish_price_paid": 21.9
                }                
            ]
        },
        {
            "order_id": 10,
            "user_id": 1,
            "payment_method": "crédito",
            "status": "entregue",
            "ordered_at": "2024-04-29 23:34:05",
            "updated_at": "2024-04-30 04:03:23",
            "details": [
                {
                    "order_id": 5,
                    "dish_id": 1,
                    "title": "Lasanha de Frango",
                    "dish_amount": 1,
                    "dish_price_paid": 21.9
                },
                {
                    "order_id": 5,
                    "dish_id": 2,
                    "title": "Lasanha de Carne",
                    "dish_amount": 1,
                    "dish_price_paid": 22.9
                },
                {
                    "order_id": 5,
                    "dish_id": 5,
                    "title": "Espaguete ao Alho e Óleo",
                    "dish_amount": 4,
                    "dish_price_paid": 23.9
                },
                {
                    "order_id": 5,
                    "dish_id": 1,
                    "title": "Lasanha de Frango",
                    "dish_amount": 1,
                    "dish_price_paid": 21.9
                },
                {
                    "order_id": 5,
                    "dish_id": 2,
                    "title": "Lasanha de Carne",
                    "dish_amount": 1,
                    "dish_price_paid": 22.9
                },
                {
                    "order_id": 5,
                    "dish_id": 5,
                    "title": "Espaguete ao Alho e Óleo",
                    "dish_amount": 4,
                    "dish_price_paid": 23.9
                }
            ]
        },
        {
            "order_id": 11,
            "user_id": 1,
            "payment_method": "crédito",
            "status": "entregue",
            "ordered_at": "2024-04-29 23:34:05",
            "updated_at": "2024-04-30 04:03:23",
            "details": [
                {
                    "order_id": 5,
                    "dish_id": 1,
                    "title": "Lasanha de Frango",
                    "dish_amount": 1,
                    "dish_price_paid": 21.9
                },
                {
                    "order_id": 5,
                    "dish_id": 2,
                    "title": "Lasanha de Carne",
                    "dish_amount": 1,
                    "dish_price_paid": 22.9
                },
                {
                    "order_id": 5,
                    "dish_id": 5,
                    "title": "Espaguete ao Alho e Óleo",
                    "dish_amount": 4,
                    "dish_price_paid": 23.9
                },
                {
                    "order_id": 5,
                    "dish_id": 1,
                    "title": "Lasanha de Frango",
                    "dish_amount": 1,
                    "dish_price_paid": 21.9
                },
                {
                    "order_id": 5,
                    "dish_id": 2,
                    "title": "Lasanha de Carne",
                    "dish_amount": 1,
                    "dish_price_paid": 22.9
                },
                {
                    "order_id": 5,
                    "dish_id": 5,
                    "title": "Espaguete ao Alho e Óleo",
                    "dish_amount": 4,
                    "dish_price_paid": 23.9
                }
            ]
        }
    ]

    return(
        <Container>

            <Header />

            <Main>

                <SectionLabel title={"Histórico de pedidos"} />

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
                                userOrders.map((order) => (
                                    <tr 
                                        key={"tr-order-" + order.order_id}
                                        onClick={undefined}
                                    >
                                        <td 
                                            key={"tr-order-status-" + order.order_id}
                                            className="status"
                                        >
                                            <div 
                                                key={"tr-order-status-div-" + order.order_id}
                                                className="status-div"
                                            >
                                                <div className={"status-color " + order.status.toLowerCase()}/>
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
                                                    ${index == list.length-1 ? "" : ", "}`
                                                ))
                                            }
                                        </td>
                                        <td 
                                            key={"tr-order-datetime-" + order.order_id}
                                            className="datetime"
                                        >
                                            {formatDatetime(order.updated_at)}
                                        </td>
                                    </tr>   
                                ))
                            }
                                                   
                        </tbody>
                    </table>
                </div>
                
                <div id="mobile-table">
                    {
                        userOrders.map((order) => (
                            <div 
                                key={"order-" + order.order_id}
                                className="order-card"
                            >

                                <div 
                                    key={"order-header-" + order.order_id}
                                    className="order-card-header"
                                >
                                    <h3>{String(order.order_id).padStart(8, '0')}</h3>
                                    <div className="status-div">
                                        <div className={"status-color " + order.status.toLowerCase()}/>
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
                                            ${index == list.length-1 ? "" : ", "}`
                                        ))
                                    }
                                </div> 

                            </div>                              
                        ))
                    }
                </div>

            </Main>

            <Footer />

        </Container>
    )
}