let tickets = document.getElementById("tickets");
let rest = document.getElementById("rest");
let sume = document.getElementById("sume");

sume.addEventListener("click", ()=> {

    tickets.value = (parseInt(tickets.value) + 1);
});

rest.addEventListener("click", ()=> {

    if(tickets.value > 1) {
        
        tickets.value = (parseInt(tickets.value) - 1);
    }
});
