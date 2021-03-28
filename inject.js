
function loadScript(scriptName, callback) {
  var scriptEl = document.createElement('script');
  scriptEl.src = chrome.runtime.getURL('lib/' + scriptName);
  scriptEl.addEventListener('load', callback, false);
  document.body.appendChild(scriptEl);
}

function loadCss(cssName) {
  var cssEl = document.createElement('link');
  cssEl.type = "text/css";
  cssEl.rel = "stylesheet";
  cssEl.href = chrome.runtime.getURL('css/' + cssName);
  document.head.appendChild(cssEl);
}

window.onload = function () {
  // console.clear();
  // if (window.location.href.indexOf("screen=map") > -1) {
  //   var villagesHiddenInput = document.createElement("input");
  //   villagesHiddenInput.id = "villagesHiddenInput";
  //   villagesHiddenInput.type = "hidden";
  //   document.body.append(villagesHiddenInput);

  //   var element = document.createElement("script");
  //   element.text = "document.getElementById('villagesHiddenInput').value = JSON.stringify(TWMap.villages);";
  //   document.head.append(element);

  //   console.log(villagesHiddenInput.value);
  // }


  loadCss('general.css');
  loadCss('openFakeAttackPopup.css');

  loadScript('sendAttack.js');
  loadScript('general.js');
  loadScript('menu.js');
  loadScript('openFakeAttackPopup.js');


}