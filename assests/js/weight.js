//weight//
function evaluateCandidateWeight(weight) {
    if (weight < 40) {
        return [false, "Dismissed"];
    } else if (weight >= 50 && weight <= 60) {
        return [true, "Army"];
    } else if (weight > 60 && weight <= 65) {
        return [true, "Air Force"];
    } else if (weight > 65 && weight <= 67) {
        return [true, "Army/Air Force"];
    } else {
        return [false, "Exceeds maximum weight limit"];
    }
}

export { evaluateCandidateWeight };
