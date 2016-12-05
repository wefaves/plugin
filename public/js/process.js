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
  getBookmarks();
});

function  sendBookmarks()
{
  var bookmarkTreeNodes = chrome.bookmarks.getTree(function(bookmarkTreeNodes) {
    console.log(bookmarkTreeNodes);
    $.ajax({
      url: './php/test.php',
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

function  getBookmarks()
{

}
