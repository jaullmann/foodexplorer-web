export function formatCurrency(number) {
    const formattedNumber = number.toFixed(2);
    const parts = formattedNumber.split('.');
    return `R$ ${parts[0]},${parts[1]}`;
}