(function(){
  var serviceList = document.registerElement('custom-list');
  var lists = Array.prototype.slice.call( document.getElementsByTagName('custom-list'), 0 );

  this.services = ['Graphic Design','Illustration','Web Design','UI/UX Design','Other Cool Stuff'];
  this.hobbies = ['VWs','Art','Kids','Tennis','Other Cool Stuff'];
  
  lists.forEach(function(el){
    var list = this[el.getAttribute('list')];
    var items = list.map(function(item){ return `<li>${item}</li>`; });
    el.innerHTML = `<ul>${items}<ul>`; 
  });   
})();
