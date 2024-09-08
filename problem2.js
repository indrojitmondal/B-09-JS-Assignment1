// // Problem-02: Good Name , Bad Name
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
const output = checkName('Indrojit');
console.log(output);
