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

function comprobarOperadores(){
    let var1 = "Hola";
    let var2 = "Adiós";

    alert('-var1== var2: '+(var1==var2)+'\n-var1!=var2: '+(var1!=var2)+'\n-var1<var2: '+(var1<var2)+'\n-var1>var2: '+(var1>var2)+'\n-var1<=var2: '+(var1<=var2)+'\n-var1>=var2: '+(var1>=var2));

    let var3 = 3;
    let var4 = "3";

    alert('var3 = '+var3+'   var4 = '+var4+'\nvar3==var4: '+(var3==var4)+"\nvar3===var4: "+(var3===var4));

    let var5 = 23;
    let var6 = 251;
    let var7 = -2;

    alert('var5<var6: '+(var5<var6)+'\nvar6<var7: '+(var6<var7));
    alert('var5<=var6: '+(var5<=var6)+'\nvar6>var7: '+(var6>var7));

    var7 = !true;
    alert('var7: '+var7);
}

function diaMesAnio(){
    var dia, mes, anio;

    dia = prompt('Introduzca el día: ');
    mes = prompt('Introduzca el mes: ');
    anio = prompt('Introduzca el anio: ');

    alert('Hoy es '+dia+' de '+mes+' de '+anio+'.');

}

function factorialRecursivo (n) { 
	if (n == 0){ 
		return 1; 
	}
	return n * factorialRecursivo (n-1); 
}

function ejercicio6(){
    let meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];

    for(i = 0; i < meses.length; i++){
        console.log(meses[i]);
    }

    let num = prompt('Introduzca un número para calcular el factorial: ');
    num = parseInt(num, 10);
    console.log(num);
    alert('El factorial es: '+factorialRecursivo(num));

    let edad = prompt("Introducce tu edad: ");
    edad = parseInt(edad, 10);
    console.log(edad);

    if(edad < 7){
        alert('Recomendación: Patrulla canina.');
    }else if ((edad >= 7) && (edad <= 13)){
        alert('Recomendación: Alexa y Katie.');
    }else if ((edad >= 14) && (edad <= 18)){
        alert('Recomendación: Anne with an E.');
    }else if((edad >= 19) && (edad <= 35)){
        alert('Recomendación: Stranger Things.');
    }else{
        alert('Recomendación: Sherlock.');
    }

    let n;
    do{
        n = prompt("Introducce un número ");
    }while( (n>=45) && (n<=72));
}

function ejercicio7(num){
    var soyDeLaFuncion = 2;
    const soyConstante = 8; //No entiendo el error

    if(num == 1){
        let soyDelIf = 4;
        soyDeLaFuncion = 0;
    }else{
        //const soyConstante = 8;
        soyConstante = "Constante modificada."; //No entiendo el error
    }

    //soyConstante = "Constante modificada.";

    console.log("Valor de soyDeLaFunción: "+soyDeLaFuncion);
    console.log("Valor de soyConstante: "+soyConstante);
    console.log("Valor de soyDelIf: "+soyDelIf); //Error. Ámbito de la variable solo en el if, donde se declaró.
}