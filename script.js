console.log('This is quote Generator')
const quotes = [
  {
    quote:
      'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    author: 'Martin Fowler'
  },
  {
    quote: 'First, solve the problem. Then, write the code.',
    author: 'John Johnson'
  },
  {
    quote: 'Java is to JavaScript what car is to Carpet.',
    author: ' Chris Heilmann'
  },
  {
    quote: ' Code is like humor. When you have to explain it, it’s bad.',
    author: 'Cory House'
  },
  {
    quote: ' Before software can be reusable it first has to be usable',
    author: 'Ralph Johnson'
  }
]
let quoteContainer = document.querySelector('#quote')
let authorContainer = document.querySelector('#author')
document.querySelector('.btn').addEventListener('click', () => {
  console.log('clicked')
  let index = Math.floor(Math.random() * quotes.length)
  quoteContainer.textContent = quotes[index].quote
  authorContainer.textContent = quotes[index].author
})
