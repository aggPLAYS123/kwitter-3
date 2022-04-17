
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBdkNnHRgbMJlfHquJd-rhNo-D4_JMkmJM",
      authDomain: "kwitterr-8ba82.firebaseapp.com",
      databaseURL: "https://kwitterr-8ba82-default-rtdb.firebaseio.com",
      projectId: "kwitterr-8ba82",
      storageBucket: "kwitterr-8ba82.appspot.com",
      messagingSenderId: "505319413836",
      appId: "1:505319413836:web:8286c9dc58b0a70fec3ce9"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome  " + user_name + "!" ;
function addRoom(){
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
             purpose : "adding room name"
             });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("roomname-" + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name" , name);
      console.log(name);
      window.location="kwitter_page.html";
}

function logout (){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}