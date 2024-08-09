import React, { useState } from "react";
import styles from "./SearchBar.module.css";
function SearchBar(props) {
  const [term, setTerm] = useState("");

  function passTerm() {
    props.onSearch(term);
  }

  function handleTermChange({ target }) {
    setTerm(target.value);
  }
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      passTerm();
    }
  }
  return (
    <div className={styles.SearchBar}>
      <input
        type="text"
        name="search"
        placeholder="Gib einen Song, ein Album, oder einen Artist ein"
        onChange={handleTermChange}
        onKeyDown={handleKeyPress}
      />
      <button className={styles.SearchButton} onClick={passTerm}>SUCHEN</button>
    </div>
  );
}

export default SearchBar;