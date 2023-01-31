function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
var input, filter, ul, li, a, i;
input = document.getElementById("myInput");
filter = input.value.toUpperCase();
div = document.getElementById("myDropdown");
a = div.getElementsByTagName("a");
for (i = 0; i < a.length; i++) {
  txtValue = a[i].textContent || a[i].innerText;
  if (txtValue.toUpperCase().indexOf(filter) > -1) {
    a[i].style.display = "";
  } else {
    a[i].style.display = "none";
  }
}
}

const toplink = "https://open.spotify.com/embed/track/";
const links = [
'5HCyWlXZPP0y6Gqq8TgA20',
'27NovPIUIRrOZoCHxABJwK',
'3USxtqRwSYz57Ewm6wWRMp',
'6PQ88X9TkUIAUIZJHW2upE',
'6LNoArVBBVZzUTUiAX2aKO'];


function changeSpotifySong(songlink){
  /*var url_string = "window.location.href";
var url = new URL(url_string);
var c = url.searchParams.get("c");
console.log(c);
*/
  document.getElementById("songView").src = toplink + links[songlink];// ='https://open.spotify.com/embed/track/6LNoArVBBVZzUTUiAX2aKO';
}

/*function myFunction(){
var playlist = document.getElementById("musicView");
playlist.src="https://open.spotify.com/embed/playlist/37i9dQZEVXbLRQDuF5jeBp";
}*/