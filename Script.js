

var Usuario = [];


function calcularEdad(fecha) {
    var hoy = new Date();
    var Cumple = new Date(fecha);


    return hoy.getFullYear - Cumple.getFullYear;
}



function EnviarDates(){
    if (document.getElementById('Runs').value!="" && document.getElementById('Nombre').value!="" &&
    document.getElementById('App').value!="" && document.getElementById('Apm').value!="" && document.getElementById('NumeroTel').value!="" &&
    document.getElementById('Email').value!="" && document.getElementById('Profesion').value!="" && document.getElementById('Cartu').value!=""){

        const EdadUs = parseInt(document.getElementById('EdadUs').value);

        if (EdadUs>=18 && EdadUs<=35){



        const EdadUser = calcularEdad(document.getElementById('FechaEdad').value);

        Usuario = {
            Nombre : document.getElementById('Nombre').value,
            Rut : document.getElementById('Runs').value,
            ApellidoCompleto: document.getElementById('App').value +" "+ document.getElementById('Apm').value,
            NumeroTel : document.getElementById('NumeroTel').value,
            Correo : document.getElementById('Email').value,
            Profesion : document.getElementById('Profesion').value,
            CartaPrese : document.getElementById('Cartu').value,
            Edad : EdadUser,
            FechaNacimiento : document.getElementById('FechaEdad').value,
            Genero : document.getElementById('Genero').value

        }

        alert("POSTULACIÓN ENVIADA CORRECTAMENTE, GENERANDO CARTA...")


        let Strinn = "\nGracias por tu consideración de postular a la ayuda a Chiloé!!!\n=========CARTA DE PRESENTACIÓN "+Usuario.Rut+"=========\nNombre completo:"+Usuario.Nombre+" "+Usuario.ApellidoCompleto+"\nNumero de contacto:"+Usuario.NumeroTel+"\nCorreo electronico:"+Usuario.Correo+"\nGenero:"+Usuario.Genero+"\nEdad:"+Usuario.edad+"\nFecha de nacimiento:"+Usuario.FechaNacimiento+"\nProfesión:"+Usuario.Profesion+"\nMotivo del postulante:"+Usuario.CartaPrese;



        let Carda = document.createElement('textarea');

        Carda.cols = "30";
        Carda.rows = "20";
        Carda.style.width = "600px";
        Carda.style.height = "400px";
        Carda.style.fontSize = "20px";
        Carda.style.textAlign = "centered";
        Carda.style.marginLeft = "110px";


        Carda.title = "CartaPresent";
        Carda.placeholder = "Aqui irá la carta de presentación.";        
        Carda.value = Strinn;

        Carda.readOnly = true;


        const ElDiv = document.getElementById('CartPresen');

        ElDiv.appendChild(Carda);


        ElDiv.autofocus = true;


    }else{

        alert("TIENES QUE TENER ENTRE 18 Y 35 AÑOS DE EDAD PARA POSTULAR!")


    }



    }else{

        alert("RELLENAR TODOS LOS CAMPOS DE MANERA VALIDA!")
    }
}


