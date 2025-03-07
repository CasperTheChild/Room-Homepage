document.addEventListener('DOMContentLoaded', function () {
    const leftButton = document.querySelector('.main__carousel-left-button');
    const rightButton = document.querySelector('.main__carousel-right-button');
    
    const sections = document.querySelectorAll('.main__intro');
    let currentIndex = 0;
  
    function updateSections() {
        sections.forEach((section, index) => {
        section.classList.remove('visible');
        section.classList.add('d-none');        // Hide all sections
          
        if (index === currentIndex) {       // Show the section corresponding to the currentIndex
            section.classList.remove('d-none');
            setTimeout(() => {
                section.classList.add('visible');
            }, 10);
        }
      });
    }

    leftButton.addEventListener('click', function () {      // Function for the left button (previous section)
        currentIndex = (currentIndex + sections.length - 1) % sections.length;
        updateSections();
    });
  
    // Function for the right button (next section)
    rightButton.addEventListener('click', function () {
        currentIndex = (currentIndex + sections.length + 1) % sections.length;
        updateSections();
    });

    updateSections();       // Initial call to show the first section
  });
A  