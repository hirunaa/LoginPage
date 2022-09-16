$(document).ready(function(){
    let userNameLength = 0;
    let idPasswordLength = 0;
    let userName;
    let idPassword;

    let userIdBox=["asdfasdf","qwerasdf"];
    let userPasswordBox=["123456","654321"];

    $("#LoginErrorAlert").hide();
    console.log("dd");
    $(".userIdPassword").on("input", function(){
        if($(this).attr("name")==="username")
        {
           userName = $(this).val();
           userNameLength = $(this).val().length;
           console.log(userNameLength); 
        }
        else if($(this).attr("name")==="password")
        {
           idPassword = $(this).val();
           idPasswordLength =$(this).val().length;
           console.log(idPasswordLength);
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
            location.href="https://www.google.com/";
            $(".userIdPassword").val("");
        }
        else if(userNameIndex==-1)
        {
            $("#LoginErrorAlert").text("입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 사용자 이름을 확인하고 다시 시도하세요.");
            $("#LoginErrorAlert").show();
        }
        else
        {
            $("#LoginErrorAlert").text("잘못된 비밀번호입니다. 다시 확인하세요.");
            $("#LoginErrorAlert").show();
        }
    });

});