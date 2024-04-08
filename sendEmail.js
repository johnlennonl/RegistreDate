//https://formspree.io/f/xeqypgop

const form = document.getElementById('form');

 async function handleSendEmail(event){
    event.preventDefault()

    const fd = new FormData(this)

    const response = await fetch('https://formspree.io/f/xeqypgop' , {
        method: 'POST',
        body: fd,
        headers: {
            Accept: 'application/json'
        }

    })

    if (response.ok){
        this.reset()
        alert('Registro enviado Exitosamente')
    } else {
        alert (' Error al Registrar')
    }


}

form.addEventListener('submit', handleSendEmail);



const sweetAlert = document.querySelector("#hack");

sweetAlert.addEventListener("click" , () =>  {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Hack te da la bienvenida",
        showConfirmButton: false,
        timer: 1500
    });
})