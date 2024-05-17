function subirAlCentro(){
    alert ("holis");
    gsap.to("#introSelection2", {top:"20vh", duration:1});
}

function desvanecer(){
    gsap.to("#splashScreen", {opacity:"0", duration:1 });
    gsap.to("#splashScreen", {display: "none", delay:1 });
}

let estadoActual = 1;
let estadoRegistro = 1;
let estadoEncuesta = 1;
let estadoNavegación = 1

function avanzar() {
    if (estadoActual === 1) {
        gsap.to("#controlersWS1", { left: "-110vw", duration: 1 });
        gsap.to("#controlersWS2", { left: "10vw", duration: 1 });
        gsap.to("#controlersWS3", { left: "110vw", duration: 1 });
        gsap.to("#slide1", {background: "var(--Azul-claro-1, #A0D1FF)", duration: 1 })
        gsap.to("#slide2", {background: "var(--Azul-claro-2, #3597F2)", duration: 1 })
        gsap.to("#image1", { left: "90vw", top: "40vh", width: "50vw", height: "50vw", opacity: 0.7, filter: "blur(4px)", duration: 1 })
        gsap.to("#image2", { left: "-35vw", top: "40vh", opacity: 0.5, filter: "blur(4px)", duration: 1 })
        gsap.to("#image3", { left: "15vw", top: "18vh", width: "70vw", height: "70vw", opacity: 1, filter: "blur(0px)", duration: 1 })
        gsap.to("#image4", { left: "-20vw", top: "-20vh", width: "70vw", height: "70vw", opacity: 0.5, filter: "blur(4px)", duration: 1 })
        estadoActual = 2;
    } else if (estadoActual === 2) {

        gsap.to("#controlersWS1", { left: "-210vw", duration: 1 });
        gsap.to("#controlersWS2", { left: "-110vw", duration: 1 });
        gsap.to("#controlersWS3", { left: "10vw", duration: 1 });
        gsap.to("#slide2", {background: "var(--Azul-claro-1, #A0D1FF)", duration: 1 })
        gsap.to("#slide3", {background: "var(--Azul-claro-2, #3597F2)", duration: 1 })
        gsap.to("#image1", { left: "80vw", top: "-6vh", width: "70vw", height: "70vw", opacity: 0.8, filter: "blur(2px)", duration: 1 })
        gsap.to("#image2", { left: "15vw", top: "18vh", width: "70vw", height: "70vw", opacity: 1, filter: "blur(0px)", duration: 1 })
        gsap.to("#image3", { left: "90vw", top: "40vh", width: "50vw", height: "50vw", opacity: 0.7, filter: "blur(2px)", duration: 1 })
        gsap.to("#image4", { left: "-35vw", top: "40vh", width: "50vw", height: "50vw", opacity: 0.5, filter: "blur(4px)", duration: 1 })
        estadoActual = 3;

    } else if (estadoActual === 3) {

        gsap.to("#controlersWS1", { top: "-120", opacity: "0", duration: 1 });
        gsap.to("#controlersWS2", { top: "-120", opacity: "0", duration: 1 });
        gsap.to("#controlersWS3", { top: "-120", opacity: "0", duration: 1 });
        gsap.to("#image1", { left: "80vw", top: "-20vh", width: "50vw", height: "50vw", opacity: 0.0, filter: "blur(6px)", duration: 1 });
        gsap.to("#image2", { left: "37.5vw", top: "10vh", width: "25vw", height: "25vw", opacity: 1, filter: "blur(0px)", duration: 1 });
        gsap.to("#image3", { left: "90vw", top: "-20vh", width: "50vw", height: "50vw", opacity: 0.0, filter: "blur(6px)", duration: 1 });
        gsap.to("#image4", { left: "-35vw", top: "-20vh", width: "50vw", height: "50vw", opacity: 0.0, filter: "blur(6px)", duration: 1 });
        gsap.to("#slide1", {opacity: "0", duration: 1 })
        gsap.to("#slide2", {opacity: "0", duration: 1 })
        gsap.to("#slide3", {opacity: "0", duration: 1 })
        gsap.to("#NBWS", {opacity: "0", duration: 1})
        gsap.to("#NBWS", {display: "none", delay: 1})
        gsap.to("#userSingIn", {display: "inherit", top: "0", opacity: "1", duration: 1 })


        estadoRegistro = 1; 
    }
}

