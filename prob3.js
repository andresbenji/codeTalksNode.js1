//this function will be making an AJAX request to GET data from a remote API
const getTodos = () => {
  //we create a new instance of XMLHttpRequest and store it into our request variable. Later on this vasriable will allow us to make HTTP request
  const request = new XMLHttpRequest();

  //we add an even listener to our request variable that fires when the state of the request changes, then it executes a callback function
  request.addEventListener("readystatechange", () => {
    //if our readyState is equal to 4 (indicating that the request is complete) and our status is equal to 200 (indicating a successful response) then it logs our retrieved data
    if (request.readyState === 4 && request.status === 200) {
      console.log(request.responseText);
    }

    //but if our request is complete but we don't get a successful response (inidicating that there was an error retrieving the data) then it logs our string
    else if (request.readyState === 4) {
      console.log("could not fetch the data");
    }
  });

  //then we open our request and we specify that we want a GET request to the url
  request.open("GET", "https://jsonplaceholder.typicode.com/todos/");

  //finally our request is sent and initializes our HTTP request
  request.send();
};

//our function is called twice so it pretty much makes two requests to the API
getTodos();
getTodos();
