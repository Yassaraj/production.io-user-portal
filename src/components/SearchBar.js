import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import {styles} from "../styles/SearchBar.css";

export const SearchBar = ({ setResults }) => {
//   const [input, setInput] = useState("");

//   const fetchData = (value) => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((json) => {
//         const results = json.filter((user) => {
//           return (
//             value &&
//             user &&
//             user.name &&
//             user.name.toLowerCase().includes(value)
//           );
//         });
//         setResults(results);
//       });
//   };

//   const handleChange = (value) => {
//     setInput(value);
//     fetchData(value);
//  };

const inputStyle = {
    color: '#C2C2C2', // text color
    caretColor: 'white', // cursor color
  };
  return (
    <div className="input-wrapper">
      <SearchIcon style={inputStyle}/>
      <input
        placeholder="Search..."
        selectionColor="white"
        style={inputStyle}
        //value={input}
        //onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};