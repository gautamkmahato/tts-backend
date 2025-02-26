import checkUserLimit from "../service/checkUserLimit.js";
import generateSignedUrl from "../service/generateSignedUrl.js";
import insertAudioToDatabase from "../service/insertAudioToDatabase.js";
import textToSpeech from "../service/textToSpeech.js";
import updateUsageLog from "../service/updateUsageLog.js";
import getAudioLength from "../utils/getAudioLength.js";
import getRealVoiceName from "../utils/getRealVoiceName.js";
import getTextLength from "../utils/getTextLength.js";




export default async function generateAudio(req, res) {
  try {
    // Get user ID from session/token
    // const userId = req.user?.id; // Adjust based on your auth setup
    const userId = 'bbbbbbbb-bbbb-bbbb-bbbb-bbbbbbbbbbbb';

    const {text, voice} = req.body;

    console.log(text, voice);

    const name = await getRealVoiceName(voice);

    if (!userId) {
      throw new Error('User not authenticated');
    }

    // calculate the word and character count
    const { wordCount, characterCount } = await getTextLength(text);

    // calculate audio duration from input text
    const audioDuration = Math.floor(await getAudioLength(wordCount, characterCount));

    // Check user's limit
    const limitCheck = await checkUserLimit(userId, audioDuration);
    if (!limitCheck.canGenerate) {
      return res.status(403).json({
        status: false,
        message: `Monthly limit exceeded. Remaining seconds: ${limitCheck.remainingTime}`,
      });
    }

    // Call textToSpeech function
    const data = await textToSpeech(text, name);

    // Ensure upload response exists
    if (!data || !data.uploadResponse || !data.uploadResponse.path) {
      throw new Error("Upload failed or missing response data.");
    }

    console.log("Uploaded File Path:", data.uploadResponse.path);

    // Generate signed URL
    const url = await generateSignedUrl(data.uploadResponse.path);

    if (!url) {
      throw new Error("Failed to generate signed URL.");
    }

    console.log("Signed URL:", url);

    // Insert into database
    const result = await insertAudioToDatabase(url, audioDuration);
    console.log(result);

    // Update usage log
    await updateUsageLog(userId, limitCheck.subscription_id, audioDuration);

    // Send success response
    res.status(200).json({
      status: true,
      message: "File uploaded and signed URL generated successfully.",
      data: data,
      url: url,
      remainingTime: limitCheck.remainingTime - audioDuration
    });

  } catch (error) {
    console.error("Error:: ", error.message || error);

    // Send error response
    res.status(500).json({
      status: false,
      message: error.message || "An unexpected error occurred.",
    });
  }
}



