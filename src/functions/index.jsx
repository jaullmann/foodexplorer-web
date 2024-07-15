export function formatCurrency(number) {
    const formattedNumber = number.toFixed(2);
    const parts = formattedNumber.split('.');
    return `R$ ${parts[0]},${parts[1]}`;
}

export function formatStatus(orderStatus) {
    return orderStatus.charAt(0).toUpperCase() + orderStatus.slice(1);
}

export function formatDatetime(datetime) {
    const date = new Date(datetime);
    const day = date.getDate();
    const month = date.getMonth() + 1; 
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();

    const formattedDate = `${String(day)
        .padStart(2, '0')}/${String(month)
            .padStart(2, '0')}/${String(year)
                .padStart(2, '0')}`;
    const formattedTime = `${String(hour)
        .padStart(2, '0')}h${String(minute)
            .padStart(2, '0')}`;

    return `${formattedDate} às ${formattedTime}`;
}