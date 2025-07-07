function includeHTML() {
    const elements = document.querySelectorAll('[data-include]');
    elements.forEach(el => {
        const file = el.getAttribute('data-include');
        if (file) {
            fetch(file)
                .then(response => {
                    if (!response.ok) throw new Error('Include failed: ' + file);
                    return response.text();
                })
                .then(data => {
                    el.innerHTML = data;
                })
                .catch(error => {
                    el.innerHTML = `<p style="color:red;">Yüklenemedi: ${file}</p>`;
                    console.error(error);
                });
        }
    });
}

document.addEventListener("DOMContentLoaded", includeHTML);
