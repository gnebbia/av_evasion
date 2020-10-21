jQuery.noConflict();
(function( $ ) {
  $(function() {
    


$(document).ready(function(){





// $('.owl-carousel').owlCarousel({
//   autoplay:true,
//   rewind: true,
//     autoplayTimeout:3000,
//     // margin:10,
//      // autoWidth:true,
//      // autoHeight: true,
//       items : 1, 
//       itemsDesktop : false,
//       itemsDesktopSmall : false,
//       itemsTablet: false,
//       itemsMobile : false
// });



        function moved() {
            var owl = $(".owl-carousel").data('owlCarousel');
            console.log(owl.currentItem)
            console.log(owl.itemsAmount)
            //console.log()
            if (owl.currentItem+1  === owl.itemsAmount) {
                console.info(owl.currentItem);
                owl.jumpTo(0);
            }
        }









//isotope init
// quick search regex
var qsRegex;

$grid = $('.list').isotope({
  itemSelector: 'li',
  layoutMode: 'fitRows'
  //   filter: function() {
  //   return qsRegex ? $(this).text().match( qsRegex ) : true;
  // }
});


var filterFns = {
  // show if number is greater than 50
  numberGreaterThan50: function() {
    //var number = $(this).find('.number').text();
    //return parseInt( number, 10 ) > 50;
    return $(this).attr("data-filter");
  },
  // show if name ends with -ium
  ium: function() {
    var name = $(this).find('.name').text();
    return name.match( /ium$/ );
  }
};



// $('.filters-button-group').on( 'click', '.sort', function() {


// //$('.filters-button-group').change(function(){
// 	// alert(1);
//   var filterValue = $( this ).attr('data-filter');
//   $(".sort").removeClass("current");
//   $(this).addClass("current");
//   // use filterFn if matches value
//   filterValue = filterFns[ filterValue ] || filterValue;
//   $grid.isotope({ filter: filterValue });

// });




$('.filters-button-group').change(function(){
  var filterValue = $( this ).find(".sort:selected").attr('data-filter');
  $(".sort").removeClass("current");
  $( this ).find(".sort:selected").addClass("current");
  // use filterFn if matches value
  filterValue = filterFns[ filterValue ] || filterValue;
  $grid.isotope({ filter: filterValue });

});







// use value of search field to filter
var $quicksearch = $('.quicksearch').keyup( debounce( function() {
  qsRegex = new RegExp( $quicksearch.val(), 'gi' );
  $(".sort").removeClass("current");
  // alert(qsRegex);
  $grid.isotope({ 
     filter: function() {
     return qsRegex ? $(this).text().match( qsRegex ) : true;
   }});




}, 200 ) );

// debounce so filtering doesn't happen every millisecond
function debounce( fn, threshold ) {
  var timeout;
  return function debounced() {
    if ( timeout ) {
      clearTimeout( timeout );
    }
    function delayed() {
      fn();
      timeout = null;
    }
    timeout = setTimeout( delayed, threshold || 100 );
  }
}












});//ends document ready


  });
})(jQuery);