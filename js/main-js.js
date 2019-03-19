$("#pwd").keyup(function () {
    var strength = 1;

    /*length 5 characters or more*/
    if (this.value.length >= 5) {
        strength++;
    }

    /*contains lowercase characters*/
    if (this.value.match(/[a-z]+/)) {
        strength++;
    }

    /*contains digits*/
    if (this.value.match(/[0-9]+/)) {
        strength++;
    }

    /*contains uppercase characters*/
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


$(document).ready(function () {
    $("#submit").click(function () {
        var username = $("#username").val();
        var password = $("#pwd").val();
        var message = $("#message").text();

        if (message == "Strong") {
            alert("Username: " + username + " and Password: " + password);
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


/*glyphicon glyphicon-remove*/
