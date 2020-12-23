// ATCGATTGAGCTCTAGCG
// TAGCTAACTCGAGATCGC
// A C G T
// T G C A

function pairElement(str) {
    let result = []
    const pair ={
        A: ["A", "T"],
        C: ["C", "G"],
        G: ["G", "C"],
        T: ["T", "A"]
    }
    let strArray = str.split("").map(element =>{
        if(element === "A"){
            result.push(pair.A)
        }else if(element === "C"){
            result.push(pair.C)
        }else if(element === "G"){
            result.push(pair.G)
        }else if(element === "T"){
            result.push(pair.T)
        }
    })
    return result
    
  }
  console.log(pairElement("GCG"))