import { useState} from 'react';

function MyInput(){
  const [text,SetText] = useState("");

return (
<div>
  <input type="text"
  placeholder="Karishma..."
  value={text}
  onChange={(e) => SetText(e.target.value)} />

  <p>Tumne likha: {text}</p>
</div>
)

}

export default MyInput;