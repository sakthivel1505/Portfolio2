var colm = document.getElementById("fl");
var pop = document.getElementById("pop");

function fun(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Retrieve the input value
    var inp = document.getElementsByName("rec")[0].value;

    // Create a new paragraph element to hold the recommendation
    let p = document.createElement("p");
    p.id = "colu";
    p.innerHTML = inp;
    colm.appendChild(p);

    // Create a thank you message
    var p1 = document.createElement("p");
    p1.id = "pop1";
    p1.innerText = "Thank You!";
    pop.appendChild(p1);

    // Hide the thank you message after 2 seconds
    setTimeout(() => {
        pop.removeChild(p1);
    }, 2000);
}
