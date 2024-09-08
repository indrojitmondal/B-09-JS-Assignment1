// Problem 03 : Virus in my Array
function deleteInvalids(arr)
{
    if(!Array.isArray(arr)) return 'Invalid Array';
    const newArray= arr.filter(num => (isNaN(num)===false && typeof num ==='number') );
    return newArray;
}
const output = deleteInvalids({num: [ 1 , 2 , 3 ]});
console.log(output);
