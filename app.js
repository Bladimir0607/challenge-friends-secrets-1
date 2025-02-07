// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres de los amigos
let amigos = [];

// Parte 1: Función para agregar un amigo al array
function agregarAmigo() {
    const amigoInput = document.getElementById("amigo"); // Obtener el campo de entrada
    const nombreAmigo = amigoInput.value.trim(); // Eliminar espacios al inicio y al final

    // Validar que el campo no esté vacío
    if (nombreAmigo === "") {
        alert("Por favor, inserte un nombre.");
        return; // Salir de la función si el campo está vacío
    }

    // Agregar el nombre al array de amigos
    amigos.push(nombreAmigo);

    // Limpiar el campo de entrada
    amigoInput.value = "";

    // Llamar a la función para actualizar la lista de amigos en el HTML
    mostrarAmigos();
}

// Parte 2: Función para mostrar la lista de amigos en el HTML
function mostrarAmigos() {
    const lista = document.getElementById("listaAmigos"); // Obtener el elemento de la lista

    // Limpiar la lista antes de agregar nuevos elementos
    lista.innerHTML = "";

    // Iterar sobre el array amigos y agregar un <li> por cada amigo
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li"); // Crear un nuevo <li>
        li.textContent = amigos[i]; // Establecer el texto del <li> al nombre del amigo
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}

// Parte 3: Función para sortear un amigo de manera aleatoria
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en el HTML
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
}

//parte 1;Tareas específicas: Capturar el valor del campo de entrada: Utilizar document.getElementById o document.querySelector para obtener el texto ingresado por el usuario. (Listo)
// Validar la entrada: Implementar una validación para asegurarse de que el campo no esté vacío. (Listo)
// Si está vacío, mostrar un alert con un mensaje de error: "Por favor, inserte un nombre." (Listo)
//Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push(). (Listo )
//Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.(Listo)



//Parte 2;Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
//Tareas específicas:(Listo)
//Obtener el elemento de la lista: Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
//Limpiar la lista existente: Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
//Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
//Agregar elementos a la lista: Para cada amigo, crear un nuevo elemento de lista.


//Parte 3 ; Escribe una función que seleccione de manera aleatoria uno de los nombres almacenados en el array amigos. Usa Math.random() y Math.floor() para obtener un índice aleatorio.
//Tareas específicas:(Listo)
//Validar que haya amigos disponibles: Antes de sortear, comprobar si el array amigos no está vacío.
//Generar un índice aleatorio: Usar Math.random() y Math.floor() para seleccionar un índice aleatorio del arreglo.
//Obtener el nombre sorteado: Utilizar el índice aleatorio para acceder al nombre correspondiente en el arreglo.
//Mostrar el resultado: Actualizar el contenido del elemento de resultado utilizando document.getElementById()  e innerHTML para mostrar el amigo sorteado.