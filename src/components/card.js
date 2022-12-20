import axios from "axios";

const Card = (article) => {
  const div = document.createElement('div');
  div.classList.add('card')

  const headline = document.createElement('div')
  headline.classList.add('headline')
  headline.textContent = article.headline

  const author = document.createElement('div')
  author.classList.add('author')

  const imgContainer = document.createElement('div')
  imgContainer.classList.add('img-container')

  const img = document.createElement('img')
  img.setAttribute('src', article.authorPhoto)
  

  const span = document.createElement('span')
  span.textContent = article.authorName


  div.appendChild(headline)
  div.appendChild(author)
  div.appendChild(imgContainer)
  div.appendChild(img)
  div.appendChild(span)

  div.addEventListener('click', () => {
    console.log(headline.textContent)
  })

  return div
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}


const cardAppender = (selector) => {
  axios.get(`http://localhost:5001/api/articles`)
  .then(res => {
    console.log(res);
    const selectors = document.querySelector(selector)
    res.data.articles.bootstrap.map(item => {
      let newCard1 = Card(item)
      selectors.appendChild(newCard1)
    })
    res.data.articles.javascript.map(item => {
      let newCard2 = Card(item)
      selectors.appendChild(newCard2)
    })
    res.data.articles.jquery.map(item => {
      let newCard3 = Card(item)
      selectors.appendChild(newCard3)
    })
    res.data.articles.node.map(item => {
      let newCard4 = Card(item)
      selectors.appendChild(newCard4)
    })
    res.data.articles.technology.map(item => {
      let newCard5 = Card(item)
      selectors.appendChild(newCard5)
    })

  }) 
  .catch(err => {
    console.error(err)
  })
  .finally(() => console.log('IM FINISHED!'))
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
