const voices = [
    {
        "gender": "Female",
        "language": "af-ZA",
        "name": "af-ZA-AdriNeural",
        "voicename": "Adri",
        "langName": "Afrikaans (South Africa)",
        "countryName": "South Africa",
        "languageName": "Afrikaans"
    },
    {
        "gender": "Male",
        "language": "af-ZA",
        "name": "af-ZA-WillemNeural",
        "voicename": "Willem",
        "langName": "Afrikaans (South Africa)",
        "countryName": "South Africa",
        "languageName": "Afrikaans"
    },
    {
        "gender": "Female",
        "language": "sq-AL",
        "name": "sq-AL-AnilaNeural",
        "voicename": "Anila",
        "langName": "Albanian (Albania)",
        "countryName": "Albania",
        "languageName": "Albanian"
    },
    {
        "gender": "Male",
        "language": "sq-AL",
        "name": "sq-AL-IlirNeural",
        "voicename": "Ilir",
        "langName": "Albanian (Albania)",
        "countryName": "Albania",
        "languageName": "Albanian"
    },
    {
        "gender": "Male",
        "language": "am-ET",
        "name": "am-ET-AmehaNeural",
        "voicename": "Ameha",
        "langName": "Amharic (Ethiopia)",
        "countryName": "Ethiopia",
        "languageName": "Amharic"
    },
    {
        "gender": "Female",
        "language": "am-ET",
        "name": "am-ET-MekdesNeural",
        "voicename": "Mekdes",
        "langName": "Amharic (Ethiopia)",
        "countryName": "Ethiopia",
        "languageName": "Amharic"
    },
    {
        "gender": "Female",
        "language": "ar-DZ",
        "name": "ar-DZ-AminaNeural",
        "voicename": "Amina",
        "langName": "Arabic (Algeria)",
        "countryName": "Algeria",
        "languageName": "Arabic"
    },
    {
        "gender": "Male",
        "language": "ar-DZ",
        "name": "ar-DZ-IsmaelNeural",
        "voicename": "Ismael",
        "langName": "Arabic (Algeria)",
        "countryName": "Algeria",
        "languageName": "Arabic"
    },
    {
        "gender": "Male",
        "language": "ar-BH",
        "name": "ar-BH-AliNeural",
        "voicename": "Ali",
        "langName": "Arabic (Bahrain)",
        "countryName": "Bahrain",
        "languageName": "Arabic"
    },
    {
        "gender": "Female",
        "language": "ar-BH",
        "name": "ar-BH-LailaNeural",
        "voicename": "Laila",
        "langName": "Arabic (Bahrain)",
        "countryName": "Bahrain",
        "languageName": "Arabic"
    },
    {
        "gender": "Female",
        "language": "ar-EG",
        "name": "ar-EG-SalmaNeural",
        "voicename": "Salma",
        "langName": "Arabic (Egypt)",
        "countryName": "Egypt",
        "languageName": "Arabic"
    },
    {
        "gender": "Male",
        "language": "ar-EG",
        "name": "ar-EG-ShakirNeural",
        "voicename": "Shakir",
        "langName": "Arabic (Egypt)",
        "countryName": "Egypt",
        "languageName": "Arabic"
    },
    {
        "gender": "Male",
        "language": "ar-IQ",
        "name": "ar-IQ-BasselNeural",
        "voicename": "Bassel",
        "langName": "Arabic (Iraq)",
        "countryName": "Iraq",
        "languageName": "Arabic"
    },
    {
        "gender": "Female",
        "language": "ar-IQ",
        "name": "ar-IQ-RanaNeural",
        "voicename": "Rana",
        "langName": "Arabic (Iraq)",
        "countryName": "Iraq",
        "languageName": "Arabic"
    },
    {
        "gender": "Female",
        "language": "ar-JO",
        "name": "ar-JO-SanaNeural",
        "voicename": "Sana",
        "langName": "Arabic (Jordan)",
        "countryName": "Jordan",
        "languageName": "Arabic"
    },
    {
        "gender": "Male",
        "language": "ar-JO",
        "name": "ar-JO-TaimNeural",
        "voicename": "Taim",
        "langName": "Arabic (Jordan)",
        "countryName": "Jordan",
        "languageName": "Arabic"
    },
    {
        "gender": "Male",
        "language": "ar-KW",
        "name": "ar-KW-FahedNeural",
        "voicename": "Fahed",
        "langName": "Arabic (Kuwait)",
        "countryName": "Kuwait",
        "languageName": "Arabic"
    },
    {
        "gender": "Female",
        "language": "ar-KW",
        "name": "ar-KW-NouraNeural",
        "voicename": "Noura",
        "langName": "Arabic (Kuwait)",
        "countryName": "Kuwait",
        "languageName": "Arabic"
    },
    {
        "gender": "Female",
        "language": "ar-LB",
        "name": "ar-LB-LaylaNeural",
        "voicename": "Layla",
        "langName": "Arabic (Lebanon)",
        "countryName": "Lebanon",
        "languageName": "Arabic"
    },
    {
        "gender": "Male",
        "language": "ar-LB",
        "name": "ar-LB-RamiNeural",
        "voicename": "Rami",
        "langName": "Arabic (Lebanon)",
        "countryName": "Lebanon",
        "languageName": "Arabic"
    },
    {
        "gender": "Female",
        "language": "ar-LY",
        "name": "ar-LY-ImanNeural",
        "voicename": "Iman",
        "langName": "Arabic (Libya)",
        "countryName": "Libya",
        "languageName": "Arabic"
    },
    {
        "gender": "Male",
        "language": "ar-LY",
        "name": "ar-LY-OmarNeural",
        "voicename": "Omar",
        "langName": "Arabic (Libya)",
        "countryName": "Libya",
        "languageName": "Arabic"
    },
    {
        "gender": "Male",
        "language": "ar-MA",
        "name": "ar-MA-JamalNeural",
        "voicename": "Jamal",
        "langName": "Arabic (Morocco)",
        "countryName": "Morocco",
        "languageName": "Arabic"
    },
    {
        "gender": "Female",
        "language": "ar-MA",
        "name": "ar-MA-MounaNeural",
        "voicename": "Mouna",
        "langName": "Arabic (Morocco)",
        "countryName": "Morocco",
        "languageName": "Arabic"
    },
    {
        "gender": "Male",
        "language": "ar-OM",
        "name": "ar-OM-AbdullahNeural",
        "voicename": "Abdullah",
        "langName": "Arabic (Oman)",
        "countryName": "Oman",
        "languageName": "Arabic"
    },
    {
        "gender": "Female",
        "language": "ar-OM",
        "name": "ar-OM-AyshaNeural",
        "voicename": "Aysha",
        "langName": "Arabic (Oman)",
        "countryName": "Oman",
        "languageName": "Arabic"
    },
    {
        "gender": "Female",
        "language": "ar-QA",
        "name": "ar-QA-AmalNeural",
        "voicename": "Amal",
        "langName": "Arabic (Qatar)",
        "countryName": "Qatar",
        "languageName": "Arabic"
    },
    {
        "gender": "Male",
        "language": "ar-QA",
        "name": "ar-QA-MoazNeural",
        "voicename": "Moaz",
        "langName": "Arabic (Qatar)",
        "countryName": "Qatar",
        "languageName": "Arabic"
    },
    {
        "gender": "Male",
        "language": "ar-SA",
        "name": "ar-SA-HamedNeural",
        "voicename": "Hamed",
        "langName": "Arabic (Saudi Arabia)",
        "countryName": "Saudi Arabia",
        "languageName": "Arabic"
    },
    {
        "gender": "Female",
        "language": "ar-SA",
        "name": "ar-SA-ZariyahNeural",
        "voicename": "Zariyah",
        "langName": "Arabic (Saudi Arabia)",
        "countryName": "Saudi Arabia",
        "languageName": "Arabic"
    },
    {
        "gender": "Female",
        "language": "ar-SY",
        "name": "ar-SY-AmanyNeural",
        "voicename": "Amany",
        "langName": "Arabic (Syria)",
        "countryName": "Syria",
        "languageName": "Arabic"
    },
    {
        "gender": "Male",
        "language": "ar-SY",
        "name": "ar-SY-LaithNeural",
        "voicename": "Laith",
        "langName": "Arabic (Syria)",
        "countryName": "Syria",
        "languageName": "Arabic"
    },
    {
        "gender": "Male",
        "language": "ar-TN",
        "name": "ar-TN-HediNeural",
        "voicename": "Hedi",
        "langName": "Arabic (Tunisia)",
        "countryName": "Tunisia",
        "languageName": "Arabic"
    },
    {
        "gender": "Female",
        "language": "ar-TN",
        "name": "ar-TN-ReemNeural",
        "voicename": "Reem",
        "langName": "Arabic (Tunisia)",
        "countryName": "Tunisia",
        "languageName": "Arabic"
    },
    {
        "gender": "Female",
        "language": "ar-AE",
        "name": "ar-AE-FatimaNeural",
        "voicename": "Fatima",
        "langName": "Arabic (United Arab Emirates)",
        "countryName": "United Arab Emirates",
        "languageName": "Arabic"
    },
    {
        "gender": "Male",
        "language": "ar-AE",
        "name": "ar-AE-HamdanNeural",
        "voicename": "Hamdan",
        "langName": "Arabic (United Arab Emirates)",
        "countryName": "United Arab Emirates",
        "languageName": "Arabic"
    },
    {
        "gender": "Female",
        "language": "ar-YE",
        "name": "ar-YE-MaryamNeural",
        "voicename": "Maryam",
        "langName": "Arabic (Yemen)",
        "countryName": "Yemen",
        "languageName": "Arabic"
    },
    {
        "gender": "Male",
        "language": "ar-YE",
        "name": "ar-YE-SalehNeural",
        "voicename": "Saleh",
        "langName": "Arabic (Yemen)",
        "countryName": "Yemen",
        "languageName": "Arabic"
    },
    {
        "gender": "Male",
        "language": "az-AZ",
        "name": "az-AZ-BabekNeural",
        "voicename": "Babek",
        "langName": "Azerbaijani (Azerbaijan)",
        "countryName": "Azerbaijan",
        "languageName": "Azerbaijani"
    },
    {
        "gender": "Female",
        "language": "az-AZ",
        "name": "az-AZ-BanuNeural",
        "voicename": "Banu",
        "langName": "Azerbaijani (Azerbaijan)",
        "countryName": "Azerbaijan",
        "languageName": "Azerbaijani"
    },
    {
        "gender": "Female",
        "language": "bn-BD",
        "name": "bn-BD-NabanitaNeural",
        "voicename": "Nabanita",
        "langName": "Bangla (Bangladesh)",
        "countryName": "Bangladesh",
        "languageName": "Bangla"
    },
    {
        "gender": "Male",
        "language": "bn-BD",
        "name": "bn-BD-PradeepNeural",
        "voicename": "Pradeep",
        "langName": "Bangla (Bangladesh)",
        "countryName": "Bangladesh",
        "languageName": "Bangla"
    },
    {
        "gender": "Male",
        "language": "bn-IN",
        "name": "bn-IN-BashkarNeural",
        "voicename": "Bashkar",
        "langName": "Bangla (India)",
        "countryName": "India",
        "languageName": "Bangla"
    },
    {
        "gender": "Female",
        "language": "bn-IN",
        "name": "bn-IN-TanishaaNeural",
        "voicename": "Tanishaa",
        "langName": "Bangla (India)",
        "countryName": "India",
        "languageName": "Bangla"
    },
    {
        "gender": "Male",
        "language": "bs-BA",
        "name": "bs-BA-GoranNeural",
        "voicename": "Goran",
        "langName": "Bosnian (Bosnia and Herzegovina)",
        "countryName": "Bosnia and Herzegovina",
        "languageName": "Bosnian"
    },
    {
        "gender": "Female",
        "language": "bs-BA",
        "name": "bs-BA-VesnaNeural",
        "voicename": "Vesna",
        "langName": "Bosnian (Bosnia and Herzegovina)",
        "countryName": "Bosnia and Herzegovina",
        "languageName": "Bosnian"
    },
    {
        "gender": "Male",
        "language": "bg-BG",
        "name": "bg-BG-BorislavNeural",
        "voicename": "Borislav",
        "langName": "Bulgarian (Bulgaria)",
        "countryName": "Bulgaria",
        "languageName": "Bulgarian"
    },
    {
        "gender": "Female",
        "language": "bg-BG",
        "name": "bg-BG-KalinaNeural",
        "voicename": "Kalina",
        "langName": "Bulgarian (Bulgaria)",
        "countryName": "Bulgaria",
        "languageName": "Bulgarian"
    },
    {
        "gender": "Female",
        "language": "my-MM",
        "name": "my-MM-NilarNeural",
        "voicename": "Nilar",
        "langName": "Burmese (Myanmar)",
        "countryName": "Myanmar",
        "languageName": "Burmese"
    },
    {
        "gender": "Male",
        "language": "my-MM",
        "name": "my-MM-ThihaNeural",
        "voicename": "Thiha",
        "langName": "Burmese (Myanmar)",
        "countryName": "Myanmar",
        "languageName": "Burmese"
    },
    {
        "gender": "Male",
        "language": "ca-ES",
        "name": "ca-ES-EnricNeural",
        "voicename": "Enric",
        "langName": "Catalan (Spain)",
        "countryName": "Spain",
        "languageName": "Catalan"
    },
    {
        "gender": "Female",
        "language": "ca-ES",
        "name": "ca-ES-JoanaNeural",
        "voicename": "Joana",
        "langName": "Catalan (Spain)",
        "countryName": "Spain",
        "languageName": "Catalan"
    },
    {
        "gender": "Female",
        "language": "zh-HK",
        "name": "zh-HK-HiuGaaiNeural",
        "voicename": "HiuGaai",
        "langName": "Chinese (Cantonese, Traditional)",
        "countryName": "Hong Kong",
        "languageName": "Chinese"
    },
    {
        "gender": "Female",
        "language": "zh-HK",
        "name": "zh-HK-HiuMaanNeural",
        "voicename": "HiuMaan",
        "langName": "Chinese (Cantonese, Traditional)",
        "countryName": "Hong Kong",
        "languageName": "Chinese"
    },
    {
        "gender": "Male",
        "language": "zh-HK",
        "name": "zh-HK-WanLungNeural",
        "voicename": "WanLung",
        "langName": "Chinese (Cantonese, Traditional)",
        "countryName": "Hong Kong",
        "languageName": "Chinese"
    },
    {
        "gender": "Female",
        "language": "zh-CN",
        "name": "zh-CN-XiaoxiaoNeural",
        "voicename": "Xiaoxiao",
        "langName": "Chinese (Mandarin, Simplified)",
        "countryName": "China",
        "languageName": "Chinese"
    },
    {
        "gender": "Female",
        "language": "zh-CN",
        "name": "zh-CN-XiaoyiNeural",
        "voicename": "Xiaoyi",
        "langName": "Chinese (Mandarin, Simplified)",
        "countryName": "China",
        "languageName": "Chinese"
    },
    {
        "gender": "Male",
        "language": "zh-CN",
        "name": "zh-CN-YunjianNeural",
        "voicename": "Yunjian",
        "langName": "Chinese (Mandarin, Simplified)",
        "countryName": "China",
        "languageName": "Chinese"
    },
    {
        "gender": "Male",
        "language": "zh-CN",
        "name": "zh-CN-YunxiNeural",
        "voicename": "Yunxi",
        "langName": "Chinese (Mandarin, Simplified)",
        "countryName": "China",
        "languageName": "Chinese"
    },
    {
        "gender": "Male",
        "language": "zh-CN",
        "name": "zh-CN-YunxiaNeural",
        "voicename": "Yunxia",
        "langName": "Chinese (Mandarin, Simplified)",
        "countryName": "China",
        "languageName": "Chinese"
    },
    {
        "gender": "Male",
        "language": "zh-CN",
        "name": "zh-CN-YunyangNeural",
        "voicename": "Yunyang",
        "langName": "Chinese (Mandarin, Simplified)",
        "countryName": "China",
        "languageName": "Chinese"
    },
    {
        "gender": "Female",
        "language": "zh-CN-liaoning",
        "name": "zh-CN-liaoning-XiaobeiNeural",
        "voicename": "Xiaobei",
        "langName": "Chinese (Mandarin, Simplified, Liaoning)",
        "countryName": "China",
        "languageName": "Chinese"
    },
    {
        "gender": "Female",
        "language": "zh-TW",
        "name": "zh-TW-HsiaoChenNeural",
        "voicename": "HsiaoChen",
        "langName": "Chinese (Taiwanese Mandarin)",
        "countryName": "Taiwan",
        "languageName": "Chinese"
    },
    {
        "gender": "Male",
        "language": "zh-TW",
        "name": "zh-TW-YunJheNeural",
        "voicename": "YunJhe",
        "langName": "Chinese (Taiwanese Mandarin)",
        "countryName": "Taiwan",
        "languageName": "Chinese"
    },
    {
        "gender": "Female",
        "language": "zh-TW",
        "name": "zh-TW-HsiaoYuNeural",
        "voicename": "HsiaoYu",
        "langName": "Chinese (Taiwanese Mandarin)",
        "countryName": "Taiwan",
        "languageName": "Chinese"
    },
    {
        "gender": "Female",
        "language": "zh-CN-shaanxi",
        "name": "zh-CN-shaanxi-XiaoniNeural",
        "voicename": "Xiaoni",
        "langName": "Chinese (Mandarin, Simplified, Shaanxi)",
        "countryName": "China",
        "languageName": "Chinese"
    },
    {
        "gender": "Female",
        "language": "hr-HR",
        "name": "hr-HR-GabrijelaNeural",
        "voicename": "Gabrijela",
        "langName": "Croatian (Croatia)",
        "countryName": "Croatia",
        "languageName": "Croatian"
    },
    {
        "gender": "Male",
        "language": "hr-HR",
        "name": "hr-HR-SreckoNeural",
        "voicename": "Srecko",
        "langName": "Croatian (Croatia)",
        "countryName": "Croatia",
        "languageName": "Croatian"
    },
    {
        "gender": "Male",
        "language": "cs-CZ",
        "name": "cs-CZ-AntoninNeural",
        "voicename": "Antonin",
        "langName": "Czech (Czech Republic)",
        "countryName": "Czech Republic",
        "languageName": "Czech"
    },
    {
        "gender": "Female",
        "language": "cs-CZ",
        "name": "cs-CZ-VlastaNeural",
        "voicename": "Vlasta",
        "langName": "Czech (Czech Republic)",
        "countryName": "Czech Republic",
        "languageName": "Czech"
    },
    {
        "gender": "Female",
        "language": "da-DK",
        "name": "da-DK-ChristelNeural",
        "voicename": "Christel",
        "langName": "Danish (Denmark)",
        "countryName": "Denmark",
        "languageName": "Danish"
    },
    {
        "gender": "Male",
        "language": "da-DK",
        "name": "da-DK-JeppeNeural",
        "voicename": "Jeppe",
        "langName": "Danish (Denmark)",
        "countryName": "Denmark",
        "languageName": "Danish"
    },
    {
        "gender": "Male",
        "language": "nl-BE",
        "name": "nl-BE-ArnaudNeural",
        "voicename": "Arnaud",
        "langName": "Dutch (Belgium)",
        "countryName": "Belgium",
        "languageName": "Dutch"
    },
    {
        "gender": "Female",
        "language": "nl-BE",
        "name": "nl-BE-DenaNeural",
        "voicename": "Dena",
        "langName": "Dutch (Belgium)",
        "countryName": "Belgium",
        "languageName": "Dutch"
    },
    {
        "gender": "Female",
        "language": "nl-NL",
        "name": "nl-NL-ColetteNeural",
        "voicename": "Colette",
        "langName": "Dutch (Netherlands)",
        "countryName": "Netherlands",
        "languageName": "Dutch"
    },
    {
        "gender": "Female",
        "language": "nl-NL",
        "name": "nl-NL-FennaNeural",
        "voicename": "Fenna",
        "langName": "Dutch (Netherlands)",
        "countryName": "Netherlands",
        "languageName": "Dutch"
    },
    {
        "gender": "Male",
        "language": "nl-NL",
        "name": "nl-NL-MaartenNeural",
        "voicename": "Maarten",
        "langName": "Dutch (Netherlands)",
        "countryName": "Netherlands",
        "languageName": "Dutch"
    },
    {
        "gender": "Female",
        "language": "en-AU",
        "name": "en-AU-NatashaNeural",
        "voicename": "Natasha",
        "langName": "English (Australia)",
        "countryName": "Australia",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-AU",
        "name": "en-AU-WilliamNeural",
        "voicename": "William",
        "langName": "English (Australia)",
        "countryName": "Australia",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-CA",
        "name": "en-CA-ClaraNeural",
        "voicename": "Clara",
        "langName": "English (Canada)",
        "countryName": "Canada",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-CA",
        "name": "en-CA-LiamNeural",
        "voicename": "Liam",
        "langName": "English (Canada)",
        "countryName": "Canada",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-HK",
        "name": "en-HK-SamNeural",
        "voicename": "Sam",
        "langName": "English (Hong Kong)",
        "countryName": "Hong Kong",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-HK",
        "name": "en-HK-YanNeural",
        "voicename": "Yan",
        "langName": "English (Hong Kong)",
        "countryName": "Hong Kong",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-IN",
        "name": "en-IN-NeerjaExpressiveNeural",
        "voicename": "Namita",
        "langName": "English (India)",
        "countryName": "India",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-IN",
        "name": "en-IN-NeerjaNeural",
        "voicename": "Neerja",
        "langName": "English (India)",
        "countryName": "India",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-IN",
        "name": "en-IN-PrabhatNeural",
        "voicename": "Prabhat",
        "langName": "English (India)",
        "countryName": "India",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-IE",
        "name": "en-IE-ConnorNeural",
        "voicename": "Connor",
        "langName": "English (Ireland)",
        "countryName": "Ireland",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-IE",
        "name": "en-IE-EmilyNeural",
        "voicename": "Emily",
        "langName": "English (Ireland)",
        "countryName": "Ireland",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-KE",
        "name": "en-KE-AsiliaNeural",
        "voicename": "Asilia",
        "langName": "English (Kenya)",
        "countryName": "Kenya",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-KE",
        "name": "en-KE-ChilembaNeural",
        "voicename": "Chilemba",
        "langName": "English (Kenya)",
        "countryName": "Kenya",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-NZ",
        "name": "en-NZ-MitchellNeural",
        "voicename": "Mitchell",
        "langName": "English (New Zealand)",
        "countryName": "New Zealand",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-NZ",
        "name": "en-NZ-MollyNeural",
        "voicename": "Molly",
        "langName": "English (New Zealand)",
        "countryName": "New Zealand",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-NG",
        "name": "en-NG-AbeoNeural",
        "voicename": "Abeo",
        "langName": "English (Nigeria)",
        "countryName": "Nigeria",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-NG",
        "name": "en-NG-EzinneNeural",
        "voicename": "Ezinne",
        "langName": "English (Nigeria)",
        "countryName": "Nigeria",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-PH",
        "name": "en-PH-JamesNeural",
        "voicename": "James",
        "langName": "English (Philippines)",
        "countryName": "Philippines",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-PH",
        "name": "en-PH-RosaNeural",
        "voicename": "Rosa",
        "langName": "English (Philippines)",
        "countryName": "Philippines",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-SG",
        "name": "en-SG-LunaNeural",
        "voicename": "Luna",
        "langName": "English (Singapore)",
        "countryName": "Singapore",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-SG",
        "name": "en-SG-WayneNeural",
        "voicename": "Wayne",
        "langName": "English (Singapore)",
        "countryName": "Singapore",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-ZA",
        "name": "en-ZA-LeahNeural",
        "voicename": "Leah",
        "langName": "English (South Africa)",
        "countryName": "South Africa",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-ZA",
        "name": "en-ZA-LukeNeural",
        "voicename": "Luke",
        "langName": "English (South Africa)",
        "countryName": "South Africa",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-TZ",
        "name": "en-TZ-ElimuNeural",
        "voicename": "Elimu",
        "langName": "English (Tanzania)",
        "countryName": "Tanzania",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-TZ",
        "name": "en-TZ-ImaniNeural",
        "voicename": "Imani",
        "langName": "English (Tanzania)",
        "countryName": "Tanzania",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-GB",
        "name": "en-GB-LibbyNeural",
        "voicename": "Libby",
        "langName": "English (United Kingdom)",
        "countryName": "United Kingdom",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-GB",
        "name": "en-GB-MaisieNeural",
        "voicename": "Maisie",
        "langName": "English (United Kingdom)",
        "countryName": "United Kingdom",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-GB",
        "name": "en-GB-RyanNeural",
        "voicename": "Ryan",
        "langName": "English (United Kingdom)",
        "countryName": "United Kingdom",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-GB",
        "name": "en-GB-SoniaNeural",
        "voicename": "Sonia",
        "langName": "English (United Kingdom)",
        "countryName": "United Kingdom",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-GB",
        "name": "en-GB-ThomasNeural",
        "voicename": "Thomas",
        "langName": "English (United Kingdom)",
        "countryName": "United Kingdom",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-US",
        "name": "en-US-AvaMultilingualNeural",
        "voicename": "Ava",
        "langName": "English (United States)",
        "countryName": "United States",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-US",
        "name": "en-US-AndrewMultilingualNeural",
        "voicename": "Andrew",
        "langName": "English (United States)",
        "countryName": "United States",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-US",
        "name": "en-US-EmmaMultilingualNeural",
        "voicename": "Emma",
        "langName": "English (United States)",
        "countryName": "United States",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-US",
        "name": "en-US-BrianMultilingualNeural",
        "voicename": "Brian",
        "langName": "English (United States)",
        "countryName": "United States",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-US",
        "name": "en-US-AvaNeural",
        "voicename": "Ava",
        "langName": "English (United States)",
        "countryName": "United States",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-US",
        "name": "en-US-AndrewNeural",
        "voicename": "Andrew",
        "langName": "English (United States)",
        "countryName": "United States",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-US",
        "name": "en-US-EmmaNeural",
        "voicename": "Emma",
        "langName": "English (United States)",
        "countryName": "United States",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-US",
        "name": "en-US-BrianNeural",
        "voicename": "Brian",
        "langName": "English (United States)",
        "countryName": "United States",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-US",
        "name": "en-US-AnaNeural",
        "voicename": "Ana",
        "langName": "English (United States)",
        "countryName": "United States",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-US",
        "name": "en-US-AriaNeural",
        "voicename": "Aria",
        "langName": "English (United States)",
        "countryName": "United States",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-US",
        "name": "en-US-ChristopherNeural",
        "voicename": "Christopher",
        "langName": "English (United States)",
        "countryName": "United States",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-US",
        "name": "en-US-EricNeural",
        "voicename": "Eric",
        "langName": "English (United States)",
        "countryName": "United States",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-US",
        "name": "en-US-GuyNeural",
        "voicename": "Guy",
        "langName": "English (United States)",
        "countryName": "United States",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-US",
        "name": "en-US-JennyNeural",
        "voicename": "Jenny",
        "langName": "English (United States)",
        "countryName": "United States",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "en-US",
        "name": "en-US-MichelleNeural",
        "voicename": "Michelle",
        "langName": "English (United States)",
        "countryName": "United States",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-US",
        "name": "en-US-RogerNeural",
        "voicename": "Roger",
        "langName": "English (United States)",
        "countryName": "United States",
        "languageName": "English"
    },
    {
        "gender": "Male",
        "language": "en-US",
        "name": "en-US-SteffanNeural",
        "voicename": "Steffan",
        "langName": "English (United States)",
        "countryName": "United States",
        "languageName": "English"
    },
    {
        "gender": "Female",
        "language": "et-EE",
        "name": "et-EE-AnuNeural",
        "voicename": "Anu",
        "langName": "Estonian (Estonia)",
        "countryName": "Estonia",
        "languageName": "Estonian"
    },
    {
        "gender": "Male",
        "language": "et-EE",
        "name": "et-EE-KertNeural",
        "voicename": "Kert",
        "langName": "Estonian (Estonia)",
        "countryName": "Estonia",
        "languageName": "Estonian"
    },
    {
        "gender": "Male",
        "language": "fil-PH",
        "name": "fil-PH-AngeloNeural",
        "voicename": "Angelo",
        "langName": "Filipino (Philippines)",
        "countryName": "Philippines",
        "languageName": "Filipino"
    },
    {
        "gender": "Female",
        "language": "fil-PH",
        "name": "fil-PH-BlessicaNeural",
        "voicename": "Blessica",
        "langName": "Filipino (Philippines)",
        "countryName": "Philippines",
        "languageName": "Filipino"
    },
    {
        "gender": "Male",
        "language": "fi-FI",
        "name": "fi-FI-HarriNeural",
        "voicename": "Harri",
        "langName": "Finnish (Finland)",
        "countryName": "Finland",
        "languageName": "Finnish"
    },
    {
        "gender": "Female",
        "language": "fi-FI",
        "name": "fi-FI-NooraNeural",
        "voicename": "Noora",
        "langName": "Finnish (Finland)",
        "countryName": "Finland",
        "languageName": "Finnish"
    },
    {
        "gender": "Female",
        "language": "fr-BE",
        "name": "fr-BE-CharlineNeural",
        "voicename": "Charline",
        "langName": "French (Belgium)",
        "countryName": "Belgium",
        "languageName": "French"
    },
    {
        "gender": "Male",
        "language": "fr-BE",
        "name": "fr-BE-GerardNeural",
        "voicename": "Gerard",
        "langName": "French (Belgium)",
        "countryName": "Belgium",
        "languageName": "French"
    },
    {
        "gender": "Male",
        "language": "fr-CA",
        "name": "fr-CA-ThierryNeural",
        "voicename": "Thierry",
        "langName": "French (Canada)",
        "countryName": "Canada",
        "languageName": "French"
    },
    {
        "gender": "Male",
        "language": "fr-CA",
        "name": "fr-CA-AntoineNeural",
        "voicename": "Antoine",
        "langName": "French (Canada)",
        "countryName": "Canada",
        "languageName": "French"
    },
    {
        "gender": "Male",
        "language": "fr-CA",
        "name": "fr-CA-JeanNeural",
        "voicename": "Jean",
        "langName": "French (Canada)",
        "countryName": "Canada",
        "languageName": "French"
    },
    {
        "gender": "Female",
        "language": "fr-CA",
        "name": "fr-CA-SylvieNeural",
        "voicename": "Sylvie",
        "langName": "French (Canada)",
        "countryName": "Canada",
        "languageName": "French"
    },
    {
        "gender": "Female",
        "language": "fr-FR",
        "name": "fr-FR-VivienneMultilingualNeural",
        "voicename": "Vivienne",
        "langName": "French (France)",
        "countryName": "France",
        "languageName": "French"
    },
    {
        "gender": "Male",
        "language": "fr-FR",
        "name": "fr-FR-RemyMultilingualNeural",
        "voicename": "Remy",
        "langName": "French (France)",
        "countryName": "France",
        "languageName": "French"
    },
    {
        "gender": "Female",
        "language": "fr-FR",
        "name": "fr-FR-DeniseNeural",
        "voicename": "Denise",
        "langName": "French (France)",
        "countryName": "France",
        "languageName": "French"
    },
    {
        "gender": "Female",
        "language": "fr-FR",
        "name": "fr-FR-EloiseNeural",
        "voicename": "Eloise",
        "langName": "French (France)",
        "countryName": "France",
        "languageName": "French"
    },
    {
        "gender": "Male",
        "language": "fr-FR",
        "name": "fr-FR-HenriNeural",
        "voicename": "Henri",
        "langName": "French (France)",
        "countryName": "France",
        "languageName": "French"
    },
    {
        "gender": "Female",
        "language": "fr-CH",
        "name": "fr-CH-ArianeNeural",
        "voicename": "Ariane",
        "langName": "French (Switzerland)",
        "countryName": "Switzerland",
        "languageName": "French"
    },
    {
        "gender": "Male",
        "language": "fr-CH",
        "name": "fr-CH-FabriceNeural",
        "voicename": "Fabrice",
        "langName": "French (Switzerland)",
        "countryName": "Switzerland",
        "languageName": "French"
    },
    {
        "gender": "Male",
        "language": "gl-ES",
        "name": "gl-ES-RoiNeural",
        "voicename": "Roi",
        "langName": "Galician (Spain)",
        "countryName": "Spain",
        "languageName": "Galician"
    },
    {
        "gender": "Female",
        "language": "gl-ES",
        "name": "gl-ES-SabelaNeural",
        "voicename": "Sabela",
        "langName": "Galician (Spain)",
        "countryName": "Spain",
        "languageName": "Galician"
    },
    {
        "gender": "Female",
        "language": "ka-GE",
        "name": "ka-GE-EkaNeural",
        "voicename": "Eka",
        "langName": "Georgian (Georgia)",
        "countryName": "Georgia",
        "languageName": "Georgian"
    },
    {
        "gender": "Male",
        "language": "ka-GE",
        "name": "ka-GE-GiorgiNeural",
        "voicename": "Giorgi",
        "langName": "Georgian (Georgia)",
        "countryName": "Georgia",
        "languageName": "Georgian"
    },
    {
        "gender": "Female",
        "language": "de-AT",
        "name": "de-AT-IngridNeural",
        "voicename": "Ingrid",
        "langName": "German (Austria)",
        "countryName": "Austria",
        "languageName": "German"
    },
    {
        "gender": "Male",
        "language": "de-AT",
        "name": "de-AT-JonasNeural",
        "voicename": "Jonas",
        "langName": "German (Austria)",
        "countryName": "Austria",
        "languageName": "German"
    },
    {
        "gender": "Female",
        "language": "de-DE",
        "name": "de-DE-SeraphinaMultilingualNeural",
        "voicename": "Seraphina",
        "langName": "German (Germany)",
        "countryName": "Germany",
        "languageName": "German"
    },
    {
        "gender": "Male",
        "language": "de-DE",
        "name": "de-DE-FlorianMultilingualNeural",
        "voicename": "Florian",
        "langName": "German (Germany)",
        "countryName": "Germany",
        "languageName": "German"
    },
    {
        "gender": "Female",
        "language": "de-DE",
        "name": "de-DE-AmalaNeural",
        "voicename": "Amala",
        "langName": "German (Germany)",
        "countryName": "Germany",
        "languageName": "German"
    },
    {
        "gender": "Male",
        "language": "de-DE",
        "name": "de-DE-ConradNeural",
        "voicename": "Conrad",
        "langName": "German (Germany)",
        "countryName": "Germany",
        "languageName": "German"
    },
    {
        "gender": "Female",
        "language": "de-DE",
        "name": "de-DE-KatjaNeural",
        "voicename": "Katja",
        "langName": "German (Germany)",
        "countryName": "Germany",
        "languageName": "German"
    },
    {
        "gender": "Male",
        "language": "de-DE",
        "name": "de-DE-KillianNeural",
        "voicename": "Killian",
        "langName": "German (Germany)",
        "countryName": "Germany",
        "languageName": "German"
    },
    {
        "gender": "Male",
        "language": "de-CH",
        "name": "de-CH-JanNeural",
        "voicename": "Jan",
        "langName": "German (Switzerland)",
        "countryName": "Switzerland",
        "languageName": "German"
    },
    {
        "gender": "Female",
        "language": "de-CH",
        "name": "de-CH-LeniNeural",
        "voicename": "Leni",
        "langName": "German (Switzerland)",
        "countryName": "Switzerland",
        "languageName": "German"
    },
    {
        "gender": "Female",
        "language": "el-GR",
        "name": "el-GR-AthinaNeural",
        "voicename": "Athina",
        "langName": "Greek (Greece)",
        "countryName": "Greece",
        "languageName": "Greek"
    },
    {
        "gender": "Male",
        "language": "el-GR",
        "name": "el-GR-NestorasNeural",
        "voicename": "Nestoras",
        "langName": "Greek (Greece)",
        "countryName": "Greece",
        "languageName": "Greek"
    },
    {
        "gender": "Female",
        "language": "gu-IN",
        "name": "gu-IN-DhwaniNeural",
        "voicename": "Dhwani",
        "langName": "Gujarati (India)",
        "countryName": "India",
        "languageName": "Gujarati"
    },
    {
        "gender": "Male",
        "language": "gu-IN",
        "name": "gu-IN-NiranjanNeural",
        "voicename": "Niranjan",
        "langName": "Gujarati (India)",
        "countryName": "India",
        "languageName": "Gujarati"
    },
    {
        "gender": "Male",
        "language": "he-IL",
        "name": "he-IL-AvriNeural",
        "voicename": "Avri",
        "langName": "Hebrew (Israel)",
        "countryName": "Israel",
        "languageName": "Hebrew"
    },
    {
        "gender": "Female",
        "language": "he-IL",
        "name": "he-IL-HilaNeural",
        "voicename": "Hila",
        "langName": "Hebrew (Israel)",
        "countryName": "Israel",
        "languageName": "Hebrew"
    },
    {
        "gender": "Male",
        "language": "hi-IN",
        "name": "hi-IN-MadhurNeural",
        "voicename": "Madhur",
        "langName": "Hindi (India)",
        "countryName": "India",
        "languageName": "Hindi"
    },
    {
        "gender": "Female",
        "language": "hi-IN",
        "name": "hi-IN-SwaraNeural",
        "voicename": "Swara",
        "langName": "Hindi (India)",
        "countryName": "India",
        "languageName": "Hindi"
    },
    {
        "gender": "Female",
        "language": "hu-HU",
        "name": "hu-HU-NoemiNeural",
        "voicename": "Noemi",
        "langName": "Hungarian (Hungary)",
        "countryName": "Hungary",
        "languageName": "Hungarian"
    },
    {
        "gender": "Male",
        "language": "hu-HU",
        "name": "hu-HU-TamasNeural",
        "voicename": "Tamas",
        "langName": "Hungarian (Hungary)",
        "countryName": "Hungary",
        "languageName": "Hungarian"
    },
    {
        "gender": "Female",
        "language": "is-IS",
        "name": "is-IS-GudrunNeural",
        "voicename": "Gudrun",
        "langName": "Icelandic (Iceland)",
        "countryName": "Iceland",
        "languageName": "Icelandic"
    },
    {
        "gender": "Male",
        "language": "is-IS",
        "name": "is-IS-GunnarNeural",
        "voicename": "Gunnar",
        "langName": "Icelandic (Iceland)",
        "countryName": "Iceland",
        "languageName": "Icelandic"
    },
    {
        "gender": "Male",
        "language": "id-ID",
        "name": "id-ID-ArdiNeural",
        "voicename": "Ardi",
        "langName": "Indonesian (Indonesia)",
        "countryName": "Indonesia",
        "languageName": "Indonesian"
    },
    {
        "gender": "Female",
        "language": "id-ID",
        "name": "id-ID-GadisNeural",
        "voicename": "Gadis",
        "langName": "Indonesian (Indonesia)",
        "countryName": "Indonesia",
        "languageName": "Indonesian"
    },
    {
        "gender": "Male",
        "language": "ga-IE",
        "name": "ga-IE-ColmNeural",
        "voicename": "Colm",
        "langName": "Irish (Ireland)",
        "countryName": "Ireland",
        "languageName": "Irish"
    },
    {
        "gender": "Female",
        "language": "ga-IE",
        "name": "ga-IE-OrlaNeural",
        "voicename": "Orla",
        "langName": "Irish (Ireland)",
        "countryName": "Ireland",
        "languageName": "Irish"
    },
    {
        "gender": "Male",
        "language": "it-IT",
        "name": "it-IT-GiuseppeNeural",
        "voicename": "Giuseppe",
        "langName": "Italian (Italy)",
        "countryName": "Italy",
        "languageName": "Italian"
    },
    {
        "gender": "Male",
        "language": "it-IT",
        "name": "it-IT-DiegoNeural",
        "voicename": "Diego",
        "langName": "Italian (Italy)",
        "countryName": "Italy",
        "languageName": "Italian"
    },
    {
        "gender": "Female",
        "language": "it-IT",
        "name": "it-IT-ElsaNeural",
        "voicename": "Elsa",
        "langName": "Italian (Italy)",
        "countryName": "Italy",
        "languageName": "Italian"
    },
    {
        "gender": "Female",
        "language": "it-IT",
        "name": "it-IT-IsabellaNeural",
        "voicename": "Isabella",
        "langName": "Italian (Italy)",
        "countryName": "Italy",
        "languageName": "Italian"
    },
    {
        "gender": "Male",
        "language": "ja-JP",
        "name": "ja-JP-KeitaNeural",
        "voicename": "Keita",
        "langName": "Japanese (Japan)",
        "countryName": "Japan",
        "languageName": "Japanese"
    },
    {
        "gender": "Female",
        "language": "ja-JP",
        "name": "ja-JP-NanamiNeural",
        "voicename": "Nanami",
        "langName": "Japanese (Japan)",
        "countryName": "Japan",
        "languageName": "Japanese"
    },
    {
        "gender": "Male",
        "language": "jv-ID",
        "name": "jv-ID-DimasNeural",
        "voicename": "Dimas",
        "langName": "Javanese (Indonesia)",
        "countryName": "Indonesia",
        "languageName": "Javanese"
    },
    {
        "gender": "Female",
        "language": "jv-ID",
        "name": "jv-ID-SitiNeural",
        "voicename": "Siti",
        "langName": "Javanese (Indonesia)",
        "countryName": "Indonesia",
        "languageName": "Javanese"
    },
    {
        "gender": "Male",
        "language": "kn-IN",
        "name": "kn-IN-GaganNeural",
        "voicename": "Gagan",
        "langName": "Kannada (India)",
        "countryName": "India",
        "languageName": "Kannada"
    },
    {
        "gender": "Female",
        "language": "kn-IN",
        "name": "kn-IN-SapnaNeural",
        "voicename": "Sapna",
        "langName": "Kannada (India)",
        "countryName": "India",
        "languageName": "Kannada"
    },
    {
        "gender": "Female",
        "language": "kk-KZ",
        "name": "kk-KZ-AigulNeural",
        "voicename": "Aigul",
        "langName": "Kazakh (Kazakhstan)",
        "countryName": "Kazakhstan",
        "languageName": "Kazakh"
    },
    {
        "gender": "Male",
        "language": "kk-KZ",
        "name": "kk-KZ-DauletNeural",
        "voicename": "Daulet",
        "langName": "Kazakh (Kazakhstan)",
        "countryName": "Kazakhstan",
        "languageName": "Kazakh"
    },
    {
        "gender": "Male",
        "language": "km-KH",
        "name": "km-KH-PisethNeural",
        "voicename": "Piseth",
        "langName": "Khmer (Cambodia)",
        "countryName": "Cambodia",
        "languageName": "Khmer"
    },
    {
        "gender": "Female",
        "language": "km-KH",
        "name": "km-KH-SreymomNeural",
        "voicename": "Sreymom",
        "langName": "Khmer (Cambodia)",
        "countryName": "Cambodia",
        "languageName": "Khmer"
    },
    {
        "gender": "Male",
        "language": "ko-KR",
        "name": "ko-KR-HyunsuNeural",
        "voicename": "Hyunsu",
        "langName": "Korean (South Korea)",
        "countryName": "South Korea",
        "languageName": "Korean"
    },
    {
        "gender": "Male",
        "language": "ko-KR",
        "name": "ko-KR-InJoonNeural",
        "voicename": "InJoon",
        "langName": "Korean (South Korea)",
        "countryName": "South Korea",
        "languageName": "Korean"
    },
    {
        "gender": "Female",
        "language": "ko-KR",
        "name": "ko-KR-SunHiNeural",
        "voicename": "SunHi",
        "langName": "Korean (South Korea)",
        "countryName": "South Korea",
        "languageName": "Korean"
    },
    {
        "gender": "Male",
        "language": "lo-LA",
        "name": "lo-LA-ChanthavongNeural",
        "voicename": "Chanthavong",
        "langName": "Lao (Laos)",
        "countryName": "Laos",
        "languageName": "Lao"
    },
    {
        "gender": "Female",
        "language": "lo-LA",
        "name": "lo-LA-KeomanyNeural",
        "voicename": "Keomany",
        "langName": "Lao (Laos)",
        "countryName": "Laos",
        "languageName": "Lao"
    },
    {
        "gender": "Female",
        "language": "lv-LV",
        "name": "lv-LV-EveritaNeural",
        "voicename": "Everita",
        "langName": "Latvian (Latvia)",
        "countryName": "Latvia",
        "languageName": "Latvian"
    },
    {
        "gender": "Male",
        "language": "lv-LV",
        "name": "lv-LV-NilsNeural",
        "voicename": "Nils",
        "langName": "Latvian (Latvia)",
        "countryName": "Latvia",
        "languageName": "Latvian"
    },
    {
        "gender": "Male",
        "language": "lt-LT",
        "name": "lt-LT-LeonasNeural",
        "voicename": "Leonas",
        "langName": "Lithuanian (Lithuania)",
        "countryName": "Lithuania",
        "languageName": "Lithuanian"
    },
    {
        "gender": "Female",
        "language": "lt-LT",
        "name": "lt-LT-OnaNeural",
        "voicename": "Ona",
        "langName": "Lithuanian (Lithuania)",
        "countryName": "Lithuania",
        "languageName": "Lithuanian"
    },
    {
        "gender": "Male",
        "language": "mk-MK",
        "name": "mk-MK-AleksandarNeural",
        "voicename": "Aleksandar",
        "langName": "Macedonian (North Macedonia)",
        "countryName": "North Macedonia",
        "languageName": "Macedonian"
    },
    {
        "gender": "Female",
        "language": "mk-MK",
        "name": "mk-MK-MarijaNeural",
        "voicename": "Marija",
        "langName": "Macedonian (North Macedonia)",
        "countryName": "North Macedonia",
        "languageName": "Macedonian"
    },
    {
        "gender": "Male",
        "language": "ms-MY",
        "name": "ms-MY-OsmanNeural",
        "voicename": "Osman",
        "langName": "Malay (Malaysia)",
        "countryName": "Malaysia",
        "languageName": "Malay"
    },
    {
        "gender": "Female",
        "language": "ms-MY",
        "name": "ms-MY-YasminNeural",
        "voicename": "Yasmin",
        "langName": "Malay (Malaysia)",
        "countryName": "Malaysia",
        "languageName": "Malay"
    },
    {
        "gender": "Male",
        "language": "ml-IN",
        "name": "ml-IN-MidhunNeural",
        "voicename": "Midhun",
        "langName": "Malayalam (India)",
        "countryName": "India",
        "languageName": "Malayalam"
    },
    {
        "gender": "Female",
        "language": "ml-IN",
        "name": "ml-IN-SobhanaNeural",
        "voicename": "Sobhana",
        "langName": "Malayalam (India)",
        "countryName": "India",
        "languageName": "Malayalam"
    },
    {
        "gender": "Female",
        "language": "mt-MT",
        "name": "mt-MT-GraceNeural",
        "voicename": "Grace",
        "langName": "Maltese (Malta)",
        "countryName": "Malta",
        "languageName": "Maltese"
    },
    {
        "gender": "Male",
        "language": "mt-MT",
        "name": "mt-MT-JosephNeural",
        "voicename": "Joseph",
        "langName": "Maltese (Malta)",
        "countryName": "Malta",
        "languageName": "Maltese"
    },
    {
        "gender": "Female",
        "language": "mr-IN",
        "name": "mr-IN-AarohiNeural",
        "voicename": "Aarohi",
        "langName": "Marathi (India)",
        "countryName": "India",
        "languageName": "Marathi"
    },
    {
        "gender": "Male",
        "language": "mr-IN",
        "name": "mr-IN-ManoharNeural",
        "voicename": "Manohar",
        "langName": "Marathi (India)",
        "countryName": "India",
        "languageName": "Marathi"
    },
    {
        "gender": "Male",
        "language": "mn-MN",
        "name": "mn-MN-BataaNeural",
        "voicename": "Bataa",
        "langName": "Mongolian (Mongolia)",
        "countryName": "Mongolia",
        "languageName": "Mongolian"
    },
    {
        "gender": "Female",
        "language": "mn-MN",
        "name": "mn-MN-YesuiNeural",
        "voicename": "Yesui",
        "langName": "Mongolian (Mongolia)",
        "countryName": "Mongolia",
        "languageName": "Mongolian"
    },
    {
        "gender": "Female",
        "language": "ne-NP",
        "name": "ne-NP-HemkalaNeural",
        "voicename": "Hemkala",
        "langName": "Nepali (Nepal)",
        "countryName": "Nepal",
        "languageName": "Nepali"
    },
    {
        "gender": "Male",
        "language": "ne-NP",
        "name": "ne-NP-SagarNeural",
        "voicename": "Sagar",
        "langName": "Nepali (Nepal)",
        "countryName": "Nepal",
        "languageName": "Nepali"
    },
    {
        "gender": "Male",
        "language": "nb-NO",
        "name": "nb-NO-FinnNeural",
        "voicename": "Finn",
        "langName": "Norwegian (Norway)",
        "countryName": "Norway",
        "languageName": "Norwegian"
    },
    {
        "gender": "Female",
        "language": "nb-NO",
        "name": "nb-NO-PernilleNeural",
        "voicename": "Pernille",
        "langName": "Norwegian (Norway)",
        "countryName": "Norway",
        "languageName": "Norwegian"
    },
    {
        "gender": "Male",
        "language": "ps-AF",
        "name": "ps-AF-GulNawazNeural",
        "voicename": "GulNawaz",
        "langName": "Pashto (Afghanistan)",
        "countryName": "Afghanistan",
        "languageName": "Pashto"
    },
    {
        "gender": "Female",
        "language": "ps-AF",
        "name": "ps-AF-LatifaNeural",
        "voicename": "Latifa",
        "langName": "Pashto (Afghanistan)",
        "countryName": "Afghanistan",
        "languageName": "Pashto"
    },
    {
        "gender": "Female",
        "language": "fa-IR",
        "name": "fa-IR-DilaraNeural",
        "voicename": "Dilara",
        "langName": "Persian (Iran)",
        "countryName": "Iran",
        "languageName": "Persian"
    },
    {
        "gender": "Male",
        "language": "fa-IR",
        "name": "fa-IR-FaridNeural",
        "voicename": "Farid",
        "langName": "Persian (Iran)",
        "countryName": "Iran",
        "languageName": "Persian"
    },
    {
        "gender": "Male",
        "language": "pl-PL",
        "name": "pl-PL-MarekNeural",
        "voicename": "Marek",
        "langName": "Polish (Poland)",
        "countryName": "Poland",
        "languageName": "Polish"
    },
    {
        "gender": "Female",
        "language": "pl-PL",
        "name": "pl-PL-ZofiaNeural",
        "voicename": "Zofia",
        "langName": "Polish (Poland)",
        "countryName": "Poland",
        "languageName": "Polish"
    },
    {
        "gender": "Female",
        "language": "pt-BR",
        "name": "pt-BR-ThalitaNeural",
        "voicename": "Thalita",
        "langName": "Portuguese (Brazil)",
        "countryName": "Brazil",
        "languageName": "Portuguese"
    },
    {
        "gender": "Male",
        "language": "pt-BR",
        "name": "pt-BR-AntonioNeural",
        "voicename": "Antonio",
        "langName": "Portuguese (Brazil)",
        "countryName": "Brazil",
        "languageName": "Portuguese"
    },
    {
        "gender": "Female",
        "language": "pt-BR",
        "name": "pt-BR-FranciscaNeural",
        "voicename": "Francisca",
        "langName": "Portuguese (Brazil)",
        "countryName": "Brazil",
        "languageName": "Portuguese"
    },
    {
        "gender": "Male",
        "language": "pt-PT",
        "name": "pt-PT-DuarteNeural",
        "voicename": "Duarte",
        "langName": "Portuguese (Portugal)",
        "countryName": "Portugal",
        "languageName": "Portuguese"
    },
    {
        "gender": "Female",
        "language": "pt-PT",
        "name": "pt-PT-RaquelNeural",
        "voicename": "Raquel",
        "langName": "Portuguese (Portugal)",
        "countryName": "Portugal",
        "languageName": "Portuguese"
    },
    {
        "gender": "Female",
        "language": "ro-RO",
        "name": "ro-RO-AlinaNeural",
        "voicename": "Alina",
        "langName": "Romanian (Romania)",
        "countryName": "Romania",
        "languageName": "Romanian"
    },
    {
        "gender": "Male",
        "language": "ro-RO",
        "name": "ro-RO-EmilNeural",
        "voicename": "Emil",
        "langName": "Romanian (Romania)",
        "countryName": "Romania",
        "languageName": "Romanian"
    },
    {
        "gender": "Male",
        "language": "ru-RU",
        "name": "ru-RU-DmitryNeural",
        "voicename": "Dmitry",
        "langName": "Russian (Russia)",
        "countryName": "Russia",
        "languageName": "Russian"
    },
    {
        "gender": "Female",
        "language": "ru-RU",
        "name": "ru-RU-SvetlanaNeural",
        "voicename": "Svetlana",
        "langName": "Russian (Russia)",
        "countryName": "Russia",
        "languageName": "Russian"
    },
    {
        "gender": "Male",
        "language": "sr-RS",
        "name": "sr-RS-NicholasNeural",
        "voicename": "Nicholas",
        "langName": "Serbian (Serbia)",
        "countryName": "Serbia",
        "languageName": "Serbian"
    },
    {
        "gender": "Female",
        "language": "sr-RS",
        "name": "sr-RS-SophieNeural",
        "voicename": "Sophie",
        "langName": "Serbian (Serbia)",
        "countryName": "Serbia",
        "languageName": "Serbian"
    },
    {
        "gender": "Male",
        "language": "si-LK",
        "name": "si-LK-SameeraNeural",
        "voicename": "Sameera",
        "langName": "Sinhala (Sri Lanka)",
        "countryName": "Sri Lanka",
        "languageName": "Sinhala"
    },
    {
        "gender": "Female",
        "language": "si-LK",
        "name": "si-LK-ThiliniNeural",
        "voicename": "Thilini",
        "langName": "Sinhala (Sri Lanka)",
        "countryName": "Sri Lanka",
        "languageName": "Sinhala"
    },
    {
        "gender": "Male",
        "language": "sk-SK",
        "name": "sk-SK-LukasNeural",
        "voicename": "Lukas",
        "langName": "Slovak (Slovakia)",
        "countryName": "Slovakia",
        "languageName": "Slovak"
    },
    {
        "gender": "Female",
        "language": "sk-SK",
        "name": "sk-SK-ViktoriaNeural",
        "voicename": "Viktoria",
        "langName": "Slovak (Slovakia)",
        "countryName": "Slovakia",
        "languageName": "Slovak"
    },
    {
        "gender": "Female",
        "language": "sl-SI",
        "name": "sl-SI-PetraNeural",
        "voicename": "Petra",
        "langName": "Slovenian (Slovenia)",
        "countryName": "Slovenia",
        "languageName": "Slovenian"
    },
    {
        "gender": "Male",
        "language": "sl-SI",
        "name": "sl-SI-RokNeural",
        "voicename": "Rok",
        "langName": "Slovenian (Slovenia)",
        "countryName": "Slovenia",
        "languageName": "Slovenian"
    },
    {
        "gender": "Male",
        "language": "so-SO",
        "name": "so-SO-MuuseNeural",
        "voicename": "Muuse",
        "langName": "Somali (Somalia)",
        "countryName": "Somalia",
        "languageName": "Somali"
    },
    {
        "gender": "Female",
        "language": "so-SO",
        "name": "so-SO-UbaxNeural",
        "voicename": "Ubax",
        "langName": "Somali (Somalia)",
        "countryName": "Somalia",
        "languageName": "Somali"
    },
    {
        "gender": "Female",
        "language": "es-AR",
        "name": "es-AR-ElenaNeural",
        "voicename": "Elena",
        "langName": "Spanish (Argentina)",
        "countryName": "Argentina",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-AR",
        "name": "es-AR-TomasNeural",
        "voicename": "Tomas",
        "langName": "Spanish (Argentina)",
        "countryName": "Argentina",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-BO",
        "name": "es-BO-MarceloNeural",
        "voicename": "Marcelo",
        "langName": "Spanish (Bolivia)",
        "countryName": "Bolivia",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-BO",
        "name": "es-BO-SofiaNeural",
        "voicename": "Sofia",
        "langName": "Spanish (Bolivia)",
        "countryName": "Bolivia",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-CL",
        "name": "es-CL-CatalinaNeural",
        "voicename": "Catalina",
        "langName": "Spanish (Chile)",
        "countryName": "Chile",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-CL",
        "name": "es-CL-LorenzoNeural",
        "voicename": "Lorenzo",
        "langName": "Spanish (Chile)",
        "countryName": "Chile",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-ES",
        "name": "es-ES-XimenaNeural",
        "voicename": "Ximena",
        "langName": "Spanish (Spain)",
        "countryName": "Spain",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-CO",
        "name": "es-CO-GonzaloNeural",
        "voicename": "Gonzalo",
        "langName": "Spanish (Colombia)",
        "countryName": "Colombia",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-CO",
        "name": "es-CO-SalomeNeural",
        "voicename": "Salome",
        "langName": "Spanish (Colombia)",
        "countryName": "Colombia",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-CR",
        "name": "es-CR-JuanNeural",
        "voicename": "Juan",
        "langName": "Spanish (Costa Rica)",
        "countryName": "Costa Rica",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-CR",
        "name": "es-CR-MariaNeural",
        "voicename": "Maria",
        "langName": "Spanish (Costa Rica)",
        "countryName": "Costa Rica",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-CU",
        "name": "es-CU-BelkysNeural",
        "voicename": "Belkys",
        "langName": "Spanish (Cuba)",
        "countryName": "Cuba",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-CU",
        "name": "es-CU-ManuelNeural",
        "voicename": "Manuel",
        "langName": "Spanish (Cuba)",
        "countryName": "Cuba",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-DO",
        "name": "es-DO-EmilioNeural",
        "voicename": "Emilio",
        "langName": "Spanish (Dominican Republic)",
        "countryName": "Dominican Republic",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-DO",
        "name": "es-DO-RamonaNeural",
        "voicename": "Ramona",
        "langName": "Spanish (Dominican Republic)",
        "countryName": "Dominican Republic",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-EC",
        "name": "es-EC-AndreaNeural",
        "voicename": "Andrea",
        "langName": "Spanish (Ecuador)",
        "countryName": "Ecuador",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-EC",
        "name": "es-EC-LuisNeural",
        "voicename": "Luis",
        "langName": "Spanish (Ecuador)",
        "countryName": "Ecuador",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-SV",
        "name": "es-SV-LorenaNeural",
        "voicename": "Lorena",
        "langName": "Spanish (El Salvador)",
        "countryName": "El Salvador",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-SV",
        "name": "es-SV-RodrigoNeural",
        "voicename": "Rodrigo",
        "langName": "Spanish (El Salvador)",
        "countryName": "El Salvador",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-GQ",
        "name": "es-GQ-JavierNeural",
        "voicename": "Javier",
        "langName": "Spanish (Equatorial Guinea)",
        "countryName": "Equatorial Guinea",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-GQ",
        "name": "es-GQ-TeresaNeural",
        "voicename": "Teresa",
        "langName": "Spanish (Equatorial Guinea)",
        "countryName": "Equatorial Guinea",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-GT",
        "name": "es-GT-AndresNeural",
        "voicename": "Andres",
        "langName": "Spanish (Guatemala)",
        "countryName": "Guatemala",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-GT",
        "name": "es-GT-MartaNeural",
        "voicename": "Marta",
        "langName": "Spanish (Guatemala)",
        "countryName": "Guatemala",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-HN",
        "name": "es-HN-CarlosNeural",
        "voicename": "Carlos",
        "langName": "Spanish (Honduras)",
        "countryName": "Honduras",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-HN",
        "name": "es-HN-KarlaNeural",
        "voicename": "Karla",
        "langName": "Spanish (Honduras)",
        "countryName": "Honduras",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-MX",
        "name": "es-MX-DaliaNeural",
        "voicename": "Dalia",
        "langName": "Spanish (Mexico)",
        "countryName": "Mexico",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-MX",
        "name": "es-MX-JorgeNeural",
        "voicename": "Jorge",
        "langName": "Spanish (Mexico)",
        "countryName": "Mexico",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-NI",
        "name": "es-NI-FedericoNeural",
        "voicename": "Federico",
        "langName": "Spanish (Nicaragua)",
        "countryName": "Nicaragua",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-NI",
        "name": "es-NI-YolandaNeural",
        "voicename": "Yolanda",
        "langName": "Spanish (Nicaragua)",
        "countryName": "Nicaragua",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-PA",
        "name": "es-PA-MargaritaNeural",
        "voicename": "Margarita",
        "langName": "Spanish (Panama)",
        "countryName": "Panama",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-PA",
        "name": "es-PA-RobertoNeural",
        "voicename": "Roberto",
        "langName": "Spanish (Panama)",
        "countryName": "Panama",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-PY",
        "name": "es-PY-MarioNeural",
        "voicename": "Mario",
        "langName": "Spanish (Paraguay)",
        "countryName": "Paraguay",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-PY",
        "name": "es-PY-TaniaNeural",
        "voicename": "Tania",
        "langName": "Spanish (Paraguay)",
        "countryName": "Paraguay",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-PE",
        "name": "es-PE-AlexNeural",
        "voicename": "Alex",
        "langName": "Spanish (Peru)",
        "countryName": "Peru",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-PE",
        "name": "es-PE-CamilaNeural",
        "voicename": "Camila",
        "langName": "Spanish (Peru)",
        "countryName": "Peru",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-PR",
        "name": "es-PR-KarinaNeural",
        "voicename": "Karina",
        "langName": "Spanish (Puerto Rico)",
        "countryName": "Puerto Rico",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-PR",
        "name": "es-PR-VictorNeural",
        "voicename": "Victor",
        "langName": "Spanish (Puerto Rico)",
        "countryName": "Puerto Rico",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-ES",
        "name": "es-ES-AlvaroNeural",
        "voicename": "Alvaro",
        "langName": "Spanish (Spain)",
        "countryName": "Spain",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-ES",
        "name": "es-ES-ElviraNeural",
        "voicename": "Elvira",
        "langName": "Spanish (Spain)",
        "countryName": "Spain",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-US",
        "name": "es-US-AlonsoNeural",
        "voicename": "Alonso",
        "langName": "Spanish (United States)",
        "countryName": "United States",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-US",
        "name": "es-US-PalomaNeural",
        "voicename": "Paloma",
        "langName": "Spanish (United States)",
        "countryName": "United States",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-UY",
        "name": "es-UY-MateoNeural",
        "voicename": "Mateo",
        "langName": "Spanish (Uruguay)",
        "countryName": "Uruguay",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-UY",
        "name": "es-UY-ValentinaNeural",
        "voicename": "Valentina",
        "langName": "Spanish (Uruguay)",
        "countryName": "Uruguay",
        "languageName": "Spanish"
    },
    {
        "gender": "Female",
        "language": "es-VE",
        "name": "es-VE-PaolaNeural",
        "voicename": "Paola",
        "langName": "Spanish (Venezuela)",
        "countryName": "Venezuela",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "es-VE",
        "name": "es-VE-SebastianNeural",
        "voicename": "Sebastian",
        "langName": "Spanish (Venezuela)",
        "countryName": "Venezuela",
        "languageName": "Spanish"
    },
    {
        "gender": "Male",
        "language": "su-ID",
        "name": "su-ID-JajangNeural",
        "voicename": "Jajang",
        "langName": "Sundanese (Indonesia)",
        "countryName": "Indonesia",
        "languageName": "Sundanese"
    },
    {
        "gender": "Female",
        "language": "su-ID",
        "name": "su-ID-TutiNeural",
        "voicename": "Tuti",
        "langName": "Sundanese (Indonesia)",
        "countryName": "Indonesia",
        "languageName": "Sundanese"
    },
    {
        "gender": "Male",
        "language": "sw-KE",
        "name": "sw-KE-RafikiNeural",
        "voicename": "Rafiki",
        "langName": "Swahili (Kenya)",
        "countryName": "Kenya",
        "languageName": "Swahili"
    },
    {
        "gender": "Female",
        "language": "sw-KE",
        "name": "sw-KE-ZuriNeural",
        "voicename": "Zuri",
        "langName": "Swahili (Kenya)",
        "countryName": "Kenya",
        "languageName": "Swahili"
    },
    {
        "gender": "Male",
        "language": "sw-TZ",
        "name": "sw-TZ-DaudiNeural",
        "voicename": "Daudi",
        "langName": "Swahili (Tanzania)",
        "countryName": "Tanzania",
        "languageName": "Swahili"
    },
    {
        "gender": "Female",
        "language": "sw-TZ",
        "name": "sw-TZ-RehemaNeural",
        "voicename": "Rehema",
        "langName": "Swahili (Tanzania)",
        "countryName": "Tanzania",
        "languageName": "Swahili"
    },
    {
        "gender": "Male",
        "language": "sv-SE",
        "name": "sv-SE-MattiasNeural",
        "voicename": "Mattias",
        "langName": "Swedish (Sweden)",
        "countryName": "Sweden",
        "languageName": "Swedish"
    },
    {
        "gender": "Female",
        "language": "sv-SE",
        "name": "sv-SE-SofieNeural",
        "voicename": "Sofie",
        "langName": "Swedish (Sweden)",
        "countryName": "Sweden",
        "languageName": "Swedish"
    },
    {
        "gender": "Female",
        "language": "ta-IN",
        "name": "ta-IN-PallaviNeural",
        "voicename": "Pallavi",
        "langName": "Tamil (India)",
        "countryName": "India",
        "languageName": "Tamil"
    },
    {
        "gender": "Male",
        "language": "ta-IN",
        "name": "ta-IN-ValluvarNeural",
        "voicename": "Valluvar",
        "langName": "Tamil (India)",
        "countryName": "India",
        "languageName": "Tamil"
    },
    {
        "gender": "Female",
        "language": "ta-MY",
        "name": "ta-MY-KaniNeural",
        "voicename": "Kani",
        "langName": "Tamil (Malaysia)",
        "countryName": "Malaysia",
        "languageName": "Tamil"
    },
    {
        "gender": "Male",
        "language": "ta-MY",
        "name": "ta-MY-SuryaNeural",
        "voicename": "Surya",
        "langName": "Tamil (Malaysia)",
        "countryName": "Malaysia",
        "languageName": "Tamil"
    },
    {
        "gender": "Male",
        "language": "ta-SG",
        "name": "ta-SG-AnbuNeural",
        "voicename": "Anbu",
        "langName": "Tamil (Singapore)",
        "countryName": "Singapore",
        "languageName": "Tamil"
    },
    {
        "gender": "Female",
        "language": "ta-SG",
        "name": "ta-SG-VenbaNeural",
        "voicename": "Venba",
        "langName": "Tamil (Singapore)",
        "countryName": "Singapore",
        "languageName": "Tamil"
    },
    {
        "gender": "Male",
        "language": "ta-LK",
        "name": "ta-LK-KumarNeural",
        "voicename": "Kumar",
        "langName": "Tamil (Sri Lanka)",
        "countryName": "Sri Lanka",
        "languageName": "Tamil"
    },
    {
        "gender": "Female",
        "language": "ta-LK",
        "name": "ta-LK-SaranyaNeural",
        "voicename": "Saranya",
        "langName": "Tamil (Sri Lanka)",
        "countryName": "Sri Lanka",
        "languageName": "Tamil"
    },
    {
        "gender": "Male",
        "language": "te-IN",
        "name": "te-IN-MohanNeural",
        "voicename": "Mohan",
        "langName": "Telugu (India)",
        "countryName": "India",
        "languageName": "Telugu"
    },
    {
        "gender": "Female",
        "language": "te-IN",
        "name": "te-IN-ShrutiNeural",
        "voicename": "Shruti",
        "langName": "Telugu (India)",
        "countryName": "India",
        "languageName": "Telugu"
    },
    {
        "gender": "Male",
        "language": "th-TH",
        "name": "th-TH-NiwatNeural",
        "voicename": "Niwat",
        "langName": "Thai (Thailand)",
        "countryName": "Thailand",
        "languageName": "Thai"
    },
    {
        "gender": "Female",
        "language": "th-TH",
        "name": "th-TH-PremwadeeNeural",
        "voicename": "Premwadee",
        "langName": "Thai (Thailand)",
        "countryName": "Thailand",
        "languageName": "Thai"
    },
    {
        "gender": "Male",
        "language": "tr-TR",
        "name": "tr-TR-AhmetNeural",
        "voicename": "Ahmet",
        "langName": "Turkish (Turkey)",
        "countryName": "Turkey",
        "languageName": "Turkish"
    },
    {
        "gender": "Female",
        "language": "tr-TR",
        "name": "tr-TR-EmelNeural",
        "voicename": "Emel",
        "langName": "Turkish (Turkey)",
        "countryName": "Turkey",
        "languageName": "Turkish"
    },
    {
        "gender": "Male",
        "language": "uk-UA",
        "name": "uk-UA-OstapNeural",
        "voicename": "Ostap",
        "langName": "Ukrainian (Ukraine)",
        "countryName": "Ukraine",
        "languageName": "Ukrainian"
    },
    {
        "gender": "Female",
        "language": "uk-UA",
        "name": "uk-UA-PolinaNeural",
        "voicename": "Polina",
        "langName": "Ukrainian (Ukraine)",
        "countryName": "Ukraine",
        "languageName": "Ukrainian"
    },
    {
        "gender": "Female",
        "language": "ur-IN",
        "name": "ur-IN-GulNeural",
        "voicename": "Gul",
        "langName": "Urdu (India)",
        "countryName": "India",
        "languageName": "Urdu"
    },
    {
        "gender": "Male",
        "language": "ur-IN",
        "name": "ur-IN-SalmanNeural",
        "voicename": "Salman",
        "langName": "Urdu (India)",
        "countryName": "India",
        "languageName": "Urdu"
    },
    {
        "gender": "Male",
        "language": "ur-PK",
        "name": "ur-PK-AsadNeural",
        "voicename": "Asad",
        "langName": "Urdu (Pakistan)",
        "countryName": "Pakistan",
        "languageName": "Urdu"
    },
    {
        "gender": "Female",
        "language": "ur-PK",
        "name": "ur-PK-UzmaNeural",
        "voicename": "Uzma",
        "langName": "Urdu (Pakistan)",
        "countryName": "Pakistan",
        "languageName": "Urdu"
    },
    {
        "gender": "Female",
        "language": "uz-UZ",
        "name": "uz-UZ-MadinaNeural",
        "voicename": "Madina",
        "langName": "Uzbek (Uzbekistan)",
        "countryName": "Uzbekistan",
        "languageName": "Uzbek"
    },
    {
        "gender": "Male",
        "language": "uz-UZ",
        "name": "uz-UZ-SardorNeural",
        "voicename": "Sardor",
        "langName": "Uzbek (Uzbekistan)",
        "countryName": "Uzbekistan",
        "languageName": "Uzbek"
    },
    {
        "gender": "Female",
        "language": "vi-VN",
        "name": "vi-VN-HoaiMyNeural",
        "voicename": "HoaiMy",
        "langName": "Vietnamese (Vietnam)",
        "countryName": "Vietnam",
        "languageName": "Vietnamese"
    },
    {
        "gender": "Male",
        "language": "vi-VN",
        "name": "vi-VN-NamMinhNeural",
        "voicename": "NamMinh",
        "langName": "Vietnamese (Vietnam)",
        "countryName": "Vietnam",
        "languageName": "Vietnamese"
    },
    {
        "gender": "Male",
        "language": "cy-GB",
        "name": "cy-GB-AledNeural",
        "voicename": "Aled",
        "langName": "Welsh (United Kingdom)",
        "countryName": "United Kingdom",
        "languageName": "Welsh"
    },
    {
        "gender": "Female",
        "language": "cy-GB",
        "name": "cy-GB-NiaNeural",
        "voicename": "Nia",
        "langName": "Welsh (United Kingdom)",
        "countryName": "United Kingdom",
        "languageName": "Welsh"
    },
    {
        "gender": "Female",
        "language": "zu-ZA",
        "name": "zu-ZA-ThandoNeural",
        "voicename": "Thando",
        "langName": "Zulu (South Africa)",
        "countryName": "South Africa",
        "languageName": "Zulu"
    },
    {
        "gender": "Male",
        "language": "zu-ZA",
        "name": "zu-ZA-ThembaNeural",
        "voicename": "Themba",
        "langName": "Zulu (South Africa)",
        "countryName": "South Africa",
        "languageName": "Zulu"
    }
]

export default voices;