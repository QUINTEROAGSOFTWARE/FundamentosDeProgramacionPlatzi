 function aleatorio(min,max){
            return Math.floor(Math.random()* (max-min+1)+min)       //Esto se llama invocacion de una funcion delcarando las variables como parametro luego dentro de la funcion retornamosla ejecucion del codigo
        
        }//yaves corchetes las variables dentro de las funciones solamente existen si las pasas por parametro si no son pasadas por parametro las variables no se ven = manipularla ver su valo la instrucion if condicional
        function eleccion(jugada){
            let resultado=""
            if(jugada==1){ 
            resultado="pedra 🪨"
        }
            else if(jugada==2){
                resultado ="papel 📜"
            }
            else if(jugada==3){
                resultado="tijera ✂️"
            }else{
                resultado="Game over"
            }
            return resultado
        }
        //1 es piedra, 2 es papel, 3 es tijera 
        let jugador=0; //variable de nombre jugador valor de 0
        let pc=0
        let triunfos=0
        let perdidas=0
        //Creamos una instrucion termino nativo de los lenguajes de programacion que modifican el flujo del codigo la instrucion while le dice a la computadora mientras una condicion sea true
        while(triunfos<3&&perdidas<3){
            pc=aleatorio(1,3);// variable de nombre pc valor de 2 invocacion de la funcion y entre parametros los valores correspondientes 
            jugador=prompt("Elige: 1 para piedra, 2 para papel , 3 para tijera")// variable jugador = a caja Prompt
            //alert("Elegiste "+ jugador);//funcion de retornar el siguiente texto mas la variable jugador con el dato imput
            //agregamos una condicional para que ejecute el cosdigo segun el dato imput
            //signo = asigna un valor doble == compara el valor
            //condicional si if 
            //condicional si no else if 
            //hicimos 3 condicionles distitas 
            alert("PC elige: "+eleccion(pc)) //la variable por parametro pc aleatorio  
            alert("Tu eliges: "+eleccion(jugador)) //jugador por parametro de  prompt
            //COMBATE 
            if(pc==jugador){
                alert("EMPATE")
            }else if(jugador==1&&pc==3){
                alert("GANASTE")
                //es importante que siempre lups o siclos tengan una salida como la condicion de logros y perdidas
                triunfos=triunfos+1
            }else if(jugador==2&&pc==1){
            alert("GANASTE") 
                triunfos=triunfos+1
            }else if(jugador==3&&pc==2){
            alert("GANASTE")
                triunfos=triunfos+1
            }else {
                alert("PERDISTE")
                perdidas=perdidas+1
            };
        }   
        alert("Ganastes "+ triunfos+" veces. perdiste "+perdidas+" veces.")