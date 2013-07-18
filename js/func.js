//Script desarrollado por Jorge Zozaya -  jorge.zozaya.verdiguel@gmail.com

var flag = false;
var leftinicial;
var topinicial;
var siID;
 $(document).ready(function(){

  		var ancho = $(window).width();
  		var anchoWrap = ancho*5.5;
  		var alto = $(window).height();
      var SlideWidth = 700;
      var totalWidth;
      var i;
      var L;
      var Ch;
      var M;
      var SlideWidthL = 150;
      var totalWidthL;
      var SlideWidthCh = 150;
      var totalWidthCh;
      var SlideWidthM = 150;
      var totalWidthM;
      var punto; 
      var ohhh;
      var pluma = "#1148d4";
      var nombre_foto;

      $( 'form#registrar' ).on( 'submit', function( event ) {
        event.preventDefault();
        console.log( $(this).serialize() );
        var datos = $(this).serialize();
         $.ajax({
          type: "POST",
          url: "includes/save.php",
          data: datos
        }).done(function( msg ) {
          alert( "Data Saved: " + msg );
        });
      });
      
    
      setDimenciones();
      var charge = setTimeout(function(){
        cargarGalerias();
      },7000);      

      $('.getTono').on('click', function(){
        pluma = $(this).attr('id');
        console.log(pluma);
        defineColor(pluma);
      });

      var sketchpad = Raphael.sketchpad("editor", {
        width: 600,
        height: 400,
        editing: true
      });

   var pen = sketchpad.pen();
        function defineColor(pluma){
          pen.width(5);
          pen.opacity(.8);
          pen.color(pluma);
        }
  // When the sketchpad changes, update the input field.
  sketchpad.change(function() {
    $("#data").val(sketchpad.json());
    console.log(sketchpad.json());
  });
   $("#editor_undo").click(function() {
      sketchpad.undo();
    });
   $("#redo").click(function() {
      sketchpad.redo();
    });
    $("#clear").click(function() {
      sketchpad.clear();
    });
    $("#shadow").click(function() {
      pen.opacity(0.3);
    });
    $("#groso").click(function() {
     pen.width(15);
    });

      $(window).resize(function() {
        console.log('resize');
        setDimenciones();
      }).scroll(function(){
        var el_avance = $(this).scrollLeft();
        console.log('window scroll: '+el_avance);


         $('.background-body').animate({
          'backgroundPositionX': 1 + el_avance/2
          //'left': '+=2px'
        
        },0);
      });
      

      $('div.stage').hover(function(){
         var mero = $(this).attr('id');
         mero = mero.substring(5,6);
         console.log(mero);
         pintar(mero);
      });

      function pintar(mero){
        $('.cl').removeClass('en');
        $('#f'+ mero).addClass("en");
      }
      function setDimenciones(){
        //pluma = "#183057";
      ancho = $(window).width();
      anchoWrap = ancho*5.5;
      alto = $(window).height();

        $('#wrapper').css({
        'width': anchoWrap,
        'height': alto
          });
          //$('')

          $('.stage').css({
            'width': ancho,
            'height': alto
          }).transition({ skewX: '-30deg' });

          $('.background-body').css({
                'width': anchoWrap/2,
                'height': alto
          });//.transition({skewX: '-30deg'});

          $('#bajomarco').css({
            'width': ancho,
            'height': alto
          }).transition({skewX: '-30deg'});



          $('#stage1').css({
                'marginLeft': 0
          });

          $('.contra').transition({ skewX: '30deg' });


          $('#stage2').css({
            'marginLeft': ancho*1.5+'px'
          });
          $('#stage3').css({
            'marginLeft': ancho*3+'px'
          });
          $('#stage4').css({
            'marginLeft': ancho*4.5+'px'
          });

          $('.marco').css({'width': ancho+'px'});
      }
  
         function cargarGalerias(){
          $('#mascara-laminados').load('includes/laminados.html');
         }

	  		

            /*$('.marco').animate({
               width: ancho
            },600, 'easeOutCirc', function(){
            	 $('hbody').scrollLeft(ancho*4.5).delay(1200).animate({scrollLeft: 0}, 3200, 'easeOutCirc',function(){
            	 
            	 });
            }); */

            $('#top').animate({
          backgroundPositionY: '+=600'
        }, 5200, 'easeInOutQuart');

            proof();
            function proof(){
            var newMargin = CurrentMargin() - SlideWidth;
            totalWidth =  $('div.slide').length;           
            nextProof();            
            }       

            function nextProof(){
            var newMargin = CurrentMargin() - SlideWidth;

             if(i < totalWidth){

            $("#container").delay(5500).animate({ marginLeft: newMargin },800, 'easeInBack', function () { proof() });
            i++;
           } else {
        
         $("#container").delay(20000).animate({ marginLeft: 0 }, 500, 'easeInBack', function () { proof() });
         i = 1;
        //return;
        }
          }

          function CurrentMargin() {
    
            var currentMargin = $("#container").css("margin-left");
            if (currentMargin == "auto") {
                currentMargin = 0;
            }

            return parseInt(currentMargin);
        }
    
  
    $('.cl').on('click', function(){
      $('.cl').removeClass('en');
      $(this).addClass('en');
     var extern = $(this).attr('id');
     extern = extern.substring(1,2)
      ext(extern);
    });

    function ext(param){
     ohhh = $('#stage'+param).offset().left;
     console.log('cada stage: ');
     console.log('\n');
     console.log(ohhh);
         $('#top')
        .animate( { borderBottomColor: "#c3a77f" }, 100 )
        .delay(200)
        .animate( { borderBottomColor: "#9b7e54" }, 100 )
        .delay(200)
        .animate( { borderBottomColor: "#a28356" }, 100 );
      
       $('html, body').animate({

         scrollLeft: ($('#stage'+param).offset().left)+100
      },1900, 'easeInOutQuart');
    }

    $('.cl').hover(function(){
         $(this)
        .stop() 
        .animate( { color: "#c3a77f" }, 100 )
        .delay(100)
        .animate( { color: "#9b7e54" }, 100 )
        .delay(100)
        .animate( { color: "#a28356" }, 100 );       
    });


  var btn_firma = $('#addImage'), interval;
new AjaxUpload('#addImage', {
        action: 'includes/uploadFile.php',
        onSubmit : function(file , ext){
          if (! (ext && /^(jpg|png)$/.test(ext))){
            // extensiones permitidas
            alert('Sólo se permiten Imagenes .jpg o .png');
            // cancela upload
            return false;
          } else {
            $('#loaderAjax').show();
            btn_firma.text('Espere por favor');
            this.disable();
          }
        },
        onComplete: function(file, response){

          // alert(response);
          
          btn_firma.text('Cambiar Imagen');
          
          respuesta = $.parseJSON(response);

          if(respuesta.respuesta == 'done'){
          //  $('#fotografia').removeAttr('scr');
           // $('#fotografia').attr('src','boceto/' + respuesta.fileName);
           var inputFoto = '<input type="text" name="foto" id="foto" value="boceto/'+respuesta.fileName+'"/>';
           $('form#registrar').prepend(inputFoto);

            nombre_foto = respuesta.fileName;
            //nombre_f1 = respuesta.fileName;
            encanvas(nombre_foto);
            $('#loaderAjax').show();
            // alert(respuesta.mensaje);
            $('input#foto').on('click', function(){
alert('ok');
});

          }
          else{
            alert(respuesta.mensaje);
          }
            
          $('#loaderAjax').hide();  
          this.enable();  
        }
    });
function encanvas(nombre_foto){
var clic=false;
var xCoord,yCoord="";  
var can = document.getElementById('boceto');
var ctx = can.getContext('2d');

var img = new Image();
img.onload = function(){
    can.width = img.width + 500;
    can.height = img.height + 300 ;
    ctx.drawImage(img, 0, 0, img.width+500, img.height+300);
}
//img.src = 'zlati-nathalie.jpg';

img.src = 'boceto/'+nombre_foto;
}
var reff = setInterval(function(){
  var refscrl = $(window).scrollLeft();
   if(refscrl >= 700 && refscrl <= 2115){
        parallax(refscrl);
        //console.log('joyas');
      }
}, 100);

$('body').mousewheel(function(event, delta, deltaX, deltaY) {     
       
      this.scrollLeft -= (delta * 30);
      event.preventDefault();
      console.log('\n');      
      console.log(-1*(delta*30));     
   });


$('.ball').on('click', function(){

  leftinicial = $(this).css("left");
  topinicial = $(this).css("top");
  siID = $(this).attr('id'); 
  var eltop;
 // alert(siID);
  //alert(leftinicial+'  '+topinicial);
  if(siID == 'ball1' || siID == 'ball2'){
    eltop = -200;
  } else {
    eltop = 500;
  }
   /*
    $(this).css({
       'background':'url(assets/wl_projects_wood.jpg)',
       'overflow': 'visible',
       'width': '500px',
       'height': '500px',
       'borderRadius': '500px',
       'z-index': '350',
       'left': '1300px',
       'top': eltop+'px'  
    });
    */
    $(this).animate({
        width: 1000,
        height: 1000,
        left: 1150,
        top: eltop-100
    },500, 'easeOutCirc').css({
     //  'background':'url(assets/batthern.png)',
       'borderRadius': '1000px',
       'z-index': '350'
    });
     $('#top').animate({
        top: '-58px'
      },700, 'easeOutCirc');

    $('#fancylayer').show();
    $('#mascara-laminados').css({
      'overflow': 'hidden'
    });
   
    });

$('#close').on('click', function(){
   estadoInicial();
   $('#fancylayer').fadeOut(600, 'easeInOutQuart');
   $('#top').animate({
        top: 0
      },600, 'easeOutCirc');

   });

function estadoInicial(){
 // alert(leftinicial+'  '+topinicial+'  '+siID);
 $('mascara-laminados').css({
  'overflow': 'hidden'
 });
  $('#'+siID).css({
       'background': 'none',
       'overflow': 'hidden', 
       'width': '250px',
       'height': '250px',
       'borderRadius': '250px',
       'z-index': '10',
       'left': leftinicial,
       'top': topinicial
           });


 return false;
   
}


function parallax(refscrl){
  //console.log(refscrl);  
  var paral1 = (refscrl/100)*50;  //1200   100  1
  var paral2 = (refscrl/100)*50;  //1600   100  2
  var paral3 = (refscrl/100)*50;   //1200   500  3
  var paral4 = (refscrl/100)*50;  //1600    500   4

  var paral1t = (refscrl/100)*18;  
  var paral2t = (refscrl/100)*18;  
  var paral3t = (refscrl/100)*18;   
  var paral4t = (refscrl/100)*18;  
  //console.log('resta');
  console.log('\n');
  console.log(refscrl);
     $('#ball1').css({'margin-left': -1*(paral1)+'px', 'margin-top':paral1t+'px' });  //left 1200  y tiene que quedar en 200
     $('#ball2').css({'margin-left': -1*(paral2)+'px', 'margin-top':paral2t+'px' });
     $('#ball3').css({'margin-left': -1*(paral3)+'px', 'margin-top':-1*(paral1t)+'px' });
     $('#ball4').css({'margin-left': -1*(paral4)+'px', 'margin-top':-1*(paral1t)+'px' });
}

       

$('#contenedor-laminados img').css({
  'height': '250px'
}).on('mouseenter', function(){
  var infoo = $(this).attr('src');
 $('.tooltip').empty().append(infoo).show('slow');
}).on('mouseout', function(){
  $('.tooltip').hide();
});

$('#contenedor-chapas img').css({
  'height': '250px'
}).on('mouseenter', function(){
  var infoo = $(this).attr('src');
 $('.tooltip2').empty().append(infoo).show('slow');
}).on('mouseout', function(){
  $('.tooltip2').hide();
});





var slider  = $('#slider');

      //Call the Slider
      slider.slider({
        //Config
        //range: "min",
        min: 1,
        max: 38,
        value: 2,

        start: function(event,ui) {
            
        },

        //Slider Event
        slide: function(event, ui) { //When the slider is sliding

          var value  = slider.slider('value');

          console.log('value slide ********************');
          console.log('\n');
          console.log(value);
          nextProofLaminado(value);         
         
        },

        stop: function(event,ui) {
            
        },
      });
 
     
function nextProofLaminado(value){
            if(value < 3){
              $("#contenedor-laminados").stop().animate({ marginLeft: 0 },100, 'easeOutCirc');
            } else if(value > 40){
              return;
            } else {
             var newMarginL = value*(SlideWidthL/-1);
             $("#contenedor-laminados").stop().animate({ marginLeft: newMarginL },100, 'easeOutCirc');
            }
          }




var slider2  = $('#slider2');
       
      //Call the Slider
      slider2.slider({
        //Config
        //range: "min",
        min: 1,
        max: 21,
        value: 2,

        start: function(event,ui) {
           
        },

        //Slider Event
        slide: function(event, ui) { //When the slider is sliding

          var value2  = slider2.slider('value');

          nextProofChapas(value2);         
         
        },

        stop: function(event,ui) {
           
        },
      });
 
     
function nextProofChapas(value2){
            if(value2 < 3){
              $("#contenedor-chapas").stop().animate({ marginLeft: 0 },100, 'easeOutCirc');
            } else if(value2 > 22){
              return;
            } else {
             var newMarginCh = value2*(SlideWidthL/-1);
             $("#contenedor-chapas").stop().animate({ marginLeft: newMarginCh },100, 'easeOutCirc');
            }
          }


});


