(function(){
  var serviceList = document.registerElement('custom-list');
  var lists = Array.prototype.slice.call( document.getElementsByTagName('custom-list'), 0 );

  this.services = [
    'Graphic Design',
    'Illustration',
    'Web Design',
    'UI/UX Design',
    'Other Cool Stuff' 
  ];
  
  this.hobbies = [
    'VWs',
    'Art',
    'Kids',
    'Tennis',
    'Other Cool Stuff' 
  ];
  
  lists.forEach(function(el){
    var src = el.getAttribute('list');
    var list = createList(src);
    el.innerHTML = '<ul>'+list+'<ul>'; 
    
    console.log("src", src);
    console.log("list", list);
  }); 
  
  function createList(listSrc){
    var content="";
    this[listSrc].forEach(function(item){
      content+='<li>'+item+'</li>';
    });
    return content;
  }
  
})();
