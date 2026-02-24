document.addEventListener('DOMContentLoaded', () => {
    const menuButtons = document.querySelectorAll('button .material-symbols-outlined, div .material-symbols-outlined');
    
    menuButtons.forEach(icon => {
        if (icon.textContent.trim() === 'menu') {
            const button = icon.parentElement;
            button.addEventListener('click', () => {
                const header = button.closest('header');
                if (header) {
                    const nav = header.querySelector('nav');
                    if (nav) {
                        nav.classList.toggle('hidden');
                        nav.classList.toggle('flex');
                        nav.classList.toggle('flex-col');
                        nav.classList.toggle('absolute');
                        nav.classList.toggle('top-full');
                        nav.classList.toggle('left-0');
                        nav.classList.toggle('w-full');
                        nav.classList.toggle('bg-white');
                        nav.classList.toggle('dark:bg-[#211113]');
                        nav.classList.toggle('p-4');
                        nav.classList.toggle('shadow-lg');
                        nav.classList.toggle('z-50');
                    }
                }
            });
        }
    });
});
