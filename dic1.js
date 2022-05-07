// var add={"one":1,"two":2,"three":3,"four":4,"five":5}
// var a=[]
// var b=[]
// for (dic in add){
//     a.push(add[dic])
//     b.push(dic)
// }
// console.log(a)
// console.log(b)



n=[12,3,4,5,6,7,8,9,4]
a=[]
b=[]
for (i of n){
    if (i%2==0){
        a.push(i/2)        
    }
    else{
        b.push(i*i)
    }
}
console.log(a)
console.log(b)
