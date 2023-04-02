import { mostrarBitcoin, mostrarEuro, mostrarUf, mostrarUtm } from "./botones.js"
import { loadBitcoinChart, loadEuroChart, loadUfChart, loadUtmChart } from "./loadChart.js"
loadBitcoinChart()
loadEuroChart()
loadUfChart()
loadUtmChart()

document.getElementById("boton_bitcoin").onclick= function(){
    mostrarBitcoin()
};
document.getElementById("boton_euro").onclick= function(){
    mostrarEuro()
};
document.getElementById("boton_uf").onclick= function(){
    mostrarUf()
};
document.getElementById("boton_utm").onclick= function(){
    mostrarUtm()
};
