var mainApp = {};

(function () {
    var firebase = app_fireBase;
    var uid = null;

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          var email_id = user.email;
          uid = user.uid;
          console.log(email_id);
          //alert(email_id);
          Swal({
            position: 'top-end',
            type: 'success',
            title: 'Bienvenido: ' + email_id,
            showConfirmButton: false,
            timer: 1500
          })
          
        }else{
            uid = null;
            window.location.replace('index.php');
            
        }
      });

      function logOut() {
          firebase.auth().signOut();
      }

      mainApp.logOut = logOut;
      
    
})()