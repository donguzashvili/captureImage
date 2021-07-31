const fileInput = document.getElementById("capturedImage");

fileInput.addEventListener("change", function () {
  let container = document.createElement("div");
  document.body.appendChild(container);
  let imgContainer = document.createElement("img");
  container.appendChild(imgContainer);
  imgContainer.style.width = "500px";
  imgContainer.style.height = "500px";
  console.log(this.files[0]);
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    console.log(reader);

    reader.addEventListener("load", () => {
      imgContainer.setAttribute("src", reader.result);
    });
    reader.readAsDataURL(file);
  }
});
