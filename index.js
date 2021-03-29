
// api url

// const api_url = 
//       "http://openlibrary.org/search.json?title=" + title;
// Defining async function
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
    // const isbnRes = await fetch ("http://covers.openlibrary.org/b/isbn/" + myIsbn + ".jpg");
    // var cover = isbnRes.json();
    // console.log(isbnRes);
    showImage("http://covers.openlibrary.org/b/isbn/" + myIsbn + ".jpg");

    
}
// Calling that async function
// getapi(api_url);





// Function to define innerHTML for HTML table
function show(data) {
let header = `${data.docs[0].title}`;
let author = `${data.docs[0].author_name[0]}`

document.getElementById("bookTitle").innerHTML = header;
document.getElementById("bookAuthor").innerHTML = author;

}

function showImage(isbnImageUrl) {
    document.getElementById("image").innerHTML = "<img src=\"" + isbnImageUrl + "\"></img>";
}


//     let tab = 
//         `<tr>
//             <th>Title</th>
//             <th>Author</th>
//             <th>Position</th>
//             <th>Salary</th>
//             </tr>`;
//     // Loop to access all rows 
//     tab += `<tr> 
//     <td>${data.docs[0].title} </td>
//     <td>${data.docs[0].author_name[0]}</td>
//     <td>${data.position}</td> 
//     <td>${data.salary}</td>          
// </tr>`;
//     // Setting innerHTML as tab variable
//     document.getElementById("employees").innerHTML = tab;
