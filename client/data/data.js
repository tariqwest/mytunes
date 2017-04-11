// data.js - Defines an array of data regarding song files and their accompanying details.
var songData = data.songs || [
  {
    url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3',
    title: 'One In A Million',
    artist: 'Aaliyah',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/03+Age+Ain%27t+Nothing+But+A+Number.mp3',
    title: 'Age Ain\'t Nothing But A Number',
    artist: 'Aaliyah',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/05+Hot+Like+Fire.mp3',
    title: 'Hot Like Fire',
    artist: 'Aaliyah',
  },
  {
    url: 'https://s3-us-west-1.amazonaws.com/hr-mytunes/data/06+If+Your+Girl+Only+Knew.mp3',
    title: 'If Your Girl Only Knew',
    artist: 'Aaliyah',
  }
];

$('document').ready(function(){
  var data = {};
  data.songs = undefined;
  data.server = 'http://parse.sfm6.hackreactor.com/mytunes/classes/songs'
   data.init = () => {
    console.log('initialized');
    data.fetch();
  };

  data.fetch = (afterFetch, afterFetchArgs) => {

    //room = room || 'Lobby';

    // var queryData = 'order=-createdAt&limit=500';
    // if(room !== undefined){
    //   queryData += '&where={"roomname":' + '"' + room + '"}';
    // }

    //Get message
    $.ajax({
      // This is the url you should use to communicate with the parse API server.
      url: data.server,
      type: 'GET',
      // data: queryData,
      contentType: 'application/json',
      success: function (d) {
        console.log(d);
        data.songs = d.results;
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('MyTunes: Failed to retrieve songs', data);
      }
    });
  };
  data.init();
});