function swithcRegistro() {
    if (estadoRegistro === 1) {
        gsap.to
        gsap.to("#image2", { left: "39vw", top: "5vh", width: "22vw", height: "22vw", opacity: 1, filter: "blur(0px)", duration: 1 });
        gsap.to("#userSignUp", {display: "inherit", top: "0", opacity: "1", filter:"blur(0px)", duration: 1 });
        gsap.to("#userSingIn", {top: "-40", opacity: "0", filter: "blur(6px)", duration: 0.5 });
        gsap.to("#userSingIn", {display: "none", delay: 0.5, duration: 0.5 });
        estadoRegistro = 2;
    } else if (estadoRegistro === 2) {

        gsap.to("#image2", { left: "37.5vw", top: "10vh", width: "25vw", height: "25vw", opacity: 1, filter: "blur(0px)", duration: 1 });
        gsap.to("#userSignUp", {top: "20", opacity: "0", filter: "blur(6px)", duration: 0.5 });
        gsap.to("#userSingIn", {display: "inherit", top: "0", opacity: "1", filter: "blur(0px)", duration: 1 });
        gsap.to("#userSignUp", {display: "none", delay: 0.5, duration: 0.5 });

        estadoRegistro = 1;

    }
}

function entraEncuesta() {
    gsap.to("#userSignUp", {top: "-101vh", opacity: "0", filter: "blur(6px)", duration: 1 });
    gsap.to("#image2", { top: "-101vh", width: "22vw", height: "22vw", opacity: 1, filter: "blur(6px)", duration: 1 });
    gsap.to("#signUp1", {display: "inherit", top: "0vh", opacity: 1, filter: "blur(0px)", duration: 1 });

}

