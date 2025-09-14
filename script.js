// Adiciona interatividade básica (exemplo: alerta ao clicar em um post)
document.querySelectorAll('.post-card .btn').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// Funcionalidade de Mostrar Mais/Menos Artigos
const postGrid = document.querySelector('.post-grid');
const toggleButton = document.querySelector('.toggle-articles');
const limit = parseInt(postGrid.getAttribute('data-article-limit') || 2);

let visibleArticles = limit;

function updateArticles() {
    const articles = postGrid.querySelectorAll('.post-card');
    articles.forEach((article, index) => {
        if (index < visibleArticles) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });

    if (visibleArticles >= articles.length) {
        toggleButton.textContent = 'Mostrar Menos';
    } else {
        toggleButton.textContent = 'Mostrar Mais';
    }
}

toggleButton.addEventListener('click', () => {
    const articles = postGrid.querySelectorAll('.post-card');
    if (visibleArticles >= articles.length) {
        visibleArticles = limit;
    } else {
        visibleArticles = articles.length;
    }
    updateArticles();
});

// Inicializa a exibição
updateArticles();
