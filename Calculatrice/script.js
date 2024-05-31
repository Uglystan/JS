function main() {
	let buttons = document.querySelectorAll(".row button")
	let display = document.getElementById("display")
	let res = 0
	let print = ""

	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener("click", (event) => {
			switch (buttons[i].textContent) {
				case "=":
					res = eval(print)
					console.log(res)
					display.value = res
					print = ""
					break;
				default:
					print += buttons[i].textContent
					display.value = print
					break;
			}
		})
	}
}

main()