function inputCarSpeed () {
    //prompts the user to enter car speed
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    //for every 5km above speedLimit, the driver gets one demerit point
    if (speed < speedLimit) {
        console.log('Ok')
    }else{
        const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
         if (demeritPoints > 12)
             { console.log("License suspended");
                // a driver with 12 demerit ponts gets his licence suspended
    }else{
        console.log(`Points: ${demeritPoints}`);
    }
}
}