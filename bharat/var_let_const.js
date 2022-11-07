var a=10;
// var a=20; var we can reintialize in the scop it has global scop ithin that scop
let b=10; //let we can not re declare and reintialize it has gloabal scop if we write in global  if we declare in that in local scop then that variable scop will be inside that scop
const c=30; // same  as let 

console.log(a);

console.log(b);

console.log(c);

if(a==10){
    let d= 40;
    var a=50;
    console.log(b);

    console.log(d);
    console.log(a);

}
// console.log(d);  we can not call to d beacause scop of that d is only in if block it will give us an error

