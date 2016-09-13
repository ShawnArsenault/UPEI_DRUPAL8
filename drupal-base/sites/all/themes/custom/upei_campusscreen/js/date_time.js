function ClockDate(id)
{
        date = new Date;
        year = date.getFullYear();
        month = date.getMonth();
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
        d = date.getDate();
        day = date.getDay();
        days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        /*
				h = date.getHours();
        if(h<10)
        {
                h = "0"+h;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
			*/
		//if(which == 'date'){
			result = '<div class=\'mydate\'>'/*+ days[day]*/ + ' ' + months[month] + ' ' + d + '</div>';
		//}else{
		//	result = '<div class=\'clockhours\'>' + h + ':' + m +'</div>';
		//}
        
        
		document.getElementById(id).innerHTML = result;
        setTimeout('ClockDate("'+id+'");','1000');
        return true;
}

function ClockTime(id){
				h = date.getHours();
        if(h>12)
        {
                h = h - 12;
        }
        m = date.getMinutes();
        if(m<10)
        {
                m = "0"+m;
        }
        s = date.getSeconds();
        if(s<10)
        {
                s = "0"+s;
        }
 				result = '<div class=\'mytime\'>' + h + ':' + m +'</div>';
				document.getElementById(id).innerHTML = result;
        setTimeout('ClockTime("'+id+'");','1000');
        return true;


}

