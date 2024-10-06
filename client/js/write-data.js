const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function() {
    const bookTitleBox = document.getElementById("bookTitle");
    const authorBox = document.getElementById("author");
    const genreBox = document.getElementById("genre");
    const publisherBox = document.getElementById("publisher");
    const yearPublishedBpx = document.getElementById("yearPublished");
    const isbnBox = document.getElementById("isbn");

    var first = bookTitleBox.value;
    var second = authorBox.value;
    var third = genreBox.value;
    var fourth = publisherBox.value;
    var fifth = yearPublishedBpx.value;
    var sixth = isbnBox.value;


    console.log("Book Title: " + first);
    console.log("Author: " + second);
    console.log("Genre: " + third);
    console.log("Publisher: " + fourth);
    console.log("Year Published: " + fifth);
    console.log("ISBN: " + sixth);

    alert("Submit button was pressed" + "\n" + first + "\n" + second + "\n" + third + "\n" + fourth + "\n" + fifth + "\n" + sixth);

    //To stop the natural HTML flow
    return false;
});


$("#clear").click(function(){
    $("#bookTitle").val("");
    $("#author").val("");
    $("genre").val("");
    $("publisher").val("");
    $("#yearPublished").val("");
    $("#isbn").val("");
});