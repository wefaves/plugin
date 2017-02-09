//
// Copyright (c) 2016 by Yousuvic All Rights Reserved.
//

var data = new Array();
function getBookmarks(bookmarks) {

  bookmarks.forEach(function(bookmark) {
      if (bookmark.title && bookmark.url) {
          data.push({id: bookmark.id, title: bookmark.title, url: bookmark.url});
        }
      else if (bookmark.children)
        getBookmarks(bookmark.children);
    });
  return data;
}

$('#clientAccount').click(function() {
  var newURL = "http://wefaves.com/";
  chrome.tabs.create({
    url: newURL
  });
});

$('#btnHistory').click(function() {
  window.location.href="history.html";
});


$('#synchro').click(function() {
  sendBookmarks();
});

function  getDifference(local, dds)
{
  var difference = [];

  jQuery.grep(dds, function(el) {
          if (jQuery.inArray(el, local) == -1) difference.push(el);
  });

  return difference;
}

function  sendBookmarks()
{
  var bookmarks = chrome.bookmarks.getTree(function(bookmarks) {
  var data = getBookmarks(bookmarks);
  console.log(data);
  $.each(data, function( key, value ) {
    $.ajax({
      url: 'https://api.wefaves.com/users/self/favorite',
      headers: { "Authorization" : "Bearer " + docCookies.getItem("token")},
      type: 'POST',
      //data: JSON.stringify(data),
      data: JSON.stringify(value),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      async: false,
      success: function(msg) {
        console.log('OOKK');
        console.log(msg);
      }
    });
  });
  /*var onserv = data.slice();
  onserv.push({
    index: "1",
    title: "test difference",
    url: "www.youcef.com"
  });
  data = getDifference(data, onserv);
  console.log(data);
      $.ajax({
        url: 'https://api.wefaves.com/users/self/favorite',
        headers: { "Authorization" : "Bearer " + docCookies.getItem("token")},
        type: 'POST',
        //data: JSON.stringify(data),
        data: JSON.stringify({
          'index': '2',
          'title': 'test title',
          'url': 'www.youcef.com'
        }),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: false,
        success: function(msg) {
          console.log('OOKK');
          console.log(msg);
        }
      });*/
  });

}
