$.support.cors = true;
// ^ circumnavigates cross-origin-read-blocking (Chrome security feature)

let fetchURL = "https://frontend-take-home.fetchrewards.com/form";

$.ajax({
    url:fetchURL,
    method: "GET"
})
.then(function(response) {
    console.log(response);
    console.log(response.occupations[2]);
    console.log(response.states[2])

})