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
  sendFaves();
  //getFaves();
});

function  getDifference(local, dds)
{
  var difference = [];

  jQuery.grep(dds, function(el) {
          if (jQuery.inArray(el, local) == -1) difference.push(el);
  });

  return difference;
}

function  deleteFaves(data)
{
  $.each(data, function(key, value) {
    console.log(value['id']);
    $.ajax({
      url: 'https://api.wefaves.com/users/self/favorite/' + value['id'],
      headers: { "Authorization" : "Bearer " + docCookies.getItem("token")},
      type: 'DELETE',
      //data: JSON.stringify(data),
      contentType: 'application/json; charset=utf-8',
      dataType: 'json',
      async: false,
      success: function(datas) {
        console.log(msg);
      }
    });
  });
}

function  getFaves()
{
  $.ajax({
    url: 'https://api.wefaves.com/users/self/favorite',
    headers: { "Authorization" : "Bearer " + docCookies.getItem("token")},
    type: 'GET',
    //data: JSON.stringify(data),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    async: true,
    success: function(datas) {
      $.each(datas, function(obj) {
        delete this.id;
        delete this.indexId;
        delete this.user;
        chrome.bookmarks.create(this, function(){
          console.log("UPDATED");
        });
      });
    }
  });
}

function  sendFaves()
{
  var bookmarks = chrome.bookmarks.getTree(function(bookmarks) {
  var data = getBookmarks(bookmarks);
  $.each(data, function(key, value) {
      $.ajax({
        url: 'https://api.wefaves.com/users/self/favorite',
        headers: { "Authorization" : "Bearer " + docCookies.getItem("token")},
        type: 'POST',
        data: JSON.stringify(value),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: false,
        success: function(datas) {
          console.log(datas);
        }
      });
    });
    getFaves();
  });
}
