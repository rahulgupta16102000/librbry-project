console.log('library')


//  constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author
    this.type = type
}

// display constructor 
function Display() {

}

// add methods to display prototype
Display.prototype.add = function (book) {
    console.log('ui successfull')
    
    
    let tablebody = document.getElementById('tablebody')
    let uistring = `<tr>
    
    <td>${book.name}</td>
    <td>${book.author}</td>
    <td>${book.type}</td>
    </tr> `
    tablebody.innerHTML += uistring
}
Display.prototype.clear = function () {
    let libraryform = document.getElementById('libraryform')
    libraryform.reset()
}
Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false
    }
    else {
        return true
    }
}
Display.prototype.show = function (type,lemessage) {
    let message = document.getElementById('message')
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
    <strong>message:</strong>   ${lemessage}
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>`
setTimeout(function() {
    message.innerHTML = ''
}, 2000);
}


    // add submit event listener
    let libraryform = document.getElementById('libraryform')
    libraryform.addEventListener('submit', libraryformsubmit)

    function libraryformsubmit(e) {
        console.log('your form is submit')
        let name = document.getElementById('bookname').value
        let author = document.getElementById('author').value
        // 
        let fiction = document.getElementById('Fiction')
        let programing = document.getElementById('Programming')
        let cooking = document.getElementById('Cooking')

        let type;
        if (fiction.checked) {
            type = fiction.value
        }
        else if (programing.checked) {
            type = programing.value
        }
        if (cooking.checked) {
            type = cooking.value
        }




        let book = new Book(name, author, type)
        let display = new Display();
        if (display.validate(book)) {

            display.add(book);
            display.clear();
            display.show("success","your book has successfully added")
        }
        else {
            display.show("danger","sorry you cannot added this book")

        }



        e.preventDefault()
        console.log(book)
    }