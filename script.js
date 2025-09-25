// Adiciona interatividade básica (exemplo: alerta ao clicar em um post)
document.querySelectorAll('.post-card .btn').forEach((button, index) => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (index === 0) {
      window.location.href = 'IA.html';
    } else if (index === 1) {
      window.location.href = 'RV.html';
    } else if (index === 2) {
      window.location.href = 'secure.html';
    } else if(index=== 3) 
    window.location.href = '5G.html';
  } else if(index === 3)
  window.location.href ='Visão.html'
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