 import fetch from "node-fetch";

/*let url = "https://my-json-server.typicode.com/nastyaku92/typicode/posts";

fetch(url)
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error) => console.error("Ошибка:", error)); */


let headersList = {
  Accept: "*/*",
  "User-Agent": "Thunder Client (https://www.thunderclient.com)",
};

let response = await fetch("https://my-json-server.typicode.com/nastyaku92/typicode/posts", {
  method: "GET",
  headers: headersList,
});

let data = await response.text();
console.log(data);
