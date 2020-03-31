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

const book1 = new Book("Animal Farm", "George Orwell", "250", true)
console.log(book1.info())