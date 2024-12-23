        const sections = document.querySelectorAll('.a-section');

        sections.forEach(section => {
            section.addEventListener('click', () => {
                section.classList.toggle('active');
                const content = section.querySelector('.a-content');
                content.classList.toggle('active');

                sections.forEach(otherSection => {
                    if (otherSection !== section) {
                        otherSection.classList.remove('active');
                        const otherContent = otherSection.querySelector('.a-content');
                        otherContent.classList.remove('active');
                    }
                });
            });
        });
    