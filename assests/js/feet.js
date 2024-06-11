const validateFeet = (feet_nature)=>{
    if(feet_nature === "Flat"){
        return [true, "Accepted"]
    }else{
        return [false, ""]
    }
}

export {validateFeet}


