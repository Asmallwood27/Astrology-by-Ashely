var data = {
"Sun":[
  {"sign":"Aries", 
   "description":"Aries, the fiery ram. It is also a cardinal sign and considered masculine. When you think of Aries think of the God of war. This sign is full of energy and ambition. An adventrous sign with the need to be first in everything but as much as this drives them they have a hard time with finishing things. They can be quick-tempered (remember God of war ?) and impulsive. This signs planetary ruler is Mars."},

  {"sign": "Taurus", 
   "description":"Taurus, the earthy bull. This is a fixed sign and its also femimine. Taurus is a sign of patience and love or rather loving. They bring about security when you are around them, think of a really great hug and that is Taurus. A realiable sign but also one that loves luxury. This can make them self-indulgent and possessive. They can become greedy and inflexible under certain conditions. This signs planetary ruler is Venus."},
    
  {"sign":"Gemini",
   "description":"Gemini is a mutable air sign. Given that Gemini is the twins, this sign can be both masculine and feminine. Gemini is highly adaptable and intelligent. Communication is a strong trait of this sign and they can do it with a lively, youthful twist to it. While being witty is natural they also can be nervous and superficial. Since they are the twins they could even be considered two-faced. The planetary ruler of this sign is Mercury"},
  {"sign": "Cancer",
   "description":"Cancer, the water crab. This sign is feminine and cardinal. They best description of cancer would be a mama bear. This sign can be fierce and protective. The exude love and sympathy for those around them. They are in touch with their emotions, however they can be overemotional. They can be subject to mood swings and have a hard time letting go, think of clingy. The planetary ruler for Cancer is the Moon."},
  {"sign": "Leo",
   "description":"Leo, the fiery lion. This is a fixed sign and witout a doubt masculine. The center of attention in any room. This sign is a creative one with a plethora of enthusiasim.One for drama and assertion, which can lead to an amazing career as an entertainer. Passionate and expansive but they can also be bossy. The desire to be the center of attention can make them appear intolerant and arrogant. This signs planetary ruler is the Sun."},
  {"sign": "Virgo",
   "description":"Virgo is an earth sign. This sign is considered feminine and is a fixed sign. Detail-oreiented and maybe a tad OCD is a way to describe this sign. They love to work and to be of service to others, modesty is a strong suit. However, they can be over critical and harsh. The need to obsses over details can make them a perfectionist. Virgo's planetary ruler is Mercury, like Gemini."},
  {"sign": "Libra",
   "description":"Libra, the airy scales. a balancing act between masculine and feminine for this cardinal sign. Libra is known for beauty, elegance and charm. Because they are represented by the scales they gear more on the diplomatic side, always trying to balance between two subjects.This also gives them a sociable nature but it can come off as flirtacious. Even with the need for balance they can easily influenced and lack the ability to make descisons. This sign is ruled by Venus, like Taurus."},
  {"sign": "Scorpio",
   "description":"Scorpio, the scorpion. This water sign is considered fixed feminine. Quite possibly the most intense sign in the zodiac, at least per the rumors. The possess a certain magnetisim that draws you in and the emotions and passion they have keeps you interested. While they may apper powerful, they can be overemotional and jealous. Obssesion and compulison are some negative qualities. This signs planetary ruler is Pluto."},
  {"sign": "Sagittarius",
   "description":"Sagitattarius, the archer A mutable fire sign. Honesty and philiosphy for this masculine archer. This sign enjoys having freedom and good-humored fun. They can be quite optimistic but this has its down falls as they can be blind to opposition. Carless and irresposibilty may cloud the freedom they love. This signs planetary ruler is Jupiter."},
  {"sign": "Capricorn",
   "description":"Capricorn, the goat. This cardinal earth sign is feminine but we could say masculine as well. hardworking and ambitious, they are more logic driven. naturally cautious and responsible you'll find many at the top ranks. The pressure to preform well may have them appear restrictive and aloof. The planetary ruler is Saturn."},
  {"sign": "Aquarius",
   "description":"Aquarius, the water bearer. No, this is not a water sign but rather a fixed air sign that is considered masculine. Rebelious and humanitarion driven. While they appear aloof and emotionless they actually are one of the most emotional signs in the zodiac. They are eccentric, spontaneous and years adhead of their time but they can be detached and have somewhat of a god complex. This signs planetart rulers are Saturn and Uranus."},
  {"sign": "Pisces",
   "description":"Pisces, the fishes. Yes, this one is a water sign. It exudes feminine mutable energy. Dreamy and full of imagination, they are one for illusions. They can be quite friendly and likable but at times moody and to deep into their emotions or mind. They can be strong when the time calls but also have difficulity with making a decsion. This sign is ruled by Neptune. "}
    
    
]}



function getAstro(sign){
    let position = $("#placement").val('click');
    let index = data[position].findIndex(s => s.sign == sign);
    let description = data[position][index]["description"];
    alert("position:" + position);
    alert(description);
    $(".sign-title").text(sign);
    $(".sign-description").text(description);





