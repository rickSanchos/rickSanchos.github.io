$("#sendMail").on("click", function() {
    let email = $("#email").val().trim();
    let name = $("#name").val().trim();
    let phone = $("#phone").val().trim();
    let message = $("#message").val().trim();

    if (email == "") {
        $("#errorMess").text("Введите email")

        return false
    } else if (name == "") {
        $("#errorMess").text("Введите имя")

        return false
    } else if (phone == "") {
        $("#errorMess").text("Введите телефон")

        return false
    } else if (message == "") {
        $("#errorMess").text("Введите сообщение")

        return false
    }
        $("#errorMess").text("")


    
    //Запись на ajax................................
    $.ajax({
        url: "ajax/mail.php",
        type: "POST",
        cache: false,
        data: { "email": email, "name": name, "phone": phone, "message": message},
        dataType: "html",
        beforeSend: function() {
            $("#sendMail").prop("disabled", true);
        },
        success: function(data) {
            if(!data){
                alert("Произошла ошибка!!!");
            } else {
                $("#mailForm").trigger("reset");
            }

            $("#sendMail").prop("disabled", false);
        },
    });
})