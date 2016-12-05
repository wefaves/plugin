$(document).ready(function() {

  $(function() {
    //delCookie("token");
    if (docCookies.getItem("token") != null) {
      //console.log(docCookies.getItem("token"));
      window.location.href="faves.html";
    }
  });

  function  delCookie(name) {
    docCookies.removeItem(name);
    console.log("Cookie Delete");
  }

  $("#signin").click(function(e) {
    e.preventDefault();
    $.ajax({
      url: "http://api.wefaves.com/login_check",
      data: JSON.stringify({
        '_username': $('#username').val(),
        '_password': $('#password').val()
      }),
      contentType : 'application/json',
      type: "POST",
      success:function(result){
        console.log(result.token);
        docCookies.setItem("token", result.token)
        console.log(docCookies.getItem("token"));
        window.location.href="faves.html";
      },
      error: function(xhr) {
        alert(xhr.responseText);
      }
    });
  });
});
