import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private Renderer2 : Renderer2, @Inject(DOCUMENT) private _document ) { }

  ngOnInit() {

    let s = this.Renderer2.createElement('script');
   // s.type = `application/ld+json`;
    s.type = 'text/javascript';
    s.text = ` 
          $(document).ready(function(){
            // Add smooth scrolling to all links in navbar + footer link
            $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
              // Make sure this.hash has a value before overriding default behavior
              if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();
          
                // Store hash
                var hash = this.hash;
          
                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                  scrollTop: $(hash).offset().top
                }, 900, function(){
             
                  // Add hash (#) to URL when done scrolling (default click behavior)
                  window.location.hash = hash;
                });
              } // End if
            });
            
            $(window).scroll(function() {
              $(".slideanim").each(function(){
                var pos = $(this).offset().top;
          
                var winTop = $(window).scrollTop();
                  if (pos < winTop + 600) {
                    $(this).addClass("slide");
                  }
              });
            });
          })  
    `;

    this.Renderer2.appendChild(this._document.body, s);
  }

}
