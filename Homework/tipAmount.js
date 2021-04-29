tipAmount(110,"fair")
function tipAmount(bill, service){
    

    if (service == "good"){
        tipAmount = .20

        
}
     else if (service == "fair"){
        tipAmount == .15
        
        
    }
    else if (service == "poor"){
        tipAmount == .10
        
}

var result = bill * tipAmount
total = bill + result 

console.log(`Bill Total : ${bill}, Service : ${service}, Total bill : ${total} `)
}
