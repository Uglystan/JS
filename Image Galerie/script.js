function main() {
	let imageUrl = document.getElementById("imageUrl")
	let addImageButton = document.getElementById("addImageButton")
	let gallery = document.getElementById("gallery")

	addImageButton.addEventListener("click", (event) => {
		let newDivImage = document.createElement("div")
		let newImage = document.createElement("img")
		let delButton = document.createElement("button")

		newImage.src = imageUrl.value
		delButton.textContent = "Supprimer"
		delButton.addEventListener("click", (event) => {
			newDivImage.remove()
		})

		newDivImage.appendChild(newImage)
		newDivImage.appendChild(delButton)
		gallery.appendChild(newDivImage)

		imageUrl.value = ""
	})
}

main()