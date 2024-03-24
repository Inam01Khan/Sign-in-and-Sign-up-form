function logIn() {
    document.getElementById("formHead").innerHTML = "SignIn form";
    document.getElementById("signUpAndIn").value = "SignIn";
    document.getElementById("footText").innerHTML = "Didn't have an account?";
    document.getElementById("footLink").innerHTML = "SignUp";
    document.getElementById("name").style.display = "none";
    document.getElementById("ConfirmPassword").style.display = "none";
    document.getElementById("signIn").style.background = "linear-gradient(to right, #1a1717, #3939bb)";
    document.getElementById("signIn").style.color = "#fff";
    document.getElementById("signUp").style.background = "#fff";
    document.getElementById("signUp").style.color = "#000000";
  }
  
  function signUp() {
    document.getElementById("formHead").innerHTML = "SignUp form";
    document.getElementById("signUpAndIn").value = "SignUp";
    document.getElementById("footText").innerHTML = "Already have an account?";
    document.getElementById("footLink").innerHTML = "Login";
    document.getElementById("name").style.display = "inline";
    document.getElementById("ConfirmPassword").style.display = "inline";
    document.getElementById("signIn").style.background = "#fff";
    document.getElementById("signIn").style.color = "#000000";
    document.getElementById("signUp").style.background = "linear-gradient(to right, #1a1717, #3939bb)";
    document.getElementById("signUp").style.color = "#fff";
  }
  
  function loginSignup() {
    if (document.getElementById("footLink").innerHTML === "Login") {
      logIn();
    } else {
      signUp();
    }
  }