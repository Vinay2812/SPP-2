/*
d -> is a digit
s -> is a white space
w -> word
\abc -> it should contain abc (abc is just an example)
^ -> to check if starting with
* -> 0 or more times
+ -> 1 or more times
all capitals are opposite of small chars
*/
function validateForm(){
    // validate name
    var name = String(document.getElementById("name").value);
    var name_re = new RegExp("\\d");
    if(name_re.test(name) || name.length == 0){
        alert("Name field cannot contain a number.");
        return false;
    }

    var email_re = new RegExp("[a-zA-Z0-9_.]+@+[a-zA-z]+\\.+[a-z]{2,3}")
    var email = document.getElementById("email").value;

    if(!email_re.test(email)){
        alert("Not a valid email");
        return false;
    }
    var phone_re = new RegExp("[+91]{0,1}\\d{10}")
    var phn_no = document.getElementById("phone_no").value;
    if(!(phone_re.test(phn_no))){
        alert("Not a mobile no.")
        return false;
    }
    
    //multiple radio buttons need to be validated, so we can access all of them with the common name and iterate over them 
    var gender = document.getElementsByName("gender");
    var gender_selected = false;

    var i = 0;
    for(i=0;i<gender.length;i++){
        if(gender[i].checked){
            gender_selected = true;
        }
    }
    if(!gender_selected){
        alert("Please select the gender.")
        return false;
    }

    //to validate list box, if no item is selected then value remains <= 0 & value != --Select--
    var country = String(document.getElementById("country").value);
    if(country.length <= 0){
        alert("Select the country.")
        return false;
    }


    // like radio buttons, we can similarly validate checkbox
    var programming_language = document.getElementsByName("programing-language");
    var selected = false;
    for(var i=0;i<programming_language.length;i++){
        if(programming_language[i].checked){
            selected = true;
        }
    }
    if(!selected){
        alert("Please select at least 1 language.");
        return false;
    }
    // confirming if both passwords are same or not
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm-password").value;
    if(password != confirm_password){
        alert("Password doesn't match");
        return false;
    }
    return true;
}