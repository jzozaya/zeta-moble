//Inicializar
var where = 1;

jQuery(

  function ($) {
    
    $.Body = $('body');   
    $.Window = $(window); 
    $.Document = $(document);  
   // $.Scroll = ($.browser.mozilla || $.browser.msie) ? $('html') : $.Body;
    $.Mobile = ($.Body.hasClass('webkit-mobile') || (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))),
    $.Unsupported = $.Body.hasClass('unsupported-browser');	

    var acadarao = setInterval(function(){
    	interCalc()
    	
    },1000);

    $('#foot_3').click(function ()
    {
       // $(window.location).attr('href', 'http://www.google.com');
        window.close();
        window.open('http://www.futbolfinanciero.com.mx/'); 

    });

        
   
        $('#home').on('click', function(){

          animateHome();
          where = 1;
        });
         $('#premios').on('click', function(){
          	
          animatePremios();
          where = 2;
        });
          $('#como').on('click', function(){
          	
          animateComo();
          where = 3;	
        });
           $('#calc').on('click', function(){
           	
          animateCalc(); 
          where = 4;	
        });

		$( "#draggable" ).draggable({
			start: function( event, ui ) {
				$('#guiaHome').css({
					'background-position': '0 100%',
					'height': '312px'
			});
			},
			stop: function( event, ui ) {
				$('#guiaHome').css({
					'background-position': '0 0',
					'height': '317px'
				});
			}
		});
		$( "#droppable" ).droppable({
		drop: function( event, ui ) {
		
		animatePremios();
		where = 2;
		$('#draggable').css({
             'left': '195px',
             'top': '320px'
		});
		
		}

		});

		

		$( "#draggablePremios" ).draggable({
			start: function( event, ui ) {
				$('#guiaPremios').css({
					'background-position': '0 99%',
					'left': '127px',  //#guiaPremios:hover{background-position: 0 99%; left: 127px;}
					'top': '20px'
				});
			},
			stop: function( event, ui ) {
				$('#guiaPremios').css({
					'background-position': '0 0',
					'left': '100px'
				});
			}
		});
		$( "#droppablePremios" ).droppable({
		drop: function( event, ui ) {
		
		animateComo();
		where = 3;
		$('#draggablePremios').css({ 
             'left': '80px',
             'top': '300px'
		});
		}

		});

		$( "#draggableComo" ).draggable({
			start: function( event, ui ) {
				$('#guiaComo').css({
					'background-position': '0 99%'
				});
			},
			stop: function( event, ui ) {
				$('#guiaComo').css({
					'background-position': '0 0'
					
				});
			}
		});
		$( "#droppableComo" ).droppable({
		drop: function( event, ui ) {
		
		animateCalc();
		where = 4;
		$('#draggableComo').css({  //right: 255px; top: 0;
             'left': '550px',
             'top': '0'
		});
		}

		});

		$( "#draggableCalc" ).draggable({
			start: function( event, ui ) {
				$('#guiaCalc').css({
					'background-position': '0 99%',
					'height': '510px',
					'top': '10px'
				});
			},
			stop: function( event, ui ) {
				$('#guiaCalc').css({
					'background-position': '0 0',
					'height': '500px',
					'top': 'top: -19px;'
					
				});
			}
		});
		$( "#droppableCalc" ).droppable({
		drop: function( event, ui ) {
		
		animateHome();
		where = 1;
		$('#draggableCalc').css({  //right: 2px; bottom: 100px;
             'left': '800px',
             'top': '220px'
		});
		}

		});
		function animateHome(){  //  1
			if(where == 2){
				de2a1();				
			} else if (where == 3){
				de2a1();
				de3a1();		

			} else if (where == 4){
				de2a1();
				de3a1();	
                de4a1();
			} else {
				return; 
			}
		}
		function animatePremios(){ //  2
			if(where == 1){
				de1a2();
			} else if (where == 3){
				$('#foto_premios').animate({
				top: '48px'
			},600, 'easeInOutQuart');
				de3a1();
				de1a2();

			} else if (where == 4){
               de4a1();
               de3a1();
               de1a2();
			} else {
				return;
			}
		}
		function animateComo(){ //  3
			if(where == 1){
				$('#seccion3').animate({
				
				top: '48px'
			},800, 'easeInOutQuart');

				de1a3();
			} else if (where == 2){
				$('#seccion3').animate({
				
				top: '48px'
			},800, 'easeInOutQuart');
				de2a3();
				de1a3();

			} else if (where == 4){
			//de3a1();	
               de4a3();
               $('#seccion3').animate({
				
				top: '48px'
			},800, 'easeInOutQuart');
               indicadorComo();
			} else {
				return;
			}
		}
		function animateCalc(){  // 4
			if(where == 1){
               de1a4();
			} else if (where == 2){
				de2a4();
				de1a4();

			} else if (where == 3){
				de3a4();

			} else {
				return;
			}
		}
		function de3a2(){

		}
		function de2a1(){
			$('#seccion2').animate({
				opacity: 0,
				left: '1024px'
			},100, 'easeInOutQuart', function(){
             $('#seccion1').css({
             	'opacity':'1'
             }).animate({
               left: '2px'
             },600, 'easeInOutQuart', function(){
             	indicadorHome();
             	 $('#foto_premios').animate({
               top: '-500px'
             },600, 'easeInOutQuart');
             });
			});
		}
		function de3a1(){
			$('#seccion3').animate({
                    left: '-1024px'
				},400, 'easeInOutQuart');
				$('#foto_como').animate({
					bottom: '-500px'
				},600, 'easeInOutQuart');
				//indicadorHome();
		}
		function de4a1(){
			$('#seccion4').animate({
				bottom: '-496px'
			},700, 'easeInOutQuart');
			$('#foto_calc').animate({
				bottom: '-500px'
			},800, 'easeInOutQuart');

		}
		function de4a3(){
			$('#seccion4').animate({
				bottom: '-496px'
			},700, 'easeInOutQuart');
			 $('#foto_co qmo').animate({
               bottom: '127px'
             },600, 'easeInOutQuart');
			$('#foto_calc').animate({
				bottom: '-500px', //bottom: -500px; left: 1024px;
				left: '1024px'
			},800, 'easeInOutQuart');
			$('#seccion3').animate({
				left: '0',
				top: '48px'
			},800, 'easeInOutQuart');

		}

		function indicadorHome(){
			$('#indicador').animate({
		      backgroundPositionY: 0
		    }, 1200, 'easeInOutQuart');
		}

		function de1a2(){
			$('#seccion1').animate({
				opacity: 0,
				left:  '1024px' 
			},100, 'easeInOutQuart', function(){			
		
			$('#seccion2').css({
				'opacity':'1'
			}).animate({
				left: 0
			},1000, 'easeInOutQuart', function(){
			indicadorPremios();	
			$('#foto_premios').css({
				'z-index':'10'
			}).animate({
				top: '47px'
			},600, 'easeInOutQuart');
			});
			});
		}
		function indicadorPremios(){
			$('#indicador').animate({
		      backgroundPositionY: '34%'
		    }, 1000, 'easeInOutQuart');
		}

		function de1a3(){
			$('#seccion1').animate({
				opacity: 0,
				left:  '1024px' 
			},100, 'easeInOutQuart');

             $('#foto_como').css({
            	'z-index': '10'
            }).animate({
            	bottom: '127px'
            },600, 'easeInOutQuart', function(){
            	indicadorComo();
            	$('#seccion2').animate({
            		left: '1024px'
            	},600, 'easeInOutQuart');
            });
		}
		function de2a3(){
			$('#foto_premios').animate({
                 top: '-500px'
			},600, 'easeInOutQuart');
			$('#seccion2').animate({
            		left: '1024px'
            	},600, 'easeInOutQuart');
			
		} 
		function indicadorComo(){
			$('#seccion3').animate({
				left: 0
			},700, 'easeInOutQuart');
			$('#indicador').animate({
		      backgroundPositionY: '68%'
		    }, 1000, 'easeInOutQuart');
		}

		function de1a4(){
			$('#seccion1').animate({
				//top: '-500px',
				left: '1024px'
			}, 1300, 'easeInOutQuart');
			$('#foto_calc').css({
				'z-index':'20'
			}).animate({
				bottom: '127px',
				left: '0'	
			},1800, 'easeInOutQuart');
			$('#seccion4').animate({
				bottom:'127px',
				opacity: '1'
			},1800, 'easeInOutQuart');
			$('#indicador').animate({
		      backgroundPositionY: '100%'
		    }, 2200, 'easeInOutQuart');
		}
		function de3a4(){
			$('#seccion3').animate({
				top: '-500px',
				left: '-1024px'
			}, 1300, 'easeInOutQuart');
			$('#foto_calc').css({
				'z-index':'20'
			}).animate({
				bottom: '127px',
				left: '0'	
			},1800, 'easeInOutQuart');
			$('#seccion4').animate({
				bottom:'127px',
				opacity: '1'
			},1800, 'easeInOutQuart');
			$('#indicador').animate({
		      backgroundPositionY: '100%'
		    }, 2200, 'easeInOutQuart');
		}

		function de2a4(){

			$('#seccion2').animate({
				left: '1024px'
			},600, 'easeInOutQuart');
			$('#foto_premios').animate({
				top: '-500px'
			},600, 'easeInOutQuart');
		}

		$('.cifra').keyup(function() {
			 var cual = $(this).attr('id'); 
			 var deep = $(this).val();
			 if($.isNumeric(deep)){
			 	calculars(cual, deep);
			 	//console.log('num');
			 }else {
			 	$(this).val('');
			 	return false;
			 }
		});
		
         /*
		$('#resultado').on('click', function(){
			stuff = [];
			$('p.only').each(function(){
			    stuff.push($(this).text());
			  });

			$('#res_tot').text(sumarArr(stuff));

			var xxx = $('#i1').val();
			
		});
*/

		function interCalc(){
			stuff = [];
			$('p.only').each(function(){
			    stuff.push($(this).text());
			  });

			$('#res_tot').text(sumarArr(stuff));
		}
});

function sumarArr(stuff){
	console.log(stuff[4]);
	var suma=0;
	
	for(var i=0; i<stuff.length; i++) {
			
			suma += parseInt(stuff[i]);
			
			}

	 console.log(suma);	 
	 return suma;
			
}


function calculars(cual, deep){
  var digito = cual.substring(1,2);	
  
	  if (digito == 1)
	{
	   deep = deep / 2500;
	}
	else if (digito == 2)
	{
	   deep = deep / 5000;
	}
	else if (digito == 3)
	{
	  deep = deep / 1000;
	}	
	else 
	{
	  if(deep >= 2000)
	  {
	  	deep = 1;
	  }else{
	  	deep = 0;
	  }
	  //deep = deep / 2000;  

	}
	
	 $('#r'+digito).text(Math.floor(deep));

	 


}







