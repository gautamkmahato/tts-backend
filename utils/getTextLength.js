
export default async function getTextLength(text) {
    const wordCount = text.split(' ').length
    const characterCount = text.length;

    return{
        wordCount: wordCount,
        characterCount: characterCount
    }
}