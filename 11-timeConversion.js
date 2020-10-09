const s = "12:01:00PM"
let result = s.split(":")
console.log(result)

function timeConversion(s) {
    let seperator = s.split(":")
    let formetDevider = seperator[2].split("")
    let formetCut = formetDevider.splice(0,2)
    if(formetDevider.join("") == "PM"){
        
    }
    
}

console.log(timeConversion(s))