function addActor() {
  var ul = document.getElementById('actors');
  var li = document.createElement('li');
  var actorIndex = 'actor'+ Number.isNaN(ul.children.length) ? 0 : ul.children.length;
  var newActorBlock = createActorBlock(actorIndex);

  li.setAttribute('id', 'actorID_' + actorIndex);
  li.appendChild(newActorBlock);
  ul.appendChild(li);
  sortByInitiative();
}



function createActorBlock(actorIndex) {
  console.log("building " + actorIndex);
  /*
  creates the following
    <span>
      <input type="checkbox" name="select" value="">
      <input type="number" name="initiative" value="">

      <input type="text" name="name" value="">
      <input type="number" name="hp" value="">
      <input type="number" name="hpchange" value="">
      <button type="button" name="damage" onClick='damage(actorIndex)'>damage</button>
      <button type="button" name="heal" onClick='heal(actorIndex)'>heal</button>
    </span>
  */
  var actor = document.createElement('span');
  actor.setAttribute('id', actorIndex);
  var pc = document.createElement('input');
  pc.setAttribute('type','checkbox');
  pc.setAttribute('name','pc');
  var initiative = document.createElement('input');
  initiative.setAttribute('type','number');
  initiative.setAttribute('name','initiative');
  var name = document.createElement('input');
  name.setAttribute('type','text');
  name.setAttribute('name','name');
  var hp = document.createElement('input');
  hp.setAttribute('type','number');
  hp.setAttribute('name','hp');
  hp.setAttribute('id', actorIndex + 'hp');
  var hpChange = document.createElement('input');
  hpChange.setAttribute('type','number');
  hpChange.setAttribute('name','hpChange');
  hp.setAttribute('id', actorIndex + 'hpChange');
  var damage = document.createElement('button');
  damage.setAttribute('name','damage');
  damage.appendChild(document.createTextNode('damage'));
  damage.setAttribute('onClick', 'damage("' + actorIndex + '")');
  var heal = document.createElement('button');
  heal.appendChild(document.createTextNode('heal'));
  heal.setAttribute('name','heal');
  heal.setAttribute('onClick', 'heal("' + actorIndex + '")');

  actor.appendChild(pc);
  actor.appendChild(initiative);
  actor.appendChild(name);
  actor.appendChild(hp);
  actor.appendChild(hpChange);
  actor.appendChild(damage);
  actor.appendChild(heal);

  return actor;
}

function sortByInitiative() {
  //sort actors in initiative order
}

function heal(actor) {
  console.log("in heal for " + actor);
  // get actor
  var actorElm = document.getElementById(actor);
  // get hp
  var hp = document.getElementById(actor + "hp").value;
  console.log("current hp: " + hp);
  // get hpChange
  var hpChange = document.getElementById(actor + "hpChange").value
  console.log("damage for: " + hpChange);
  // set hpChange to 0
  document.getElementById(actor + "hpChange").value = 0;
  //set hp + hpChange
  document.getElementById(actor + "hp").value = hp  + hpChange;
  updateHPIndicator(actor);
}

function damage(actor) {
  console.log("in damage for " + actor);
  // get actor
  var actorElm = document.getElementById(actor);
  // get hp
  var hp = document.getElementById(actor + "hp").value;
  console.log("current hp: " + hp);
  // get hpChange
  var hpChange = document.getElementById(actor + "hpChange").value
  console.log("damage for: " + hpChange);
  // set hpChange to 0
  document.getElementById(actor + "hpChange").value = 0;
  //set hp + hpChange
  document.getElementById(actor + "hp").value = hp - hpChange;
  updateHPIndicator(actor);
}

function updateHPIndicator(actorIndex){}

function removeSelectedActors(){}

function resetBoard(){}

function toJSON(){}
