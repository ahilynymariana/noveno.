window.onload = ( ) => {
    const formulario = documen.getelementByid("formulario-pendientes");
    formulario.onsubnit = (e) => {
        e.preventDefault();
    }
}