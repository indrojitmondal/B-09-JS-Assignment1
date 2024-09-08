function calculateMoney(ticket_sell)
{
    if(ticket_sell < 0) return 'Invalid Number';

    const oboSisto=( ticket_sell * 120) - ( 500 + (8 * 50) );
    return oboSisto;
}
function checkName(str){
   
    if(typeof str !=='string' ){
    return 'Invalid'
     }
    const l=str.length;
   const x=str[l-1].toLowerCase();
   if(x==='a' || x==='e' || x==='i' || x==='o' || x==='u' || x==='w')
    {
         return 'Good Name';
     }
    else return 'Bad Name';
}
function deleteInvalids(arr)
{
    if(!Array.isArray(arr)) return 'Invalid Array';
    const newArray= arr.filter(num => (isNaN(num)===false && typeof num ==='number') );
    return newArray;
}
function password(input){
    const strK=Object.keys(input);
    const strV=Object.values(input);
    //  console.log(strK);
    let year=input.birthYear;
    year= year.toString();
    //  console.log(strK.length);
    //  console.log(strK[0], strK[1], strK[2], year.length);
   if( (strK.length<3) || strK[0]!=='name' || strK[1]!=='birthYear' || strK[2]!=='siteName' || year.length!==4) 
    {

      return 'invalid';
    }
    let str2=input.siteName;
    let passWord=str2[0].toUpperCase() + str2.slice(1);
    passWord+='#'
    passWord+=input.name;
    passWord+='@';
    passWord+=input.birthYear;

    return passWord;

    

}
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



