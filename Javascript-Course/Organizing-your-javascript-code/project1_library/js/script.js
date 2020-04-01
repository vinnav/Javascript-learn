let myLibrary = [];

// Book Class
function Book(title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        readStatus = ""
        if (this.read == true){
            readStatus = "already read"
        }
        else{
            readStatus = "not read yet"
        }
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`
    }
}

// Book example: const book1 = new Book("Animal Farm", "George Orwell", "250", true)
//               console.log(book1.info())


document.getElementById("myBtn").addEventListener("click", addBook);

function addBook() {
  console.log(document.getElementById("title").value)
  console.log(document.getElementById("author").value)
  console.log(document.getElementById("pages").value)
  console.log(document.getElementById("read").checked)
  let newBook = new Book(document.getElementById("title").value, document.getElementById("author").value, document.getElementById("pages").value, document.getElementById("read").checked)
  console.log(newBook.info())
  myLibrary.push(newBook)
  updateBooks()
  
  
  document.getElementById("title").value = ""
  document.getElementById("author").value = ""
  document.getElementById("pages").value = ""
  document.getElementById("read").checked = false
}

function updateBooks(){
    let library = ""
    for(item in myLibrary){
        library += myLibrary[item].info() + "<br>"
    }
    document.getElementById('target-id').innerHTML = library;
}



