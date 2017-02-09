$(document).ready(function() {
  //postHistoryTest();
  console.log(docCookies.getItem("token"));
  getUsersHistory("", false);
  //getHistoryChrome(15, false);

  $('#btnFaves').click(function() {
    window.location.href="faves.html";
  });

  $('#clientAccount').click(function() {
    chrome.tabs.create({url: 'http://wefaves.com/'});
  });

  $('#allHistory').click(function() {
    chrome.tabs.create({url: 'chrome://history'});
  });

  $('#iconDelete').click(function() {
    console.log("ici");
  });

  $('#synchronize').click(function() {
    getHistoryChrome(100, true);
  });

  function getHistoryChrome(nb, bool) {
    var query = {
      text: '',
      maxResults: nb
    };
    chrome.history.search(query, function(results) {
      if (bool == false) {
        displayHistory(results);
      } else {
        getUsersHistory(results, true);
      }
    });
  };

  // function  getDifference(local, dds) {
  //   var difference = [];
  //   jQuery.grep(dds, function(el) {
  //     if (jQuery.inArray(el, local) == -1)
  //     difference.push(el);
  //   });
  //   return difference;
  // };

  function  getDifference(userHistory, localHistory) {
    console.log("getDifference");
    var difference = [];
    var i = 0, j = 0, value = 0;

    while(localHistory[i]) {
      j = 0;
      while(userHistory[j]) {
        if (localHistory[i].title == userHistory[j].title) {
          value = 1;
        }
        j++;
      }
      if (value == 0)
        difference.push(localHistory[i]);
      value = 0;
      i++;
    }
    return difference;
  };

  function  synchronize(localHistory, userHistory) {
    console.log(localHistory);
    console.log(userHistory);
    var difference = getDifference(userHistory, localHistory);
    console.log("difference :");
    console.log(difference);
    for (var i = 0; i < difference.length; i++) {
      postHistory(difference[i]);
    }
    $("#history").children("div").remove();
    getUsersHistory("", false);
  };

  function  getUsersHistory(localHistory, bool) {
    $.ajax({
      url: "https://api.wefaves.com/users/self/history",
      headers: { "Authorization" : "Bearer " + docCookies.getItem("token")},
      contentType : 'application/json',
      type: "GET",
      success: function(result){
        if (bool == true) {
          synchronize(localHistory, result);
        } else {
          displayHistory(result);
        }
      },
      error: function(xhr) {
        alert(xhr.responseText);
      }
    });
  };

  function  postHistory(history) {
    $.ajax({
      url: "https://api.wefaves.com/users/self/history",
      headers: { "Authorization" : "Bearer " + docCookies.getItem("token")},
      data: JSON.stringify({
        'title': history.title,
        'lastVisit': history.lastVisitTime,
        'typedCount': history.typedCount,
        'url': history.url,
        'visitCount': history.visitCount
      }),
      contentType : 'application/json',
      type: "POST",
      success: function(result){
        console.log(result);
      },
      error: function(xhr) {
        alert(xhr.responseText);
      }
    });
  };

  function  deleteHistory(id) {
    console.log(id);
    $.ajax({
      url: "https://api.wefaves.com/users/self/history/" + id,
      headers: { "Authorization" : "Bearer " + docCookies.getItem("token")},
      contentType : 'application/json',
      type: "DELETE",
      success: function(result){
        console.log("Fave delete");
      },
      error: function(xhr) {
        alert(xhr.responseText);
      }
    });
    $("#history").children("div").remove();
    getUsersHistory("", false);
  };

  function  displayHistory(results) {
    var data = "";
    var newUrl = "";
    var maxLength = 15;
    if (results.length < 15)
      maxLength = results.length;
    for (var i = 0; i < maxLength; i++) {
      data += '<div class="urlLink" id="' + results[i].id + '">';
      data += ' <i class="glyphicon glyphicon-remove text-danger" id="iconDelete" value="' + results[i].id + '"> </i> ';
      //console.log(results[i].lastVisitTime);
      data += strftime('%T', new Date(results[i].lastVisitTime)) + ' ';
      if ((results[i].title).length > 20) {
        newUrl = (results[i].title).slice(0, 30);
        newUrl += "[...]";
      } else {
        newUrl = results[i].title;
      }
      data += '<img class="favLink" src="https://www.google.com/s2/favicons?domain=' + results[i].url + '" alt="">';
      data += ' <a target="_blank" href="' + results[i].url + '">' + newUrl + '</a>';
      data +='</div>';
    }
    $("#history").append(data);
    // document.getElementById("iconDelete").addEventListener("click", function()
    // {
    //   deleteHistory(document.getElementById("iconDelete").value);
    // }, false);
  };

  function  postHistoryTest() {
    $.ajax({
      url: "https://api.wefaves.com/users/self/history",
      headers: { "Authorization" : "Bearer " + docCookies.getItem("token")},
      data: JSON.stringify({
        'title': "wefaves",
        'lastVisit': "1480984181505.387",
        'typedCount': "0",
        'url': "https://monportail.ulaval.ca/accueil/",
        'visitCount': "1063"
      }),
      contentType : 'application/json',
      type: "POST",
      success: function(result){
        console.log(result);
      },
      error: function(xhr) {
        alert(xhr.responseText);
      }
    });
  };
});
