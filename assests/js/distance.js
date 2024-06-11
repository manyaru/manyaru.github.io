// Function to evaluate candidates based on their run times
function evaluateDistance(runTimeMinutes) {
    if (runTimeMinutes < 30) {
        return [true, "",0];
    } else if (runTimeMinutes >= 30 && runTimeMinutes <= 45) {
        return [true, "",1];
    } else {
        return [false, "",0];
    }
}

export { evaluateDistance };






