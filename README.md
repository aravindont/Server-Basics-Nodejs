# How to create a Node Server without express

- First initialize the npm by giving the `npm init -y` command in the terminal.

- Create a file called `index.js` In this file require the HTTP module like below:

> const http=require('http');

- Call the `createServer()` method on it and assign it to the constant like below:

> const server=http.createServer();

Call the `listen()` method on the server constant like below:

> server.listen();

- pass the post to the listen method to listen on in this case passing conventional port number 3000.

> server.listen(3000);

# How to Test the Server

- To start the server give `node index.js` and hit Enter.Open `postman` or any `web browser` and give `http://localhost:3000/` in the address bar

- your server may endup loading infinitely like in below image
  yeah!! it's not `error` our server is up and running

![server-loading](./images/server-loading.PNG)

# How to send back a response from the server.

- To communicate with the server we need to send the request and recieve the response for that we need to include the call back function to the `createServer()` method like below

> const server = http.createServer((request, response) => {response.end('Response from server');});

- `request` verb is to basically request something from the server and `response` verb is the response from the server `response.end()` method ends the communication with `server` with response.

- Below is the response from server

![server-response](./images/server-response.PNG)
