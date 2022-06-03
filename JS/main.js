var quoteOutPut=document.getElementById('quoteOutPut');
var authorOutPut=document.getElementById('authorOutPut');


var quotes=[{
   quote: "You have to write the book that wants to be written. And if the book will be too difficult for grown-ups, then you write it for children."  ,
   author:"Madeleine L'Engle"  
},{
quote:"If you don't have time to read, you don't have the time (or the tools) to write. Simple as that.",
author:"--Stephen King"
},
{
quote:"We write to taste life twice, in the moment and in retrospect.",
author:"--Anaïs Nin"
},
{
quote:"Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.",
author:"--Mark Twain"
},
{
quote:"If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
author:"--Toni Morrison"
},
{
quote:"Either write something worth reading or do something worth writing.",
author:"--Benjamin Franklin"
}]

console.log(quotes.quote);

function putQuote() {
  var randomNum= Math.floor(Math.random()* quotes.length);
  document.getElementById('quoteOutPut').innerHTML=quotes[randomNum].quote;
  document.getElementById('authorOutPut').innerHTML=quotes[randomNum].author;

}