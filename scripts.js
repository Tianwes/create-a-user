$.support.cors = true;
// ^ circumnavigates cross-origin-read-blocking (Chrome security feature)



let fetchURL = "https://frontend-take-home.fetchrewards.com/form";

$.ajax({
    url:fetchURL,
    method: "GET"
})
.then(function(response) {
    for (var i=0; i < response.occupations.length; i++) {
        $("#occupation-select").append('<option value=' + response.occupations[i] + '>' + response.occupations[i] + '</option>')
    }
  
    for (var j=0; j < response.states.length; j++) {
        $("#state-select").append('<option value=' + response.states[j].name + '>' + response.states[j].name + ", " + response.states[j].abbreviation + '</option>')
    }

 });