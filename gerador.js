const formNamesTop = ["TopNameOne", "TopNameTwo", "TopNameThree", "TopNameFour", "TopNameFive", "TopNameSix"]
const formNicknameTop = ["TopNicknameOne", "TopNicknameTwo", "TopNicknameThree", "TopNicknameFour", "TopNicknameFive", "TopNicknameSix"]
const formStatusTop = ["TopStatusOne", "TopStatusTwo", "TopStatusThree", "TopStatusFour", "TopStatusFive", "TopStatusSix"]
const formItemTop = ["TopItemOne", "TopItemTwo", "TopItemThree", "TopItemFour", "TopItemFive", "TopItemSix"]
const formTraitTop = ["TopTraitOne", "TopTraitTwo", "TopTraitThree", "TopTraitFour", "TopTraitFive", "TopTraitSix"]
const formGenderTop = ["TopGenderOne", "TopGenderTwo", "TopGenderThree", "TopGenderFour", "TopGenderFive", "TopGenderSix"]
const formLevelTop = ["TopLevelOne", "TopLevelTwo", "TopLevelThree", "TopLevelFour", "TopLevelFive", "TopLevelSix"]
const formCurrentHPTop = ["TopCurrentHPOne", "TopCurrentHPTwo", "TopCurrentHPThree", "TopCurrentHPFour", "TopCurrentHPFive", "TopCurrentHPSix"]
const formFullHPTop = ["TopFullHPOne", "TopFullHPTwo", "TopFullHPThree", "TopFullHPFour", "TopFullHPFive", "TopFullHPSix"]
const formNamesBot = ["BotNameOne", "BotNameTwo", "BotNameThree", "BotNameFour", "BotNameFive", "BotNameSix"]
const formNicknameBot = ["BotNicknameOne", "BotNicknameTwo", "BotNicknameThree", "BotNicknameFour", "BotNicknameFive", "BotNicknameSix"]
const formStatusBot = ["BotStatusOne", "BotStatusTwo", "BotStatusThree", "BotStatusFour", "BotStatusFive", "BotStatusSix"]
const formItemBot = ["BotItemOne", "BotItemTwo", "BotItemThree", "BotItemFour", "BotItemFive", "BotItemSix"]
const formTraitBot = ["BotTraitOne", "BotTraitTwo", "BotTraitThree", "BotTraitFour", "BotTraitFive", "BotTraitSix"]
const formGenderBot = ["BotGenderOne", "BotGenderTwo", "BotGenderThree", "BotGenderFour", "BotGenderFive", "BotGenderSix"]
const formLevelBot = ["BotLevelOne", "BotLevelTwo", "BotLevelThree", "BotLevelFour", "BotLevelFive", "BotLevelSix"]
const formCurrentHPBot = ["BotCurrentHPOne", "BotCurrentHPTwo", "BotCurrentHPThree", "BotCurrentHPFour", "BotCurrentHPFive", "BotCurrentHPSix"]
const formFullHPBot = ["BotFullHPOne", "BotFullHPTwo", "BotFullHPThree", "BotFullHPFour", "BotFullHPFive", "BotFullHPSix"]
const allTopNames = []
const allTopNickname = []
const allTopStatus= []
const allTopItem = []
const allTopTrait = []
const allTopGender = []
const allTopLevel = []
const allTopCurrentHP = []
const allTopFullHP= []
const allBotNames = []
const allBotNickname = []
const allBotStatus= []
const allBotItem = []
const allBotTrait = []
const allBotGender = []
const allBotLevel = []
const allBotCurrentHP = []
const allBotFullHP= []
const cleaningList = [allTopNames, allTopNickname, allTopStatus, allTopItem, allTopTrait, allTopGender, allTopLevel, allTopCurrentHP, allTopFullHP, allBotNames, allBotNickname, allBotStatus, allBotItem, allBotTrait, allBotGender, allBotLevel, allBotCurrentHP, allBotFullHP]


function creatingNameArrays(array, newarray) {
    
    for (var key of array){
        if (document.getElementById(key).value.length > 0){
            newarray.push(document.getElementById(key).value)
            
        }
       
    }
}

function creatingArrays(array, newarray) {
    
  for (var key of array){
      if (document.getElementById(key).value.length > 0){
          newarray.push(document.getElementById(key).value)
          
      }
      else if (document.getElementById(key).value.length == 0){
        newarray.push("undefined")
        
    }
  }
}

function clearArray(array) {
  for (var key of array){
    while (key.length) {
      key.pop();
    }
    }
  }


function fillInNicknamesEmpty (listOne, listTwo){
  for (var value in listOne){
    if (listTwo[value] == "undefined"){
      listTwo[value] = listOne[value]
    }
  }
}

function fillInTheBlanks (listOne, listTwo){
  for (var value in listOne){
    if (listTwo[value] == "undefined"){
      listTwo[value] = "~x~"
    }
  }
}

