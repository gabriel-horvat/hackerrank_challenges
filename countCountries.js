function countCountries(str, p) {
  var req = new XMLHttpRequest();
   let url= ("https://jsonmock.hackerrank.com/api/countries/search?name=" + str);
    req.overrideMimeType("application/json");
    req.open('GET', url, true);
    req.onload  = function() {
    var jsonResponse = JSON.parse(req.responseText);
    var arr=[];
    for (i=0; i<jsonResponse.data.length; i++) {
     if ((jsonResponse.data[i].population) > p ){
     arr.push(jsonResponse.data[i].name)
       }

    }
     print (arr.length);


    }

req.send(null);


}

// using fetch:
function countCountries(str, p) {

   let url= ("https://jsonmock.hackerrank.com/api/countries/search?name=" + str);
    var arr=[];
 fetch(url)
 .then(function(response) {
   return response.json();
  })
 .then(function(jsonResponse) {
  for (i=0; i<jsonResponse.data.length; i++) {
     if(jsonResponse.data[i].population > p){
    arr.push(jsonResponse.data[i].name)
    };

  }
    print (arr.length);
 });

 }
