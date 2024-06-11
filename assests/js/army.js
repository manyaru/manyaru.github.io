let result = [true, ""]

function CheckAge(age){
    switch(true){
        case age>= 18 && age <= 20:
            console.log("Candidate assigned to special unit training.");
            return [true, "special"]
             
        case age > 20 && age <= 25:
            console.log("Candidate assigned to air force training unit.");
            return [true, "Air"]
            
        case age> 25 && age <= 30:
            console.log("Candidate assigned to navy training unit.");
            return [true, "Navy"]
            
        case age> 30 && age <= 35:
            console.log("Candidate assigned to army tatics unit.");
            return [true, "Army"]
             
        default:
            console.log("Candidate not elgible for recruitment.");
            return [false, null]
    }
}

export {CheckAge}