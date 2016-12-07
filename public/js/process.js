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

function  sendBookmarks()
{
  var bookmarks = chrome.bookmarks.getTree(function(bookmarks) {
  var data = getBookmarks(bookmarks);
  console.log(data);
      $.ajax({
        url: '',
        type: 'POST',
        data: JSON.stringify(bookmarkTreeNodes),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: false,
        success: function(msg) {
          console.log(msg);
        }
      });
  });

}
