import { useState } from "react"

const InputShortener = ({ setInputValue }) => {
  const [value, setValue] = useState("");

  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="inputContainer">
      <h1>Link Shortener</h1>
      <div>
        <input
          type="text"
          placeholder="input đường link"
          value={value}
          onChange={e => setValue(e.target.value)}  
        />
        <button onClick={handleClick}>GO</button>
      </div>
    </div>
  )
}

export default InputShortener