function continuarForm() {
    if (estadoEncuesta === 1) {
        gsap.to("#signUp1", {display: "inherit", top: "-70vh", opacity: 0, filter: "blur(4px)", duration: 0.5 });
        gsap.to("#signUp2", {display: "inherit", top: "0vh", opacity: 1, filter: "blur(0px)", duration: 0.2 });
        gsap.to("#introSelection2", {display: "inherit", top: "22vh", opacity: 1, filter: "blur(0px)", duration: 1 , delay: 0.2 });
        estadoEncuesta = 2;

    } else if (estadoEncuesta === 2) {
        gsap.to("#introSelection2", {display: "inherit", top: "-70vh", opacity: 0, filter: "blur(4px)", duration: 0.9 });
        gsap.to("#savings1", {display: "inherit", top: "22vh", opacity: 1, filter: "blur(0px)", duration: 1  });
        estadoEncuesta = 3;

    } else if (estadoEncuesta === 3) {
        gsap.to("#savings1", {display: "none", top: "-70vh", opacity: 0, filter: "blur(4px)", duration: 0.9 });
        gsap.to("#savings1HasSavingGoals_1", {display: "inherit", top: "22vh", opacity: 1, filter: "blur(0px)", duration: 1  });

        estadoEncuesta = 4;

    } else if (estadoEncuesta === 4) {
        gsap.to("#savings1HasSavingGoals_1", {display: "inherit", top: "-70vh", opacity: 0, filter: "blur(4px)", duration: 0.9, delay: 0.5 });
        gsap.to("#incomeCategoryQuestion", {display: "inherit", top: "22vh", opacity: 1, filter: "blur(0px)", duration: 1 , delay: 0.5 });

        estadoEncuesta = 7;

    } //else if (estadoEncuesta === 5) {
    //     gsap.to("#incomeCategoryQuestion", {display: "none", top: "-101vh", opacity: 0, filter: "blur(4px)", duration: 0.9, delay: 0.5 });
    //     gsap.to("#incomeCategorized11", {display: "inherit", top: "28vh", opacity: 1, filter: "blur(0px)", duration: 1, delay: 0.5  });

    //     estadoEncuesta = 6;

    else if (estadoEncuesta === 7) {
        gsap.to("#incomeCategoryQuestion", {display: "none", top: "-70vh", opacity: 0, filter: "blur(4px)", duration: 0.9 });
        gsap.to("#incomeCategorized_2", {display: "inherit", top: "8vh", opacity: 1, filter: "blur(0px)", duration: 1  });

        estadoEncuesta = 8;

    } else if (estadoEncuesta === 8) {
        gsap.to("#incomeCategorized_2", {display: "none", top: "-70vh", opacity: 0, filter: "blur(4px)", duration: 0.9 });
        gsap.to("#loadingData", {display: "inherit", top: "55vh", opacity: 1, filter: "blur(0px)", duration: 1  });
        gsap.to("#image1", { left: "80vw", top: "-6vh", width: "70vw", height: "70vw", opacity: 0.8, filter: "blur(2px)", duration: 1 });
        gsap.to("#image2", { left: "25vw", top: "28vh", width: "50vw", height: "50vw", opacity: 1, filter: "blur(0px)", duration: 1 });
        gsap.to("#image3", { left: "90vw", top: "40vh", width: "50vw", height: "50vw", opacity: 0.7, filter: "blur(2px)", duration: 1 });
        gsap.to("#image4", { left: "-38vw", top: "40vh", width: "70vw", height: "70vw", opacity: 0.3, filter: "blur(6px)", duration: 1 });

        estadoEncuesta = 9;

    } else if (estadoEncuesta === 9) {
        gsap.to("#loadingData", {display: "none", top: "-70vh", opacity: 0, filter: "blur(4px)", duration: 0.9 });
        gsap.to("#resultsSavings", {display: "inherit", top: "30vh", opacity: 1, filter: "blur(0px)", duration: 1  });
        gsap.to("#image1", { left: "80vw", top: "-80vh", width: "70vw", height: "70vw", opacity: 0, filter: "blur(6px)", duration: 1 });
        gsap.to("#image2", { left: "25vw", top: "-80vh", width: "50vw", height: "50vw", opacity: 0, filter: "blur(6px)", duration: 1 });
        gsap.to("#image3", { left: "90vw", top: "-80vh", width: "50vw", height: "50vw", opacity: 0, filter: "blur(6px)", duration: 1 });
        gsap.to("#image4", { left: "-38vw", top: "-80vh", width: "70vw", height: "70vw", opacity: 0, filter: "blur(6px)", duration: 1 });

        estadoEncuesta = 10;

    } else if (estadoEncuesta === 10) {
        gsap.to("#resultsSavings", {display: "none", top: "30vh", opacity: 0, filter: "blur(0px)", duration: 0.5  });
        gsap.to("#signUp2", { display: "none", duration: 0.5})
        gsap.to("#homeScreen", { left: "0vw", duration: 1});

        estadoNavegación = 1;

    }

}

function addSpends(){
    if (estadoNavegación === 1){
        gsap.to("#homeScreen", { left: "-20vw", opacity: "0px", duration: 1});
        gsap.to("#addPocket", { left: "0vw", duration: 1});

        estadoNavegación = 21;
    }
}

function pocket(){
    if (estadoNavegación === 1){
    gsap.to("#homeScreen", { left: "-20vw", opacity: "0px", duration: 1});
    gsap.to("#pocketsScreen", { left: "0vw", duration: 1});

    estadoNavegación = 2;
}  else if  (estadoNavegación === 2){
    gsap.to("#pocketsScreen", { left: "-20vw", opacity: "0px", duration: 1});
    gsap.to("#addPocket", { left: "0vw", duration: 1});

    estadoNavegación = 21;
}
}



