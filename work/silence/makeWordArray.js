
// JS FOR SETTING UP THE PAGE

// word object constructor, takes a string and a boolean
function word(content) {
  this.content = content;
}

// takes a string + returns an array of word objects
function toObjArr(foo) {
  var fooArray = foo.split(" ");
  for (var i = 0; i < fooArray.length; i++) {
    fooArray[i] = new word(fooArray[i]);
  }
  return fooArray;
}

//takes an arrry of word objects returns string of html
// with each word wrapped in <em> </em>, class of true or false
// makes title in p and h2, makes p and loops through remaining words, closes p
function arrToHTML(fooArr) {

  var temp = "<p><h2><em> " + fooArr[0].content + " </em><em> " + fooArr[1].content + " </em></h2></p><p> ";

  for (var i = 2; i < fooArr.length; i++) {
    if (fooArr[i].content === "&BR&") {
      temp += "<br>";
    } else {
      temp += "<em> " + fooArr[i].content + " </em>";
    }
  }

  temp += "</p>";
  return temp;
}

var etymology = "01 ETYMOLOGY The father of silence is sorrow. / The daughter &BR& of sorrow / silence. Leave the light / ajar, &BR& says sorrow. He goes / into the garage to &BR& smoke. / When silence lies on the pillow / of &BR& sorrow's chest, she thinks nuzzle, / which &BR& makes her think horse, which makes her / the &BR& bestial flaring of nostrils, hot / breath, &BR& kettle steam in the early morning / before the &BR& birds have woken. Why do horses / wear &BR& blankets? silence asks, but sorrow / does not &BR& reply. In his garage hangs a poster / with &BR& three giant scoops of ice cream / at the end of &BR& a long, one-point perspective highway. / It is &BR& an advertisement for a mountain range. / The &BR& mountain range belongs to whoever first looks &BR& at it / and thinks, mine. But the silence &BR& cannot think / mine, the sorrow is full of &BR& horse";
var eschatology = "02 ESCHATOLOGY Five deer vanish into moonlight&rsquo;s alpha channel &BR& and become / one deer. Wire mesh of cloud / &BR& distorted by the dome of the sky. / The &BR& Florence Cathedral sat for one hundred years / &BR& with no ceiling. In one hundred years / &BR& cartographers will argue over the correct &BR& projection / of the faded murals and chemists &BR& will argue / over the paint and painters will / &BR& paint. &quot;I don&rsquo;t even like / looking at art.&quot; &BR& says silence. Silence / is a great artist. The &BR& deer are great / artists. Their eyes do not &BR& shine like stop signs, the moonlight / is &BR& blas&eacute;, the legs are trunks of saplings / &BR& splintered fenceposts / sharp ends of shadows &BR& lodged / in the half-melted snow, half-hearted &BR& / arrows. The winter dared us to balance / the &BR& fruit upon our heads. The winter had a &BR& masochistic / streak. There is no sound. It is &BR& / not quiet";
var etiology = "03 ETIOLOGY When silence was a child, she expected / snow / &BR& would feel generous, bounteous white / flannel &BR& sheets in a bed just vacated / by some other &BR& warm body, his smell / forgetting TV static is &BR& also called / snow, / that when you see snow &BR& you have made / a mistake. Everyone knows there &BR& is such a thing / as a cold silence. Everybody &BR& knows / when you compress the photograph of the &BR& mountain / what emerges is not color but / &BR& noise";
var entomology = "04 ENTOMOLOGY Silence has an imaginary friend / named &BR& Charlotte after the only spider / silence did &BR& not fear, not like / the swollen black hands &BR& clinging to the corner / of the ceiling, black &BR& mold, black / milk. Charlotte shared silence&rsquo;s &BR& habitat / distinguishing features / behavioral &BR& tendencies, could be identified / captured and &BR& kept as a pet or extinguished / as in a flame &BR& or plague (the epidemic / of silence) or &BR& exterminated / without crushing, carefully &BR& preserved / as in butterflies pinned to cork &BR& and kept / behind glass, a double-plated &BR& silence / with silence on one side and &BR& Charlotte on the other / listening to obscure &BR& independent music / silence cannot hear";
var psychology = "05 PSYCHOLOGY Silence is not a thing. Silence is / any thing , &BR& any / wild arrhythmia, any clutching / &BR& aftermath, the absence of the / expected. If &BR& you give a spider / a glass of milk and tell &BR& them it&rsquo;s / water it will / vomit when it takes &BR& a sip";

var textbox = document.getElementById('textbox');

