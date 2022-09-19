$(document).ready(function(){
    let userNameLength = 0;
    let idPasswordLength = 0;
    let userName;
    let idPassword;

    let userIdBox=["asdfasdf","qwerasdf"];
    let userPasswordBox=["123456","654321"];

    $("#LoginErrorAlert").hide();
    $("#LoginIdErrorAlert").hide();

    $(".userIdPassword").on("input", function(){
        if($(this).attr("name")==="username")
        {
           userName = $(this).val();
           userNameLength = $(this).val().length;
           //console.log(userNameLength); 
        }
        else if($(this).attr("name")==="password")
        {
           idPassword = $(this).val();
           idPasswordLength =$(this).val().length;
           //console.log(idPasswordLength);
        }

        if(userNameLength>=1 && idPasswordLength>=6)
        {
            $(".loginButton").removeAttr("disabled");
            $(".loginButton").addClass("removeDisabled");
            
        }
        else
        {
            $(".loginButton").attr("disabled","");
            $(".loginButton").removeClass("removeDisabled");
        }
    });

    $(".loginButton").on("click", function(){
        LoginSubmit();
    });

    $(document).on("keydown",function(e){
        if(userNameLength>=1 && idPasswordLength>=6)
        {
            if(e.keyCode==13)
            {
                $(".userIdPassword").blur();
                LoginSubmit();
            }
        }
    })

    function LoginSubmit()
    {
        var userNameIndex = -1;
        var idPasswordIndex = -2;
        for(var i=0; i<userIdBox.length; i++)
        {
            if(userName == userIdBox[i])
            {
                userNameIndex = i;
            }
            if(idPassword == userPasswordBox[i])
            {
                idPasswordIndex = i;
            }
        }

        if(userNameIndex==idPasswordIndex)
        {
            console.log("Login")
            $("#LoginErrorAlert").hide();
            $("#LoginIdErrorAlert").hide();

            $(".userIdPassword").val("");
            location.href="https://www.google.com/";
        }
        else if(userNameIndex==-1)
        {  
            $("#LoginErrorAlert").hide();
            $("#LoginIdErrorAlert").show();
        }
        else
        {
            $("#LoginIdErrorAlert").hide();
            $("#LoginErrorAlert").show();
        }
    }

});