
const form = document.getElementById("form1") ;


function getFormvalue() {
    let fullName = form["fname"].value + " "+ form["lname"].value ;
  alert(fullName);

}