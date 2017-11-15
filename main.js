(function(){
  var servicesContent = '';
  var servicesList = document.querySelector('#serviceList');

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
  
  servicesList.innerHTML = serviceContent;
  
})();
