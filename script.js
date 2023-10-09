async function getQuote(quote, author) {
    try {
        const response = await fetch("https://thatsthespir.it/api");
        const data = await response.json();

        //Displays quotation :
        quote.innerHTML = data.quote;

        //Create and displays picture if there is a link
        if (data.photo !== ""){
            let picture = document.createElement('img');
            picture.src = data.photo;
            picture.alt="Picture of the author of the quotation";
            document.querySelector('div').insertBefore(picture, author);
        }

        //displays author
        author.textContent = data.author;
    }
    catch(error) {
        alert("The process of fetching a quote failed : " + error);

    }

}

let quote = document.querySelector('blockquote');
let author = document.querySelector('p');

getQuote(quote, author);