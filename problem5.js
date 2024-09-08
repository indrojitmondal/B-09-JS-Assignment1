// Monthly Savings of a Freelancer

// function taxing(payment){
//     let tmp=payment;
//     payment= (payment*20)/100;
//    const income = tmp-payment;
//    return income; 
// }

function monthlySavings(arr,living_Cost){
   if(!Array.isArray(arr)){
    return 'invalid input';
   }
   else if( (isNaN(living_Cost)===true) || typeof living_Cost !=='number')
    {
        return 'invalid input';
    }
    let totalIncome=0;

    for (const item of arr) {
        if(item>=3000)
        {

            let itemTemp=item;
            let tmp=itemTemp;
        itemTemp= (itemTemp*20)/100;
        const income = tmp-itemTemp;
         

            totalIncome+=income;
        }
        else
        totalIncome+=item;
    }
    const savings = totalIncome - living_Cost;
    if(savings<0) {
        return 'earn more';
    }
    else
     return savings;
}

const profit=[ 1000 , 2000 , 3000 ] ;
const living_Cost= 5400 ;
const output = monthlySavings(profit, living_Cost);
console.log(output);