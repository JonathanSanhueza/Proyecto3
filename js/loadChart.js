export function loadBitcoinChart(){
    const ctx = document.getElementById('Grafico');
    const url_bitcoin = 'https://mindicador.cl/api/bitcoin';

    fetch(url_bitcoin)
        .then( (response) => {
            return response.json();
        } )
        .then((datos) => {
            const datos_ordenados = datos.serie.reverse();
            const arreglo_fechas = [];
            const arreglo_valores = [];
            for(let i = 0; i < datos_ordenados.length; i++){
                const fecha = new Date(datos_ordenados[i].fecha)
                const fecha_formateada = fecha.getDate()  + "-" + (fecha.getMonth()+1) + "-" + fecha.getFullYear()
                arreglo_fechas.push(fecha_formateada);
                arreglo_valores.push(datos_ordenados[i].valor);
            }

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: arreglo_fechas,
                    datasets: [{
                        label: 'Valor en Dolares',
                        data: arreglo_valores,
                        borderWidth: 1,
                        borderColor: 'green',
                        backgroundColor: 'green',
                    }]  
                },
            });
        });
};

export function loadUfChart(){
    const url_uf = 'https://mindicador.cl/api/uf';
    const ctx_uf = document.getElementById('Grafico_uf');

    fetch(url_uf)
        .then( (response) => {
            return response.json();
        } )
        .then((datos) => {
            const datos_ordenados = datos.serie.reverse();
            const arreglo_fechas = [];
            const arreglo_valores = [];
            for(let i = 0; i < datos_ordenados.length; i++){
                const fecha = new Date(datos_ordenados[i].fecha)
                const fecha_formateada = fecha.getDate()  + "-" + (fecha.getMonth()+1) + "-" + fecha.getFullYear()
                arreglo_fechas.push(fecha_formateada);
                arreglo_valores.push(datos_ordenados[i].valor);
            }
            new Chart(ctx_uf, {
                type: 'line',
                data: {
                    labels: arreglo_fechas,
                    datasets: [{
                        label: 'Valor Uf',
                        data: arreglo_valores,
                        borderWidth: 1,
                        borderColor: '#32a899',
                        backgroundColor: '#32a899',
                    }]
                },
            });
        });
};

export function loadEuroChart(){
    const ctx_euro = document.getElementById('Grafico_euro');
    const url_euro = 'https://mindicador.cl/api/euro';

    fetch(url_euro)
        .then( (response) => {
            return response.json();
        } )
        .then((datos) => {
            const datos_ordenados = datos.serie.reverse();
            const arreglo_fechas = [];
            const arreglo_valores = [];
            for(let i = 0; i < datos_ordenados.length; i++){
                const fecha = new Date(datos_ordenados[i].fecha)
                const fecha_formateada = fecha.getDate()  + "-" + (fecha.getMonth()+1) + "-" + fecha.getFullYear()
                arreglo_fechas.push(fecha_formateada);
                arreglo_valores.push(datos_ordenados[i].valor);
            }
            new Chart(ctx_euro, {
                type: 'line',
                data: {
                    labels: arreglo_fechas,
                    datasets: [{
                        label: 'Valor Euro',
                        data: arreglo_valores,
                        borderWidth: 1,
                        borderColor: '#7d32a8',
                        backgroundColor: '#7d32a8',
                    }]
                },
            });
        });
};

export function loadUtmChart(){
    const ctx_utm = document.getElementById('Grafico_utm');
    const url_utm = 'https://mindicador.cl/api/utm';

    fetch(url_utm)
        .then( (response) => {
            return response.json();
        } )
        .then((datos) => {
            const datos_ordenados = datos.serie.reverse();
            const arreglo_fechas = [];
            const arreglo_valores = [];
            for(let i = 0; i < datos_ordenados.length; i++){
                const fecha = new Date(datos_ordenados[i].fecha)
                const fecha_formateada = fecha.getDate()  + "-" + (fecha.getMonth()+1) + "-" + fecha.getFullYear()
                arreglo_fechas.push(fecha_formateada);
                arreglo_valores.push(datos_ordenados[i].valor);
            }
            new Chart(ctx_utm, {
                type: 'line',
                data: {
                    labels: arreglo_fechas,
                    datasets: [{
                        label: 'Valor utm',
                        data: arreglo_valores,
                        borderWidth: 1
                    }]
                },
            });
        });
    };
