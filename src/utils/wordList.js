// A simple list of 5-letter words as suggestions
export const wordList = [
  "ABOUT", "ABOVE", "ABUSE", "ACTOR", "ACUTE", "ADMIT", "ADOPT", "ADORE", "ADULT", "AFTER",
  "AGAIN", "AGENT", "AGREE", "AHEAD", "ALARM", "ALBUM", "ALERT", "ALIKE", "ALIVE", "ALLOW",
  "ALONE", "ALONG", "ALTER", "AMONG", "ANGER", "ANGLE", "ANGRY", "ANKLE", "APART", "APPLE",
  "APPLY", "ARENA", "ARGUE", "ARISE", "ARMOR", "ARRAY", "ARROW", "ASSET", "AVOID", "AWARD",
  "AWARE", "AWFUL", "BASIC", "BASIS", "BEACH", "BEANS", "BEARD", "BEAST", "BEGIN", "BEING",
  "BELOW", "BENCH", "BERRY", "BIRTH", "BLACK", "BLADE", "BLAME", "BLANK", "BLAST", "BLAZE",
  "BLEED", "BLEND", "BLESS", "BLIND", "BLOCK", "BLOOD", "BLOOM", "BLUES", "BLUFF", "BOARD",
  "BOAST", "BONUS", "BOOST", "BOOTH", "BORN", "BOUND", "BRACE", "BRAIN", "BRAKE", "BRAND",
  "BRAVE", "BREAD", "BREAK", "BREED", "BRIEF", "BRING", "BRISK", "BROAD", "BROWN", "BRUSH",
  "BUILD", "BUILT", "BUNCH", "BURST", "CABIN", "CABLE", "CAMEL", "CANAL", "CANDY", "CANON",
  "CARGO", "CARRY", "CARTE", "CARVE", "CATCH", "CAUSE", "CEASE", "CHAIN", "CHAIR", "CHALK",
  "CHARM", "CHART", "CHASE", "CHEAP", "CHECK", "CHEER", "CHESS", "CHEST", "CHIEF", "CHILD",
  "CHILL", "CHINA", "CHIPS", "CHOKE", "CHOP", "CHORD", "CIVIL", "CLAIM", "CLASH", "CLASS",
  "CLEAN", "CLEAR", "CLERK", "CLICK", "CLIFF", "CLIMB", "CLING", "CLOCK", "CLONE", "CLOSE",
  "CLOTH", "CLOUD", "CLOWN", "CLUBS", "CLUE", "COACH", "COAST", "COLOR", "COMET", "COMIC",
  "COMMA", "CONDO", "CORAL", "CORPS", "COSTS", "COUCH", "COUGH", "COUNT", "COURT", "COVER",
  "CRAFT", "CRASH", "CRAZY", "CREAM", "CREED", "CREEK", "CREST", "CRIME", "CRISP", "CROSS",
  "CROWD", "CROWN", "CRUDE", "CRUEL", "CRUSH", "CRUST", "CRYPT", "CUBIC", "CURRY", "CURVE",
  "CYCLE", "DAILY", "DAIRY", "DANCE", "DATUM", "DEALT", "DEATH", "DEBIT", "DEBUT", "DECAY",
  "DECOR", "DELAY", "DELTA", "DENSE", "DEPOT", "DEPTH", "DERBY", "DETER", "DEVIL", "DIARY",
  "DIGIT", "DINER", "DIRTY", "DISCO", "DIVER", "DOGMA", "DOING", "DONOR", "DOORS", "DOUBT",
  "DOUGH", "DRAFT", "DRAIN", "DRAMA", "DRANK", "DREAM", "DRESS", "DRIED", "DRIFT", "DRILL",
  "DRINK", "DRIVE", "DRONE", "DRUID", "DRUMS", "DRUNK", "DUCKS", "DUELS", "DUETS", "DUMMY",
  "DUMPS", "DUNCE", "DUNKS", "DUSKY", "DUSTY", "DUTCH", "DWARF", "DYING", "EAGER", "EAGLE",
  "EARLY", "EARTH", "EASED", "EASEL", "EATEN", "EATER", "EBONY", "EDGES", "EERIE", "EIGHT",
  "EJECT", "ELBOW", "ELDER", "ELECT", "ELITE", "ELUDE", "EMAIL", "EMBED", "EMBER", "EMPTY",
  "ENACT", "ENDED", "ENDOW", "ENEMY", "ENJOY", "ENTER", "ENTRY", "ENVOY", "EPOCH", "EQUAL",
  "EQUIP", "ERASE", "ERECT", "ERROR", "ERUPT", "ESSAY", "ETHIC", "EVADE", "EVENT", "EVERY",
  "EVICT", "EVOKE", "EXACT", "EXALT", "EXCEL", "EXERT", "EXILE", "EXIST", "EXPEL", "EXTRA",
  "EXULT", "FACED", "FACES", "FACTS", "FADED", "FAILS", "FAINT", "FAIRY", "FAITH", "FALLS",
  "FALSE", "FANCY", "FANGS", "FATAL", "FATTY", "FAULT", "FAVOR", "FEAST", "FECAL", "FEIGN",
  "FERNS", "FERRY", "FETCH", "FEVER", "FIBER", "FIELD", "FIEND", "FIERY", "FIFTH", "FIFTY",
  "FIGHT", "FILCH", "FILED", "FILES", "FILET", "FILLS", "FILMS", "FILTH", "FINAL", "FINCH",
];

// Function to get a random word from the list
export function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordList.length);
  return wordList[randomIndex];
}

// Function to check if a word is valid (now just checks if it's 5 letters)
export function isValidWord(word) {
  return word.length === 5 && /^[A-Za-z]+$/.test(word);
}
