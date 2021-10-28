/**
 * Skæri, blað, steinn.
 * Spilað gegnum console.
 */

/** Hámarks fjöldi best-of leikja, ætti að vera jákvæð heiltala stærri en 0 */
const MAX_BEST_OF = 10;

/** Global breyta sem heldur utan um heildar sigra */
let wins = 0;

/** Global breyta sem heldur utan um heildar töp */
let losses = 0;

/**
 * Athugar hvort gefin tala sé gild sem best-of gildi.
 * @param {number} bestOf Tala sem skal athuga
 * @return {boolean} true eða false
 */
function isValidBestOf(bestOf) {
  if (bestOf % 2 === 0 && bestOf < MAX_BEST_OF) {
    return false;
  }
  else{
    return true;
  }
}
console.assert(isValidBestOf(1) === true, '1 er valid best of');
console.assert(isValidBestOf(2) === false, '2 er ekki er valid best of');
console.assert(isValidBestOf(9) === true, '9 er valid best of');

function playAsText(play) {
  if (play === "1"){
    return "Skæri";
  }
  else if (play === "2"){
    return "Blað";
  }
  else if (play === "3"){
    return "Steinn";
  }
  else {
    return "Óþekkt";
  }
}
console.assert(playAsText('1') === 'Skæri', '1 táknar skæri');
console.assert(playAsText('2') === 'Blað', '2 táknar blað');
console.assert(playAsText('3') === 'Steinn', '3 táknar steinn');
console.assert(playAsText('foo') === 'Óþekkt', 'Annað er óþekkt');

/**
 * Athugar hvort spilari eða tölva vinnur.
 * @param {number} player Það sem spilari spilaði
 * @param {number} computer Það sem tölva spilaði
 * @returns -1 ef tölva vann, 0 ef jafntefli, 1 ef spilari vann
 */
function checkGame(player, computer) {
  if (player == 1 && computer == 1){
    return 0;
  }
  else if (player == 1 && computer == 2){
    return 1;
  }
  else if (player == 1 && computer == 3){
    return -1;
  }
  else if (player == 2 && computer == 3){
    return 1;
  }
  else if (player == 3 && computer == 1){
    return 1;
  }
}
console.assert(checkGame('1', '2') === 1, 'Skæri vinnur blað');
console.assert(checkGame('2', '3') === 1, 'Blað vinnur stein');
console.assert(checkGame('3', '1') === 1, 'Steinn vinnur skæri');
console.assert(checkGame('1', '1') === 0, 'Skæri og skæri eru jafntefli');
console.assert(checkGame('1', '3') === -1, 'Skæri tapar fyrir stein');

/**
 * Spilar einn leik.
 * @return {boolean} -1 ef tölva vann, 0 ef jafntefli, 1 ef spilari vann
 */
function round() {
  var playerrr = prompt("Hverju viltu spila? Skæri(1), Blað(2), Steinn(3): ")
  computerrr = Math.floor(Math.random() * 3) + 1
  return checkGame(playerrr, computerrr);
  
}

/**
 * Spilar leik og bætir útkomu (sigur eða tap) við í viðeigandi global breytu.
 */
function play() {
  bestOf = parseInt(bestOf);
  var bestOf = prompt("Hvað viltu spila marga leiki?: ")
  if (isValidBestOf(bestOf) == true) {
    return round();
  }
}

/**
 * Birtir stöðu spilara.
 */
function games() {
  console.log("Þú hefur spilað "+Math.abs(wins+losses)+" leiki.");
  console.log("Þú hefur unnið "+wins+", eða "+(wins)/(Math.abs(wins+losses))+" af heild.");
  console.log("Þú hefur tapað "+losses+", eða "+(losses)/(Math.abs(wins+losses))+" af heild.");
}
