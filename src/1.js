import { NewsApiService } from "./service-api";

const formRef = document.querySelector('.js-search-form');
const articlesContainerRef = document.querySelector('.js-articles-container');
const loadMoreBtnRef = document.querySelector('[data-action="load-more"]') 

formRef.addEventListener('submit', onSearch)
loadMoreBtnRef.addEventListener('click', onLoadMore)

const newsApiService = new NewsApiService()
console.log(newsApiService);
function onSearch(e) {
    e.preventDefault()
    const form = e.currentTarget;    
    newsApiService.searchQuery = form.elements.query.value;

    newsApiService.searchArticles()
    .then(res => res.articles)
    .then(articles => {
        const markup = createArticleCards(articles)
        articlesContainerRef.insertAdjacentHTML('beforeend', markup) 
        newsApiService.page += 1    
    })
    form.reset()
}

function onLoadMore() {
    newsApiService.searchArticles()
    .then(res => res.articles)
    .then(articles => {
        const markup = createArticleCards(articles)
        articlesContainerRef.insertAdjacentHTML('beforeend', markup) 
        newsApiService.page += 1 
    })
}  

function createArticleCards(articles) {
    return articles.map(article => {
        return `
        <li>
            <a href="${article.url}" target="_blank" rel="noopener noreferrer">
            <article>
                <img src="${article.urlToImage}" alt="" width="480">
                <h2>${article.title}</h2>
                <p>Posted by: ${article.author}</p>
                <p>${article.description}</p>
            </article>
            </a>
        </li>
        `
    })
}