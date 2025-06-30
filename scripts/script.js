document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        const sectionId = this.id.replace('-button', '');
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});