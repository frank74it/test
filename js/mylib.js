/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
   // animazione di apertura menu
     $(document).ready(function () {            
               
                $('.mob-menu-ico').click(function(){
                    $(this).toggleClass('active');
                    $('header nav ul').slideToggle('fast',function(){
                       if ($(this).is(":hidden")) { /*in caso che il clic nasconda il menu, viene poi eliminato lo stile il linea 'display:none' in modo che allargando il template il menu sia nascosto*/
                           $(this).removeAttr('style');
                       }
                    });
                    
                });//end click
     });
     //js slider//
     $(document).ready(function () {
                
                // inizializzazione slider
                $('#slides').slidesjs({
                    height: 400,
                    // navigation: false,
                    // pagination: false,
                    effect: {
                        fade: {
                            speed: 400
                        }
                    },
                    callback: {
                        loaded: function (number) {
                            $("a[data-slidesjs-item]").html('<img src="imgs/sel-slider.png">');//inserimento pallini
                            $("a[data-slidesjs-item].active").html('<img src="imgs/sel-slider-act.png">');//primo selezionato in partenza
                            $("a.slidesjs-previous").html('<img src="imgs/prev.png">');
                            $("a.slidesjs-next").html('<img src="imgs/next.png">');
                        },
                        start: function (number)
                        {
                            $("#slide_slogan1,#slide_slogan2,#slide_slogan3").fadeOut(500);
                            $("a[data-slidesjs-item]").html('<img src="imgs/sel-slider.png">');
                            $("a[data-slidesjs-item].active").html('<img src="imgs/sel-slider-act.png">'); // inserimento pallino selezionato
                        },
                        complete: function (number)
                        {
                            $("#slide_slogan" + number).delay(500).fadeIn(1000);
                            
                        }
                    },
                    play: {
                        active: false,
                        auto: true,
                        interval: 6000,
                        pauseOnHover: false,
                        effect: "fade"
                    }
                });
                
     
                
            });//end ready
