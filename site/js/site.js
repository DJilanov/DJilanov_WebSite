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
    /* dot nav */
$(window).bind('scroll',function(e){
  redrawDotNav();
});

function redrawDotNav(){
  debugger;
    var topNavHeight = 50;
    var numDivs = $('section').length;
    
    $('#dotNav li a').removeClass('active').parent('li').removeClass('active');     
    $('section').each(function(i,item){
      var ele = $(item), nextTop;
      
      console.log(ele.next().html());
      
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