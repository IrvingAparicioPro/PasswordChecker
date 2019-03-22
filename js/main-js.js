$(document).ready(function () {
    $("#pwd").keyup(function () {
        var strength = 1;

        if (this.value.length >= 5) {
            strength++;
        }

        if (this.value.match(/[a-z]+/)) {
            strength++;
        }

        if (this.value.match(/[0-9]+/)) {
            strength++;
        }

        if (this.value.match(/[A-Z]+/)) {
            strength++;
        }

        if (strength >= 5) {
            $('#message').addClass('glyphicon glyphicon-ok');
            $('#message').text('Strong');
        } else if (strength >= 0) {
            $('#message').addClass('glyphicon glyphicon-remove');
            $('#message').text('Week');
        }

    });

    $("#submit").click(function () {
        var username = $("#username").val();
        var password = $("#pwd").val();
        var message = $("#message").text();

        if (message == "Strong") {
            alert("succesful");
        } else if (message == "Week") {
            $("#pwd").removeClass(".btn btn-outline-primary");
            $("#pwd").addClass(".btn btn-outline-danger");
        }
    });

    $("#pwd").click(function () {
        $("#pwd").removeClass(".btn btn-outline-danger");
        $("#pwd").addClass(".btn");
    });

});
