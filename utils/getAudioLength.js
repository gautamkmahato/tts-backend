

// const getAudioDuration = async (audioUrl) => {
//     const audio = new Audio(audioUrl);
  
//     // Wait for the metadata to load
//     await new Promise((resolve, reject) => {
//       audio.addEventListener('loadedmetadata', () => {
//         resolve();
//       });
//       audio.addEventListener('error', (error) => {
//         reject(error);
//       });
//     });
  
//     // Return the duration in seconds
//     return audio.duration;
// };
  
// export default getAudioDuration;
  

import AudioLengthPredictor from './estimateAudioLength.js';

export default async function getAudioLength(wordCount, characterCount) {
    // Create predictor instance
    const predictor = new AudioLengthPredictor();

    // Make predictions wordCount, characterCount
    const predictedLength = predictor.predict(characterCount, wordCount);
    console.log(`Predicted length: ${predictedLength} seconds`);

    // Get model statistics
    const modelInfo = predictor.getModelInfo();
    
    return predictedLength;
}