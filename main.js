(function(){
  var servicesContent = '';
  var serviceList = document.registerElement('service-list');
  var servicesEl = document.getElementsByTagName('service-list');

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
  
  servicesEl[0].innerHTML = '<ul>'+servicesContent+'<ul>';  
})();
