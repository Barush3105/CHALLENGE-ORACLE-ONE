document.getElementById('Boton-Encriptar').addEventListener('click', function() {
    var mensajeentrante = document.getElementById('message').value;
    if (mensajeentrante.trim() !== '') {
      var MensajeEncriptado = Encriptar(mensajeentrante);
      ActualizarMensaje(MensajeEncriptado);
    }
  });
  
  document.getElementById('Boton-Desencriptar').addEventListener('click', function() {
    var mensajeentrante = document.getElementById('message').value;
    if (mensajeentrante.trim() !== '') {
      var MensajeDesencriptado = Desencriptar(mensajeentrante);
      ActualizarMensaje(MensajeDesencriptado);
    }
  });
  
  document.getElementById('Boton-Copiar').addEventListener('click', function() {
    var MensajeCopiar = document.getElementById('messageText');
    var tempInput = document.createElement('input');
    tempInput.value = MensajeCopiar.textContent;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
  });
  

  function Encriptar(Mensaje) {
    var Encriptado = Mensaje.replace(/e/g, 'enter');
    Encriptado = Encriptado.replace(/i/g, 'imes');
    Encriptado = Encriptado.replace(/a/g, 'ai');
    Encriptado = Encriptado.replace(/o/g, 'ober');
    Encriptado = Encriptado.replace(/u/g, 'ufat');
    return Encriptado;
  }
  
  function Desencriptar(Mensaje) {
    var Desencriptado = Mensaje.replace(/enter/g, 'e');
    Desencriptado = Desencriptado.replace(/imes/g, 'i');
    Desencriptado = Desencriptado.replace(/ai/g, 'a');
    Desencriptado = Desencriptado.replace(/ober/g, 'o');
    Desencriptado = Desencriptado.replace(/ufat/g, 'u');
    return Desencriptado;
  }
  
  function ActualizarMensaje(MensajeActualizar) {
    var messageImage = document.getElementById('image');
    var messageText = document.getElementById('messageText');
    var copy = document.getElementById('Boton-Copiar');
  
    messageImage.style.display = 'none';
    copy.style.display = 'block';
    messageText.textContent = MensajeActualizar;

    copyButton.style.display = 'block';
 }
  