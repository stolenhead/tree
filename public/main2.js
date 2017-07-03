var template = '<div id="num_gestas" class="inline">{{numgestas}}</div>'+
				'<svg height="10" width="100"><line x1="0" y1="10" x2="100" y2="10" style="stroke:rgb(255,0,0);stroke-width:2" /></svg>';
 var template2 ='<div id="num_bebes" class="inline">{{numbebes}}</div>'+
    	        '<svg height="10" width="100"><line x1="0" y1="10" x2="100" y2="10" style="stroke:rgb(255,0,0);stroke-width:2" /></svg>';
 var template3 ='<div id="num_tipo" class="inline">{{numtipo}}</div>'+
    	        '<svg height="10" width="100"><line x1="0" y1="10" x2="100" y2="10" style="stroke:rgb(255,0,0);stroke-width:2" /></svg>';
var template4= '<div id="num_vivos" class="inline">{{nummuertos}}</div>'+
    	        '<svg height="10" width="100"><line x1="0" y1="10" x2="100" y2="10" style="stroke:rgb(255,0,0);stroke-width:2" /></svg>';
    	
var mostrar=function(){
  $("#usuario").empty();
  $.ajax({
    url: window.location.href + "data_2.json",
    type:'GET',
    success: function(response){
      	var data=response.gestantes[0];
      	var mostrar_numges ="";
      	var mostrar_numbebes="";
      	var mostrar_tipos="";
      	mostrar_numges=template.replace("{{numgestas}}",data.num_gestas);
      	mostrar_numbebes=template2.replace("{{numbebes}}",data.fetos.length);
      	$("#usuario").append(mostrar_numges,mostrar_numbebes,mostrar_tipos);
      	var fetos =data.fetos.length;
      	var feto=data.fetos;
      	for(var i=0;fetos>i;i++){
      		var terminacio =feto[i].terminacion;
      		mostrar_tipos=template3.replace("{{numtipo}}",terminacion.typeof(vaginal).length);
      	}
      	mostrar_numges="";
		    mostrar_numbebes="";
	      mostrar_tipos="";
    },
    error:function(error){
      console.log(error);
    }
  });   
}

$(document).ready(function(){
  $("#show").click(mostrar);
  });