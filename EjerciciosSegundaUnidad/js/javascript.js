alert("Hola mundo 2!!!");

function mostrarVariables(){
    //alert('Variable1: ' + variable1); //Error por consola: variable1 no está definida
    variable2 = null;
    alert('Variable2: ' + variable2);
    variable1 = 34;
    alert('Variable1: '+ variable1);
    variable3 = 15.9;
    alert('Variable1 * variable3: '+ variable1 * variable3);
    variable3 = "Ahora soy un texto";
    alert('Variable3: '+ variable3);
    alert('Variable3 * 35: '+ variable3 * 35); //Resultado NaN

}