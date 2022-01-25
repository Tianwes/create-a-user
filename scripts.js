let fetchURL = "https://frontend-take-home.fetchrewards.com/form";

$.ajax({
    url: fetchURL,
    method: "GET"
})
    .then(function (response) {
        for (var i = 0; i < response.occupations.length; i++) {
            $("#occupation-select").append('<option value="' + response.occupations[i] + '">' + response.occupations[i] + "</option>")

           
        }
        for (var j = 0; j < response.states.length; j++) {
            $("#state-select").append('<option value="' + response.states[j].name + '">' + response.states[j].name + ', ' + response.states[j].abbreviation + "</option>")
        }
    });

$(document).on('change', '#occupation-select', function () {
    var chosenOcc = $('#occupation-select').children(":selected").text();
    console.log(chosenOcc);

});

$(document).on('change', '#state-select', function () {
    var chosenState = $('#state-select').children(":selected").text();
    console.log(chosenState);
});

$('#submit-btn').click(function saveInfo(info) {
    
    var fullName = $('#fullName').val();
    var email = $('#email').val();
    var password = $('#password').val();
    var occupation = $('#occupation-select option:selected').val();
    var usersState = $('#state-select option:selected').val();

    let userInfo = {
        name: fullName,
        email: email,
        password: password,
        occupation: occupation,
        state: usersState
    };
    
    console.log(userInfo);

    $.ajax({
        url: fetchURL,
        method: "POST",
        body: JSON.stringify(userInfo),
        dataType: 'json',
        contentType: "application/json; charset=utf-8",
        traditional: true,
        success: function (userInfo) {
            // $('#success-response').html("<h2 class='alert alert-success'>" + response.Name + "</h2>")
            return("Success");

        }

    }).then(function () {
console.log("toodle pip")
    })
});