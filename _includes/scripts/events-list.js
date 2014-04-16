// REQUIRES MOMENT.JS AND UNDERSCORE.JS
var timing = function(start, end) {

  return moment(start).format('MM/DD/YYYY h:mma') + ' - ' + moment(end).format('MM/DD/YYYY h:mma');
};

$(document).ready(function() {


  $.getJSON('{{site.baseurl}}/api/events.json', null, function(response) {





    var groups = _.groupBy(response.events, function(event) { return moment(event.start).format('YYYY-MM-DD'); });



    days = _.sortBy(Object.keys(groups), function(day) { return day});
    //sort past event groups in descending order
      days_desc = _.sortBy(Object.keys(groups), function(day) { return day}) .reverse();








    days.forEach(function(day) {

      if (moment(day).isAfter(moment().subtract('days', 1))) {

        $('<h5><time class="dt-start dtstart">' + moment(day).format('MMMM Do, YYYY') + '</time></h5><hr class="divider" />').appendTo('#calendar');


        groups[day].forEach(function(event) {



          $('<div class="event" id="' + event.citystate + '"><h4><span class="title">' + event.citystate + '</span></h4>').appendTo('#calendar');

if(event.name) {
            $('<span><strong>' + event.name + '</strong>  </span>').appendTo('#calendar');
          }




         if(event.allday != 'true') {
            $('<span><strong>' + event.starttime + '</strong>  </span>').appendTo('#calendar');
          }

          if(event.venue) {
            $('<br /><span class="p-location location h-card vcard"><span>' + event.venue + '</span> ' + '<span class="address">' + event.address + '</span>' + '</span>').appendTo('#calendar');
          }

          if(event.summary) {
            $('<br /><span class="p-name summary">' + event.summary + '</span>').appendTo('#calendar');
            }

          if(event.website) {
            $('<a href="' + event.website + '" class="ml small"> <i class="fa fa-external-link"></i> website</a>').appendTo('#calendar');
          }

        $('</div>').appendTo('#calendar');

        });



      }


  });








days_desc.forEach(function(day) {



      if (moment(day).isBefore(moment().subtract('days', 1))) {

        $('<h5><time class="dt-start dtstart">' + moment(day).format('MMMM Do, YYYY') + '</time></h5><hr class="divider" />').appendTo('#calendar-past');


        groups[day].forEach(function(event) {



          $('<div class="event" id="' + event.citystate + '"><h4><span class="title">' + event.citystate + '</span></h4>').appendTo('#calendar-past');

if(event.name) {
            $('<span><strong>' + event.name + '</strong>  </span>').appendTo('#calendar-past');
          }




         if(event.allday != 'true') {
            $('<span><strong>' + event.starttime + '</strong>  </span>').appendTo('#calendar-past');
          }

          if(event.venue) {
            $('<br /><span class="p-location location h-card vcard"><span>' + event.venue + '</span> ' + '<span class="address">' + event.address + '</span>' + '</span>').appendTo('#calendar-past');
          }

          if(event.summary) {
            $('<br /><span class="p-name summary">' + event.summary + '</span>').appendTo('#calendar-past');
            }

          if(event.website) {
            $('<a href="' + event.website + '" class="ml small"><i class="fa fa-external-link"></i> website</a>').appendTo('#calendar-past');
          }

        $('</div>').appendTo('#calendar-past');

        });



        }


  });

















  });
});
//END events-list.js