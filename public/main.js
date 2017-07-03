var mostrar=function(){
  $("#usuario").empty();
  $.ajax({
    url: window.location.href + "data.json",
    type:'GET',
    success: function(response){
      var data=response.usuario[0];
      $("#usuario").append('<div class="div-arbol" >'+ data.numero_gestas+'</div>');
      var hijos =data.bebes.length;
      dibujarhijos(hijos);
    },
    error:function(error){
      console.log(error);
    }
  });   
}
function dibujarhijos(hijos){
  if(hijos>1){
    console.log(hijos);
  }
      }
$(document).ready(function(){
  $("#show").click(mostrar);
});

