import supabase from "../configs/supabaseConfig.js";

export default async function insertAudioToDatabase(url, audioDuration) {
    
    const { data, error } = await supabase
        .from('audio_generations')
        .insert([
            {   user_id: 'aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa', 
                text_content: 'This is test',
                audio_duration: audioDuration,
                audio_url: url,
                status: 'completed',
                voice_id: 'voice_1',
                language: 'en_US',
                format: 'mpeg'
            },
        ])
        .select()
    
    if(error){
        console.log(error);
        return error;
    }

    return data;
        
}