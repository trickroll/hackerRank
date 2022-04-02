// bookreader: library, currentBook
// book: name, file
// add, find, opem

class BookReader {
    constructor(){
        this.library = {}
        this.currentBook = null
    }

    add(book) {
        this.library[book.name] = book
    }
    find(bookname) {
        return this.library[bookname]
    }
    open(bookname){
        this.currentBook = this.library[bookname]
        return this.library[bookname].file
    }
}

class book {
    constructor(name, file){
        this.name = name
        this.file = file
    }
}