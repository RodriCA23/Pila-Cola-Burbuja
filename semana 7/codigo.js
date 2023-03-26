var miArreglo=[];
function agregar(){
    var elDato = document.getElementById("dato").value;
    if (!elDato){
        alert("Coloque un numero antes de continuar");
    }
    else{
        console.log(elDato);
        elDato = parseInt(elDato, 10);
        console.log(elDato);
        miArreglo.push(elDato);
        document.getElementById("dato").value ="";
        obtener();
    }
}

function MostrarPila(){
    var tamaño = miArreglo.length;
    document.getElementById("mostrarPila").innerHTML = "";
    //console.log("El tamaño del arreglo es de:", tamaño);
    document.getElementById("dato").value ="";
    for(let pos=tamaño; pos>0; pos--){
        document.getElementById("mostrarPila").innerHTML += '<p>Posición: '+ 
        pos + ':' + 
        miArreglo[pos-1]+ '</p>';
    }
}

function MostrarCola(){
    var tam= miArreglo.length;
    document.getElementById("mostrarPila").innerHTML = "";
    for(let pos=1; pos<=tam; pos++){
        document.getElementById("mostrarPila").innerHTML += '<p>Posición: '+ 
        pos + ':' + 
        miArreglo[pos-1]+ '</p>';
    }
}
function burbuja(){
    var tamaño = miArreglo.length;
    let burbuja;
    for(let pos=0; pos < tamaño-1; pos++) {
        for(let pos1=pos + 1; pos1 < tamaño; pos1++){
            console.log("pos inicio:" + pos, "pos comparada "+pos1);
            if(miArreglo[pos] > miArreglo[pos1]){
                burbuja= miArreglo[pos];
                miArreglo[pos] = miArreglo[pos1];
                miArreglo[pos1] = burbuja;
            }
        }
    }
    document.getElementById("mostrarPila").innerHTML = "";
    for(let pos = 0; pos<tamaño; pos++){
        document.getElementById("mostrarPila").innerHTML += '<p>Posición: '+ 
        (pos + 1) + ':' + 
        miArreglo[pos]+ '</p>';
    }
}
function burbujadesendente(){
    var tamaño = miArreglo.length;
    let burbuja;
    for(let pos=0; pos < tamaño-1; pos++) {
        for(let pos1=pos + 1; pos1 < tamaño; pos1++){
            console.log("pos inicio:" + pos, "pos comparada "+pos1);
            if(miArreglo[pos] < miArreglo[pos1]){
                burbuja= miArreglo[pos];
                miArreglo[pos] = miArreglo[pos1];
                miArreglo[pos1] = burbuja;
            }
        }
    }
    document.getElementById("mostrarPila").innerHTML = "";
    for(let pos = 0; pos<tamaño; pos++){
        document.getElementById("mostrarPila").innerHTML += '<p>Posición: '+ 
        (pos + 1) + ':' + 
        miArreglo[pos]+ '</p>';
    }
}
function obtener(){
    var seleccion = document.getElementById("miSelect").value;
    console.log(seleccion);
    if(seleccion == 1){
        MostrarPila();
    }else{}
    if(seleccion == 2){
        MostrarCola();
    }else{}
    if(seleccion ==3){
        console.log("burbuja acendente");
        burbuja();
    }else{}
    if(seleccion == 4){
        console.log("Burbuja desendente");
        burbujadesendente();
    }
}
