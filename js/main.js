$(document).ready(function(){
  // //############ Showing Views by button click for LUNCH################
  $('#month-button').on('click', function(e){
    e.preventDefault();
    if($('#calendar-dates-lunch-month').css('display') == 'none'){
      $('#calendar-dates-lunch-week').hide();
      $('#calendar-dates-lunch-day').hide();
      $('#calendar-dates-lunch-month').show();
    }
  });
  $('#week-button').on('click', function(e){
      e.preventDefault();
    if($('#calendar-dates-lunch-week').css('display') == 'none'){
      $('#calendar-dates-lunch-month').hide();
      $('#calendar-dates-lunch-day').hide();
      $('#calendar-dates-lunch-week').show();
    }
  });
  $('#day-button').on('click', function(e){
      e.preventDefault();
    if($('#calendar-dates-lunch-day').css('display') == 'none'){
      $('#calendar-dates-lunch-month').hide();
      $('#calendar-dates-lunch-week').hide();
      $('#calendar-dates-lunch-day').show();
    }
  });
  // //############### Showing Views by button click for BREAKFAST##############
  $('#month-button-br').on('click', function(e){
      e.preventDefault();
    if($('#calendar-dates-breakfast-month').css('display') == 'none'){
      $('#calendar-dates-breakfast-week').hide();
      $('#calendar-dates-breakfast-day').hide();
      $('#calendar-dates-breakfast-month').show();
    }
  });
  $('#week-button-br').on('click', function(e){
      e.preventDefault();
    if($('#calendar-dates-breakfast-week').css('display') == 'none'){
      $('#calendar-dates-breakfast-month').hide();
      $('#calendar-dates-breakfast-day').hide();
      $('#calendar-dates-breakfast-week').show();
    }
  });
  $('#day-button-br').on('click', function(e){
      e.preventDefault();
    if($('#calendar-dates-breakfast-day').css('display') == 'none'){
      $('#calendar-dates-breakfast-month').hide();
      $('#calendar-dates-breakfast-week').hide();
      $('#calendar-dates-breakfast-day').show();
    }
  });

  // //################Switching between Breakfast and Lunch Menu's################
  $('#breakfast-btn').on('click', function(e){
      e.preventDefault();
    if($('#breakfast').css('display') == 'none'){
      $('#lunch').hide();
      $('#breakfast').show();
    }
  });
  $('#lunch-btn').on('click', function(e){
      e.preventDefault();
    if($('#lunch').css('display') == 'none'){
      $('#breakfast').hide();
      $('#lunch').show();
    }
  });

});
