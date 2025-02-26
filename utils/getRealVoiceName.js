import voices from '../voiceData.js';

const getRealVoiceName = async (voice) =>{
    const name = voices.filter((voiceData) => voiceData.voicename === voice)
    console.log(name);
    return name[0]?.name || "";
}

export default getRealVoiceName;