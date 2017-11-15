(function(){
  console.log("Script included and called");
  
  var servicesContent = '';
  var serviceList = document.registerElement('service-list');
  var services = document.getElementsByTagName('service-list');

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
  
  console.log("servicesContent", servicesContent);
  services[0].innerHTML = '<ul>'+servicesContent+'<ul>';
  
})();
