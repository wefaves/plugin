$(document).ready(function() {
  $('#allHistory').click(tabsHistory);

  function tabsHistory() {
    chrome.tabs.create({url: 'chrome://history'});
  }

  $('#btnFaves').click(function() {
    window.location.href="faves.html";
  });

  var date = new Date();
  today = new Date(date.getFullYear(),date.getMonth(),date.getDate(),0,0,0,0);
  getHistory(today, 15);
  function getHistory(day, nb){
    var dateStart = new Date(day.getFullYear(),day.getMonth(),day.getDate(),0,0,0,0);
    var dateEnd = new Date(day.getFullYear(),day.getMonth(),day.getDate(),23,59,59);
    var query = {
      text: '',
      startTime: dateStart.getTime(),
      endTime: dateEnd.getTime(),
      maxResults: nb
    };
    loading = true;
    chrome.history.search(query, function(results){
      console.log(results);
    });
  };
});
