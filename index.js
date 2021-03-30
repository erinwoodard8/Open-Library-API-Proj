
async function getapi(url) {

    let title = document.getElementById("searchBar").value;

    title = encodeURIComponent(title);
    // Storing response
    const response = await fetch("http://openlibrary.org/search.json?title=" + title);
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    show(data);


    var myIsbn = `${data.docs[0].isbn[0]}`;

    showImage("http://covers.openlibrary.org/b/isbn/" + myIsbn + ".jpg");

    

}



function show(data) {
let header = `${data.docs[0].title}`;
let author = `${data.docs[0].author_name[0]}`;
let year = `${data.docs[0].first_publish_year}`;
let genre = `${data.docs[0].subject[0]}`;
let genre2= `${data.docs[0].subject[1]}`;
let genre3= `${data.docs[0].subject[2]}`;
let amazonLink = `<a href="https://www.amazon.com/s?k=${data.docs[0].id_amazon[0]}&ref=nb_sb_noss" target="_blank">Purchase on Amazon</a>`;
let sentence=`${data.docs[0].first_sentence}`;

document.getElementById("bookTitle").innerHTML = header;
document.getElementById("firstSentence").innerHTML = sentence;
document.getElementById("bookAuthor").innerHTML = author;
document.getElementById("bookYear").innerHTML = year;
document.getElementById("bookGenre1").innerHTML = genre;
document.getElementById("bookGenre2").innerHTML = genre2;
document.getElementById("bookGenre3").innerHTML = genre3;

document.getElementById("amazon").innerHTML = amazonLink;

}

function showImage(isbnImageUrl) {
    document.getElementById("image").innerHTML = "<img src=\"" + isbnImageUrl + "\"></img>";
}

document.getElementById("searchBar").addEventListener("keydown", function (event) { //Allows you to submit the value of the searchBar using the enter key.
    if (event.keyCode === 13) {
      getapi();
    }
  });
