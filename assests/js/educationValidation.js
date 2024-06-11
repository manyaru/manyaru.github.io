// Army Education Validation
const validate = {
    'Diploma': 3,
    'Bachelor Degree': 6,
    'Master Degree': 9,
    'PhD Degree': 10,
    'A': 12,  
    'A-': 11, 
    'B+': 10, 
    'B': 9, 
    'B-': 8, 
    'C+': 7, 
    'C': 6,  
    'C-': 5,
    'D+': 4, 
}
const grades = ['D+', 'C-', 'C', 'C+', 'B-', 'B', 'B+', 'A-', 'A']

class educationValidation{
    constructor(level_1, level_2){
        this.level_1 = level_1
        this.level_2 = level_2
        this.state = true
        this.points = 0
        this.choices = []
        this.getChoices()
        this.getPoints_1()
        this.getPoints_2()
    }

    getPoints_1(){
        this.points += validate[this.level_1] ? validate[this.level_1] : 0
    }

    getPoints_2(){
        this.points += validate[this.level_2] ? validate[this.level_2] : 0
    }

    getChoices(){
        if(grades.indexOf(this.level_1) < 3){
            this.state = false
            return
        }
        
        if(grades.indexOf(this.level_1) >= 6){
            this.choices = ["Air", "Army", "Navy"]
        }else if(grades.indexOf(this.level_1) >= 3 && grades.indexOf(this.level_1) <= 5){
            this.choices = ["Army", "Navy"]
        }

    }

    getFinalResults(){
        return {
            state: this.state,
            points: this.points,
            choices: this.choices
        }
    }
}

export {educationValidation}





