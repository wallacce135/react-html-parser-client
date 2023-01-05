import { BaseSyntheticEvent, useState } from 'react';
import axios from 'axios';


function App() {

  const [linking, setLink] = useState<string>('')
  const [isPressed, setIsPressed] = useState<boolean>(true);
  const [data, setData] = useState<string>('');

  const proccessData = () => {
    axios.get('http://localhost:8080', {
      headers:{
        linking
      }
    }).then(data => {
      // console.log(data);
      setData(data.data.document)
    })

    setIsPressed(true)

  }

  return (
    <div className="App">
      <input type="text" placeholder='link' onChange={(e: BaseSyntheticEvent) => setLink(e.target.value)} />
      <button onClick={() => proccessData()}>Пропарсить</button>

      {isPressed ? (<div dangerouslySetInnerHTML={{__html: data }}></div>) : (<div dangerouslySetInnerHTML={{__html: "<h1>Ничего нет</h1>" }}></div>) }

    </div>
  );
}

export default App;
