/*
Write a function that when given a URL as a string, 
parses out just the domain name and returns it as a string. For example:
*/

function domainName(url){
    let result = url
    if(url.startsWith("https://www.")){
       return url.replace(("https://www.", ""))
    }
     if(url.startsWith("https://")){
       result =  url.replace(("https://", ""))
    }
    if(url.startsWith("http://www.")){
       result =  url.replace(("http://www.", ""))
    }
    if(url.startsWith("http://")){
       result =  url.replace("http://", "")
    }

    // if(result.endWith(".com")){
    //     result.replace(".com", "")
    // }
    

    
  }
//solution
  function domainName(url){
   let sourceString = url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
    let domain = sourceString.split(".")[0];
    return domain;
}

  console.log(domainName("https://www.cnet.com"))

