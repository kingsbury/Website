function renderLists(){
  let lists = document.querySelectorAll("ul")

  for(let list of lists){
    let items=list.getAttribute('data-list').split(',');
    let els = []
    for(let item of items){
      els.push(`<li>${item}</li>`)
    }
    list.innerHTML = els.join('')
  }
  
}
