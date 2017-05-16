$(document).ready(function(){
// ###########MONTHLY VARIABLES###########
var d = new Date();
var month_name = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var month = d.getMonth();   //0-11
var year = d.getFullYear(); //2014
var first_date = month_name[month] + " " + 1 + " " + year;
var tmp = new Date(first_date).toDateString();
var first_day = tmp.substring(0, 3);    //Mon
var day_name = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var day_no = day_name.indexOf(first_day);   //1
var days = new Date(year, month+1, 0).getDate();    //30.
console.log(days);
var last_date = month_name[month] + " " + days + " " + year;
//first week of Month, Start to the First day of current month
var firstOfMonthStart = new Date(first_date) ;
var startOfEndOfPrevMonth = new Date(firstOfMonthStart.setDate(firstOfMonthStart.getDate() - firstOfMonthStart.getDay())).getDate(); //26
//Last week of month, Last day to finish off calendar week
var finishOffMonthEnd = new Date(last_date);
var lastDayofWeekNextMonth = new Date(finishOffMonthEnd.setDate(finishOffMonthEnd.getDate() - finishOffMonthEnd.getDay()+6)).getDate(); //01



///##########WEEKLY VARIABLES##########
var d_w = new Date();
var month_names = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var month_w = d_w.getMonth();   //0-11
var prevMonthNum = month_w-1;
var year_w = d_w.getFullYear(); //2014
var first_date_w = month_names[month_w] + " " + 1 + " " + year_w;
var tmp_w = new Date(first_date_w).toDateString();
var first_day_w = tmp_w.substring(0, 3);    //Mon
var day_names_w = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var day_no_w = day_names_w.indexOf(first_day_w);   //1
var days_w = new Date(year_w, month_w+1, 0).getDate();    //30.
var prevMonthDays = new Date(year_w, prevMonthNum+1, 0).getDate();
var twoMonthsDays = prevMonthDays + days_w;

var last_date_w = month_name[month] + " " + days + " " + year;
//first week of Month, Start to the First day of current month
var firstOfMonthStart_w = new Date(first_date_w) ;
var startOfEndOfPrevMonth_w = new Date(firstOfMonthStart_w.setDate(firstOfMonthStart_w.getDate() - firstOfMonthStart_w.getDay())).getDate(); //26
//Last week of month, Last day to finish off calendar week
var finishOffMonthEnd_w = new Date(last_date_w);
var lastDayofWeekNextMonth_w = new Date(finishOffMonthEnd_w.setDate(finishOffMonthEnd_w.getDate() - finishOffMonthEnd_w.getDay()+6)).getDate(); //01

var firstDayofWeek_w = new Date(d_w.setDate(d_w.getDate() - d_w.getDay())).getDate(); //26

  var breakfastCalendarMonth = getMonthlyBreakfast(day_no, days, startOfEndOfPrevMonth, lastDayofWeekNextMonth);
  var breakfastCalendarWeek = getWeekBreakfast(day_no_w, days_w, startOfEndOfPrevMonth_w, lastDayofWeekNextMonth_w, firstDayofWeek_w);
  var breakfastCalendarDay = getDayBreakfast();
  //Monthly Breakfast Calendar
  document.getElementById("calendar-month-breakfast-year").innerHTML = month_name[month]+" "+year;
  document.getElementById("calendar-dates-breakfast-month").appendChild(breakfastCalendarMonth);
  //Weekly Breakfast
  document.getElementById("calendar-dates-breakfast-week").appendChild(breakfastCalendarWeek);
  // Day Breakfast
  document.getElementById('calendar-dates-breakfast-day').appendChild(breakfastCalendarDay);



  // Breakfast Monthly Calendar$#$#$#$#$#$#$#$#$#$#$$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$
  function getMonthlyBreakfast(day_no, days, startOfEndOfPrevMonth, lastDayofWeekNextMonth){
    var todaysDate = new Date().getDate(); //22

    var table = document.createElement('table');
    table.className = 'table-style';
    var tr = document.createElement('tr');

    //row for the day letters
    var fullNameWeekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    for(var c=0; c<=6; c++){
        var th = document.createElement('th');
        th.className = 'week-names';
        th.innerHTML = fullNameWeekDays[c];
        tr.appendChild(th);
    }
    table.appendChild(tr);

    // ###############################################
    //JSON Variables
      var prevMonthItems = prevMonth.days;
      var currentMonthItems = currentMonth.days;
      var nextMonthItems = nextMonth.days;
      // ###############################################

    //create 2nd row
    tr = document.createElement('tr');
    var c;

// Previous month information until start of current month# #######################
    var count = startOfEndOfPrevMonth;

    for (c = 0; c <=6; c++) {
      var td = document.createElement('td');
      td.className = 'notUsed';
      if(c != day_no){
        var breakfastContent = "<h4 class='calendar-block-items''>"+ prevMonthItems[count].breakfast["menu-items"][0]["item-name"] +"</h4>" + "<h4 class='calendar-block-items'>"+ prevMonthItems[count].breakfast["menu-items"][1]["item-name"] +"</h4>";
        td.innerHTML = "<h4 class='count'>(" + count +") </h4> " + breakfastContent;
      }else {
        break;
      };
      count++;
      tr.appendChild(td);
    }

    var count = 1;
    //Finishing out the rest of the after previous month
    for(; c<=6; c++){
       var breakfastContent = "<h4 class='calendar-block-items''>"+
       "<span class='breakfastPopoverItem1' rel='popover' id="+ count +"> "+ currentMonthItems[count].breakfast["menu-items"][0]["item-name"]+"<span> "+"</h4>" +
       "<h4 class='calendar-block-items'>"+
       "<span class='breakfastPopoverItem2' rel='popover' id="+ count +"> "+ currentMonthItems[count].breakfast["menu-items"][1]["item-name"]+"<span> " +"</h4>";

        var td = document.createElement('td');
        if (count == todaysDate) {
          td.className = 'today';
        }
        td.innerHTML = "<h4 class='count'>(" + count +") </h4> " + breakfastContent ;
        count++;
        tr.appendChild(td);
    }

    table.appendChild(tr);

    //rest of the date rows
  breakfastContent = "";
  var endBreak = 0;
    for(var r=3; r<=7; r++){
        tr = document.createElement('tr');
        if (endBreak == 1) {
          break;
        }
        for(var c=0; c<=6; c++){
            var td = document.createElement('td');

            if (count == todaysDate) {
              td.className = 'today';
            }
            if (count <= days) {
              var breakfastContent = "<h4 class='calendar-block-items''>"+
              "<span class='breakfastPopoverItem1' rel='popover' id="+ count +"> "+ currentMonthItems[count].breakfast["menu-items"][0]["item-name"]+"<span> "+"</h4>" +
              "<h4 class='calendar-block-items'>"+
              "<span class='breakfastPopoverItem2' rel='popover' id="+ count +"> "+ currentMonthItems[count].breakfast["menu-items"][1]["item-name"]+"<span> " +"</h4>";
            }

            if(count > days){
                count = 1;
                for(; c<=6; c++){
                  var breakfastContent = "<h4 class='calendar-block-items''>"+ nextMonthItems[count].breakfast["menu-items"][0]["item-name"] +"</h4>" + "<h4 class='calendar-block-items'>"+ nextMonthItems[count].breakfast["menu-items"][1]["item-name"] +"</h4>";

                  var td = document.createElement('td');
                  td.className = 'notUsed';
                  td.innerHTML = "<h4 class='count'>(" + count +") </h4> " + breakfastContent;
                  count++;
                  tr.appendChild(td);
               }
               endBreak = 1;
               break;
            };

            td.innerHTML ="<h4 class='count'>(" + count +") </h4> "+ breakfastContent;
            count++;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
      return table;

  };


  // Breakfast Weekly $#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$#$

  function getWeekBreakfast(day_no_w, days_w, startOfEndOfPrevMonth_w, lastDayofWeekNextMonth_w, firstDayofWeek_w){
    var todaysDate_w = new Date().getDate(); //27
    //Test what week the Current day is in for the month
    Date.prototype.getMonthWeek = function(){
        var firstDay = new Date(this.getFullYear(), this.getMonth(), 1).getDay();
        return Math.ceil((this.getDate() + firstDay)/7);
    }

    var table = document.createElement('table');
    table.className = 'table-style';
    var tr = document.createElement('tr');
    //row for the day letters
    var fullNameWeekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    for(var c=0; c<=6; c++){
        var th = document.createElement('th');
        th.className = 'week-names-w';
        th.innerHTML =  fullNameWeekDays[c];
        tr.appendChild(th);
    }
    table.appendChild(tr);
  //Calendar date row
    tr = document.createElement('tr');

      var c; //Days per week
      // ###############################################
      //JSON Variables
        var prevMonthItems = prevMonth.days;
        var currentMonthItems = currentMonth.days;
        var nextMonthItems = nextMonth.days;
        // ###############################################

        // STUFF TO DISPLAY FOR FIRST WEEK OF THE MONTH ONLY
        if (new Date().getMonthWeek() <= 1) {
          var count = startOfEndOfPrevMonth_w;
          for (c = 0; c <=6; c++) {
            var td = document.createElement('td');
            td.className = 'notUsed';
            if(c != day_no_w){
                var breakfastContent =
                '<ul class="weekNutInfoBlock">' +
                    "<h5 class='calendar-block-items-day-day'>"+
                        prevMonthItems[count].breakfast["menu-items"][0]["item-name"] +
                    "</h5>" +
                    '<h6 class="calendar-block-nutrition-day">Nutritional Information:</h6>'  +
                    '<h6 class="nutrition-items-name-day" style="background-color: lightblue;"> Calories:' +
                        '<span class="nutrition-items">' + prevMonthItems[count].breakfast["menu-items"][0].nutritionals.calories + '</span>'  +
                    '</h6>' +
                    '<h6 class="nutrition-items-name-day" style="background-color: lightgray;"> Sugar:' +
                        '<span class="nutrition-items">' + prevMonthItems[count].breakfast["menu-items"][0].nutritionals.sugar + '</span>'  +
                    '</h6>' +
                    '<h6 class="nutrition-items-name-day" style="background-color: lightslategray;"> Sodium:' +
                        '<span class="nutrition-items">' + prevMonthItems[count].breakfast["menu-items"][0].nutritionals.sodium + '</span>'  +
                    '</h6>'+
                    '</ul>' +

                    '<ul class="weekNutInfoBlock">' +
                        "<h5 class='calendar-block-items-day-day'>"+
                            prevMonthItems[count].breakfast["menu-items"][1]["item-name"] +
                        "</h5>" +
                        '<h6 class="calendar-block-nutrition-day">Nutritional Information:</h6>'  +
                        '<h6 class="nutrition-items-name-day" style="background-color: lightblue;"> Calories:' +
                            '<span class="nutrition-items">' + prevMonthItems[count].breakfast["menu-items"][1].nutritionals.calories + '</span>'  +
                        '</h6>' +
                        '<h6 class="nutrition-items-name-day" style="background-color: lightgray;"> Sugar:' +
                            '<span class="nutrition-items">' + prevMonthItems[count].breakfast["menu-items"][1].nutritionals.sugar + '</span>'  +
                        '</h6>' +
                        '<h6 class="nutrition-items-name-day" style="background-color: lightslategray;"> Sodium:' +
                            '<span class="nutrition-items">' + prevMonthItems[count].breakfast["menu-items"][1].nutritionals.sodium + '</span>'  +
                        '</h6>'+
                        '</ul>';
              td.innerHTML = "<h4 class='count'>(" + count +") </h4> " + breakfastContent;
            }else {
              break;
            }
            count++;
            tr.appendChild(td);
          };
          /// Start of the current Month
          var count = 1;

          for(; c<=6; c++){
              var td = document.createElement('td');
              if (count == todaysDate_w) {
                td.className = 'today';
              }

              if ( count <= days_w) {
                var breakfastContent =
                '<ul class="weekNutInfoBlock">' +
                    "<h5 class='calendar-block-items-day-day'>"+
                        currentMonthItems[count].breakfast["menu-items"][0]["item-name"] +
                    "</h5>" +
                    '<h6 class="calendar-block-nutrition-day">Nutritional Information:</h6>'  +
                    '<h6 class="nutrition-items-name-day" style="background-color: lightblue;"> Calories:' +
                        '<span class="nutrition-items">' + currentMonthItems[count].breakfast["menu-items"][0].nutritionals.calories + '</span>'  +
                    '</h6>' +
                    '<h6 class="nutrition-items-name-day" style="background-color: lightgray;"> Sugar:' +
                        '<span class="nutrition-items">' + currentMonthItems[count].breakfast["menu-items"][0].nutritionals.sugar + '</span>'  +
                    '</h6>' +
                    '<h6 class="nutrition-items-name-day" style="background-color: lightslategray;"> Sodium:' +
                        '<span class="nutrition-items">' + currentMonthItems[count].breakfast["menu-items"][0].nutritionals.sodium + '</span>'  +
                    '</h6>'+
                    '</ul>' +

                    '<ul class="weekNutInfoBlock">' +
                        "<h5 class='calendar-block-items-day-day'>"+
                            currentMonthItems[count].breakfast["menu-items"][1]["item-name"] +
                        "</h5>" +
                        '<h6 class="calendar-block-nutrition-day">Nutritional Information:</h6>'  +
                        '<h6 class="nutrition-items-name-day" style="background-color: lightblue;"> Calories:' +
                            '<span class="nutrition-items">' + currentMonthItems[count].breakfast["menu-items"][1].nutritionals.calories + '</span>'  +
                        '</h6>' +
                        '<h6 class="nutrition-items-name-day" style="background-color: lightgray;"> Sugar:' +
                            '<span class="nutrition-items">' + currentMonthItems[count].breakfast["menu-items"][1].nutritionals.sugar + '</span>'  +
                        '</h6>' +
                        '<h6 class="nutrition-items-name-day" style="background-color: lightslategray;"> Sodium:' +
                            '<span class="nutrition-items">' + currentMonthItems[count].breakfast["menu-items"][1].nutritionals.sodium + '</span>'  +
                        '</h6>'+
                        '</ul>';


                td.innerHTML ="<h4 class='countTwo'>(" + count +") </h4> " + breakfastContent;
              }

              count++;
              tr.appendChild(td);
          }
        }else { //THE MIDDLE OF THE MONTH DATA
          var count = firstDayofWeek_w;
              for(c=0; c<=6; c++){

                  var td = document.createElement('td');
                  if (count == todaysDate_w) {
                    td.className = 'today';
                  }

                  if (count <= days_w) {
                    var breakfastContent =
                    '<ul class="weekNutInfoBlock">' +
                        "<h5 class='calendar-block-items-day-day'>"+
                            currentMonthItems[count].breakfast["menu-items"][0]["item-name"] +
                        "</h5>" +
                        '<h6 class="calendar-block-nutrition-day">Nutritional Information:</h6>'  +
                        '<h6 class="nutrition-items-name-day" style="background-color: lightblue;"> Calories:' +
                            '<span class="nutrition-items">' + currentMonthItems[count].breakfast["menu-items"][0].nutritionals.calories + '</span>'  +
                        '</h6>' +
                        '<h6 class="nutrition-items-name-day" style="background-color: lightgray;"> Sugar:' +
                            '<span class="nutrition-items">' + currentMonthItems[count].breakfast["menu-items"][0].nutritionals.sugar + '</span>'  +
                        '</h6>' +
                        '<h6 class="nutrition-items-name-day" style="background-color: lightslategray;"> Sodium:' +
                            '<span class="nutrition-items">' + currentMonthItems[count].breakfast["menu-items"][0].nutritionals.sodium + '</span>'  +
                        '</h6>'+
                        '</ul>' +

                        '<ul class="weekNutInfoBlock">' +
                            "<h5 class='calendar-block-items-day-day'>"+
                                currentMonthItems[count].breakfast["menu-items"][1]["item-name"] +
                            "</h5>" +
                            '<h6 class="calendar-block-nutrition-day">Nutritional Information:</h6>'  +
                            '<h6 class="nutrition-items-name-day" style="background-color: lightblue;"> Calories:' +
                                '<span class="nutrition-items">' + currentMonthItems[count].breakfast["menu-items"][1].nutritionals.calories + '</span>'  +
                            '</h6>' +
                            '<h6 class="nutrition-items-name-day" style="background-color: lightgray;"> Sugar:' +
                                '<span class="nutrition-items">' + currentMonthItems[count].breakfast["menu-items"][1].nutritionals.sugar + '</span>'  +
                            '</h6>' +
                            '<h6 class="nutrition-items-name-day" style="background-color: lightslategray;"> Sodium:' +
                                '<span class="nutrition-items">' + currentMonthItems[count].breakfast["menu-items"][1].nutritionals.sodium + '</span>'  +
                            '</h6>'+
                            '</ul>';
                    td.innerHTML ="<h4 class='countTwo'>(" + count +") </h4> " + breakfastContent;
                  }else {
                    break;
                  }
                  count++;
                  tr.appendChild(td);
              }

        };

          if(count > days_w){
              count = 1;
              for(; c<=6; c++){
                var breakfastContent =
                '<ul class="weekNutInfoBlock">' +
                    "<h5 class='calendar-block-items-day-day'>"+
                        nextMonthItems[count].breakfast["menu-items"][0]["item-name"] +
                    "</h5>" +
                    '<h6 class="calendar-block-nutrition-day">Nutritional Information:</h6>'  +
                    '<h6 class="nutrition-items-name-day" style="background-color: lightblue;"> Calories:' +
                        '<span class="nutrition-items">' + nextMonthItems[count].breakfast["menu-items"][0].nutritionals.calories + '</span>'  +
                    '</h6>' +
                    '<h6 class="nutrition-items-name-day" style="background-color: lightgray;"> Sugar:' +
                        '<span class="nutrition-items">' + nextMonthItems[count].breakfast["menu-items"][0].nutritionals.sugar + '</span>'  +
                    '</h6>' +
                    '<h6 class="nutrition-items-name-day" style="background-color: lightslategray;"> Sodium:' +
                        '<span class="nutrition-items">' + nextMonthItems[count].breakfast["menu-items"][0].nutritionals.sodium + '</span>'  +
                    '</h6>'+
                    '</ul>' +

                    '<ul class="weekNutInfoBlock">' +
                        "<h5 class='calendar-block-items-day-day'>"+
                            nextMonthItems[count].breakfast["menu-items"][1]["item-name"] +
                        "</h5>" +
                        '<h6 class="calendar-block-nutrition-day">Nutritional Information:</h6>'  +
                        '<h6 class="nutrition-items-name-day" style="background-color: lightblue;"> Calories:' +
                            '<span class="nutrition-items">' + nextMonthItems[count].breakfast["menu-items"][1].nutritionals.calories + '</span>'  +
                        '</h6>' +
                        '<h6 class="nutrition-items-name-day" style="background-color: lightgray;"> Sugar:' +
                            '<span class="nutrition-items">' + nextMonthItems[count].breakfast["menu-items"][1].nutritionals.sugar + '</span>'  +
                        '</h6>' +
                        '<h6 class="nutrition-items-name-day" style="background-color: lightslategray;"> Sodium:' +
                            '<span class="nutrition-items">' + nextMonthItems[count].breakfast["menu-items"][1].nutritionals.sodium + '</span>'  +
                        '</h6>'+
                        '</ul>';

                var td = document.createElement('td');
                td.className = 'notUsed';
                td.innerHTML = "<h4 class='count'>(" + count +") </h4> " + breakfastContent;
                count++;
                tr.appendChild(td);
             }
          };

    table.appendChild(tr);
  return table;
  };


  // Breakfast Day Calendar ########################################################
  function getDayBreakfast(){
    var todaysDate_d = new Date().getDate(); //27
    var currentWeekDay = new Date().getDay(); //5
    var table = document.createElement('table');
    table.className = 'table-style';
    var tr = document.createElement('tr');
    //row for the day letters
    var fullNameWeekDays = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var th = document.createElement('th');
    th.className = 'week-names-w';
      if (currentWeekDay == 0) {
          th.innerHTML =  fullNameWeekDays[0];
      }else if (currentWeekDay == 1) {
          th.innerHTML =  fullNameWeekDays[1];
      }else if (currentWeekDay == 2) {
          th.innerHTML =  fullNameWeekDays[2];
      }else if (currentWeekDay == 3) {
          th.innerHTML =  fullNameWeekDays[3];
      }else if (currentWeekDay == 4) {
          th.innerHTML =  fullNameWeekDays[4];
      }else if (currentWeekDay ==5) {
          th.innerHTML =  fullNameWeekDays[5];
      }else {
          th.innerHTML =  fullNameWeekDays[6];
      }
        tr.appendChild(th);
    table.appendChild(tr);
  //Calendar date row
    tr = document.createElement('tr');
    // ###############################################
    //JSON Variables
      var prevMonthItems = prevMonth.days;
      var currentMonthItems = currentMonth.days;
      var nextMonthItems = nextMonth.days;
      // ###############################################
      var count = todaysDate_d;
      var td = document.createElement('td');
      var breakfastContent =
      '<ul class="col-md-6 ">' +
          "<h4 class='calendar-block-items-day'>"+
              currentMonthItems[count].breakfast["menu-items"][0]["item-name"] +
          "</h4>" +
          '<h5 class="calendar-block-nutrition">Nutritional Information</h5>'  +
          '<h6 class="nutrition-items-name" style="background-color: lightblue;"> Calories:' +
              '<span class="nutrition-items">' + currentMonthItems[count].breakfast["menu-items"][0].nutritionals.calories + '</span>'  +
          '</h6>' +
          '<h6 class="nutrition-items-name" style="background-color: lightgray;"> Sugar:' +
              '<span class="nutrition-items">' + currentMonthItems[count].breakfast["menu-items"][0].nutritionals.sugar + '</span>'  +
          '</h6>' +
          '<h6 class="nutrition-items-name" style="background-color: lightslategray;"> Sodium:' +
              '<span class="nutrition-items">' + currentMonthItems[count].breakfast["menu-items"][0].nutritionals.sodium + '</span>'  +
          '</h6>'+
          '</ul>' +

          '<ul class="col-md-6 ">' +
              "<h4 class='calendar-block-items-day'>"+
                  currentMonthItems[count].breakfast["menu-items"][1]["item-name"] +
              "</h4>" +
              '<h5 class="calendar-block-nutrition">Nutritional Information</h5>'  +
              '<h6 class="nutrition-items-name" style="background-color: lightblue;"> Calories:' +
                  '<span class="nutrition-items">' + currentMonthItems[count].breakfast["menu-items"][1].nutritionals.calories + '</span>'  +
              '</h6>' +
              '<h6 class="nutrition-items-name" style="background-color: lightgray;"> Sugar:' +
                  '<span class="nutrition-items">' + currentMonthItems[count].breakfast["menu-items"][1].nutritionals.sugar + '</span>'  +
              '</h6>' +
              '<h6 class="nutrition-items-name" style="background-color: lightslategray;"> Sodium:' +
                  '<span class="nutrition-items">' + currentMonthItems[count].breakfast["menu-items"][1].nutritionals.sodium + '</span>'  +
              '</h6>'+
              '</ul>';


        td.innerHTML ="<h4 class='count-day'>(" + count +") </h4> " + breakfastContent;
        tr.appendChild(td);
    table.appendChild(tr);
  return table;
  }

});

var breakfastContent = '';
var breakfastContent2 = '';
$(document).ready(function(){

$('.breakfastPopoverItem1, .breakfastPopoverItem2').mouseover(function(){
    var showID = $(this).attr("ID");
   count = showID;
   breakfastContent = popupContent(count);
 var idIs = $(this).attr("ID");
  count = idIs;
  breakfastContent2 = popupContent2(count);
 });


function popupContent(count){
 var currentMonthItems = currentMonth.days;
breakfastContent =
'<ul class="popoverNutInfoBlock">' + "<h4 class='popoverCount'>(" + count +") </h4> " +
    "<h5 class='popoverItem'>"+
        currentMonthItems[count].breakfast["menu-items"][0]["item-name"] +
    "</h5>" +
    '<h6 class="popoverNutInfo" style="background-color: lightblue;"> Calories:' +
        '<span class="popoverNutFigure">' + currentMonthItems[count].breakfast["menu-items"][0].nutritionals.calories + '</span>'  +
    '</h6>' +
    '<h6 class="popoverNutInfo" style="background-color: lightgray;"> Sugar:' +
        '<span class="popoverNutFigure">' + currentMonthItems[count].breakfast["menu-items"][0].nutritionals.sugar + '</span>'  +
    '</h6>' +
    '<h6 class="popoverNutInfo" style="background-color: lightslategray;"> Sodium:' +
        '<span class="popoverNutFigure">' + currentMonthItems[count].breakfast["menu-items"][0].nutritionals.sodium + '</span>'  +
    '</h6>'+
    '</ul>' ;
         return breakfastContent;
}
function popupContent2(count){
 var currentMonthItems = currentMonth.days;
breakfastContent2 =
'<ul class="popoverNutInfoBlock">'   + "<h4 class='popoverCount'>(" + count +") </h4> " +
    "<h5 class='popoverItem'>"+
        currentMonthItems[count].breakfast["menu-items"][1]["item-name"] +
    "</h5>" +
    '<h6 class="popoverNutInfo" style="background-color: lightblue;"> Calories:' +
        '<span class="popoverNutFigure">' + currentMonthItems[count].breakfast["menu-items"][1].nutritionals.calories + '</span>'  +
    '</h6>' +
    '<h6 class="popoverNutInfo" style="background-color: lightgray;"> Sugar:' +
        '<span class="popoverNutFigure">' + currentMonthItems[count].breakfast["menu-items"][1].nutritionals.sugar + '</span>'  +
    '</h6>' +
    '<h6 class="popoverNutInfo" style="background-color: lightslategray;"> Sodium:' +
        '<span class="popoverNutFigure">' + currentMonthItems[count].breakfast["menu-items"][1].nutritionals.sodium + '</span>'  +
    '</h6>'+
    '</ul>';
         return breakfastContent2;
}

 $('.breakfastPopoverItem1, .breakfastPopoverItem2').popover({
     trigger: 'hover',
     placement: 'right',
     html: 'true',
     title: '<strong style="color: black;">Nutrition Information </strong>',
 });
 $('.breakfastPopoverItem1').on('show.bs.popover', function () {
  $(this).attr('data-content', breakfastContent);
 })
 $('.breakfastPopoverItem2').on('show.bs.popover', function () {
  $(this).attr('data-content', breakfastContent2);
 })
});
