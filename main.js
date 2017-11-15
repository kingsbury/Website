(function(){
  console.log("Script included and called");
  
  var servicesContent = '';
  var services = document.querySelector('services');

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
  services.innerHTML = '<ul>'+servicesContent+'<ul>';
  
})();
