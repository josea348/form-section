document.getElementById("formulario").addEventListener("submit", function (e) {

  let errores = [];

  // Funciones auxiliares -----------------------
  const isEmpty = (value) => !value || value.trim() === "";
  const isEmail = (value) => /\S+@\S+\.\S+/.test(value);
  const isPhone = (value) => /^[0-9]{7,15}$/.test(value);

  // Función para mostrar error debajo del input
  const setError = (id, mensaje) => {
    const input = document.getElementById(id);
    const divError = input.parentElement.querySelector(".error");
    divError.textContent = mensaje;
  };

  // Captura de campos --------------------------
  const nombre = document.getElementById("nombre_completos").value;
  const sexo = document.getElementById("sexo").value;
  const tipoDoc = document.getElementById("tipo_doc").value;
  const numId = document.getElementById("num_id").value;
  const lugarExpedicion = document.getElementById("lugar_expedicion").value;
  const correo = document.getElementById("correo").value;
  const fechaNac = document.getElementById("fecha_nac").value;
  const edad = document.getElementById("edad").value;
  const direccion = document.getElementById("direccion").value;
  const barrio = document.getElementById("barrio").value;
  const ciudad = document.getElementById("ciudad").value;
  const celPersonal = document.getElementById("cel_personal").value;

  // Familia
  const nomMadre = document.getElementById("nom_madre").value;
  const celMadre = document.getElementById("cel_madre").value;
  const correoMadre = document.getElementById("correo_madre").value;

  const nomPadre = document.getElementById("nom_padre").value;
  const celPadre = document.getElementById("cel_padre").value;
  const correoPadre = document.getElementById("correo_padre").value;

  // Emergencia
  const nombreEmergencia = document.getElementById("nombre_emergencia").value;
  const celEmergencia = document.getElementById("cel_emergencia").value;
  const correoEmergencia = document.getElementById("correo_emergencia").value;
  const parentesco = document.getElementById("parentesco").value;

  // Archivos
  const docPersonal = document.getElementById("doc_id").files[0];
  const docPadres = document.getElementById("doc_padres").files[0];

  // ---------------- VALIDACIONES ----------------

  // Datos personales
  if (isEmpty(nombre)) {
    errores.push("El nombre completo es obligatorio.");
    setError("nombre_completos", "Campo obligatorio");
  }
  if (isEmpty(sexo)) {
    errores.push("Debe seleccionar un sexo.");
    setError("sexo", "Seleccione una opción");
  }
  if (isEmpty(tipoDoc)) {
    errores.push("Debe seleccionar tipo de documento.");
    setError("tipo_doc", "Seleccione un tipo");
  }
  if (isEmpty(numId)) {
    errores.push("Debe ingresar un número de identificación.");
    setError("num_id", "Campo obligatorio");
  }
  if (isEmpty(lugarExpedicion)) {
    errores.push("Debe ingresar el lugar de expedicion.");
    setError("lugar_expedicion", "Campo obligatorio");
  }
  if (isEmpty(correo) || !isEmail(correo)) {
    errores.push("El correo personal no es válido.");
    setError("correo", "Correo no válido");
  }
  if (isEmpty(fechaNac)) {
    errores.push("Debe ingresar fecha de nacimiento.");
    setError("fecha_nac", "Campo obligatorio");
  }
  if (isEmpty(edad) || edad <= 0) {
    errores.push("Debe ingresar una edad válida.");
    setError("edad", "Edad inválida");
  }
  if (isEmpty(direccion)) {
    errores.push("Debe ingresar una dirección.");
    setError("direccion", "Campo obligatorio");
  }
  if (isEmpty(barrio)) {
    errores.push("Debe ingresar un barrio.");
    setError("barrio", "Campo obligatorio");
  }
  if (isEmpty(ciudad)) {
    errores.push("Debe ingresar una ciudad.");
    setError("ciudad", "Campo obligatorio");
  }
  if (!isPhone(celPersonal)) {
    errores.push("El celular personal no es válido (solo números).");
    setError("cel_personal", "Debe ser solo números");
  }

  // Información familiar
  if (isEmpty(nomMadre)) {
    errores.push("Debe ingresar el nombre de la madre.");
    setError("nom_madre", "Campo obligatorio");
  }
  if (!isPhone(celMadre)) {
    errores.push("El celular de la madre no es válido.");
    setError("cel_madre", "Número inválido");
  }
  if (!isEmail(correoMadre)) {
    errores.push("El correo de la madre no es válido.");
    setError("correo_madre", "Correo inválido");
  }

  if (isEmpty(nomPadre)) {
    errores.push("Debe ingresar el nombre del padre.");
    setError("nom_padre", "Campo obligatorio");
  }
  if (!isPhone(celPadre)) {
    errores.push("El celular del padre no es válido.");
    setError("cel_padre", "Número inválido");
  }
  if (!isEmail(correoPadre)) {
    errores.push("El correo del padre no es válido.");
    setError("correo_padre", "Correo inválido");
  }

  // Informacion de emergencia
  if (isEmpty(nombreEmergencia)) {
    errores.push("Debe ingresar el nombre de contacto de padre.");
    setError("nombre_emergencia", "Campo obligatorio");
  }
  if (!isPhone(celEmergencia)) {
    errores.push("El celular del contacto de emergencia no es válido.");
    setError("cel_emergencia", "Número inválido");
  }
  if (!isEmail(correoEmergencia)) {
    errores.push("El correo de emerencia no es válido.");
    setError("correo_emergencia", "Correo inválido");
  }
  if (isEmpty(parentesco)) {
    errores.push("Debe ingresar el parentesco.");
    setError("parentesco", "Campo obligatorio");
  }

  // Archivos
  if (!docPersonal) {
    errores.push("Debe adjuntar el documento personal.");
    setError("doc_id", "Seleccione un archivo");
  }

  // Si es menor de edad debe adjuntar documentos de padres
  if (edad < 18 && !docPadres) {
    errores.push("Debe adjuntar documento de identidad de los padres (menor de edad).");
    setError("doc_padres", "Archivo obligatorio para menores");
  }

  // ---------------- RESULTADO ----------------
  if (errores.length > 0) {
    e.preventDefault();
    Swal.fire({
      icon: "error",
      title: "Revisa los datos",
      html: errores.join("<br>")
    });
    return;
  }

  // Si todo está bien → se envía el formulario
  e.target.submit();

});
