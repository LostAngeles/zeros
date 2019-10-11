module.exports = function zeros(expression) {
      
    // for answer
    let answer = 0;
    // total amount of factorials
    let totalAmountFac = 0;
    // is Fac uneven?
    let isFacUneven = 0;
    // for determining type of factorial
    let element = [];
    let type = 0;
    // for array of factorials separated by *
    let factorials = [];
    factorials = expression.split('*');
    // determine the type for each
    for (let i = 0; i < factorials.length; i++) {    //  for each factorial
        element = factorials[i].split('');           //  each factorial as element of number and "!"
        for (let j = 0; j < element.length; j++) {   //  determine amount of "!"
            if (element[j] == "!"){
                type++;                              //  determine amount of "!";
            }
        }
        totalAmountFac++;        
        switch (type) {
            case 1: 
            answer = answer + one(element);
            break;   

            case 2: 
            answer = answer + two(element);
            break;                     
        }
        type = 0;
    }

    // accessory

    function one (element) {
        let tempString = [];
        let tempNumber = 0;
        let result = 0;

        for (let k = 0; k < element.length; k++) {    // remove ! sign
            if (element[k] != "!"){
                tempString[k] = element[k];                                          
            }
        }
        
        tempNumber = Number(tempString.join(""));       // calculating answer
        while (tempNumber > 0) {
            tempNumber = tempNumber / 5;
            result = Math.floor(result + tempNumber);
        }
        return result;
    }

    function two (element) {
        let secondTempString = [];
        let secondTempNumber = 0;
        let secondResult = 0;

        for (let k = 0; k < element.length; k++) {      // remove ! sign
            if (element[k] != "!"){
                secondTempString[k] = element[k];                                          
            }
        } 

        secondTempNumber = Number(secondTempString.join(""));  // divided functions by even and non uneven
        if (secondTempNumber % 2 == 0) return even(secondTempString);
        else {
            isFacUneven++;            
            return uneven(secondTempString);
        }
    }

    function even (secondTempNumber) {
        let evenFac = Number(secondTempNumber.join(""));
        let evenArray = [];
        let counter = 0;
        let evenResult = 0;        
        for (let s = 0; s <= evenFac; s++) {   // fill the array with even values from 0 to the factorial value
            if (s % 2 == 0) {
                evenArray[counter] = s;
                counter = counter + 1;            
            }
        }        
        for (let z = 0; z < evenArray.length; z++){            
            if ((evenArray[z] % 5 == 0) && (z != 0)) evenResult++;           // checking for zeros
                if (((evenArray[z] / 5) >= 5) && (evenArray[z] % 5 == 0)){   //                    
                    let temp = evenArray[z] / 5;                             // 
                    if (temp % 5 == 0) {                                     //
                        while ((temp >= 5) && (temp % 5 == 0)) {             // 
                            temp = temp / 5;                                 //
                            evenResult++;                                    //
                        }
                    }
                }
        }        
        return evenResult;
    }
   
    function uneven(secondTempNumber) {
        let unevenFac = Number(secondTempNumber.join(""));
        let unevenCounter = 0; 
        let unevenArray = [];
        let uneventemp = 0;
        let unevenResult = 0;

        for (let s = 0; s <= unevenFac; s++) {   // fill the array with uneven values from 0 to the factorial value
            if (s % 2 != 0) {
                unevenArray[unevenCounter] = s;
                unevenCounter = unevenCounter + 1;            
            }
        }
        
        for (let g = 0; g < unevenArray.length; g++) {                  // checking for zeros
            if (unevenArray[g] % 5 == 0) {                              //
                uneventemp = unevenArray[g];                            //
                while ((uneventemp >= 5) && (uneventemp % 5 == 0)) {    //
                    uneventemp = uneventemp / 5;                        //
                    unevenResult++;

                }

            }
            
        }

        return unevenResult;
    }

    
    if (totalAmountFac == isFacUneven) {
        answer = 0;
    }
    return answer; 
}

