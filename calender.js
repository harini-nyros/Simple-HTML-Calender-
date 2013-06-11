
// these are labels for the days of the week
var week = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
// these are human-readable month name labels, in order
cal_months_labels= ['January', 'February', 'March', 'April',
                     'May', 'June', 'July', 'August',
                      'September','October', 'November', 'December'];
function setCurrentDate() 
{
	var today   = new Date();
	var day   = today.getDate();
	var month = today.getMonth();
	var year  = today.getFullYear();
	calendar.month.selectedIndex = month;
	calendar.year.value = year;
	displayCalendar(month,year);
}

function chooseDate() 
{
	var year  = calendar.year.value;
	var month = calendar.month.selectedIndex;
	displayCalendar(month, year);
}

function previousYear()
{
	var year  = calendar.year.value;
	var month = calendar.month.selectedIndex;
	year--;
	calendar.year.value = year;
	displayCalendar(month, year);
}

function previousMonth()
{	
	var year  = calendar.year.value;
	var month = calendar.month.selectedIndex;
	if (month == 0)
	{
		month = 11;
		if (year > 1000) 
		{
			year--;
			calendar.year.value = year;
		}
	}
	else
	{
		 month--;
	}
	
	calendar.month.selectedIndex = month;
	displayCalendar(month, year);
}

function nextMonth()
{	
	var year  = calendar.year.value;
	var month = calendar.month.selectedIndex;
	
	if (month == 11) 
	{
		month = 0;
		year++;
		calendar.year.value = year;
	}
	else
	{
		 month++; 
	}
		calendar.month.selectedIndex = month;
	
	displayCalendar(month, year);
}


function nextYear()
{
	var year = calendar.year.value;
	var month = calendar.month.selectedIndex;
	year++;
	calendar.year.value = year;
	displayCalendar(month, year);
}

function displayCalendar(month,year)
{
	var month = month;
	var year = year;
	
	var monthName = cal_months_labels[month]
	
	
	// get first day of month
  	var firstDay = new Date(year, month, 1);
  	var startingDay = firstDay.getDay();
  	
  	// find number of days in month
	var dd= new Date(year, month+1, 0);
	var monthLength=dd.getDate();
	
	// for leap year
	
	if (month > 0)  // February only!
	{
	    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0)
	    	{
		      monthLength = 29;
    		}
	}
  	
  	 // For the header
 	
  	var html = '<table class="calendar-table">';
  	    html += '<tr class="calendar-header">';
 	 for(var i = 0; i <= 6; i++ )
 	 {
   		 html += '<td class="calendar-header-day">';
    		html += week[i];
   		 html += '</td>';
 	 }
  	html += '</tr><tr>';

  	// fill in the days
  	var day = 1;  
  	// this loop is for is weeks (rows)
 	 for (var i =0; i < 6; i++) 
 	 {
   		 // this loop is for weekdays (cells)
    		for (var j = 0; j <= 6; j++) 
    		{ 
     			 html += '<td class="calendar-day">';
      		  	if (day <= monthLength && (i > 0 || j >= startingDay)) 
      			{
       				 html += day;
       				 day++;
     			 }			
     		          html += '</td>';
    		}
    		// stop making rows if we've run out of days
   	 	if (day > monthLength) 
   	 	{
		      break;
		}
	        else
		{
		      html += '</tr><tr>';
    		}
  	}
	
	html += '</tr></table>';
	var temp=document.getElementById('displaycal');
	temp.innerHTML=html;
}