function investment(){
    if (estadoNavegación === 1){
        gsap.to("#homeScreen", { left: "-20vw", opacity: "0px", duration: 1});
        gsap.to("#investent", {display: "inherit", left: "0vw", duration: 1});

        estadoNavegación = 3;
    } else if (estadoNavegación === 3) {
        gsap.to("#investent", { left: "-20vw", opacity: "0px", duration: 1});
        gsap.to("#addInvestment", {display: "inherit", left: "0vw", duration: 1});

        estadoNavegación = 31;
    } else if (estadoNavegación === 31) {
        gsap.to("#addInvestment", {display: "inherit", left: "-20vw", opacity: "0px", duration: 1});
        gsap.to("#addInvestment", {display: "none", left: "101vw", opacity: "0px", duration: 1, delay: 1});
        gsap.to("#investDetails", { left: "0vw", duration: 1});
        gsap.to("#investScreen2", {display: "inherit", opacity: "1", left: "-20vw"});
        gsap.to("#investent", {display: "none", opacity: "1", left: "101vw"});

        estadoNavegación = 32;
    }



}

function Incomes(){
    if (estadoNavegación === 1){
        gsap.to("#homeScreen", { left: "-20vw", opacity: "0px", duration: 1});
        gsap.to("#incomeScreen", {display: "inherit", left: "0vw", duration: 1});

        estadoNavegación = 5;
    } else if (estadoNavegación === 5){
        gsap.to("#incomeScreen", { left: "-20vw", opacity: "0px", duration: 1});
        gsap.to("#addIncome", {display: "inherit", left: "0vw", duration: 1});

        estadoNavegación = 51;
    } else if (estadoNavegación === 51){
        gsap.to("#addIncome", { left: "-20vw", opacity: "0px", duration: 1});
        gsap.to("#incomeDetails", {display: "inherit", left: "0vw", duration: 1});
        gsap.to("#incomeScreen", {display: "inherit", left: "0vw", duration: 1, delay: 1});

        estadoNavegación = 52;
    }



}

function Spends(){
    if (estadoNavegación === 1){
        gsap.to("#homeScreen", { left: "-20vw", opacity: "0px", duration: 1});
        gsap.to("#spends", { left: "0vw", duration: 1});
    
        estadoNavegación = 4;
    } else if (estadoNavegación === 4) {
        gsap.to("#spends", { left: "-20vw", opacity: "0px", duration: 1});
        gsap.to("#addSpend", {display: "inherit", left: "0vw", duration: 1});

        estadoNavegación = 41;
    }

}


function Debt(){
    gsap.to("#homeScreen", { left: "-20vw", opacity: "0px", duration: 1});
    gsap.to("#debtScreen", { left: "0vw", duration: 1});

    estadoNavegación = 6;
}

