window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  
  //Resizing
  //canvas.height = window.innerHeight;
  //canvas.width = window.innerWidth;
  
  ctx.strokeStyle = "red";
  ctx.strokeRect(0, 0, canvas.width, canvas.height);
});
