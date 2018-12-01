function myFunction() {
    document.getElementById("demo").innerHTML = "Hello, advent of code!"
    window.alert(0.1 + 0.5);
}

function ProcessNumbers() {

    var x = document.getElementById("TextBox").value;
    var str_length = x.length;
    var running_sum = 0;

    console.log("str_length: " + str_length);

    while(str_length > 0)
    {    
	var pos = x.search(" ");
	console.log("Position of space: " + pos);
	if(pos > 0)
	{
	    var number = x.substring(0, pos);
	    x = x.substring(pos+1, str_length);
	    running_sum += parseInt(number, 10);
	    str_length = x.length;
	    console.log("str_length: " + str_length);
	}
	else
	{
	    var LastSample = parseInt(x, 10);
	    if((LastSample < 0) || (LastSample > 0))
	    {
		running_sum += LastSample;
	    }
	    str_length = 0;
	    console.log("str_length: " + str_length);
	}
    }

    
    
    var alert_pos = "Total of pasted values is: " + running_sum;
    window.alert(alert_pos);
    
}
