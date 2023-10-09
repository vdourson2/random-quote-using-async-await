async function getQuote() {
    document.querySelector('.loader').style.display = "flex";
   
    try {
        const response = await fetch("https://thatsthespir.it/api");
        const data = await response.json();
        console.log(data);

        //Displays quotation :
        quote.innerHTML = data.quote;

        //Create and displays picture if there is a link
        picture.addEventListener("load", (event) => {
            document.querySelector('.loader').style.display = "none";
            console.log("page is fully loaded");
          });
        if (data.photo == ''){
            picture.src = "assets/avatar.png";
        } else {
            picture.src = data.photo;
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
let picture = document.querySelector('.author');


getQuote();

document.querySelector('button').addEventListener('click',() => {
    getQuote();
    window.addEventListener("load", (event) => {
        document.querySelector('.loader').style.display = "none";
        console.log("page is fully loaded");
      });
})