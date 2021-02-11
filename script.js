const LibDivInner = document.getElementById('LibInner')
const modal = document.getElementById('myModal');
const modalbtn = document.getElementById('myBtn');
const spanmodal = document.getElementsByClassName('close')[0];
const btitle = document.getElementById('btitle')
const bauthor = document.getElementById('bauthor')
const bpages = document.getElementById('bpages')
const bread = document.getElementById('bread')




book = undefined;

modalbtn.onclick = function() {
    modal.style.display = 'block';
}

spanmodal.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

function formSubmit() {
    console.log("Submitted")
    ctitle = btitle.value
    cauthor = bauthor.value
    cpages = bpages.value
    cread = bread.value
    console.log(btitle.value)
    console.log(bauthor.value)
    console.log(bpages.value)
    console.log(bread.value)

    const newbook = new Book (ctitle, cauthor, cpages, cread)

    myLibrary.push(newbook)

    // addBookToLibrary(newbook)

    console.log(ctitle + cauthor + cpages + cread)

    LibraryLoop()


    // addBookToLibrary(btitle, bauthor, bpages, bread)
}

// function testing() {
//     ctitle = 'eeee';
//     cauthor = 'eeeee';
//     cpages = 1234;
//     cread = 'yes';
//     // console.log(btitle.value)
//     // console.log(bauthor.value)
//     // console.log(bpages.value)
//     // console.log(bread.value)

//     const newbook = new Book (ctitle, cauthor, cpages, cread)

//     myLibrary.push(newbook)

//     // addBookToLibrary(newbook)

//     console.log(btitle + bauthor + bpages + bread)
//     LibraryLoop()
// }
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
    book11 = EastofEden
    book1 = Lotr
    // myLibrary.push(book)
    myLibrary.push(book11)
    myLibrary.push(book1)

}

// function addBookTest() {
//     title = prompt('Enter a title')
//     author = prompt('Enter author')
//     pages = prompt('Enter page count')
//     readyesno = prompt('Have you read this book?')

//     const newBook = new Book(title, author, pages, readyesno)
//     console.log(newBook)
//     myLibrary.push(newBook)

// }

// addBookTest()

function LibraryLoop() {
    for (let i = 0; i < myLibrary.length; i++){
        LibDivInner.innerHTML += myLibrary[i].info() + ' + '
    }
}

addBookToLibrary()
// LibraryLoop()

// testing()
