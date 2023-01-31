const link = document.getElementById("link");

link.addEventListener("click", function(event) {
  event.preventDefault(); // prevent the default behavior of the link

  axios.get("/data")
    .then(function(response) {
      console.log(response.data);
    });
});