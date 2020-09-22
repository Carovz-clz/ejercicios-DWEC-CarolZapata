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