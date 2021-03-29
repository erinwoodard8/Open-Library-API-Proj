var myResults = function (response) {
    let apiResp = JSON.parse(response);
    let resultArr = apiResp["docs"];

    let bookIsbn = resultArr["isbn"][0];
    let isbnReq = new XMLHttpRequest();

    isbnReq.open('GET', 'http://covers.openlibrary.org/b/isbn/' + bookIsbn + '.jpg');


   isbnReq.send();
    }




function search() {
    let idRequest = new XMLHttpRequest();
    let title = document.getElementById("searchBar").value;

    title = encodeURIComponent(title);  // encodeURICompoment will allow the title to be added to the HTTPS request because spaces can't exist

    document.getElementById("searchBar").value = "";  // clears the search bar
    

    idRequest.open('GET', 'http://openlibrary.org/search.json?title=' + title, true);  // requesting the movie title from the api so I can get the id

    idRequest.onload = function () {
        
        if (idRequest.status == 200) {
            myResults(this.responseText); //executes the myResults() using the response of the idRequest request.
        } else {
            document.getElementById('error').innerHTML = "Results not found"; //error message fo if this request was unsuccessful 


        }

    }

    idRequest.send();
}