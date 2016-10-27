function primeNumbers(){
    for (var i = 1; i <= 1000; i++){
        if (i % 1 === 1){
            console.log(i);
        }else if (i % i === 0){
            console.log(i);
        }
    }
}
