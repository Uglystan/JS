class Library {
	static books = []

	static addBook(book) {
		Library.books.push(book)
	}

	static removeBook() {
		if (Library.books.length >= 1)
			Library.books.pop()
	}

	static listBooks() {
		for (let i = 0; i < Library.books.length; i++) {
			console.log(Library.books[i])
		}
	}
}

Library.addBook("Tst")
Library.addBook("JJ")
Library.listBooks()
Library.removeBook()
Library.listBooks()