import React, { useState } from "react";
import Result from "./Result";
import logo from "../assets/searchGG.png";
import books from "../assets/Eng.png";
import github from "../assets/github.png";
import Typewriter from "typewriter-effect";

function SearchBar(props) {
  const [word, setWord] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(word);
  }
  

  return (
    <div className="container">

      <div className="book-img">
        <img src={books} alt="Logo" />
      </div>
         
      <div className="title" style={{ margin: "50px",display: 'flex', alignItems: 'center',justifyContent: 'center'  }}>
        <h2>
        Dictionary
        </h2>
        <h3 style={{marginLeft: '10px'}}>
        <Typewriter
            options={{
              strings: ["Online","Searching", "Using React" ],
              autoStart: true,
              loop: true,
            }}
          />
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="form mb-3">
        <input 
          className="search-field"
          type="text"
          placeholder="Search"
          value={word}
          onChange={(event) => setWord(event.target.value)}
        />
        <button type="submit" className="search-button">
          <img src={logo} alt="Logo" />
        </button>
        {/* <button type="submit" class="btn btn-outline-info">
            Search
          </button> */}
      </form>
      <Result word={word} />

      <div className="github-logo">
      <a href="https://github.com/winslatt/dictionary.english" target="_blank" rel="noopener noreferrer">
      <img src={github} alt="Logo" />
      </a>
      
      </div>
    </div>
  );
}

export default SearchBar;
