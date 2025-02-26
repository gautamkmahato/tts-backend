import fetch from 'node-fetch';


export default async function textToSpeech() {
  const url = process.env.TTSURL;

  const body = JSON.stringify({
    model: "tts-1",
    input: "DeprecationWarning: The `punycode` module is deprecated",
    voice: "hi-IN-MadhurNeural",
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
      console.error("Error:", response.statusText);
      return;
    }
    // Save the response as a file
    console.log("Audio file saved as speech-en-au.mp3");

    return response.json();

  } catch(err){
    console.log("Something went wrong: ", err);
  }
}