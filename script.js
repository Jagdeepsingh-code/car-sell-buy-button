let status = document.querySelector("h3");

let button = document.querySelector("button");
let state = 0;

button.addEventListener("click", function () {
  if (state == 0) {
    status.innerText = "Your car";
    status.style.color = "green";
    button.innerText = "Sell Car";
    button.style.cssText = `background-color: silver;
    color: black;
    filter: drop-shadow(3px 3px 5px rgb(44, 44, 44));
    `;

    state++;
  } else {
    status.innerText = "Not Your Car";
    status.style.color = "red";
    button.innerText = "Buy Car";
    button.style.cssText = `background-color: rgb(16, 147, 170);
     filter: drop-shadow(3px 3px 5px rgb(0, 54, 83))
    `;
    state--;
  }
});
