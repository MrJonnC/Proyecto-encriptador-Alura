function encriptar() {

    var texto=document.getElementById("text").value.toLowerCase();

    var Encriptado= texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");

    document.getElementById("Resultado").innerHTML = Encriptado;
    
    document.getElementById("Frame5").style.display = "none";
    document.getElementById("Muñeco").style.display = "none";
    document.getElementById("Result").style.display = "flex";
    
}

function desencriptar() {

    var texto=document.getElementById("text").value.toLowerCase();

    var desEncriptado= texto.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");

    document.getElementById("Resultado").innerHTML = desEncriptado;

    document.getElementById("Frame5").style.display = "none";
    document.getElementById("Muñeco").style.display = "none";
    document.getElementById("Result").style.display = "flex";
}

function Copiar() {

    var Contenido = document.querySelector("#Resultado");
    Contenido.select();
    document.execCommand("copy");


}
