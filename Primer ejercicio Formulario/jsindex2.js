class Estudiante {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class GestionEstudiantes {
    constructor() {
        this.estudiantes = [];
    }

    agregarEstudiante(nombre) {
        const nuevoEstudiante = new Estudiante(nombre);
        this.estudiantes.push(nuevoEstudiante);
        this.mostrarEstudiantes();
    }

    eliminarEstudiante(index) {
        if (index > -1 && index < this.estudiantes.length) {
            this.estudiantes.splice(index, 1);
            this.mostrarEstudiantes();
        }
    }

    mostrarEstudiantes() {
        const lista = document.getElementById('studentList');
        lista.innerHTML = '';
        this.estudiantes.forEach((estudiante, index) => {
            const li = document.createElement('li');
            li.textContent = estudiante.nombre;
            
            const btnEliminar = document.createElement('button');
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.classList.add('delete');
            btnEliminar.onclick = () => this.eliminarEstudiante(index);
            
            li.appendChild(btnEliminar);
            lista.appendChild(li);
        });
    }
}

const gestion = new GestionEstudiantes();

document.getElementById('addStudent').addEventListener('click', () => {
    const input = document.getElementById('studentName');
    const nombre = input.value.trim();
    if (nombre) {
        gestion.agregarEstudiante(nombre);
        input.value = '';
    } else {
        alert("Por favor ingresa un nombre.");
    }
});
