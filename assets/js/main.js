console.log("Hello World");

function openModal(imgUri) {
    const modalDiv = document.createElement("div")
    modalDiv.id = "lightbox"
    modalDiv.className = "lightbox"
    modalDiv.innerHTML = `
    <span class="close cursor" onclick="closeModal()">&times;</span>
    <div class="lightbox-display">
        <img src="${imgUri}"></img>
    </div>
    `
    document.body.appendChild(modalDiv)
}

function closeModal() {
    const modalDiv = document.getElementById("lightbox")
    modalDiv.remove()
}