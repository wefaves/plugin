$(document).ready(function() {
  getHistoryChrome(15, false);
  //getHistoryChrome(100, true);

  $('#btnFaves').click(function() {
    window.location.href="faves.html";
  });

  $('#clientAccount').click(function() {
    chrome.tabs.create({url: 'http://wefaves.com/'});
  });

  $('#allHistory').click(function() {
    chrome.tabs.create({url: 'chrome://history'});
  });

  $('#synchronize').click(function() {
    getHistoryChrome(100, true);
  });

  function getHistoryChrome(nb, bool){
    var query = {
      text: '',
      maxResults: nb
    };
    chrome.history.search(query, function(results){
      if (bool == false) {
        displayHistory(results);
      }
      else {
        getUsersHistory(results);
      }
    });
  };

  function  getDifference(local, dds) {
    var difference = [];
    jQuery.grep(dds, function(el) {
      if (jQuery.inArray(el, local) == -1) difference.push(el);
    });
    return difference;
  };

  function  synchronize(localHistory, userHistory) {
    console.log(docCookies.getItem("token"));
    console.log("synchronize\n");
    console.log(localHistory);
    console.log(userHistory);
    var difference = getDifference(userHistory, localHistory);
    console.log(difference);
    for (var i = 0; i < difference.length; i++) {
      postHistory(difference[i]);
    }
  };

  function  getUsersHistory(localHistory) {
    $.ajax({
      url: "https://api.wefaves.com/users/self/history",
      headers: { "Authorization" : "Bearer " + docCookies.getItem("token")},
      contentType : 'application/json',
      type: "GET",
      success: function(result){
        synchronize(localHistory, result);
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

  // function  postHistory(history) {
  //   $.ajax({
  //     url: "https://api.wefaves.com/users/self/history",
  //     headers: { "Authorization" : "Bearer " + docCookies.getItem("token")},
  //     data: JSON.stringify({
  //       'title': "ulaval2",
  //       'lastVisit': "2016-12-07T11:11:20+00:00",
  //       'typedCount': "0",
  //       'url': "https://monportail.ulaval.ca/accueil/",
  //       'visitCount': "1063"
  //     }),
  //     contentType : 'application/json',
  //     type: "POST",
  //     success:function(result){
  //       return result;
  //     },
  //     error: function(xhr) {
  //       alert(xhr.responseText);
  //     }
  //   });
  // };

  function  displayHistory(results) {
    var data = "";
    for (var i = 0; i < results.length; i++) {
      //console.log(results[i].id);
      data += '<div class="urlLink" id="' + results[i].id + '">';
      data += strftime('%T', new Date(results[i].lastVisitTime)) + ' ';
      data += '<img class="favLink" src="chrome://favicon/size/16@1x/' + results[i].url + '" alt="">';
      data += ' <a target="_blank" href="' + results[i].url + '">' + results[i].title + '</a>';
      data +='</div>';
    }
    $("#history").append(data);
  };
});
