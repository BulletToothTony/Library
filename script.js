const LibDivInner = document.getElementById('LibInner')
const modal = document.getElementById('myModal');
const modalbtn = document.getElementById('myBtn');
const spanmodal = document.getElementsByClassName('close')[0];
const modalForm = document.getElementById('modalForm')
const btitle = document.getElementById('btitle')
const bauthor = document.getElementById('bauthor')
const bpages = document.getElementById('bpages')
const bread = document.getElementById('bread')
const DarkButton = document.getElementById('DarkModeTog')


window.onload = LibraryLoop;

if(!localStorage.getItem('myLibrary')) {
    populateStorage();
} else {
    setStyles()
}

function populateStorage() {
    localStorage.setItem('headerID', document.getElementById('headerID').innerHTML);
    // setItem creates a new data item we are getting the value of the headerID

    setStyles();
}

function setStyles() {
    var headeridstyle  
}


// allBooks = ''
booksread = 0;
booksnotread = 0;
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
    modal.style.display = 'none';

    resetform()
    LibraryLoop(newbook)
    rendernewbook(newbook)

    // addBookToLibrary(btitle, bauthor, bpages, bread)
}


function rendernewbook(book) {
    //creat div, add style
    console.log('render')
    let newdiv = document.createElement("div");
    newdiv.classList.add("divcard")
    // let newbook = document.createTextNode(book.title);
    // const lineBreak = document.createElement('br');
    // newdiv.appendChild(newbook)
    // newdiv.append(book.pages)
    // newdiv.append(book.read)

    const currentdiv = document.getElementById("renderdiv")
    // document.body.appendChild(newdiv, currentdiv)
    document.getElementById('renderdiv').appendChild(newdiv)

    //loop through properties of book to show in card
    // let title = myLibrary[0].title
    // let newp = document.createElement("p");
    // titlep.classList.add("booktitle");
    // newdiv.innerText = book.author;

    const booksreadid = document.getElementById("booksreadid")
    booksread +=1;
    booksreadid.innerHTML = booksread

    //loop through keys
    for (const [key, value] of Object.entries(book)) {
        console.log('key ' + key)

        let newp = document.createElement("p");

        if (key == "title") {
            newp.innerHTML = `<span class="pagenumStyle">` + value + `</span>`
            newp.classList.add("numpagestext")
            newdiv.append(newp)
        } 

        else if (key == "pages") {
            newp.innerHTML = `Num of pages: ` + `<span class="pagenumStyle">` + value + `</span>`
            // newp = newbook.title;
            // newdiv.append = newp + 'newp';
            console.log('keytitle ' + key)
            console.log('val' + value)
            newp.classList.add("numpagestext")
            newdiv.append(newp)
        } else if (key == "author") {
            newp.innerHTML = `Author: ` + `<span class="pagenumStyle">` + value + `</span>`
            newp.classList.add("numpagestext")
            newdiv.append(newp)
        } else if (key == "read") {
            newp.innerHTML = `Read:  ` + `<span class="pagenumStyle">` + value + `</span>`
            // newp = newbook.title;
            // newdiv.append = newp + 'newp';
            newp.setAttribute("id", "readyesnoid")
            newp.classList.add("numpagestext")
            newdiv.append(newp)
        } 
    }


    // create button to remove
    let removeBtn = document.createElement("button");
    removeBtn.classList.add("bookbtn");
    removeBtn.innerHTML = "Remove";
    // removebtn.addEventListener("click", removebook)
    newdiv.append(removeBtn);

    // Toggle read button
    let readbtn = document.createElement("button");
    readbtn.setAttribute("id", "readbtn");
    readbtn.classList.add("readbtnclass")
    readbtn.innerHTML = "Read : Yes"
    readbtn.addEventListener("click", toggleread);
    newdiv.append(readbtn)

    allBooks = document.querySelectorAll(".divcard")

    removeBtn.addEventListener("click", function(e) {
        console.log("bookremoveee")
        booksread -=1;
        console.log(e)
        booksreadid.innerHTML = booksread
        e.target.parentNode.remove();
    })

    for (let i = 0; i < allBooks.length; i++) {
        allBooks[i].addEventListener("click", function(e) {
        console.log(e)
        if (e.target.classList.contains("bookbtn")) {
            // e.target.firstChild.textContent = 'loooool';
            // booksread -=1;
            // booksreadid.innerHTML = booksread
            // bookremovetest();
            console.log('test')
            // e.target.parentNode.remove(); < # Old Method moved to remove button listener
        // } else if (e.target.classList.contains("readbtnclass")) {
        //     // readbtns = document.qu
        //     toggleread(e)

        //     // for (let i = 0)
        //     console.log('bookreadtest')
        }
        })
    }   

    // new for loop test
    newallbooks = document.querySelectorAll(".readbtnclass")
    for (let i = 0; i < newallbooks.length; i++) {
        newallbooks[i].addEventListener("click", function(e) {
            console.log('jjjjjjjjjjjjjjjjjjj')
        })
    }
    
}

