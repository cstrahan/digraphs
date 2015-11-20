chrome.commands.onCommand.addListener(function(command) {
  if (command == "enter-digraph") {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var active = tabs[0];
      if (active) {
        chrome.tabs.sendMessage(tabs[0].id, command, function(response) { });
      };
    });
  };
});
