function myFunction() {
    document.getElementById("demo").innerHTML = "Hello, advent of code!"
    window.alert(0.1 + 0.5);
}


const alphabet = "abcdefghijklmnopqrstuvwxyz";


function FindDifferences() {

    var txt = document.getElementById("BoxIDText").value;
    var txt_arr = txt.split(" ");

    console.log("There are: " + txt_arr.length + " codes in the input");
    console.log("The first is: " + txt_arr[0].length + " characters long");

    // start with the first

    var match_found = false;
    var first_index = 0;
    var second_index = 0;

    while(!match_found)
    {
	second_index++;
	if(second_index == txt_arr.length)
	{
	    console.log("Not in " + first_index + "th row");
	    first_index++;
	    second_index = first_index + 1;
	}

	if(first_index == txt_arr.length)
	{
	    window.alert("Failed to find a match");
	}
	
	match_found = TwoRowsWithSingleDifference(txt_arr[first_index],txt_arr[second_index]);
	
    }
    
    window.alert("First: " + txt_arr[first_index] + ", second: " + txt_arr[second_index]);

    window.alert("String: " + CommonLetters(txt_arr[first_index], txt_arr[second_index]));
    
    
}

function CommonLetters(Row1, Row2)
{
    var CompositeLetters = "";
    for(i = 0; i < Row1.length; i++)
    {
	if(Row1[i] == Row2[i])
	{
	    CompositeLetters = CompositeLetters.concat(Row1[i]);
	}
    }
    return CompositeLetters;
}

function TwoRowsWithSingleDifference(Row1, Row2)
{
    var diverged = false;
    var CompIndex = 0;
    var DiffCount = 0;
    var DiffIndex = 0;
    
    while((diverged == false) && (CompIndex < Row1.length)) {

	if(Row1[CompIndex] != Row2[CompIndex])
	{
	    DiffCount++;
	}
	if(DiffCount > 1)
	{
	    diverged = true;
	}
	
	CompIndex++;
    }
    if(DiffCount == 1)
    {
	return true;
    }
    else
    {
	return false;
    }	  
}

function CountLetters() {

    // Series of codes.
    var txt = document.getElementById("BoxIDText").value;
    var txt_arr = txt.split(" ");

    console.log("There are: " + txt_arr.length + " codes in the input");
    console.log("The first is: " + txt_arr[0].length + " characters long");

    var LettersFound = Array(alphabet.length);
    LettersFound.fill(0);
    var DoublesFound = 0;
    var TriplesFound = 0;
    
    for(i = 0; i < txt_arr.length; i++)    // For each code:
//    for(i = 0; i < 1; i++)    // For each code:
    {
	LettersFound.fill(0);
	
	for(j = 0; j < txt_arr[i].length; j++)    //     For each letter in the code.
	{
	    LettersFound[alphabet.indexOf(txt_arr[i][j])]++;
	}

	var Found2 = false;
	var Found3 = false;
	
	for(j = 0; j < LettersFound.length; j++)
	{
	    if((LettersFound[j] == 2) && (!Found2))
	    {
		DoublesFound++;
		Found2 = true;
//		console.log("Two of " + alphabet[j] + " found");
	    }
	    if((LettersFound[j] == 3) && (!Found3))
	    {
		TriplesFound++;
		Found3 = false;
//		console.log("Three of " + alphabet[j] + " found");
	    }
	}
    }

    var Checksum = DoublesFound * TriplesFound;
    window.alert("Doubles: " + DoublesFound + "\n Triples: " + TriplesFound + "\n Checksum: " + Checksum);

}

function ProcessNumbers() {

    var x = document.getElementById("TextBox").value;
    var str_length = x.length;
    var running_sum = 0;

    console.log("str_length: " + str_length);

    var FreqArr = Array();
    FreqArr.push(0);
    var RepeatedFreqDetected = false;
    var SingleRunSum = 0;

    //    while(RepeatedFreqDetected == false)
    for(i = 0; i < 160; i++)
    {
	x = document.getElementById("TextBox").value;
	str_length = x.length;
	while(str_length > 0)
	{    
	    var pos = x.search(" ");
	    console.log("Position of space: " + pos);
	    if(pos > 0)
	    {
		var number = x.substring(0, pos);
		x = x.substring(pos+1, str_length);
		running_sum += parseInt(number, 10);
		if(i == 0)
		{
		    SingleRunSum += parseInt(number, 10);
		}
		
		str_length = x.length;
//		console.log("str_length: " + str_length);
		
		var FreqArrIndex = FreqArr.indexOf(running_sum);
		
		if(FreqArrIndex == -1)
		{
		    FreqArr.push(running_sum);
//		    console.log("Adding " + running_sum + " to array");
		}
		else  // In the array. This is the first repeated frequency :)
		{
		    if(RepeatedFreqDetected == false)
		    {
			window.alert("First repeated frequency: " + running_sum);
			RepeatedFreqDetected = true;
		    }
		}
		
	    }
	    else
	    {
		var LastSample = parseInt(x, 10);
		if((LastSample < 0) || (LastSample > 0))
		{
		    running_sum += LastSample;
		    if(i == 0)
		    {
			SingleRunSum += LastSample;
		    }
		}
		str_length = 0;
		console.log("str_length: " + str_length);
	    }		
	}
    }
    
    
    
//    var alert_pos = "Total of pasted values is: " + running_sum;
    var alert_pos = "Total of pasted values is: " + SingleRunSum;
    window.alert(alert_pos);
    
}
