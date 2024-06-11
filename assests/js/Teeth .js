function candidateTeeth(teeth) {
    if (teeth >= 29 && teeth <= 32) {
        return [true, "",0];
    } else if (teeth >= 26 && teeth <= 28) {
        return [true, "",1];
    } else if (teeth >= 0 && teeth <= 25) {
        return [false, "", 1];
    } else {
        return [false, "", 0];
    }
}

export { candidateTeeth }
