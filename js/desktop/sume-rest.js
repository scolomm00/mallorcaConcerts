export let sumeRest = () => {

    let restas = document.querySelectorAll(".rest");
    let sumas = document.querySelectorAll(".sume");

    sumas.forEach(suma => {
        suma.addEventListener("click", () => {

            tickets.value = (parseInt(tickets.value) + 1);
        });
    })

    restas.forEach(resta => {
        resta.addEventListener("click", () => {
    
            if (tickets.value > 1) {
    
                tickets.value = (parseInt(tickets.value) - 1);
            }
        });
    });
}