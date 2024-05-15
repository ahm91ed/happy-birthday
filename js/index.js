/// <reference types="../@types/jquery" />

let audio = document.getElementById('audio') ;

let clickBtn = document.getElementById('clickBtn') ;




$( 'h1' ).fadeIn ( 2000 ) ;

$(function() {

   $('#loadingScreen').fadeOut( 10000 , function (){

    $('header').fadeIn ( 10000 , function (  ){

      $('.row').css ( 'display' , 'flex' ) ;

      


      clickBtn.addEventListener ( 'click' , function ( ) {

        audio.play() ;




      } ) ;


   



     

     

     
    })


} )
   
 })