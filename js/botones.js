export function mostrarBitcoin(){
    console.log ("mostrar bitcoin");
    document.getElementById("Grafico").style.display="block"
    document.getElementById("Grafico_uf").style.display="none"
    document.getElementById("Grafico_utm").style.display="none"
    document.getElementById("Grafico_euro").style.display="none"
}
export function mostrarEuro(){
    document.getElementById("Grafico").style.display="none"
    document.getElementById("Grafico_uf").style.display="none"
    document.getElementById("Grafico_utm").style.display="none"
    document.getElementById("Grafico_euro").style.display="block"
}
export function mostrarUtm(){
    document.getElementById("Grafico").style.display="none"
    document.getElementById("Grafico_uf").style.display="none"
    document.getElementById("Grafico_utm").style.display="block"
    document.getElementById("Grafico_euro").style.display="none"
}
export function mostrarUf(){
    document.getElementById("Grafico").style.display="none"
    document.getElementById("Grafico_uf").style.display="block"
    document.getElementById("Grafico_utm").style.display="none"
    document.getElementById("Grafico_euro").style.display="none"
}
