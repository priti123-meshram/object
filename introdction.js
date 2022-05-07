// const person = {};
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
// console.log(person)




// var vegetables ={
//     veg1:"potato",
//     veg2:"brinjal",
//     veg3:"bottle gourd"
//  }
  
//  var vegetable1= vegetables.veg1;
//  var vegetable2= vegetables.veg2;
//  var vegetable3= vegetables.veg3;
 
 
//  console.log(vegetable1);
//  console.log(vegetable2);
//  console.log(vegetable3);
  
//  //output:
//  // potato
//  // brinjal
//  // bottle gourd




// var myDetails={
//     "first name":"kumar",
//     "last name": "vadthya",
//     "middle name":"nayak"
//  }
  
//  console.log(myDetails["first name"]);
//  console.log(myDetails["last name"]);
//  console.log(myDetails["middle name"]);
  
//  // output
//  // kumar
//  // vadthya
//  // nayak




// var myHome = {
//     "name": "Mannat",
//     "location":"Mumbai",
//     "Colour":"black",
//     "owner":"sharukh khan",
//     "neighbours": ["everything!"]
//   };
  
  
//  myHome.name="my Villa";
  
//  console.log(myHome);
  
//  //  output
 
//  // {
//  //    name: ‘my Villa’,
//  //    location:"Mumbai",
//  //    Colour:"black",
//  //    Owner:”sharukh khan”,
//  //    neighbours: ["everything!"]
//  // }






// var myHome = {
//     "name": "Mannat",
//     "location":"Mumbai",
//     "Colour":"black",
//     "owner":"sharukh khan",
//     "neighbours": ["everything!"]
//   };
 
 
//  myHome.isGood= true;
 
//  console.log(myHome);
 
//  // output
 
//  // {
//  //    name: ‘my Villa’,
//  //    location:"Mumbai",
//  //    Colour:"black",
//  //    Owner:”sharukh khan”,
//  //    neighbours: ["everything!"],
//  //    isGood:true
//  // }






var myHome = {
    "name": "Mannat",
    "location":"Mumbai",
    "Colour":"black",
    "owner":"sharukh khan",
    "neighbours": ["everything!"],
    "isGood":true
  };
  
  delete myHome.isGood;
  console.log(myHome)
 
 
//  //output
//  // {
//  //   name: 'Mannat',
//  //   location: 'Mumbai',
//  //   Colour: 'black',
//  //   owner: 'sharukh khan',
//  //   neighbours: [ 'everything!' ]
//  // }





// var myDetails={
//     "name":"kumar",
//     "age":24
//  }
//  console.log(myDetails.hasOwnProperty("age"));
//  // output 
//  // true





// var cars = ["Maruti", "Mercedes", "BMW"];
// for (i in cars){
//     console.log(cars[i])
// }
// // Output:
// // Maruti
// // Mercedes
// // BMW




// const campus_list=["Bangalore","Dharamshala","Pune","Bangalore_another"]
// for(let i in campus_list){
//    console.log(i)
// }

// // Output: 
// // 0
// // 1
// // 2
// // 3




// var person={"name":"gouri","surname":"maity","age":37}
 
// for (i in person){
// console.log(i+ "= "+person[i]);
// }

// // Output: 
// // name= gouri
// // surname= maity
// // age= 37




// const campus={"camp_name":"Bangalore_campus","establish":2016,"election":"three_months"}
// for(let i in campus){
//   console.log(campus[i])
// }
// // Output: 
// // Bangalore_campus
// // 2016
// // three_months