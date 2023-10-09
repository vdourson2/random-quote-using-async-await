async function getQuote() {
    document.querySelector('.loader').style.display = "flex";

    try {
        const response = await fetch("https://thatsthespir.it/api");
        const data = await response.json();
        console.log(data);

        //Displays quotation :
        quote.innerHTML = data.quote;

        //Create and displays picture if there is a link
        let picture = document.querySelector('.picture');
        if (picture == null){
            document.querySelector('.loader').style.display = "none";
        }
        if (picture !== null){
            document.querySelector('div').removeChild(picture);
            document.querySelector('.loader').style.display = "none";
        }
        if (data.photo !== ""){
            let picture = document.createElement('img');
            picture.addEventListener("load", (event) => {
                document.querySelector('.loader').style.display = "none";
                console.log("page is fully loaded");
              });
            picture.classList.add("picture");
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
// window.addEventListener("load", (event) => {
//     document.querySelector('.loader').style.display = "none";
//     console.log("page is fully loaded");
//   });

let quote = document.querySelector('blockquote');
let author = document.querySelector('p');

getQuote(quote, author);
console.log(document.querySelector('img'));
document.querySelector('button').addEventListener('click',() => {
    getQuote();
    window.addEventListener("load", (event) => {
        document.querySelector('.loader').style.display = "none";
        console.log("page is fully loaded");
      });
})

// window.addEventListener("load", (event) => {
//     document.querySelector('.loader').style.display = "none";
//     console.log("page is fully loaded");
//   });