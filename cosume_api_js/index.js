/*
    The code below gets a json which is an array of objects
    Using the fetch api, we get a json response from the endpoint passed to the fetch function
    We then get the data out of the json object and populate it in the browser.
*/


function postData(e) {
    e.preventDefault();

    fetch('0.0.0.0:8080/piglatin', {
        method:'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-type':'application/json'
        },
        body:JSON.stringify({key: value}) // the data you want to post
      })
      .then((res) => res.json())
      .then((data) => console.log(data))
} 
