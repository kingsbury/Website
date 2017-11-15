(function(){
  var servicesContent = '';
  var serviceList = document.registerElement('service-list');
  var servicesEls = document.getElementsByTagName('service-list');

  var services = [
    'Graphic Design',
    'Illustration',
    'Web Design',
    'UI/UX Design',
    'Other Cool Stuff' 
  ];
  
  services.forEach(function(service){
    servicesContent+='<li>'+service+'</li>';
  });
  
  servicesEls.forEach(function(el){
    el.innerHTML = '<ul>'+servicesContent+'<ul>'; 
  }); 
  
})();
