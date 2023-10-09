import { useState } from 'react'
import quotes from './assets/Quotes.json';
import './App.css';
import { FaTwitter,FaQuoteLeft,FaQuoteRight, FaTumblr } from "react-icons/fa";

interface Quote {
  quote: string;
  author: string;
}
const getRandomQuote = (): Quote =>{
  return quotes[Math.floor(Math.random() * quotes.length)]
}
const getRandomColor =(): string =>{
const colors =[
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#f86964",
  "#342224",
  "#472e32",
  "#bd0b99",
  "#77b1a9",
  "#73a857",
];
return colors[Math.floor(Math.random()* colors.length)]
}
function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [newColor, setNewColor] = useState<string>(getRandomColor());
  const newQuote = () =>{
    setQuote(getRandomQuote)
    setNewColor(getRandomColor)
  }

  return (
   <div className='background' style={{backgroundColor: newColor,transition:'step-start'}}>
    <div id= 'quote-box'> 
    <div id='quote-content'>
      <FaQuoteLeft size="30px" style={{margin:'10px',color: newColor}}/>
      <h1 id='text' style={{color: newColor}}>{quote.quote}</h1>
      <FaQuoteRight size="30px" style={{margin:'10px',color: newColor}}/>
      <h4 id='author' style={{color: newColor}}> - {quote.author}</h4>
    </div>
    <div className='icons' >
      <div  className='btn'>
      <a href='https://twitter.com/Ramy_008' target='blank' style={{backgroundColor:newColor,marginRight:'10px',transition:'20px'}}
      ><FaTwitter color='white'/></a>
   
      <a href='https://www.tumblr.com/uncensoredgists-blog' target='blank'  style={{backgroundColor:newColor,marginRight:'10px'}}
      ><FaTumblr color='white'/></a></div>
      
      <button style={{backgroundColor: newColor}}id='new-quote'  onClick={newQuote}>
        get a new quote
      </button>
    </div>
    </div>
   </div>
  )
}

export default App
