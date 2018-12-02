// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery3
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$( document ).ready(function() {
    console.log("what's up, Hosh!");
    var posn = 0;
    
    var body = document.body,
            html = document.documentElement;
    
    var docHeight = Math.max( body.scrollHeight, body.offsetHeight, 
                               html.clientHeight, html.scrollHeight, html.offsetHeight );
    
    window.addEventListener('scroll', function(e) {
        posn = window.scrollY;
        tot = docHeight; // need to check this
        doSomething(posn, tot);
    });
    
    function doSomething(posn, tot) {
        var percentHeight = (posn/tot*100);
        var newColor = "linear-gradient(to top, white," + percentHeight + "%, lightBlue)"
        $(document).find(body).css("background",newColor);
    }
});