function goBack(){
    if (estadoNavegación === 2) {
        gsap.to("#pocketsScreen", { left: "101vw", opacity: "0px", duration: 1});
        gsap.to("#homeScreen", {display: "inherit", left: "0vw", duration: 1});

        estadoNavegación = 1;
    } else if (estadoNavegación === 21) {
        gsap.to("#addPocket", { left: "101vw", opacity: "0px", duration: 1});
        gsap.to("#pocketsScreen", {display: "inherit", left: "0vw", duration: 1});

        estadoNavegación = 2;
    } else if (estadoNavegación === 3) {
        gsap.to("#investent", { left: "101vw", opacity: "0px", duration: 1});
        gsap.to("#homeScreen", {display: "inherit", left: "0vw", duration: 1});

        estadoNavegación = 1;
    } else if (estadoNavegación === 31) {
        gsap.to("#addInvestment", {display: "inherit", left: "101vw", opacity: "0px", duration: 1});
        gsap.to("#investent", {display: "inherit", left: "0vw", duration: 1});

        estadoNavegación = 3;
    } else if (estadoNavegación === 32) {

        gsap.to("#investDetails", { left: "101vw", opacity: "0px", duration: 1});
        gsap.to("#investScreen2", {left: "0vw", display: "inherit", opacity: "1"});
        gsap.to("#investScreen2", {opacity: "1", delay: 0.1});

        estadoNavegación = 33;
    } else if (estadoNavegación === 33) {
        gsap.to("#investScreen2", {display: "none", left: "101vw", opacity: "0px", duration: 1});
        gsap.to("#homeScreen", {display: "inherit", left: "0vw", duration: 1});

        estadoNavegación = 1;
    } else if (estadoNavegación === 4) {
        gsap.to("#spends", {display: "inherit", left: "101vw", opacity: "0px", duration: 1});
        gsap.to("#homeScreen", {display: "inherit", left: "0vw", duration: 1});

        estadoNavegación = 1;
    } else if (estadoNavegación === 41) {
        gsap.to("#addSpend", {display: "inherit", left: "101vw", opacity: "0px", duration: 1});
        gsap.to("#spends", {display: "inherit", left: "0vw", duration: 1});

        estadoNavegación = 4;
    } else if (estadoNavegación === 5) {
        gsap.to("#incomeScreen", {display: "inherit", left: "101vw", opacity: "0px", duration: 1});
        gsap.to("#homeScreen", {display: "inherit", left: "0vw", duration: 1});

        estadoNavegación = 1;
    } else if (estadoNavegación === 51) {
        gsap.to("#addIncome", {display: "inherit", left: "101vw", opacity: "0px", duration: 1});
        gsap.to("#incomeScreen", {display: "inherit", left: "0vw", duration: 1});

        estadoNavegación = 5;
    } else if (estadoNavegación === 52) {
        gsap.to("#addIncome", {display: "inherit", left: "101vw", opacity: "0px", duration: 1});
        gsap.to("#incomeScreen", {display: "inherit", left: "101vw", opacity: "0px",  duration: 1});
        gsap.to("#incomeDetails", {display: "inherit", left: "101vw", opacity: "0px", duration: 1});
        gsap.to("#incomeScreen2", {display: "inherit", left: "0vw", duration: 1});

        estadoNavegación = 5;
    } else if (estadoNavegación === 6) {
        gsap.to("#incomeScreen", {display: "inherit", left: "101vw", opacity: "0px", duration: 1});
        gsap.to("#homeScreen", {display: "inherit", left: "0vw", duration: 1});

        estadoNavegación = 1;
    }

}

function goBackHome(){
    gsap.to("#debtScreen", {display: "inherit", left: "101vw", duration: 1});
    gsap.to("#homeScreen", {display: "inherit", left: "0vw", duration: 1});
}


function continuarFormAhorro2() {
    if (estadoEncuesta === 3) {
        gsap.to("#savings1", {display: "none", top: "-70vh", opacity: 0, filter: "blur(4px)", duration: 0.9 });
        gsap.to("#savings1HasNOSavingGoals", {display: "inherit", top: "22vh", opacity: 1, filter: "blur(0px)", duration: 1  });

        estadoEncuesta = 11;

    } else if (estadoEncuesta === 11) {
        gsap.to("#savings1HasNOSavingGoals", {display: "none", top: "-70vh", opacity: 0, filter: "blur(4px)", duration: 0.9 });
        gsap.to("#savings1HasNOSavingGoalsYes", {display: "inherit", top: "22vh", opacity: 1, filter: "blur(0px)", duration: 1  });

        estadoEncuesta = 12;

    } else if (estadoEncuesta === 12) {
        gsap.to("#savings1HasNOSavingGoalsYes", {display: "none", top: "-70vh", opacity: 0, filter: "blur(4px)", duration: 0.9, delay: 0.5});
        gsap.to("#incomeCategoryQuestion", {display: "inherit", top: "22vh", opacity: 1, filter: "blur(0px)", duration: 1, delay: 0.5 });

        estadoEncuesta = 7;

    } else if (estadoEncuesta === 7) {
        gsap.to("#incomeCategoryQuestion", {display: "none", top: "-70vh", opacity: 0, filter: "blur(4px)", duration: 0.9 });
        gsap.to("#incomeNotCategorized_1", {display: "inherit", top: "8vh", opacity: 1, filter: "blur(0px)", duration: 1  });

        estadoEncuesta = 14;

    } else if (estadoEncuesta === 14) {
        gsap.to("#incomeNotCategorized_1", {display: "none", top: "-70vh", opacity: 0, filter: "blur(4px)", duration: 0.9 });
        gsap.to("#loadingData", {display: "inherit", top: "55vh", opacity: 1, filter: "blur(0px)", duration: 1  });
        gsap.to("#image1", { left: "80vw", top: "-6vh", width: "70vw", height: "70vw", opacity: 0.8, filter: "blur(2px)", duration: 1 });
        gsap.to("#image2", { left: "25vw", top: "28vh", width: "50vw", height: "50vw", opacity: 1, filter: "blur(0px)", duration: 1 });
        gsap.to("#image3", { left: "90vw", top: "40vh", width: "50vw", height: "50vw", opacity: 0.7, filter: "blur(2px)", duration: 1 });
        gsap.to("#image4", { left: "-38vw", top: "40vh", width: "70vw", height: "70vw", opacity: 0.3, filter: "blur(6px)", duration: 1 });

        estadoEncuesta = 9;

    } 

}

