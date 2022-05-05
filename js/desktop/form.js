export let form = () => {

    let storeButton = document.getElementById('store-button');

    if (storeButton) {

        storeButton.addEventListener('click', (event) => {

            event.preventDefault();

            document.dispatchEvent(new CustomEvent('message', {
                detail: {
                    text: 'Formulario enviado correctamente',
                    type: 'success'
                }
            }));
        });
    }
}