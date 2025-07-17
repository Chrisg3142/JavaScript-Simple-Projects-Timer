//write a javescript function called count vowels 
//takes string as input, returns number of vowels in the string
//should be case insenstive 

function countVowels(string){
    //list filled with vowels we will compare string against
    const vowels = ["a", "e", "i", "o", "u"];
    //setting counter, will increase if a vowel is within string
    let counter = 0;

    //making the string lowercase to compare against the vowel list
    string = string.toLowerCase();

    //first loop itirates through the string 
    for (let i = 0; i < string.length; i++){
        //second loop intirates through the list of vowels
        //compares the list of vowels to the string with index of i
        for (let k = 0; k < vowels.length-1; k++){
            if (string[i] === vowels[k]){
                //counter increase when string[i] is equal to a 
                //vowel in the vowels list 
                counter++;
            } else {
                continue;
            }

        }
    }
    return counter
}
let string = "tHere iS an apPle iN the apArtmEnt"
console.log(countVowels(string));