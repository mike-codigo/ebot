fetch('https://api.codetabs.com/v1/proxy?quest=https://mlvoca.com/api/generate', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'deepseek-r1:1.5b',
    prompt: 'Say hi',
    stream: false
  })
}).then(res => res.text()).then(console.log).catch(console.error);
