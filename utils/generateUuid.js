import { v4 as uuidv4 } from 'uuid';

export default function generateUuid(){
    const randomUUID = uuidv4();
    console.log(randomUUID);
    return randomUUID;
}
