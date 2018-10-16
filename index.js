function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')
  lis.forEach(function(li) {
    li.innerHTML = Number.parseInt(li.innerHTML) + n
  })
}

function deepestChild() {
  let results = document.querySelectorAll('div#grand-node div')
  return results[results.length - 1]
}
