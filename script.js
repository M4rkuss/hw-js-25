//1)
function completeMessage(msg) {
  window.document.getElementById('completeDownload').innerHTML += msg + "<br/>"
}

function errorMessage(msg) {
  window.document.getElementById('errorDownload').innerHTML += msg + "<br/>"
}

//2)
window.onbeforeunload = function (e) {
  if (document.getElementById('text1').value.length > 0 || document.getElementById('text2').value.length > 0) {
    let msg = "Text not saved";
    e.returnValue = msg;
    return msg;
  }
  return  null
}