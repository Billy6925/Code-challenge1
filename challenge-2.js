// Function that takes car speed as input and returns demerit points
function checkSpeed(speed) {
    if(speed < 70){
        console.log('Ok');
// If car speed is more than 70 then the demerit points:
    }else{
    const demeritPoints = Math.floor((speed -70) / 5);
    console.log(`points: ${demeritPoints}`);
 //If the demerit points are more than 12, the function returns 'License Suspended'   
    if(demeritPoints > 12) {
        console.log('License Suspended');
    }
}
}