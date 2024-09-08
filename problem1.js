// : Help The Zoo Manager
function calculateMoney(ticket_sell)
{
    if(ticket_sell < 0) return 'Invalid Number';

    const oboSisto=( ticket_sell * 120) - ( 500 + (8 * 50) );
    return oboSisto;
}
const output=calculateMoney(-130);
console.log(output);