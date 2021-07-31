const fileInput = document.getElementById("capturedImage");

fileInput.addEventListener("change", (e) => {
  for (let key in e.target.files[0]) {
    console.log(e.target[key]);
  }
  console.log(e.target.files[0]);
  let container = document.createElement("div");
  document.body.appendChild(container);
  let imgContainer = document.createElement("img");
  container.appendChild(imgContainer);
  imgContainer.src = e.target.files;
  imgContainer.style.width = "500px";
  imgContainer.style.height = "500px";
});
