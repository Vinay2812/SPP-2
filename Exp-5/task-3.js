
function reverse(str){
    return str.split(" ").reverse().join(" ");
}

function convert2(){
    var num = document.getElementById("user_number");
    var output = document.getElementById("output");

    var zero_to_9 = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    if(isNaN(num.value)){
        alert("not a number");
        return;
    }

    num = parseInt(num.value);

    if(num>=0 && num <=999){
        var words = "";
        do {
            var rem = num % 10;
            num = parseInt(num / 10);

            words = words + zero_to_9[rem] + " ";
            
        } while (num >0);

        output.value = reverse(words);
    }
    else{
        output.value = "out of range";
    }

}

function convert(){
    var num = document.getElementById("user_number");
    var output = document.getElementById("output");

    var zero_to_9 = [ 'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    
    var ten_to_19 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen' ]

    // Extra space to locate 20 at index 2, and so on.
    var twenty_to_90 = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety' ];


    if(isNaN(num.value)){
        alert("not a number");
        return;
    }

    num = parseInt(num.value);
    
    if(num>=0 && num <=999){
        var res = "";

        // unit position number
        var unit_position = num%10;
        res = zero_to_9[unit_position] + " ";
        num = parseInt(num/10);

        //tens position
        var tens_position = num%10;
        // if number is >=10 then ten's position exist
        if(num>0){
            if(tens_position == 1){ // 10 - 19 ..in such cases
                res = ten_to_19[unit_position] + " "; // unit_position since the number in ten_to_19 array is present at unit position 
            }
            else{//20 - 99
                if(unit_position == 0){// 20, 30, 40, .... 90
                    res = twenty_to_90[tens_position] + " ";
                }
                else{// 21-29, 31-39....91-99
                    res = res + twenty_to_90[tens_position] + " ";
                }
            }
            num = parseInt(num/10);
        }

        //100's position number
        var hundreds_position = num; // for 0 - 999 only one number is possible in num

        if(num > 0){
            if(unit_position == 0 && tens_position == 0){// 100, 200, 300....900
                res = "hundred " + zero_to_9[hundreds_position]; 
            }
            else{ // 101 - 199, 201 - 299,.... 901 - 999
                res = res + "and hundred " + zero_to_9[hundreds_position];
            }
        }
        output.value = reverse(res);
    }
    else{ // not in range (0 - 999)
        output.value = "out of range";
    }
}