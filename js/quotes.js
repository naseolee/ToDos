const quotes = [
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    },
    {
        quote: "A friend is someone who knows all about you and still loves you.",
        author: "Elbert Hubbard"
    },
    {
        quote: "Always forgive your enemies; nothing annoys them so much.",
        author: "Oscar Wilde"
    },
    {
        quote: "Without music, life would be a mistake.",
        author: "Friedrich Nietzsche, Twilight of the Idols"
    },
    {
        quote: "We accept the love we think we deserve.",
        author: "Stephen Chbosky, The Perks of Being a Wallflower"
    },
    {
        quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein"
    },
    {
        quote: "The difference between genius and stupidity is: genius has its limits.",
        author: "Alexandre Dumas-fils"
    },
    {
        quote: "If you can make a woman laugh, you can make her do anything.",
        author: "Marilyn Monroe"
    },

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

//1. round(1.1...2,3,4,...) -> 1
//   round(1.5...6,7,8,...) -> 2
//2. ceil(1.1...2,3,4,5,6,...) -> 2
//3. floor(1.9) -> 1

const random = Math.floor(Math.random() * quotes.length);

quote.innerHTML = quotes[random].quote;
author.innerHTML = quotes[random].author;