const form = document.querySelector("form");
const button = document.querySelector("button");

form.addEventListener("submit", () => {
  const Pet = {
    name: form.elements["name"].value,
    age: form.elements["age"].value,
    weight: form.elements["weight"].value,
    type: form.elements["type"].value,
    likes: form.elements["likes"].value,
  };

  console.log("Javascript Object: ", Pet);
  console.log("JSON : " + JSON.stringify(Pet));
});
