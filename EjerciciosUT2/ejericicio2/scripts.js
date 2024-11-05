$(document).ready(function() {
    $('#agregar-tarea').click(function() {
        const nuevaTarea = $('#nueva-tarea').val().trim(); 

        if (nuevaTarea !== '') {
            const tareaHTML = `
                <li>
                    <span class="nombre-tarea">${nuevaTarea}</span>
                    <button class="editar-tarea">Editar</button>
                    <button class="eliminar-tarea">Eliminar</button>
                </li>`;
            
            
            $('#lista-tareas').append(tareaHTML);
            
            
            $('#nueva-tarea').val('');
        }
    });

    
    $(document).on('click', '.eliminar-tarea', function() {
        $(this).parent().remove(); 
    });

    
    $(document).on('click', '.editar-tarea', function() {
        const tareaElemento = $(this).siblings('.nombre-tarea'); 
        const tareaActual = tareaElemento.text(); 
        $('#tarea-modal').val(tareaActual); 
        $('#modal').data('tareaElemento', tareaElemento); 
        $('#modal').show(); 
    });

    
    $('#guardar-cambio').click(function() {
        const nuevaTarea = $('#tarea-modal').val().trim(); 

        if (nuevaTarea !== '') {
            const tareaElemento = $('#modal').data('tareaElemento'); 
            tareaElemento.text(nuevaTarea); 
            $('#modal').hide(); 
        }
    });

    
    $('#cerrar-modal').click(function() {
        $('#modal').hide(); 
    });

   
    $('#limpiar-tareas').click(function() {
        $('#lista-tareas').empty(); 
    });
});
