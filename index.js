
async function getapi(url) {

    let title = document.getElementById("searchBar").value;

    title = encodeURIComponent(title);
    // Storing response
    const response = await fetch("http://openlibrary.org/search.json?title=" + title);
    var data = await response.json();
    if (data.numFound > 0) {
        var myIsbn = `${data.docs[0].isbn[0]}`;
        show(data);
        showImage("http://covers.openlibrary.org/b/isbn/" + myIsbn + "-L.jpg");
    } else {
        alert("Results Not Found");
    }

}



function show(data) {
let header = `Title: ${data.docs[0].title}`;
let author = `Author: ${data.docs[0].author_name[0]}`;
let year = `Original Publication: ${data.docs[0].first_publish_year}`;
let genre = `Genre: ${data.docs[0].subject[1]}`;
let amazonLink = `<a href="https://www.amazon.com/s?k=${data.docs[0].id_amazon[0]}&ref=nb_sb_noss" target="_blank">Purchase on Amazon</a>`;
let sentence=`"${data.docs[0].first_sentence}"`;

document.getElementById("bookTitle").innerHTML = header;
document.getElementById("firstSentence").innerHTML = sentence;
document.getElementById("bookAuthor").innerHTML = author;
document.getElementById("bookYear").innerHTML = year;
document.getElementById("bookGenre1").innerHTML = genre;
document.getElementById("amazon").innerHTML = amazonLink;

}

function showImage(isbnImageUrl) {
    document.getElementById("image").innerHTML = "<img src=\"" + isbnImageUrl + "\"></img>";
}

document.getElementById("searchBar").addEventListener("keydown", function (event) { 
    if (event.keyCode === 13) {
      getapi();
    }
  });
