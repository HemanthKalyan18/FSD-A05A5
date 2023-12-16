

function validateForm()
	{
    // username
		var un =document.registration.uname.value;
		var letters=/^[a-zA-Z0-9_\s]+$/;
		if(un=="" || un=="null")
		{
			alert("Plz enter your user name");
			document.registration.uname.focus();
			return false;
		}
		if(un.length<6)
    { alert("Username must contain minimum 6 characters");
			document.registration.uname.focus();
			return false;
		}
		if(!un.match(letters))
		{
			alert("Enter valid user name");
			document.registration.uname.focus();
			return false;
		}
  // mail
    var mail = document.registration.email.value;
				if(mail=="" || mail=="null")
				{
					alert("Enter your email");
					document.registration.email.focus();
					return false;
				}
				var atpos = mail.indexOf("@");
				var dotpos = mail.lastIndexOf(".");
				if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= mail.length)
				{
					alert("Not a valid e-mail address");
					return false;
				}
  // mobile
        var mobileno = document.registration.mobile.value;
				var mno=/^[0-9]{10}$/;
				if(mobileno=="" || mobileno=="null")
				{
					alert("Enter your Mobile Number");
					document.registration.mobile.focus();
					return false;
				}
				if(!mobileno.match(mno))
				{
					alert("Enter valid mobile numbe");
					document.registration.mobile.focus();
					return false;
				}
  // password
  				var pass = document.registration.pwd.value;
  				var checkSpecial = /[*@!#%&]+/.test(pass);
  				var checkUpper = /[A-Z]+/.test(pass);
  				var checkLower = /[a-z]+/.test(pass);
  					if(pass=="" || pass=="null")
  					{ alert("Enter your Password");
						document.registration.pwd.focus();
						return false;
  					}
  					if(checkSpecial &&checkLower && checkUpper)
  					{ flag=1;
  					}
  					if(flag==0)
 					 { alert("Password should have atleast one lowercase,uppercase & special symbols($,& #)");
						document.registration.pwd.focus();
						return false;
 					 }
  					alert("Sign-up Successful");
	}