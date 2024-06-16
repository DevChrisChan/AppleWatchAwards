console.log("Welcome to AppleWatchAwards.netlify.app!\n\nCheck out what the website is working on in the console!\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n")
  function onReady(callback) {
  var intervalId = window.setInterval(function() {
    if (document.getElementsByTagName('body')[0] !== undefined) {
      window.clearInterval(intervalId);
      callback.call(this);
    }
  }, 1000);
}

function setVisible(selector, visible) {
  document.querySelector(selector).style.display = visible ? 'block' : 'none';
}

onReady(function() {
  setVisible('.page', true);
});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

var date = new Date(),
    day = date.getDate(),
    month = date.getMonth()+1;
    year = date.getFullYear();

