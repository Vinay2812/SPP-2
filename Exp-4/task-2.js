
function compareDate(){
    var date1 = new Date(document.getElementById("Date1").value)
    var date2 = new Date(document.getElementById("Date2").value)
    var result = document.getElementById("Output")

    if(date1.getTime() > date2.getTime()){
        result.value = "Date 1 is greater.";
    }
    else if(date1.getTime() < date2.getTime()){
        result.value = "Date 2 is greater.";
    }
    else{
        result.value = "Both are same.";
    }
}