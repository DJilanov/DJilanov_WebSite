/**
 * Copyright (c) 2011 Dimitar Jilanov
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 *
 * Date: 03 12 2013
 *
 */
(function (e) {
  //scroll detection
  // var flag = false;
  // var onceFlag = true;
  // var counter = 1;
  // var lastScrollTop = 0,
  //       st,
  //       direction;

  // function detectDirection() {

  //       st = window.pageYOffset;

  //       if (st > lastScrollTop) {
  //           direction = "down";
  //       } else {
  //           direction = "up";
  //       }

  //       lastScrollTop = st;

  //       return  direction;

  //   }
  // $.fn.scrollStopped = function(callback) {           
  //       $(this).scroll(function(){
  //           var self = this, $this = $(self);
  //           if ($this.data('scrollTimeout')) {
  //             clearTimeout($this.data('scrollTimeout'));
  //           }
  //           $this.data('scrollTimeout', setTimeout(callback,1000,self));
  //       });
  //   };

  // $(window).scrollStopped(function(){
  //     //debugger;
  //     var dir = detectDirection();
  //     console.log("called");
  //     if(onceFlag)
  //     {
  //       console.log("into");
  //       if(dir=="up")
  //       {
  //         flag=false;
  //         counter--;
  //         $("#dotNav li:nth-child("+counter+")").click();
  //         console.log(counter);
  //         onceFlag=false;
  //       }
  //       if(dir=="down")
  //       {  
  //         flag=true;
  //         counter++;
  //         $("#dotNav li:nth-child("+counter+")").click();
  //         console.log(counter);
  //         onceFlag=false;
  //       }
  //       if(counter<1)
  //       {
  //         counter=1;
  //       }
  //       if(counter>4)
  //       {
  //         counter=4;
  //       }
  //     }
  //     setTimeout(function(){onceFlag=true;},2000);
  // });
  //scroll stop end
      /* dot nav */
  $(window).bind('scroll',function(e){
    redrawDotNav();
  });

function redrawDotNav(){
    var topNavHeight = 50;
    var numDivs = $('section').length;
    
    $('#dotNav li a').removeClass('active').parent('li').removeClass('active');     
    $('section').each(function(i,item){
      var ele = $(item), nextTop;
      
      if (typeof ele.next().offset() != "undefined") {
        nextTop = ele.next().offset().top;
      }
      else {
        nextTop = $(document).height();
      }
      
      if (ele.offset() !== null) {
        thisTop = ele.offset().top - ((nextTop - ele.offset().top) / numDivs);
      }
      else {
        thisTop = 0;
      }
      
      var docTop = $(document).scrollTop()+topNavHeight;
      
      if(docTop >= thisTop && (docTop < nextTop)){
        $('#dotNav li').eq(i).addClass('active');
      }
    });   
}

/* end dot nav */
})(jQuery),
function () {
    $(function () {
        var e;
        return e = function () {
           
        }, $("[role=navigation] a, .teaser .button,#dotNav ul li").click(function () {
            var e;
            return e = $("body").find($(this).attr("href").split("/").pop()), $("html, body").animate({
                scrollTop: e.offset().top
            }, 750), !1
        }), $(document).ready(function () {
            return e()
        })
    })
}.call(this);