function hpColor (total, current){
  let color = "none"
  if (current >= total / 2){
    color = "green"
  }
  else if (current >= total / 3){
    color = "yellow"
  }
  else 
  color = "red"
return color;
}



document.getElementById("enviar").onclick = function(e) {
    
  creatingNameArrays(formNamesTop, allTopNames)
  creatingArrays(formNicknameTop, allTopNickname)
  creatingArrays(formStatusTop, allTopStatus)
  creatingArrays(formItemTop, allTopItem)
  creatingArrays(formTraitTop, allTopTrait)
  creatingArrays(formGenderTop, allTopGender)
  creatingArrays(formLevelTop, allTopLevel)
  creatingArrays(formCurrentHPTop, allTopCurrentHP)
  creatingArrays(formFullHPTop, allTopFullHP)
  creatingNameArrays(formNamesBot, allBotNames)
  creatingArrays(formNicknameBot, allBotNickname)
  creatingArrays(formStatusBot, allBotStatus)
  creatingArrays(formItemBot, allBotItem)
  creatingArrays(formTraitBot, allBotTrait)
  creatingArrays(formGenderBot, allBotGender)
  creatingArrays(formLevelBot, allBotLevel)
  creatingArrays(formCurrentHPBot, allBotCurrentHP)
  creatingArrays(formFullHPBot, allBotFullHP)
  fillInNicknamesEmpty(allTopNames, allTopNickname)
  fillInNicknamesEmpty(allBotNames, allBotNickname)
  fillInTheBlanks(allTopNames, allTopStatus)
  fillInTheBlanks(allTopNames, allTopItem)
  fillInTheBlanks(allTopNames, allTopTrait)
  fillInTheBlanks(allBotNames, allBotStatus)
  fillInTheBlanks(allBotNames, allBotItem)
  fillInTheBlanks(allBotNames, allBotTrait)
    
    const totalTop = allTopNames.length
    const totalBot = allBotNames.length
    switch(totalTop) {
        case 1:
         var resultadoTop = 
`<div class="din"><center>
[table][tr][td class="box"]${allTopNickname[0]}:
[b]${allTopStatus[0]}[/b]
[/td]
[td class="box"]Hold Item:
[b]${allTopItem[0]}[/b][/td]
[td class="box"]Trait:
[b]${allTopTrait[0]}[/b][/td]
[td]
<div class="don">[size=10]lv${allTopLevel[0]}[/size] ${allTopNickname[0]} [color=#999999][size=16]${allTopGender[0]}[/size][/color]</div>
<progress class="${hpColor(allTopFullHP[0], allTopCurrentHP[0])}" value="${allTopCurrentHP[0]}" max="${allTopFullHP[0]}"></progress>
[right]${allTopCurrentHP[0]}/${allTopFullHP[0]}[/right]
[/td]
[td][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[0].toLowerCase()}.gif[/img][/td]
[/tr]`
         
          break
        case 2:
          var resultadoTop = `
<div class="din"><center>
[table][tr][td class="box"]${allTopNickname[0]}:
[b]${allTopStatus[0]}[/b]
${allTopNickname[1]}:
[b]${allTopStatus[1]}[/b]
[/td]
[td class="box"]Hold Item 1:
[b]${allTopItem[0]}[/b]
Hold Item 2:
[b]${allTopItem[1]}[/b][/td]
[td class="box"]Trait 1:
[b]${allTopTrait[0]}[/b]
Trait 2:
[b]${allTopTrait[1]}[/b][/td]
[td]
<div class="don">[size=10]lv${allTopLevel[0]}[/size] ${allTopNickname[0]} [color=#999999][size=16]${allTopGender[0]}[/size][/color]</div>
<progress class="${hpColor(allTopFullHP[0], allTopCurrentHP[0])}" value="${allTopCurrentHP[0]}" max="${allTopFullHP[0].toLowerCase()}"></progress>
[right]${allTopCurrentHP[0]}/${allTopFullHP[0]}[/right]
<div class="don">[size=10]lv${allTopLevel[1]}[/size] ${allTopNickname[1]} [color=#999999][size=16]${allTopGender[1]}[/size][/color]</div>
<progress class="${hpColor(allTopFullHP[1], allTopCurrentHP[1])}" value="${allTopCurrentHP[1]}" max="${allTopFullHP[1]}"></progress>
[right]${allTopCurrentHP[1]}/${allTopFullHP[1]}[/right]
[/td]
[td][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[0].toLowerCase()}.gif[/img][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[1].toLowerCase()}.gif[/img][/td]
[/tr]`
          break
        case 3:
          var resultadoTop = 
  `<div class="din"><center>
  [table][tr][td class="box"]${allTopNickname[0]}:
  [b]${allTopStatus[0]}[/b]
  ${allTopNickname[1]}:
  [b]${allTopStatus[1]}[/b]
  ${allTopNickname[2]}:
  [b]${allTopStatus[2]}[/b]
  [/td]
  [td class="box"]Hold Item 1:
  [b]${allTopItem[0]}[/b]
  Hold Item 2:
  [b]${allTopItem[1]}[/b]
  Hold Item 3:
  [b]${allTopItem[2]}[/b][/td]
  [td class="box"]Trait 1:
  [b]${allTopTrait[0]}[/b]
  Trait 2:
  [b]${allTopTrait[1]}[/b]
  Trait 3:
  [b]${allTopTrait[2]}[/b][/td]
  [td]
  <div class="don">[size=10]lv${allTopLevel[0]}[/size] ${allTopNickname[0]} [color=#999999][size=16]${allTopGender[0]}[/size][/color]</div>
  <progress class="${hpColor(allTopFullHP[0], allTopCurrentHP[0])}" value="${allTopCurrentHP[0]}" max="${allTopFullHP[0]}"></progress>
  [right]${allTopCurrentHP[0]}/${allTopFullHP[0]}[/right]
  <div class="don">[size=10]lv${allTopLevel[1]}[/size] ${allTopNickname[1]} [color=#999999][size=16]${allTopGender[1]}[/size][/color]</div>
  <progress class="${hpColor(allTopFullHP[1], allTopCurrentHP[1])}" value="${allTopCurrentHP[1]}" max="${allTopFullHP[1]}"></progress>
  [right]${allTopCurrentHP[1]}/${allTopFullHP[1]}[/right]
  <div class="don">[size=10]lv${allTopLevel[2]}[/size] ${allTopNickname[1]} [color=#999999][size=16]${allTopGender[2]}[/size][/color]</div>
  <progress class="${hpColor(allTopFullHP[2], allTopCurrentHP[2])}" value="${allTopCurrentHP[2]}" max="${allTopFullHP[2]}"></progress>
  [right]${allTopCurrentHP[2]}/${allTopFullHP[2]}[/right]
  [/td]
  [td][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[0].toLowerCase()}.gif[/img][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[1].toLowerCase()}.gif[/img][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[2].toLowerCase()}.gif[/img][/td]
  [/tr]`  
          break
        case 4:
          var resultadoTop = 
  `<div class="din"><center>
  [table][tr][td class="box"]${allTopNickname[0]}:
  [b]${allTopStatus[0]}[/b]
  ${allTopNickname[1]}:
  [b]${allTopStatus[1]}[/b]
  ${allTopNickname[2]}:
  [b]${allTopStatus[2]}[/b]
  ${allTopNickname[3]}:
  [b]${allTopStatus[3]}[/b]
  [/td]
  [td class="box"]Hold Item 1:
  [b]${allTopItem[0]}[/b]
  Hold Item 2:
  [b]${allTopItem[1]}[/b]
  Hold Item 3:
  [b]${allTopItem[2]}[/b]
  Hold Item 4:
  [b]${allTopItem[3]}[/b][/td]
  [td class="box"]Trait 1:
  [b]${allTopTrait[0]}[/b]
  Trait 2:
  [b]${allTopTrait[1]}[/b]
  Trait 3:
  [b]${allTopTrait[2]}[/b]
  Trait 4:
  [b]${allTopTrait[3]}[/b][/td]
  [td]
  <div class="don">[size=10]lv${allTopLevel[0]}[/size] ${allTopNickname[0]} [color=#999999][size=16]${allTopGender[0]}[/size][/color]</div>
  <progress class="${hpColor(allTopFullHP[0], allTopCurrentHP[0])}" value="${allTopCurrentHP[0]}" max="${allTopFullHP[0]}"></progress>
  [right]${allTopCurrentHP[0]}/${allTopFullHP[0]}[/right]
  <div class="don">[size=10]lv${allTopLevel[1]}[/size] ${allTopNickname[1]} [color=#999999][size=16]${allTopGender[1]}[/size][/color]</div>
  <progress class="${hpColor(allTopFullHP[1], allTopCurrentHP[1])}" value="${allTopCurrentHP[1]}" max="${allTopFullHP[1]}"></progress>
  [right]${allTopCurrentHP[1]}/${allTopFullHP[1]}[/right]
  <div class="don">[size=10]lv${allTopLevel[2]}[/size] ${allTopNickname[2]} [color=#999999][size=16]${allTopGender[2]}[/size][/color]</div>
  <progress class="${hpColor(allTopFullHP[2], allTopCurrentHP[2])}" value="${allTopCurrentHP[2]}" max="${allTopFullHP[2]}"></progress>
  [right]${allTopCurrentHP[2]}/${allTopFullHP[2]}[/right]
  <div class="don">[size=10]lv${allTopLevel[3]}[/size] ${allTopNickname[3]} [color=#999999][size=16]${allTopGender[3]}[/size][/color]</div>
  <progress class="${hpColor(allTopFullHP[3], allTopCurrentHP[3])}" value="${allTopCurrentHP[3]}" max="${allTopFullHP[3]}"></progress>
  [right]${allTopCurrentHP[3]}/${allTopFullHP[3]}[/right]
  [/td]
  [td][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[0].toLowerCase()}.gif[/img][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[1].toLowerCase()}.gif[/img][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[2].toLowerCase()}.gif[/img][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[3].toLowerCase()}.gif[/img][/td]
  [/tr]`
          break
        case 5:
          var resultadoTop = 
  `<div class="din"><center>
  [table][tr][td class="box"]${allTopNickname[0]}:
  [b]${allTopStatus[0]}[/b]
  ${allTopNickname[1]}:
  [b]${allTopStatus[1]}[/b]
  ${allTopNickname[2]}:
  [b]${allTopStatus[2]}[/b]
  ${allTopNickname[3]}:
  [b]${allTopStatus[3]}[/b]
  ${allTopNickname[4]}:
  [b]${allTopStatus[4]}[/b]
  [/td]
  [td class="box"]Hold Item 1:
  [b]${allTopItem[0]}[/b]
  Hold Item 2:
  [b]${allTopItem[1]}[/b]
  Hold Item 3:
  [b]${allTopItem[2]}[/b]
  Hold Item 4:
  [b]${allTopItem[3]}[/b]
  Hold Item 5:
  [b]${allTopItem[4]}[/b][/td]
  [td class="box"]Trait 1:
  [b]${allTopTrait[0]}[/b]
  Trait 2:
  [b]${allTopTrait[1]}[/b]
  Trait 3:
  [b]${allTopTrait[2]}[/b]
  Trait 4:
  [b]${allTopTrait[3]}[/b]
  Trait 5:
  [b]${allTopTrait[4]}[/b][/td]
  [td]
  <div class="don">[size=10]lv${allTopLevel[0]}[/size] ${allTopNickname[0]} [color=#999999][size=16]${allTopGender[0]}[/size][/color]</div>
  <progress class="${hpColor(allTopFullHP[0], allTopCurrentHP[0])}" value="${allTopCurrentHP[0]}" max="${allTopFullHP[0]}"></progress>
  [right]${allTopCurrentHP[0]}/${allTopFullHP[0]}[/right]
  <div class="don">[size=10]lv${allTopLevel[1]}[/size] ${allTopNickname[1]} [color=#999999][size=16]${allTopGender[1]}[/size][/color]</div>
  <progress class="${hpColor(allTopFullHP[1], allTopCurrentHP[1])}" value="${allTopCurrentHP[1]}" max="${allTopFullHP[1]}"></progress>
  [right]${allTopCurrentHP[1]}/${allTopFullHP[1]}[/right]
  <div class="don">[size=10]lv${allTopLevel[2]}[/size] ${allTopNickname[2]} [color=#999999][size=16]${allTopGender[2]}[/size][/color]</div>
  <progress class="${hpColor(allTopFullHP[2], allTopCurrentHP[2])}" value="${allTopCurrentHP[2]}" max="${allTopFullHP[2]}"></progress>
  [right]${allTopCurrentHP[2]}/${allTopFullHP[2]}[/right]
  <div class="don">[size=10]lv${allTopLevel[3]}[/size] ${allTopNickname[3]} [color=#999999][size=16]${allTopGender[3]}[/size][/color]</div>
  <progress class="${hpColor(allTopFullHP[3], allTopCurrentHP[3])}" value="${allTopCurrentHP[3]}" max="${allTopFullHP[3]}"></progress>
  [right]${allTopCurrentHP[3]}/${allTopFullHP[3]}[/right]
  <div class="don">[size=10]lv${allTopLevel[4]}[/size] ${allTopNickname[4]} [color=#999999][size=16]${allTopGender[4]}[/size][/color]</div>
  <progress class="${hpColor(allTopFullHP[4], allTopCurrentHP[4])}" value="${allTopCurrentHP[4]}" max="${allTopFullHP[4]}"></progress>
  [right]${allTopCurrentHP[4]}/${allTopFullHP[4]}[/right]
  [/td]
  [td][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[0].toLowerCase()}.gif[/img][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[1].toLowerCase()}.gif[/img][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[2].toLowerCase()}.gif[/img][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[3].toLowerCase()}.gif[/img][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[4].toLowerCase()}.gif[/img][/td]
  [/tr]`
          break
        case 6:
          var resultadoTop = 
  `<div class="din"><center>
  [table][tr][td class="box"]${allTopNickname[0]}:
  [b]${allTopStatus[0]}[/b]
  ${allTopNickname[1]}:
  [b]${allTopStatus[1]}[/b]
  ${allTopNickname[2]}:
  [b]${allTopStatus[2]}[/b]
  ${allTopNickname[3]}:
  [b]${allTopStatus[3]}[/b]
  ${allTopNickname[4]}:
  [b]${allTopStatus[4]}[/b]
  ${allTopNickname[5]}:
  [b]${allTopStatus[5]}[/b]
  [/td]
  [td class="box"]Hold Item 1:
  [b]${allTopItem[0]}[/b]
  Hold Item 2:
  [b]${allTopItem[1]}[/b]
  Hold Item 3:
  [b]${allTopItem[2]}[/b]
  Hold Item 4:
  [b]${allTopItem[3]}[/b]
  Hold Item 5:
  [b]${allTopItem[4]}[/b]
  Hold Item 6:
  [b]${allTopItem[5]}[/b][/td]
  [td class="box"]Trait 1:
  [b]${allTopTrait[0]}[/b]
  Trait 2:
  [b]${allTopTrait[1]}[/b]
  Trait 3:
  [b]${allTopTrait[2]}[/b]
  Trait 4:
  [b]${allTopTrait[3]}[/b]
  Trait 5:
  [b]${allTopTrait[4]}[/b]
  Trait 6:
  [b]${allTopTrait[5]}[/b][/td]
  [td]
  <div class="don">[size=10]lv${allTopLevel[0]}[/size] ${allTopNickname[0]} [color=#999999][size=16]${allTopGender[0]}[/size][/color]</div>
  <progress class="${hpColor(allTopFullHP[0], allTopCurrentHP[0])}" value="${allTopCurrentHP[0]}" max="${allTopFullHP[0]}"></progress>
  [right]${allTopCurrentHP[0]}/${allTopFullHP[0]}[/right]
  <div class="don">[size=10]lv${allTopLevel[1]}[/size] ${allTopNickname[1]} [color=#999999][size=16]${allTopGender[1]}[/size][/color]</div>
  <progress class="${hpColor(allTopFullHP[1], allTopCurrentHP[1])}" value="${allTopCurrentHP[1]}" max="${allTopFullHP[1]}"></progress>
  [right]${allTopCurrentHP[1]}/${allTopFullHP[1]}[/right]
  <div class="don">[size=10]lv${allTopLevel[2]}[/size] ${allTopNickname[2]} [color=#999999][size=16]${allTopGender[2]}[/size][/color]</div>
  <progress class="${hpColor(allTopFullHP[2], allTopCurrentHP[2])}" value="${allTopCurrentHP[2]}" max="${allTopFullHP[2]}"></progress>
  [right]${allTopCurrentHP[2]}/${allTopFullHP[2]}[/right]
  <div class="don">[size=10]lv${allTopLevel[3]}[/size] ${allTopNickname[3]} [color=#999999][size=16]${allTopGender[3]}[/size][/color]</div>
  <progress class="${hpColor(allTopFullHP[3], allTopCurrentHP[3])}" value="${allTopCurrentHP[3]}" max="${allTopFullHP[3]}"></progress>
  [right]${allTopCurrentHP[3]}/${allTopFullHP[3]}[/right]
  <div class="don">[size=10]lv${allTopLevel[4]}[/size] ${allTopNickname[4]} [color=#999999][size=16]${allTopGender[4]}[/size][/color]</div>
  <progress class="${hpColor(allTopFullHP[4], allTopCurrentHP[4])}" value="${allTopCurrentHP[4]}" max="${allTopFullHP[4]}"></progress>
  [right]${allTopCurrentHP[4]}/${allTopFullHP[4]}[/right]
  <div class="don">[size=10]lv${allTopLevel[5]}[/size] ${allTopNickname[5]} [color=#999999][size=16]${allTopGender[5]}[/size][/color]</div>
  <progress class="${hpColor(allTopFullHP[5], allTopCurrentHP[5])}" value="${allTopCurrentHP[5]}" max="${allTopFullHP[5]}"></progress>
  [right]${allTopCurrentHP[5]}/${allTopFullHP[5]}[/right]
  [/td]
  [td][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[0].toLowerCase()}.gif[/img][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[1].toLowerCase()}.gif[/img][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[2].toLowerCase()}.gif[/img][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[3].toLowerCase()}.gif[/img][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[4].toLowerCase()}.gif[/img][img]http://play.pokemonshowdown.com/sprites/xyani/${allTopNames[5].toLowerCase()}.gif[/img][/td]
  [/tr]`
          break      
        default:
            alert("Sem informações válidas!")
      }


      switch(totalBot) {
        case 1:
         var resultadoBot = `[tr][td][right][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[0].toLowerCase()}.gif[/img][/right][/td]
[td]<div class="don">[size=10]lv${allBotLevel[0]}[/size] ${allBotNickname[0]} [color=#999999][size=16]${allBotGender[0]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[0], allBotCurrentHP[0])}" value="${allBotCurrentHP[0]}" max="${allBotFullHP[0]}"></progress>
[right]${allBotCurrentHP[0]}/${allBotFullHP[0]}[/right]
[/td]
[td class="box"]Trait:
[b]${allBotTrait[0]}[/b][/td]
[td class="box"]Hold Item:
[b]${allBotItem[0]}[/b][/td]
[td class="box"]${allBotNickname[0]}:
[b]${allBotStatus[0]}[/b]
[/td]
[/tr]
[/table]
</center></div>
[b]Campo:[/b] Descrição do campo de batalha e clima.`
         
          break
        case 2:
          var resultadoBot = `
         [tr][td][right][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[0].toLowerCase()}.gif[/img][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[1].toLowerCase()}.gif[/img][/right][/td]
[td]<div class="don">[size=10]lv${allBotLevel[0]}[/size] ${allBotNickname[0]} [color=#999999][size=16]${allBotGender[0]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[0], allBotCurrentHP[0])}" value="${allBotCurrentHP[0]}" max="${allBotFullHP[0]}"></progress>
[right]${allBotCurrentHP[0]}/${allBotFullHP[0]}[/right]
<div class="don">[size=10]lv${allBotLevel[1]}[/size] ${allBotNickname[1]} [color=#999999][size=16]${allBotGender[1]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[1], allBotCurrentHP[1])}" value="${allBotCurrentHP[1]}" max="${allBotFullHP[1]}"></progress>
[right]${allBotCurrentHP[1]}/${allBotFullHP[1]}[/right]
[/td]
[td class="box"]Trait 1:
[b]${allBotTrait[0]}[/b]
Trait 2:
[b]${allBotTrait[1]}[/b]
[/td]
[td class="box"]Hold Item 1:
[b]${allBotItem[0]}[/b]
Hold Item 2:
[b]${allBotItem[1]}[/b]
[/td]
[td class="box"]${allBotNickname[0]}:
[b]${allBotStatus[0]}[/b]
${allBotNickname[1]}:
[b]${allBotStatus[1]}[/b]
[/td]
[/tr]
[/table]
</center></div>
[b]Campo:[/b] Descrição do campo de batalha e clima.`

          
          break
        case 3:
          var resultadoBot = `
         [tr][td][right][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[0].toLowerCase()}.gif[/img][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[1].toLowerCase()}.gif[/img][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[2].toLowerCase()}.gif[/img][/right][/td]
[td]<div class="don">[size=10]lv${allBotLevel[0]}[/size] ${allBotNickname[0]} [color=#999999][size=16]${allBotGender[0]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[0], allBotCurrentHP[0])}" value="${allBotCurrentHP[0]}" max="${allBotFullHP[0]}"></progress>
[right]${allBotCurrentHP[0]}/${allBotFullHP[0]}[/right]
<div class="don">[size=10]lv${allBotLevel[1]}[/size] ${allBotNickname[1]} [color=#999999][size=16]${allBotGender[1]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[1], allBotCurrentHP[1])}" value="${allBotCurrentHP[1]}" max="${allBotFullHP[1]}"></progress>
[right]${allBotCurrentHP[1]}/${allBotFullHP[1]}[/right]
<div class="don">[size=10]lv${allBotLevel[2]}[/size] ${allBotNickname[2]} [color=#999999][size=16]${allBotGender[2]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[2], allBotCurrentHP[2])}" value="${allBotCurrentHP[2]}" max="${allBotFullHP[2]}"></progress>
[right]${allBotCurrentHP[2]}/${allBotFullHP[2]}[/right]
[/td]
[td class="box"]Trait 1:
[b]${allBotTrait[0]}[/b]
Trait 2:
[b]${allBotTrait[1]}[/b]
Trait 3:
[b]${allBotTrait[2]}[/b]
[/td]
[td class="box"]Hold Item 1:
[b]${allBotItem[0]}[/b]
Hold Item 2:
[b]${allBotItem[1]}[/b]
Hold Item 3:
[b]${allBotItem[2]}[/b]
[/td]
[td class="box"]${allBotNickname[0]}:
[b]${allBotStatus[0]}[/b]
${allBotNickname[1]}:
[b]${allBotStatus[1]}[/b]
${allBotNickname[2]}:
[b]${allBotStatus[2]}[/b]
[/td]
[/tr]
[/table]
</center></div>
[b]Campo:[/b] Descrição do campo de batalha e clima.`
          break
        case 4:
          var resultadoBot = `
         [tr][td][right][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[0].toLowerCase()}.gif[/img][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[1].toLowerCase()}.gif[/img][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[2].toLowerCase()}.gif[/img][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[3].toLowerCase()}.gif[/img][/right][/td]
[td]<div class="don">[size=10]lv${allBotLevel[0]}[/size] ${allBotNickname[0]} [color=#999999][size=16]${allBotGender[0]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[0], allBotCurrentHP[0])}" value="${allBotCurrentHP[0]}" max="${allBotFullHP[0]}"></progress>
[right]${allBotCurrentHP[0]}/${allBotFullHP[0]}[/right]
<div class="don">[size=10]lv${allBotLevel[1]}[/size] ${allBotNickname[1]} [color=#999999][size=16]${allBotGender[1]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[1], allBotCurrentHP[1])}" value="${allBotCurrentHP[1]}" max="${allBotFullHP[1]}"></progress>
[right]${allBotCurrentHP[1]}/${allBotFullHP[1]}[/right]
<div class="don">[size=10]lv${allBotLevel[2]}[/size] ${allBotNickname[2]} [color=#999999][size=16]${allBotGender[2]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[2], allBotCurrentHP[2])}" value="${allBotCurrentHP[2]}" max="${allBotFullHP[2]}"></progress>
[right]${allBotCurrentHP[2]}/${allBotFullHP[2]}[/right]
<div class="don">[size=10]lv${allBotLevel[3]}[/size] ${allBotNickname[3]} [color=#999999][size=16]${allBotGender[3]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[3], allBotCurrentHP[3])}" value="${allBotCurrentHP[3]}" max="${allBotFullHP[3]}"></progress>
[right]${allBotCurrentHP[3]}/${allBotFullHP[3]}[/right]
[/td]
[td class="box"]Trait 1:
[b]${allBotTrait[0]}[/b]
Trait 2:
[b]${allBotTrait[1]}[/b]
Trait 3:
[b]${allBotTrait[2]}[/b]
Trait 4:
[b]${allBotTrait[3]}[/b]
[/td]
[td class="box"]Hold Item 1:
[b]${allBotItem[0]}[/b]
Hold Item 2:
[b]${allBotItem[1]}[/b]
Hold Item 3:
[b]${allBotItem[2]}[/b]
Hold Item 4:
[b]${allBotItem[3]}[/b]
[/td]
[td class="box"]${allBotNickname[0]}:
[b]${allBotStatus[0]}[/b]
${allBotNickname[1]}:
[b]${allBotStatus[1]}[/b]
${allBotNickname[2]}:
[b]${allBotStatus[2]}[/b]
${allBotNickname[3]}:
[b]${allBotStatus[3]}[/b]
[/td]
[/tr]
[/table]
</center></div>
[b]Campo:[/b] Descrição do campo de batalha e clima.`
          break
        case 5:
          var resultadoBot = `
         [tr][td][right][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[0].toLowerCase()}.gif[/img][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[1].toLowerCase()}.gif[/img][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[2].toLowerCase()}.gif[/img][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[3].toLowerCase()}.gif[/img][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[4].toLowerCase()}.gif[/img][/right][/td]
[td]<div class="don">[size=10]lv${allBotLevel[0]}[/size] ${allBotNickname[0]} [color=#999999][size=16]${allBotGender[0]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[0], allBotCurrentHP[0])}" value="${allBotCurrentHP[0]}" max="${allBotFullHP[0]}"></progress>
[right]${allBotCurrentHP[0]}/${allBotFullHP[0]}[/right]
<div class="don">[size=10]lv${allBotLevel[1]}[/size] ${allBotNickname[1]} [color=#999999][size=16]${allBotGender[1]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[1], allBotCurrentHP[1])}" value="${allBotCurrentHP[1]}" max="${allBotFullHP[1]}"></progress>
[right]${allBotCurrentHP[1]}/${allBotFullHP[1]}[/right]
<div class="don">[size=10]lv${allBotLevel[2]}[/size] ${allBotNickname[2]} [color=#999999][size=16]${allBotGender[2]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[2], allBotCurrentHP[2])}" value="${allBotCurrentHP[2]}" max="${allBotFullHP[2]}"></progress>
[right]${allBotCurrentHP[2]}/${allBotFullHP[2]}[/right]
<div class="don">[size=10]lv${allBotLevel[3]}[/size] ${allBotNickname[3]} [color=#999999][size=16]${allBotGender[3]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[3], allBotCurrentHP[3])}" value="${allBotCurrentHP[3]}" max="${allBotFullHP[3]}"></progress>
[right]${allBotCurrentHP[3]}/${allBotFullHP[3]}[/right]
<div class="don">[size=10]lv${allBotLevel[4]}[/size] ${allBotNickname[4]} [color=#999999][size=16]${allBotGender[4]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[4], allBotCurrentHP[4])}" value="${allBotCurrentHP[4]}" max="${allBotFullHP[4]}"></progress>
[right]${allBotCurrentHP[4]}/${allBotFullHP[4]}[/right]
[/td]
[td class="box"]Trait 1:
[b]${allBotTrait[0]}[/b]
Trait 2:
[b]${allBotTrait[1]}[/b]
Trait 3:
[b]${allBotTrait[2]}[/b]
Trait 4:
[b]${allBotTrait[3]}[/b]
Trait 5:
[b]${allBotTrait[4]}[/b]
[/td]
[td class="box"]Hold Item 1:
[b]${allBotItem[0]}[/b]
Hold Item 2:
[b]${allBotItem[1]}[/b]
Hold Item 3:
[b]${allBotItem[2]}[/b]
Hold Item 4:
[b]${allBotItem[3]}[/b]
Hold Item 5:
[b]${allBotItem[4]}[/b]
[/td]
[td class="box"]${allBotNickname[0]}:
[b]${allBotStatus[0]}[/b]
${allBotNickname[1]}:
[b]${allBotStatus[1]}[/b]
${allBotNickname[2]}:
[b]${allBotStatus[2]}[/b]
${allBotNickname[3]}:
[b]${allBotStatus[3]}[/b]
${allBotNickname[4]}:
[b]${allBotStatus[4]}[/b]
[/td]
[/tr]
[/table]
</center></div>
[b]Campo:[/b] Descrição do campo de batalha e clima.`
          break
        case 6:
          var resultadoBot = `
         [tr][td][right][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[0].toLowerCase()}.gif[/img][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[1].toLowerCase()}.gif[/img][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[2].toLowerCase()}.gif[/img][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[3].toLowerCase()}.gif[/img][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[4].toLowerCase()}.gif[/img][img]https://play.pokemonshowdown.com/sprites/xyani-back/${allBotNames[5].toLowerCase()}.gif[/img][/right][/td]
[td]<div class="don">[size=10]lv${allBotLevel[0]}[/size] ${allBotNickname[0]} [color=#999999][size=16]${allBotGender[0]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[0], allBotCurrentHP[0])}" value="${allBotCurrentHP[0]}" max="${allBotFullHP[0]}"></progress>
[right]${allBotCurrentHP[0]}/${allBotFullHP[0]}[/right]
<div class="don">[size=10]lv${allBotLevel[1]}[/size] ${allBotNickname[1]} [color=#999999][size=16]${allBotGender[1]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[1], allBotCurrentHP[1])}" value="${allBotCurrentHP[1]}" max="${allBotFullHP[1]}"></progress>
[right]${allBotCurrentHP[1]}/${allBotFullHP[1]}[/right]
<div class="don">[size=10]lv${allBotLevel[2]}[/size] ${allBotNickname[2]} [color=#999999][size=16]${allBotGender[2]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[2], allBotCurrentHP[2])}" value="${allBotCurrentHP[2]}" max="${allBotFullHP[2]}"></progress>
[right]${allBotCurrentHP[2]}/${allBotFullHP[2]}[/right]
<div class="don">[size=10]lv${allBotLevel[3]}[/size] ${allBotNickname[3]} [color=#999999][size=16]${allBotGender[3]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[3], allBotCurrentHP[3])}" value="${allBotCurrentHP[3]}" max="${allBotFullHP[3]}"></progress>
[right]${allBotCurrentHP[3]}/${allBotFullHP[3]}[/right]
<div class="don">[size=10]lv${allBotLevel[4]}[/size] ${allBotNickname[4]} [color=#999999][size=16]${allBotGender[4]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[4], allBotCurrentHP[4])}" value="${allBotCurrentHP[4]}" max="${allBotFullHP[4]}"></progress>
[right]${allBotCurrentHP[4]}/${allBotFullHP[4]}[/right]
<div class="don">[size=10]lv${allBotLevel[5]}[/size] ${allBotNickname[5]} [color=#999999][size=16]${allBotGender[5]}[/size][/color]</div>
<progress class="${hpColor(allBotFullHP[5], allBotCurrentHP[5])}" value="${allBotCurrentHP[5]}" max="${allBotFullHP[5]}"></progress>
[right]${allBotCurrentHP[5]}/${allBotFullHP[5]}[/right]

[/td]
[td class="box"]Trait 1:
[b]${allBotTrait[0]}[/b]
Trait 2:
[b]${allBotTrait[1]}[/b]
Trait 3:
[b]${allBotTrait[2]}[/b]
Trait 4:
[b]${allBotTrait[3]}[/b]
Trait 5:
[b]${allBotTrait[4]}[/b]
Trait 6:
[b]${allBotTrait[5]}[/b]
[/td]
[td class="box"]Hold Item 1:
[b]${allBotItem[0]}[/b]
Hold Item 2:
[b]${allBotItem[1]}[/b]
Hold Item 3:
[b]${allBotItem[2]}[/b]
Hold Item 4:
[b]${allBotItem[3]}[/b]
Hold Item 5:
[b]${allBotItem[4]}[/b]
Hold Item 6:
[b]${allBotItem[5]}[/b]
[/td]
[td class="box"]${allBotNickname[0]}:
[b]${allBotStatus[0]}[/b]
${allBotNickname[1]}:
[b]${allBotStatus[1]}[/b]
${allBotNickname[2]}:
[b]${allBotStatus[2]}[/b]
${allBotNickname[3]}:
[b]${allBotStatus[3]}[/b]
${allBotNickname[4]}:
[b]${allBotStatus[4]}[/b]
${allBotNickname[5]}:
[b]${allBotStatus[5]}[/b]
[/td]
[/tr]
[/table]
</center></div>
[b]Campo:[/b] Descrição do campo de batalha e clima.`
          break      
        default:
            alert("Sem informações válidas!")
      }
      
    document.getElementById("feedback").value = resultadoTop + resultadoBot;  
    clearArray(cleaningList)
    e.preventDefault();
    
}



