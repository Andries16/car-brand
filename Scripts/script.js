$(window).on('load', function () {
  $('#loading').hide();

  if(localStorage.getItem("user")){
    document.getElementById("login").style.display = "none";
    document.getElementById("login1").style.display = "none";
  }else{
    document.getElementById("logout").style.display = "none";
    document.getElementById("logout1").style.display = "none";
  }


  $('#logout').click(()=>{
    localStorage.removeItem("user");
    window.location.href = "Login.html";
  });
}) 


