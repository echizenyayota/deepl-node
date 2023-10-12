import * as deepl from 'deepl-node';

const App = () => {
  const authKey = ""; // Replace with your key
  const translator = new deepl.Translator(authKey);

  (async () => {
      const result = await translator.translateText('Hello', null, 'ja');
      console.log(result.text); // こんにちは
  })();

  return (
    <div className="app">

    </div>
  );
}

export default App;
