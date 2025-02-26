import fetch from 'node-fetch';

// character length - 151, 91, 328, 304
// word length - 25, 18, 48, 54
// audio length - 13, 7, 25, 21
export default async function textToSpeech(text, name) {
  const url = process.env.TTSURL;

  const body = JSON.stringify({
    model: "tts-1",
    input: text,
    voice: name,
    speed: 1,
  });

  try{
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer your_api_key_here`,
      },
      body: body,
    });
  
    if (!response.ok) {
      console.error("Response Error:", response.statusText);
      return;
    }
    // Save the response as a file
    console.log("Audio file saved as speech-en-au.mp3");

    return response.json();

  } catch(err){
    console.log("Something went wrong: ", err);
  }
}