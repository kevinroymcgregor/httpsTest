// const config = {
//     apiKey: "AIzaSyC6qpXOXBf2vixbC6YTlN6ihu8i9h9OkW8",
//     authDomain: "gamr-13304.firebaseapp.com",
//     databaseURL: "https://gamr-13304.firebaseio.com",
//     projectId: "gamr-13304",
//     storageBucket: "gamr-13304.appspot.com",
//     messagingSenderId: "629746508175",
//     appId: "1:629746508175:web:f78d2c9edbb66f2f"
//   };

//   firebase.initializeApp(config);

//   const dataRef = firebase.database();
//   const auth = firebase.auth();

  
//   const pw = $('#pw').val();

let queryString = 
//'https://api.meetup.com/find/groups?zip=11211&radius=1&category=25&order=members&&sign=true'

"https://secure.meetup.com/oauth2/authorize?client_id=40b5jegalp9o9b4470v1biqvdu&response_type=code" + 
"&redirect_uri=http://127.0.0.1:5500/index.html"

// 'https://api.meetup.com/find/groups?zip=11211&radius=1&category=25&order=members'

function getUrlParameter(name) {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  var results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

// let queryURL = 'https://api.meetup.com/find/groups?zip=10021'

$('#push').on('click', function(){
  // $.ajax({
  //   url: queryString,
  //   method: "GET"
  // }).then(function(response){
  //   console.log(response);
  // })
  window.location.replace(queryString)
});

let accessToken = getUrlParameter('code');

if(accessToken != ""){
  let queryURL = 'https://api.meetup.com/find/events?zip=10021' + '?access_token=' + accessToken
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response){
    console.log(response);
  })
  // console.log(response);
}
  