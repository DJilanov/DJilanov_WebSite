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
    // var previousScroll = 0;
    // var counter=1;
    // $(window).scroll(function(){
    //     event.preventDefault();
    //     var currentScroll = $(this).scrollTop();
    //     if (currentScroll > previousScroll){
    //         counter++;
    //         debugger;
    //         $("#floatdiv nav a:nth-child("+counter+")").click();
    //     } else {
    //         counter--;
    //         $("#floatdiv nav a:nth-child("+counter+")").click();
    //     }
    //     previousScroll = currentScroll;
    //     if(counter<1)
    //     {
    //         counter=1;
    //     }
    //     if(counter>4)
    //     {
    //         counter=4;
    //     }
    // });
})(jQuery),
function () {
    $(function () {
        var e;
        return e = function () {
           
        }, $("[role=navigation] a, .teaser .button").click(function () {
            var e;
            return e = $("body").find($(this).attr("href").split("/").pop()), $("html, body").animate({
                scrollTop: e.offset().top
            }, 750), !1
        }), $(document).ready(function () {
            return e()
        })
    })
}.call(this);