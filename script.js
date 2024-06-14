document.addEventListener('DOMContentLoaded', function () {
    const creatures = document.querySelectorAll('.creatures span');
    const images = document.querySelectorAll('.carousel-slide img');
    
    creatures.forEach(creature => {
        creature.addEventListener('click', function () {
            const id = 'img-' + this.id;
            images.forEach(img => {
                if (img.id === id) {
                    img.style.display = 'block';
                } else {
                    img.style.display = 'none';
                }
            });
        });
    });

  });