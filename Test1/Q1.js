
let getEvenNumbers = () => {
    const array = [1, 2, 3, 4, 5, 6];
    
    for (num of array){	
        if (num % 2 === 0) {
            document.writeln(num + "<br />");
        }
    }
}

getEvenNumbers();
