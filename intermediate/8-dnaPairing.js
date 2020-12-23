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
    str.split("").map(element =>{
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

  //=========================================================

  function pairElement(str) {
    //create object for pair lookup
    var pairs = {
      A: "T",
      T: "A",
      C: "G",
      G: "C"
    };
    //split string into array of characters
    var arr = str.split("");
    //map character to array of character and matching pair
    return arr.map(x => [x, pairs[x]]);
  }
  
  //test here
  pairElement("GCG");