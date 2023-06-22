function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("dark")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("dark")) {
    img.setAttribute("src", "./assets/avatar-pink.png")
    img.setAttribute(
      "alt",
      "Foto de Priscila Souza Sorrindo"
    )
  } else {
    img.setAttribute("src", "./assets/avatar_green.png")
    img.setAttribute(
      "alt",
      "Foto de Priscila Souza com mão no queixo"
    )
  }
}
