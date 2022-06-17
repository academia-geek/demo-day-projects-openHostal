


let insert = document.getElementById("prueba");

insert.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  console.log(e.currentTarget);
  debugger;

  fetch("http://localhost:3015/api/room", {
      method: "POST",
      body: formData,
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
})


let insert1 = document.getElementById("pruebahostal");

insert1.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  console.log(e.currentTarget);
  debugger;

  fetch("http://localhost:3015/api/hostal", {
      method: "POST",
      body: formData,
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
})