// Initialize Firebase
var config = {
    apiKey: "AIzaSyBv1k-UPJXYE699X9rXXdfImvmsJZ7kl-8",
    authDomain: "ariitk-web-form-data.firebaseapp.com",
    databaseURL: "https://ariitk-web-form-data.firebaseio.com",
    projectId: "ariitk-web-form-data",
    storageBucket: "ariitk-web-form-data.appspot.com",
    messagingSenderId: "39387484322"
  };
  firebase.initializeApp(config);
  
//reference message collection
var messagesRef = firebase.database().ref('messages');

//listen for form submit
document.getElementById('contact-form').addEventListener('submit',submitForm);

function submitForm(e){
    e.preventDefault();

    var name=inputval('name');
    var email=inputval('email');
    var message=inputval('message');

    console.log(1221);

    saveMessage(name,email,message);

    document.getElementById('contact-form').reset();
}

//to get for values

function inputval(id){
    return document.getElementById(id).value;
}

function getTimeNow(){
    var today = new Date();
    var date = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate();
    var time = today.getHours()+':'+today.getMinutes()+':'+today.getSeconds();
    return 'YYYY/MM/DD HH:MM:SS'+date+' '+time;
}

//save message
function saveMessage(name,email,message){
    var newMessageRef = messagesRef.push();
    time = getTimeNow();
    newMessageRef.set({
        name: name,
        email: email,
        message: message,
        time: time
    })
}