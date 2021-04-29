// var fruit = "Papayas"

// switch(fruit){
//     case "Oranges":
//         console.log("Organes are $0.59 a pound.")
//         break;
//     case "Mangoes":
//         break;
//     case "Papayas":
//         console.log("Mangoes and papayas are $2.79 a pound.")
//         break;
//     default:
//         console.log("Sorry, we are out of" + fruit + "." )
//         break;
//     }


// for (var x = 1; x <= 10; x ++){
//     for (var y = 1; y <= 10; y ++)
//         var c = x * y;
//         console.log(`${x} * ${y} = ${c}`)
// }
var words = "This is a great day!"
var revWords = " "
for(var index = 0; index < words.length; index++){

   var char = words[index]
    var newStr = revWords + char 
   
   console.log(newStr)
   
}