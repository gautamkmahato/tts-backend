import supabase from "../configs/supabaseConfig.js";

export default async function generateSignedUrl(filePath) {

  const bucketName = 'tts-audio';
  // const filePath = 'speech_9ecf76a08d054645822ba5e235eb2d4c.mp3'; // Replace with your file path
  const expiresIn = 3600; // Expiration time in seconds (e.g., 1 hour)

  const { data, error } = await supabase
    .storage
    .from(bucketName)
    .createSignedUrl(filePath, expiresIn);

  if (error) {
    console.error('Error generating signed URL:', error);
    return;
  }

  console.log('Signed URL:', data.signedUrl);
  return data.signedUrl;

};