document.addEventListener('DOMContentLoaded', function () {
    let numeros = [];
    let fila = [];
    let iteracionFila;
    let iteracionColumna;
    let operacion;
    let contador = 1;

    for (iteracionFila = 1; iteracionFila <= 5; iteracionFila++) {
        fila = [];
        for (iteracionColumna = 0; iteracionColumna < 5; iteracionColumna++) {
            operacion = contador * 2;
            fila.push(operacion);
            contador++;
        }
        numeros.push(fila);
    }

    let iteracionllamada;
    for (iteracionllamada = 1; iteracionllamada <= 8; iteracionllamada++) {
        let numTabla = 'tabla' + iteracionllamada;
        let tabla = document.getElementById(numTabla);

        // tabla.children[0].children[0]; Llama a los hijos de la tabla, el primer children llama al tr y el segundo llama al td
        for (iteracionFila = 0; iteracionFila < 5; iteracionFila++) {
            let resultado = '';
            for (iteracionColumna = 0; iteracionColumna < 5; iteracionColumna++) {
                resultado += '<li class="list-group-item">' + numeros[iteracionColumna][iteracionFila] + '</li>';

            }
            
            tabla.children[0].children[iteracionFila].innerHTML = resultado; // Llama por el orden que recorre la fila
        }

    }

    let tablax = document.getElementById('tabla7');
    for (iteracionFila = 0; iteracionFila < 5; iteracionFila++) {
        for (iteracionColumna = 0; iteracionColumna < 5; iteracionColumna++) {
            if (iteracionFila === iteracionColumna || iteracionFila + iteracionColumna === 4) {
                tablax.children[0].children[iteracionFila].children[iteracionColumna].classList.add('list-group-item-info');
                //classList llama las listas y el add es para agregar el diseño
            }else{
                let error='';
                error='Error';
            }
        }
    }

    let tabla3x = document.getElementById('tabla8');

    for (iteracionFila = 0; iteracionFila < 3; iteracionFila++) {
        for (iteracionColumna = 0; iteracionColumna < 3; iteracionColumna++) {
            if (iteracionFila === iteracionColumna || iteracionFila + iteracionColumna === 2) {
                tabla3x.children[0].children[iteracionFila].children[iteracionColumna].classList.add('list-group-item-info');
                //classList llama las listas y el add es para agregar el diseño
            }else{
                let error='';
                error='Error';
            }
        }
    }
    for (iteracionFila = 0; iteracionFila < 5; iteracionFila++) {
        for (iteracionColumna = 0; iteracionColumna < 3; iteracionColumna++) {
            if (iteracionFila + iteracionColumna == (iteracionColumna + 1) * 2 || iteracionFila + iteracionColumna === 4) {
                tabla3x.children[0].children[iteracionFila].children[iteracionColumna].classList.add('list-group-item-danger');
                //classList llama las listas y el add es para agregar el diseño
            }else{
                let error='';
                error='Error';
            }
        }
    }

    for (iteracionFila = 2; iteracionFila < 5; iteracionFila++) {
        for (iteracionColumna = 0; iteracionColumna < 3; iteracionColumna++) {
            if (iteracionFila + iteracionColumna == (iteracionColumna + 1) * 2 || iteracionFila + iteracionColumna === 4) {
                tabla3x.children[0].children[iteracionColumna].children[iteracionFila].classList.add('list-group-item-warning');
                //classList llama las listas y el add es para agregar el diseño
            }else{
                let error='';
                error='Error';
            }
        }
    }


    for (iteracionFila = 2; iteracionFila < 7; iteracionFila++) {
        let numTabla = 'tabla' + iteracionFila;
        let tabla = document.getElementById(numTabla);
        for (iteracionColumna = 0; iteracionColumna < 5; iteracionColumna++) {
            if (iteracionFila == 2) {
                tabla.children[0].children[iteracionFila - 2].children[iteracionColumna].classList.add('list-group-item-warning');
            } else if (iteracionFila == 3){
                tabla.children[0].children[iteracionFila - 2].children[iteracionColumna].classList.add('list-group-item-info');

            }else if (iteracionFila == 4){
                tabla.children[0].children[iteracionFila - 2].children[iteracionColumna].classList.add('list-group-item-success');

            }else if (iteracionFila == 5){
                tabla.children[0].children[iteracionFila - 2].children[iteracionColumna].classList.add('list-group-item-danger');

            }else if (iteracionFila == 6){
                tabla.children[0].children[iteracionFila - 2].children[iteracionColumna].classList.add('list-group-item-dark');

            }else{
                let error='';
                error='Error';
            }

        }
    }

});