function continuarFormAhorro3() {
    if (estadoEncuesta === 11) {
        gsap.to("#savings1HasNOSavingGoals", {display: "none", top: "-70vh", opacity: 0, filter: "blur(4px)", duration: 0.9 });
        gsap.to("#savings1HasNOSavingGoalsNo", {display: "inherit", top: "22vh", opacity: 1, filter: "blur(0px)", duration: 1  });

        estadoEncuesta = 15;

    } else if (estadoEncuesta === 15) {
        gsap.to("#savings1HasNOSavingGoalsNo", {display: "none", top: "-70vh", opacity: 0, filter: "blur(4px)", duration: 0.9 });
        gsap.to("#incomeCategoryQuestion", {display: "inherit", top: "22vh", opacity: 1, filter: "blur(0px)", duration: 1, delay: 0.5 });

        estadoEncuesta = 7;
    }
}








function agregarMovimiento() {
    // Aquí puedes agregar otro movimiento o realizar alguna acción cuando #controlerWS2 alcanza la posición deseada
    console.log("#controlerWS2 ha alcanzado la posición de 10vw. Puedes agregar otro movimiento aquí.");
}


function ejecutar(){
    nombre=document.getElementById("name").value;
    clave=document.getElementById("pass").value;
    if(nombre=="victor"&&clave=="12345"){

        document.getElementById("nombreUsuario").innerHTML=nombre;
        boton3();
    }else{
        alert("lárgate... "+nombre+" No eres bienvenido");
        
    }
}

    /*
    gsap.to("#IntroSelection2", {left:"100vw", duration:0.2});
    gsap.to("#screen3", {top:"-100vh", duration:0.2});
    gsap.to("#screen4", {left:"100vw", duration:0.2});
    gsap.to("#screen5", {left:"100vw", duration:0.2});
    gsap.to("#screen6", {left:"100vw", duration:0.2});*/

function boton1(){
    sacar ();
    gsap.to("#screen2", {left:"0vw", duration:1});
}
function boton2(){
    sacar ();
    gsap.to("#screen3", {top:"0vh", duration:1});
}
function boton3(){
    sacar ();
    gsap.to("#screen4", {left:"0vw", duration:1});
}
function boton4(){
    sacar ();
    gsap.to("#screen5", {left:"0vw", duration:1});
}
function boton5(){
    sacar ();
    gsap.to("#screen6", {left:"0vw", duration:1, onComplete:desaparecer});
}

function desaparecer(){
    alert("Aca es cuando yo desaparezco!!")
    gsap.to("#screen6", {left:"100vw", duration:1})
}

var nombre;
var clave;

function ejecutar(){
    nombre=document.getElementById("name").value;
    clave=document.getElementById("pass").value;
    if(nombre=="victor"&&clave=="12345"){

        document.getElementById("nombreUsuario").innerHTML=nombre;
        boton3();
    }else{
        alert("lárgate... "+nombre+" No eres bienvenido");
        
    }
}

