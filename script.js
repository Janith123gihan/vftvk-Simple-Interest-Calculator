// in here two functions are created one for Compute and other one is updateRate
function Compute()
{
	// new variable called principle is created here and value of Amount is taken in here to the principal 
    var principal = document.getElementById("principal").value;
	
	// here is checking value of the Amount is zero or negative if it is true then there will be an alert and focus to the amount.
	if(principal==0 || principal<0){
		alert("Enter a positive number");
		document.getElementById("principal").focus();
	}
	// user's values of rate and years are assigned to the new variables in here
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
	
	// interest is calculated in here
    var interest = principal*years*rate/100;

	// year is calculated by gettting current year
    var year = new Date().getFullYear()+parseInt(years);
	
	// in here we give some msg of interest to the user.
	document.getElementById("result").innerText="If you deposit "+principal+",\n at an interest rate of "+rate+ "%\n You will receive an amount of "+interest+",\n in the year "+year+".\n ";
}
// here is function for the update the user selected rate by displaying the value of the rate
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
        
