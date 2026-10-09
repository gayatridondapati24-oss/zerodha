function eta(istraffic,distance){
let totalTime = 15 + (distance * 2);
if (istraffic == "yes") {
    totalTime += 15;
}
console.log("Delivery Time: " + totalTime + " minutes");
}
eta(true,2)