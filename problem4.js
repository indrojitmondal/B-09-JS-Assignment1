// Problem 04 : Make A Great Password
// let year= 1996;
// year= year.toString();
// console.log(typeof year);
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
const input=
{ name: "toky", birthYear: 200, siteName: "Facebook" }
    ;
const output= password(input);
console.log(output); 
