function formvalidation()
{
var uid=document.registration.userid;
var uname=document.registration.username;
var pw=document.registration.password;
var uadd=document.registration.address;
var ucountry=document.registration.country;
var uzip=document.registration.zip;
var uemail=document.registration.email;
var gender=document.registration.g1;
var name=document.registration.name;
if(userid_validation(uid,5,12))
{
if(password_validation(pw,7,12))
{
if(allLetter(uname))  {
if(alphanumeric(uadd))
{
if(countryselect(ucountry))
{
if(allnumeric(uzip))
{
if(ValidateEmail(uemail))
{
alert("Successfully submitted");
} } } } } } } }
function password_validation(pw,mx,my)
{
var pw_len=pw.value.length;
if(pw_len==0 || pw_len>my || pw_len<=mx)
{
alert("Password should not be empty/length be between "+mx+ "to" +my);
pw.focus();
return false;
}
return true;
}
function userid_validation(uid,mx,my)
{
var uid_len=uid.value.length;
if(uid_len==0 || uid_len>my || uid_len<=mx)
{
alert("user id should not be empty/length be between "+mx+ "to" +my);
uid.focus();
return false;
}
return true;
}
function allLetter(uname)
{
var letters=/^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert("username must have alphabets only");
uname.focus();
return false;
}
}
function alphanumeric(uadd)
{
var letters=/^[0-9a-zA-Z, ]+$/;
if(uadd.value.match(letters))
{
return true;
}
else
{
alert("User address must have alphanumeric characters only");
uadd.focus();
return false;
} }
function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
alert('Select your country from the list');
ucountry.focus();
return false;
}
else
{
return true;
} }
function allnumeric(uzip)
{ 
var numbers = /^[0-9]+$/;
if(uzip.value.match(numbers))
{
return true;
}
else
{
alert('ZIP code must have numeric characters only');
uzip.focus();
return false;
} }
function ValidateEmail(uemail)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(uemail.value.match(mailformat))
{
return true;
}
else
{
alert("You have entered an invalid email address!");
uemail.focus();
return false;
} }
function gender()
{
alert(name.value);
alert(gender.value);
var x=0;
if(gender.value=="MALE") 
{
x++;
} if(gender.value=="FEMALE")
{
x++; 
}
if(x==0)
{
alert('Select Male/Female');
}
else
{
alert('Form Successfully Submitted');
} }



