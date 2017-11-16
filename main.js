(function(){
  var serviceList = document.registerElement('custom-list');
  var lists = Array.prototype.slice.call( document.getElementsByTagName('custom-list'), 0 );

  var services = [
    'Graphic Design',
    'Illustration',
    'Web Design',
    'UI/UX Design',
    'Other Cool Stuff' 
  ];
  
  var hobbies = [
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
  }); 
  
  function createList(src){
    var content="";
    src.forEach(function(item){
      content+='<li>'+item+'</li>';
    });
    return content;
  }
  
})();
