const div = document.querySelector(".ods"),
  texto = "Los 17 Objetivos de Desarrollo Sostenible nos inspiran a crear un mundo más justo y sostenible. Desde erradicar la pobreza hasta proteger el planeta, ¡cada acción cuenta!";

function efectoTextTyping (elemento,texto,i = 0){
    elemento.textContent += texto[i];

if (i == texto.length -1) return;

    setTimeout(() => efectoTextTyping(div,texto,i + 1) ,30);
   
}
efectoTextTyping(div, texto)