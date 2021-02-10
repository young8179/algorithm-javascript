/*
Write a function that when given a URL as a string, 
parses out just the domain name and returns it as a string. For example:
*/


//solution
  function domainName(url){
   let sourceString = url.replace('http://','').replace('https://','').replace('www.','').split(/[/?#]/)[0];
    let domain = sourceString.split(".")[0];
    return domain;
}

function domainName1(url){
   url = url.replace("https://", '');
   url = url.replace("http://", '');
   url = url.replace("www.", '');
   return url.split('.')[0];
 };

  console.log(domainName("https://www.cnet.com"))

