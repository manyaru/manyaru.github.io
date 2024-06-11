import { CheckAge } from "./army.js"
import { educationValidation } from "./educationValidation.js"
import { evaluateCandidateWeight } from "./weight.js"
import { candidateTeeth } from "./Teeth .js"
import { validateFeet } from "./feet.js"
import { evaluateDistance } from "./distance.js"


document.getElementById('my_form').addEventListener('submit', (event)=>{Register(event, document.getElementById('my_form'))})

function Register(e, form){
    e.preventDefault()
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let email = document.getElementById('inputEmail4').value
    let password = document.getElementById('inputPassword4').value
    let age = document.getElementById('inputAge').value
    let distance = document.getElementById('time').value
    let education = document.getElementById('education').value
    let highschool = document.getElementById('highschool').value
    let weight = document.getElementById('inputweight').value
    let teeth = document.getElementById('inputteeth').value
    let feet = document.getElementById('inputfeet').value
    let main_list = [fname, lname, email, password, age, education, highschool, weight, teeth, feet]

    for(let x of main_list){
        if(x.length == 0){
            alert("Please fill all input fields")
            return
        }
    }

    let education_results = new educationValidation(highschool, education).getFinalResults()
    let age_results = CheckAge(parseInt(age))
    let weight_results = evaluateCandidateWeight(parseInt(weight))
    let feet_results = validateFeet(feet)
    let teeth_results = candidateTeeth(parseInt(teeth))
    let distance_results = evaluateDistance(parseInt(distance))

    let options = education_results.choices
    let education_points = education_results.points - teeth_results[2] - distance_results[2]

    let main_results = true
    let comm_data = [age_results[0], education_results.state, weight_results[0], feet_results[0], teeth_results[0], distance_results[0]]
    for(let x of comm_data){
        if(!x){
            main_results = false
        }
    }

    let final_results = `
    Age Results: ${age_results[0] ? "Passed" : "Failed"}\n
    Education Results: ${education_results.state ? "Passed" : "Failed"}\n
    Weight Results:  ${weight_results[0] ? "Passed" : "Failed"}\n
    Feet Results: ${feet_results[0] ? "Passed" : "Failed"}\n
    Teeth Results: ${teeth_results[0] ? "Passed" : "Failed"}\n
    Distance Results: ${distance_results[0] ? "Passed" : "Failed"}\n
    Total points: ${education_points}\n
    ${main_results ? `You Placed AT: ${options}`: "Unfortunately, You failed in the Kenya Army Placement"}
    `

    sendEmail(email, final_results)
    form.reset();
    alert("Find Results in your Email")
}

const sendEmail = async (email, message)=>{
    let options = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            {
                "receiver": email,
                "message": message
            }
        )
    }
    try{
        let response = await fetch("http://andrexxx.pythonanywhere.com/sendEmail", options)
        response = await response.json()
        console.log(response)
    }
    catch{
        alert("error Occured")
    }
}


