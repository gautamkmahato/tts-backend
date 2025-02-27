export default async function addUser(req, res) {
    const inputData = req.body;
  
    console.log(inputData)
  
    try {
        const { data, error } = await supabase
        .from('users')
        .insert([
          { id: inputData.id, username: inputData.username, email: inputData.email, full_name: inputData.fullName, image: inputData.image },
        ])
        .select()
          
      if (error) {
        console.error('Supabase Error:', error);
        return res.status(500).json({ error: error.message });
      } else {
        console.log('Data:', data);
        return res.status(201).json(data);
      }
    } catch (err) {
      console.error('Fetch Error:', err);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
}