// function bookremovetest() {
//     booksreadid = document.getElementById("booksreadid")
//     booksread -=1;
//     booksreadid.innerHTML = booksread
// }

DarkButton.addEventListener("click", DarkModeFunc)

function DarkModeFunc() {
    let element = document.body;
    let bookdiv = document.getElementById("renderdiv")
    let button = document.getElementById('DarkModeTog')
    button.classList.toggle('dark-mode-button')
    element.classList.toggle("dark-mode")
    bookdiv.classList.toggle("div-dark")
}

function removebook(e) {
    console.log(e)
    // need to remove div card class is divcard
    // let elements = document.getElementsByClassName("divcard")
    // elements[0].parentNode.removeChild(elements[0]);
    // booksread -=1;
    // booksreadid.innerHTML = booksread

    // //find book using function and remove
    // console.log(findbook(myLibrary, e.target.parentNode.childNodes[1].innerText));
}

function delbook(currentbook) {
    myLibrary.splice(currentbook, currentbook + 1)
}

function findbook(libarr, bookname) {
    for (bk of libarr) {
        if(bk.title === bookname) {
            return myLibrary.indexOf(bk);
        }
    }
}


function toggleread(e) {
    // e.target.classList.toggle("testingclass")
    if (e.target.innerHTML === "Read : Yes" ) {
        e.target.innerHTML = "Read : No";
        e.target.classList.remove("readbtnyes")
        e.target.classList.add("readbtnno")
        e.target.parentNode.childNodes[3].innerHTML = 'Read : No'
        // e.target.classList.remove("readbtnno")
        e.target.parentNode.classList.add("divcardnotread")
        booksread -=1;
        booksreadid.innerHTML = booksread
        booksnotread +=1;
        booksnotreadid.innerHTML = booksnotread
        this.read = 'No'
    } else if (e.target.innerHTML === "Read : No") {
        e.target.innerHTML = "Read : Yes";
        e.target.classList.add("readbtnyes");
        e.target.classList.remove("readbtnno")
        e.target.parentNode.classList.remove("divcardnotread")
        // let readindev = document.getElementById("readyesnoid");
        // readindev.innerHTML = "Read : Yes"
        
        e.target.parentNode.childNodes[3].innerHTML = 'Read : Yes'
        booksread +=1;
        booksreadid.innerHTML = booksread
        booksnotread -=1;
        booksnotreadid.innerHTML = booksnotread

    }
    // let readbtn = document.getElementById("readbtn")
    // if (readbtn.innerHTML == "Read : Yes") {
    //     readbtn.innerHTML = "Read : No"
    //     let readindev = document.getElementById("readyesnoid");
    //     readbtn.classList.remove("readbtnyes")
    //     readbtn.classList.add("readbtnno")
    //     readindev.innerHTML = "Read : No"
    //     booksread -=1;
    //     booksreadid.innerHTML = booksread
    //     booksnotread +=1;
    //     booksnotreadid.innerHTML = booksnotread
    //     // readindev.append(readindev);
    //  else {
    //     readbtn.innerHTML = "Read : Yes"
    //     readbtn.classList.add("readbtnyes")
    //     let readindev = document.getElementById("readyesnoid");
    //     readindev.innerHTML = "Read : Yes"
    //     // readindev.append(readindev)
    //     readbtn.classList.add("readbtnno")
    //     booksread +=1;
    //     booksreadid.innerHTML = booksread
    //     booksnotread -=1;
    //     booksnotreadid.innerHTML = booksnotread
    // }
}

// allBooks = document.querySelectorAll(".divcard")

// for (let i = 0; i < allBooks.length; i++) {
//     allBooks[i].addEventListener("click", function(e) {
//         console.log(e + 'bbbbbbbbbbbbb')
//     })
// }


function resetform() {
    modalForm.reset()
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
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + "read: " + this.read;
    }
}

const EastofEden = new Book('East of Eden', 'John Steinbeck', 732, "Yes")
console.log(EastofEden.info())

const Lotr = new Book('Lord of the rings', 'Tolkien', 837, "Yes")
console.log(Lotr.info())

rendernewbook(EastofEden)
rendernewbook(Lotr)

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


function LibraryLoop(newbook) {
    for (let i = 0; i < myLibrary.length; i++){
                if (myLibrary[i].title == newbook.title) {
                    LibDivInner.innerHTML += myLibrary[i].info() + '<br />'
                }
        }
    }

//         match = false;
//         for (let j = 0; j < myLibrary.length; j++) {
//             if (myLibrary[i].title == myLibrary[j].title) {
//                 match = true;
//                 break;
//             // LibDivInner.innerHTML += myLibrary[i].info() + '<br />'
//             console.log(myLibrary[i])
//         }
//     }
//     if (match) {
//         console.log(myLibrary[i].title)
//         LibDivInner.innerHTML += myLibrary[i].info() + '<br />'
//     }
// }
// }

addBookToLibrary()

console.log(myLibrary)
x = findbook(myLibrary, "Lord of the rings")
console.log('findbook!!!' + x)
// LibraryLoop()

// testing()
