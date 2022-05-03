export let sumeRest = () => {

    let restas = document.querySelectorAll(".rest");
    let sumas = document.querySelectorAll(".sume");
    let counters = plus-minus.closest('.counter');

    sumas.forEach(suma => {

        suma.addEventListener("click", () => {

            counters.value = (parseInt(counters.value) + 1);
        });
    });

    restas.forEach(resta => {

        resta.addEventListener("click", () => {

            if (tickets.value > 1) {

                tickets.value = (parseInt(tickets.value) - 1);
            }
        });
    });
}