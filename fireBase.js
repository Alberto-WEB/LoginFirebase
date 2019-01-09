var app_fireBase = {};
(function() {
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAHK6_OT_lE2pmp1wYjbtr7CdHj-7PhNtE",
    authDomain: "proyectousuarios-2d871.firebaseapp.com",
    databaseURL: "https://proyectousuarios-2d871.firebaseio.com",
    projectId: "proyectousuarios-2d871",
    storageBucket: "proyectousuarios-2d871.appspot.com",
    messagingSenderId: "166619335863"
  };
  firebase.initializeApp(config);

  app_fireBase = firebase;

})()