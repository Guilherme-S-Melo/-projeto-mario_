const botaoTrailer = document.querySelector('.botao-trailer')
const video = document.getElementById("video")
const modal = document.querySelector(".modal")
const linkDoVideo = video.src;
botaoTrailer.addEventListener("click", () => {
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo)
})
 
const fecharmodal = document.querySelector(".fechar-modal")
fecharmodal.addEventListener("click", () => {
    modal.classList.remove("aberto")
    video.setAttribute("src", "")
}) 