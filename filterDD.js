$(document).ready(function(){
  console.log("good to go");
  var elems = document.querySelectorAll('.dropdown-trigger');
  M.Dropdown.init(elems, {"closeOnClick":false});
  instances.forEach(instance => {
    console.log(instance);
  });

  // //stop the propagation when a box is selected
  // $('.filled-in').on('click', function(event) {
  //   console.log("box is ticked");
  // //try to stop propagation
  //   event.stopPropagation();
  //   // target the bax itself
  //   var elems = document.querySelectorAll('.dropdown-trigger');
  //   var instances = M.Dropdown.init(elems, {"closeOnClick":false});
  //  //need to use these inited instances
  //   instances.forEach(instance => {
  //     console.log(instance);
  //   });
  // });

 
});
