const check = document.getElementById("dark");
console.log(check.checked);
check.addEventListener("click", () => {
  const tog=document.querySelector("div");
  if (check.checked) {
    document.body.classList.toggle("black");
  } else {
    document.body.classList.toggle("black");
  }
  localStorage.setItem("Mode",JSON.stringify(check.checked));
});
