
document.getElementById("increase-font-size").addEventListener("click", function () {
        changeFontSize(2); 
    });
    
    document.getElementById("decrease-font-size").addEventListener("click", function () {
        changeFontSize(-2);  
    });
    
    function changeFontSize(step) {
        var currentFontSize = parseFloat(getComputedStyle(document.body).fontSize);
        var newFontSize = currentFontSize + step;
        document.body.style.fontSize = newFontSize + "px";
    }

    const animation = document.getElementById('animation');
        const toggleButton = document.getElementById('toggleButton');
        let isPaused = false;

        toggleButton.addEventListener('click', () => {
            if (isPaused) {
                animation.play(); // Se estiver pausado, reproduza a animação.
                toggleButton.textContent = 'Pausar';
            } else {
                animation.pause(); // Se estiver reproduzindo, pause a animação.
                toggleButton.textContent = 'Reproduzir';
            }
            isPaused = !isPaused; // Inverta o estado de pausa.
        });
    
    
