// let eded = 10;
// if(eded>0){
//     console.log( "eded musbetdir")
// }
// else{
//     console.log("menfidi eclaf")
// }
// let eded1 = 10;
// let eded2 =5;
// let eded3 = 8;
// if(eded1>eded2,eded3){
//     console.log( "boyuk budu")
// }
// else if(eded2>eded1,eded3){
//     console.log("boyuk budu")
// }
// else{
//     console.log("boyuk budu")

// }
// let herf ="f";
// if(herf=="a" || herf=="e" || herf=="i" || herf=="o" || herf=="u"){
//     console.log( "saitdir")
// }
// else{
//     console.log("samitdir")
// }








// function calculate (a,operator,c){
//     if(operator == "+"){
//         return a+c;
//     }
// }
// let hesabla = calculate(3,"+",5)   
// console.log(hesabla);



// function exam(imtahanagirisbali,imtahanbali){

// if(  imtahanbali<17  ){
//     return "kesildin";
// }
// else if(imtahanagirisbali+imtahanbali>51){
//     return imtahanagirisbali+imtahanbali;
// }
// else{
//     return "kesildin";
// }
// }
// let kesr = exam(40, 16)
// console.log(kesr);





// function arrow(hesab){
//     const hesabim = 75;
//     const hesab =
//       hesab > 50 && hesab<300
//         ? hesab*0.15
//         : hesab<50 && hesab>300
//         ? hesab*0.2
//         : score > 40
//         ? "Fair"
//         : "Do better"
    
//     console.log(hesabim)
//     // "Fair"
//     }
  
function eddiorta(x,y,z,d,s,a) {
    if(((x+y+z)/3)/((d+s+a)/3)>=2){
    return "delfinler qalibdi";
}
    else if (((d+s+a)/3)/((x+y+z)/3)>=2) {
        return "koalalr qalibdi";
    }
    else{
        return  "beraber";
    }
}
 console.log(eddiorta(23,200,23,23,45,45));
