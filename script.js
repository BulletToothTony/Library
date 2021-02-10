const LibDivInner = document.getElementById('LibInner')

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.read
    }
}

const EastofEden = new Book('East of Eden', 'John Steinbeck', 732, "yes")
console.log(EastofEden.info())

const Lotr = new Book('Lord of the rings', 'Toklkien', 837, "no")
console.log(Lotr.info())

function addBookToLibrary(book) {
    book = EastofEden
    book1 = Lotr
    myLibrary.push(book)
    myLibrary.push(book1)

}

function addBookTest() {
    title = prompt('Enter a title')
    author = prompt('Enter author')
    pages = prompt('Enter page count')
    readyesno = prompt('Have you read this book?')

    const newBook = new Book(title, author, pages, readyesno)
    console.log(newBook)
    myLibrary.push(newBook)

}

addBookTest()

function LibraryLoop() {
    for (let i = 0; i < myLibrary.length; i++){
        LibDivInner.innerHTML += myLibrary[i].info() + ' + '
    }
}

addBookToLibrary()
LibraryLoop()

