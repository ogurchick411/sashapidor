
import React, { useEffect, useState } from "react";
import './RandomQ.css'


const RandomQ = () => {

    let quotes = [];

    async function loadQuotes() {
        
        const response = await fetch("https://api.kanye.rest");
        quotes = await response.json();

        
    }
    
    
   const [quote,SetQuote] = useState({
            text: "Лучше хуем повертеть чем на парах посидеть",
            author: "Denys Zheltobriukh",
            

        });


    const random = () => {
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        SetQuote(select);
    }
   
        loadQuotes();

    return (
        

        <div className='container'>
             <div className="quote">{quote.text}</div>

             <div>
                <div className="line"></div>
                <div className="bottom"></div>
                <dir className="author">{quote.author}</dir>

                
                <button onclick= {()=>{random()}}>Get quote</button>
                <div id='insertQuoteHere' />
                   

                    
             </div>
        </div>
    )
}

export default RandomQ 