(function() {
    'use strict';

    // Asegurarse de que el DOM esté completamente cargado
    document.addEventListener('DOMContentLoaded', function() {
        console.log('Panel Desktop App inicializada correctamente');
        
        // Inicializar la aplicación
        initApp();
    });

    function initApp() {
        // Obtener referencias a los paneles
        const panels = {
            title: document.querySelector('.panel-title'),
            left: document.querySelector('.panel-left'),
            canvas: document.querySelector('.panel-canvas'),
            right: document.querySelector('.panel-right')
        };

        // Verificar que todos los paneles existan
        for (const [key, panel] of Object.entries(panels)) {
            if (!panel) {
                console.error(`Error: No se encontró el panel ${key}`);
                return;
            }
        }

        // Manejador de errores global
        window.onerror = function(message, source, lineno, colno, error) {
            console.error('Error en la aplicación:', {
                message,
                source,
                lineno,
                colno,
                error
            });
        };
    }
})();
