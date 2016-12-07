$(document).ready(function() {
  $('#allHistory').click(tabsHistory);
  getHistory(15);

  $('#btnFaves').click(function() {
    window.location.href="faves.html";
  });

  function tabsHistory() {
    chrome.tabs.create({url: 'chrome://history'});
  }

  function getHistory(nb){
    var query = {
      text: '',
      maxResults: nb
    };
    loading = true;
    chrome.history.search(query, function(results){
      console.log(results);
      displayHistory(results);
    });
  };

  function displayHistory(results) {
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
