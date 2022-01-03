import { useEffect, useState } from "react";
import axios from "axios";

export default function AutoCompleteText() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  useEffect(() => {
    const loadItems = async () => {
      const response = await axios.get("https://reqres.in/api/users");
      setItems(response.data.data);
      console.log(response.data.data);
    };
    loadItems();
  }, []);

  function onTextChanged(value) {
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = items.filter((item) => {
        return item.email.match(regex);
      });
    }
    console.log("matches", suggestions);
    setSuggestions(suggestions);
    setText(value);
  }

  function suggestionsSelected(selectedItem) {
    setText(selectedItem);
    setSuggestions([]);
  }
  return (
    <div className='w-full'>
      <input
        type='text'
        className='border rounded-md w-full'
        placeholder='Search...'
        value={text}
        onChange={(e) => onTextChanged(e.target.value)}
        onBlur={() => {
          setTimeout(() => {
            setSuggestions([]);
          }, 100);
        }}
      />
      <ul>
        {suggestions &&
          suggestions.map((suggestion, i) => (
            <li
              className='cursor-pointer hover:bg-gray-300'
              key={suggestion.id}
              onClick={() => suggestionsSelected(suggestion.email)}
            >
              {suggestion.email}
            </li>
          ))}
      </ul>
    </div>
  );
}
