$.ajax({
  type: "GET",
  url: "Pets.json",
  success: function (response) {
    $(".name").text(response.name);
    $(".age").text(response.age);
    $(".weight").text(response.weight);
    $(".type").text(response.type);
    $(".likes").text(response.likes);
  },
});
