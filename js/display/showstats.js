function getStatsText(stats, weapon) {
  /* text =
    "<br><b>Defensive Stats</b>"
    + "<br>Health: " + Math.round(stats["HEALTH"])
    + "<br> Defense: " + Math.round(stats["DEFENSE"])
    + "<br> EHP: " + Math.round(stats["HEALTH"] * (1 + (stats["DEFENSE"] / 100)))
    + "<br>"
    + "<s>------------------------------------</s><br>"
    + "<br><b>Melee Stats</b>"
    + "<br> Damage: " + Math.round(stats["DAMAGE"])
    + "<br> Strength: " + Math.round(stats["STRENGTH"])
    + "<br> Critical Damage: " + Math.round(stats["CRITICAL_DAMAGE"]) + "%"
    + "<br> Critical Chance: " + Math.round(stats["CRITICAL_CHANCE"]) + "%"
    + "<br> Attack Speed: " + Math.round(stats["ATTACK_SPEED"]) + "%"
    + "<br> Estimate Average Melee DPS: " + Math.round((Math.round(calcDamage(stats, 0, (stats["ADDITIVE_DAMAGE"] / 100)))))
    + "<br><s>------------------------------------</s><br>"
    + "<br><b>Misc. Stats</b>"
    + "<br>Walk Speed: " + Math.round(stats["WALK_SPEED"]) + "%"
    + "<br>Intelligence: " + Math.round(stats["INTELLIGENCE"])
  if (stats["WEAPON_ABILITY_DAMAGE"] > 0) {
    text = text
      + "<br><s>------------------------------------</s><br>"
      + "<br><b>Magic Stats</b>"
      + "<br>Ability Damage Base: " + Math.round(stats["WEAPON_ABILITY_DAMAGE"])
      + "<br>Ability Damage Scaling: " + weapon["ability_damage_scaling"]
      + "<br>Estimate Final Ability Damage: " + Math.round(((stats["WEAPON_ABILITY_DAMAGE"] * 1 + (stats["ABILITY_DAMAGE_PERCENT"] / 100)) * ((1 + (stats["INTELLIGENCE"] / 100)) * weapon["ability_damage_scaling"]) * 1 * 1))
    console.log(weapon["ability_damage_scaling"] + " scaling")
  }
  if (stats["MINING_SPEED"] > 0) {
    text = text
      + "<br>Mining Speed: " + Math.round(stats["MINING_SPEED"])
      + "<br>Mining Fortune: " + Math.round(stats["MINING_FORTUNE"])
  }
  text = text
    + "<br>"
    + "Wither Impact"
    + "<br>"
    + "Total Damage: " + Math.round(10000 * ((1 + (stats["INTELLIGENCE"] / 100) * 0.3) * 1 * 1)) + "<br>"
    + "Total Shield: " + "Coming Soon" */

  let ability_damage = Math.round(((stats["WEAPON_ABILITY_DAMAGE"] * 1 + (stats["ABILITY_DAMAGE_PERCENT"] / 100)) * ((1 + (stats["INTELLIGENCE"] / 100)) * weapon["ability_damage_scaling"]) * 1 * 1));
  let text = `
    <div id="defensive-stats" class="stat-boxed-div">
      <b>Defensive Stats</b>
      <br>
      <br>Health: ${Math.round(stats["HEALTH"])}
      <br>Defense: ${Math.round(stats["DEFENSE"])}
      <br>EHP: ${Math.round(stats["HEALTH"] * (1 + (stats["DEFENSE"] / 100)))}
    </div>
    <br>
    <div id="melee-stats" class="stat-boxed-div">
      <b>Melee Stats</b>
      <br>
      <br>Damage: ${Math.round(stats["DAMAGE"])}
      <br>Strength: ${Math.round(stats["STRENGTH"])}
      <br>Critical Damage: ${Math.round(stats["CRITICAL_DAMAGE"])}
      <br>Critical Chance: ${Math.round(stats["CRITICAL_CHANCE"])}
    </div>
    <br>
  `
  if(stats["WEAPON_ABILITY_DAMAGE"] > 0) {
     text = text + ` 
      <div id="magic-stats" class="stat-boxed-div">
       <b>Magic Stats</b>
       <br>
       <br>Base Damage: ${Math.round(stats["WEAPON_ABILITY_DAMAGE"])}
       <br>Ability Scaling: ${Math.round(weapon["ability_damage_scaling"])}
       <br>Ability Damage: ${Math.round(ability_damage)}
     </div>
     <br>`;
  }
  if(stats["MINING_SPEED"] > 0) {
    text = text + `
    <div id="mining-stats" class="stat-boxed-div">
      <b>Mining Stats</b>
      <br>
      <br>Mining Speed: ${stats["MINING_SPEED"]}
      <br>Mining Fortune: ${stats["MINING_FORTUNE"]}
    </div>
    <br>
    `;
  }
  text = text + `
    <div id="wither-impact" class="stat-boxed-div">
      <b>Wither Impact</b>
      <br>
      <br>Damage: ${Math.round(10000 * ((1 + (stats["INTELLIGENCE"] / 100) * 0.3) * 1 * 1))}
      <br>Shield: Coming soon.
    </div>
    <br>
  `;
  
  document.getElementById("stats").innerHTML = text
}
