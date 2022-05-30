$(document).ready(function(){

    $("#username").on("input", function(){
        var strUsername = $("#username").val();
        console.log("User input for username: " + strUsername);
    });

    $("#password").on("input", function(){
        var strPass = $("#password").val();
        console.log("User input for password: " + strPass);
    });
});