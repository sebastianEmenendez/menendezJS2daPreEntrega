
//valor promedio del mercado
let per = 16;

//array de algunas empresas, se puede ampliar
let empresas = [
    { nombre: 'Apple Inc', ticker: 'APPL', per: 29, precioAccion: 181 },
    { nombre: 'Microsoft Corporation', ticker: 'MSFT', per: 35, precioAccion: 367 },
    { nombre: 'Alphabet Inc', ticker: 'GOOG', per: 26, precioAccion: 137 },
    { nombre: 'Amazon.com Inc', ticker: 'AMZN', per: 75, precioAccion: 145 },
    { nombre: 'Nvidia Corporation', ticker: 'NVDA', per: 64, precioAccion: 490 },
    { nombre: 'Meta Platforms Inc', ticker: 'META', per: 31, precioAccion: 351 },
    { nombre: 'Berkshire Hathaway Inc', ticker: 'BRK.B', per: 10, precioAccion: 365 },
    { nombre: 'Tesla Inc', ticker: 'TSLA', per: 76, precioAccion: 237 },
    { nombre: 'Eli Lilly and Company', ticker: 'LLY', per: 114, precioAccion: 618 },
    { nombre: 'Visa Inc', ticker: 'V', per: 31, precioAccion: 260 },
    { nombre: 'JP Morgan Chase & Co', ticker: 'JPM', per: 10, precioAccion: 172 },
    { nombre: 'Walmart', ticker: 'WMT', per: 26, precioAccion: 156 },
    { nombre: 'Mastercard Inc', ticker: 'MA', per: 36, precioAccion: 420 },
    { nombre: 'Coca Cola Company', ticker: 'KO', per: 24, precioAccion: 60 },
    { nombre: 'Pepsico Inc', ticker: 'PEP', per: 28, precioAccion: 168 },
    { nombre: 'McDonal`s Corp', ticker: 'MCD', per: 25, precioAccion: 288 },
    { nombre: 'Netflix', ticker: 'NFLX', per: 47, precioAccion: 474 },
    { nombre: 'Walt Disney Company', ticker: 'DIS', per: 70, precioAccion: 90 },
    { nombre: 'Nike Inc', ticker: 'NKE', per: 29, precioAccion: 102 },
    { nombre: 'American Express Company', ticker: 'AXP', per: 17, precioAccion: 190 },
    { nombre: 'Uber Technologies Inc', ticker: 'UBER', per: 116, precioAccion: 57 },
    { nombre: 'Starbucks Corporation', ticker: 'SBUX', per: 25, precioAccion: 93 },
    { nombre: 'Citigroup Inc ', ticker: 'C', per: 8, precioAccion: 54 },
    { nombre: 'Airbnb', ticker: 'ABNB', per: 16, precioAccion: 135 },
    { nombre: 'Paypal Holding Inc', ticker: 'PYPL', per: 17, precioAccion: 60 },
    { nombre: 'Fedex Corporation', ticker: 'FDX', per: 14, precioAccion: 246 },
];


function calcularAcciones() {
    let perRatio = document.getElementById("perIngresar");
    let valorPer = parseFloat(perRatio.value);

    let efectivoCargar = document.getElementById("efectivoIngresar");
    let efectivoDisponible = parseFloat(efectivoCargar.value);

    // LOS VALORES VUELVEN A 0 
    let resultadosVer = document.getElementById("resultados");
    resultadosVer.innerHTML = "";

    // SEGUN LOS DATOS INGRESADOS, RECORRER EL ARRAY
    for (let i = 0; i < empresas.length; i++) {
        
        if (empresas[i].per <= valorPer) {
          
            let accionesComprables = efectivoDisponible / empresas[i].precioAccion;
            
            let resultadoVer = document.createElement("p");
            resultadoVer.textContent = empresas[i].ticker + ' P/E Ratio, oportunidad de compra, revisar fundamentales. Acciones comprables: ' + accionesComprables.toFixed(2);

            // ESTILOS DESDE CSS
            resultadoVer.classList.add("resultado");
            
            resultadosVer.appendChild(resultadoVer);
        }
    }
}

localStorage.setItem("calculadoraAcciones", "segun sus parametros, se mostraran resultados");

let inicio = localStorage.getItem("calculadoraAcciones");

alert(inicio);
