function addDetails() {

    bookId = b1.value
    bookname = b2.value
    authorname = b3.value
    description = m2.value

    if (bookId == "" || bookname == "" || authorname == "" || description == "") {

        ale.innerHTML = `<p class="text-danger mt-2">Enter Book Details</p>`
    }
    else {
        bookF = { bookId, bookname, authorname, description }

        localStorage.setItem(bookname, JSON.stringify(bookF))
        ale.innerHTML = `<p class="text-success mt-2">Book Details Added</p>`


    }

}

function searchBook() {
    window.location = 'searchbook.html'
}



function findBook() {
    bookname = z1.value


    //check in local storage

    if (bookname in localStorage) {
        bookObj = JSON.parse(localStorage.getItem(bookname))
        if (bookObj.bookname == bookname) {
             result.innerHTML = 
             `<h6 class="text-light" style="font-family: 'Libre Baskerville', serif;">Id: ${bookObj.bookId}</h6>
             <h6 class="text-light" style="font-family: 'Libre Baskerville', serif;">Title: ${bookObj.bookname}</h6>
           <h6 class="text-light" style="font-family: 'Libre Baskerville', serif;">Author: ${bookObj.authorname}</h6>
          <h6 class="text-light" style="font-family: 'Libre Baskerville', serif;">Description: ${bookObj.description} </h6>`
            
            
        }
        else {

            alert("Book Not Found")

        }

    }
    else if (bookname == "") {

        alert("Please enter book name");


    }
    else {
        alert("Book Not Found")
    }


}

