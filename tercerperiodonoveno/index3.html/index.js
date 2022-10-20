window.onload = ( ) => {
    const formulario = documen.getelementByid("formulario-pendientes");
    formulario.onsubnit = (e) => {
        e.preventDefault();
        const pendiente = document.getElementById(pendiente);
        const contenidopendiente = pendiente.Value;
        pendient.value =;
        console.log (contenidopendipente);
    }
}