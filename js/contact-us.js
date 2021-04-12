function validate() {
    var name = document.contactform.Name.value;
    var email = document.contactform.Email.value;
    var comment = document.contactform.comment.value;

    if (name==null || name=="" || email==null || email=="" ||comment==null || comment==""){
        alert("All Fields are mandatory");
        return false;
    }
    var atpos=email.indexOf("@");
    var dotpos=email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length){
        alert("Please Enter Valid Email");
        return false;
    }
}