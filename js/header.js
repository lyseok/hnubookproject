document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector('header[data-include-path]');
  const path = header.getAttribute('data-include-path');

  if (path) {
      fetch(path)
          .then(response => response.text())
          .then(data => {
              header.innerHTML = data; // 외부 파일 내용을 삽입
          })
          .catch(err => console.error('Error loading header:', err));
  }
});


$('#header').prepend('<div id="menu-icon"><span class="first"></span><span class="second"></span><span class="third"></span></div>');
	
$("#menu-icon").on("click", function(){
  $("nav").slideToggle();
  $(this).toggleClass("active");
});



(function() {

  'use strict';
  
  var $searchView = $('.menu-search-container');
  var $menu = $('.menu-mac, .menu-iPad, .menu-iPhone, .menu-watch, .menu-tv, .menu-support, .menu-search, .menu-store');
  var $fadeScreen = $('.fade-screen');
  
  $('li.menu-search a, .fade-screen, .menu-search-close').on('click', function(e) {
    
    $searchView.toggleClass('active');
    
    setTimeout(function(){
      $searchView.children().find('input').focus();
    }, 1100);
    
    $fadeScreen.toggleClass('visible');
    $menu.removeClass('is-closed');
    $menu.toggleClass('hidden');
    
    e.preventDefault();
  });
  
  $('.fade-screen,.menu-search-close').on('click', function(e) {
    $menu.toggleClass('is-closed');
    e.preventDefault();
  });
    
}())