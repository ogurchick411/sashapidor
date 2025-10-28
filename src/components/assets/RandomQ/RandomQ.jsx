
import React, { useEffect, useState } from "react";
import './RandomQ.css'


const RandomQ = () => {

    const [quotes, setQuotes] = useState([]);

    async function loadQuotes() {
        
        const response = await fetch("https://api.api-ninjas.com/v2/quotes?categories=success,wisdom&limit=20", {
            headers: {
                "x-api-key": "LVutITNf+w/DSUXtzn8h2w==wc2zZCKAgeHjwfDa"
            }
        });

        const data = await response.json();
        console.log(data);
        setQuotes(data);

        
    }
    
    
   const [quote,setQuote] = useState({
            quote: "Лучше хуем повертеть чем на парах посидеть",
            author: "Denys Zheltobriukh",
            

        });


    const getRandomQuote = () => {
        console.log("here")
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        console.log(select)
        setQuote(select);
    }
   
        
    useEffect(() => {
        loadQuotes();
    }, []);

    return (
        

        <div className='container'>
             <div className="quote">{quote.quote}</div>

             <div>
                <div className="line"></div>

                <div className="bottom">

                    <dir className="author">{quote.author}</dir>

                    <button onClick={() => getRandomQuote()}>Get quote</button>

                    <div id='insertQuoteHere' />

                </div>
                
                   

                    
             </div>
        </div>
    )
}

export default RandomQ 