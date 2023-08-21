const firebaseConfig = {
    apiKey: "AIzaSyAGDVMbCHb1f0sICwe0n5BVBnTfvBMWwks",
    authDomain: "projeto100-ff37e.firebaseapp.com",
    databaseURL: "https://projeto100-ff37e-default-rtdb.firebaseio.com",
    projectId: "projeto100-ff37e",
    storageBucket: "projeto100-ff37e.appspot.com",
    messagingSenderId: "554351720314",
    appId: "1:554351720314:web:ff175985f4dd1caebb08c3"
};

function logout() 
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}