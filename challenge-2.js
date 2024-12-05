function calculatePenalty(vehicleSpeed, speedLimit, penaltyPerIncrement) {

    //calculate the excessSpeed
    const excessSpeed = Math.max(vehicleSpeed - speedLimit, 0);

    //calculate the number of 5km/s increments over the speedLimit
    const incrementOverLimit = Math.ceil(excessSpeed/5);

    //calculate the total penalty
    const totalPenalty = incrementOverLimit * penaltyPerIncrement;

    //calculate demerit points(assuming two points per increment)
    const demeritPoints = incrementOverLimit * 2;

    //check if the licence should be suspended
    if(demeritPoints > 12) {
        return 'licence suspended';
    }
    return totalPenalty;
}
const vehicleSpeed = 80;
const speedLimit = 70;
const penaltyPerIncrement = 2;

calculatePenalty(vehicleSpeed, speedLimit, penaltyPerIncrement);
