const formRef = document.querySelector('.js-search-form');
const articlesContainerRef = document.querySelector('.js-articles-container');
const loadMoreBtnRef = document.querySelector('[data-action="load-more"]')

formRef.addEventListener('submit', onSearch)



const BASE_URl = 'https://newsapi.org/v2/everything'
const API_KEY = 'eb07b8ce736e46c8aa360eafd431418e'

const options = {
  headers: {
    Authorization: API_KEY
  }
}

function getArticlesByName(query){
    return fetch(`${BASE_URl}?q=${query}&pageSize=20&page=1`, options)
    .then(response=>response.json())
}



function createArticleCards(articles){
    return articles.map(article=>{
        return `
        <li>
    <a href="${article.url}" target="_blank" rel="noopener noreferrer">
      <article>
        <img src="${article.urlToImage}" alt="" width="480">
        <h2>${article.title}</h2>
        <p>Posted by:${article.author}</p>
        <p>${article.description}</p>
      </article>
    </a>
  </li>
        `
    })
}

function onSearch(event){
  event.preventDefault()
  getArticlesByName(event.currentTarget.elements.query.value)
.then(result=>result.articles)
.then(articles=>{
    const markup = createArticleCards(articles)
    articlesContainerRef.innerHTML = markup
})
}