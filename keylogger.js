$(document).ready(function(){

    $("#clear").click(function () {
        $("#username").val('');
        $("#password").val('');
    });

    $("#password").on("input", function(){
        var strPass = $("#password").val();
        console.log("User input for password: " + strPass);
    });
});