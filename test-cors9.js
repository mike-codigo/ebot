fetch('https://cors.eu.org/https://mlvoca.com/api/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'deepseek-r1:1.5b',
    prompt: 'Say hi',
    stream: true
  })
}).then(async res => {
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let text = '';
  for (let i = 0; i < 3; i++) {
    const {value, done} = await reader.read();
    if (done) break;
    text += decoder.decode(value);
  }
  console.log("Stream chunks:", text);
}).catch(console.error);
