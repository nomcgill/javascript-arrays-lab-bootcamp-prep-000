var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
    kittens.push(name)
    return kittens
}

function destructivelyPrependKitten(name){
kittens.unshift(name);
return kittens;
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return kittens;
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens;
}

function appendKitten(name){
  return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}

var kittens = ["Milo", "Otis", "Garfield"];

function removeLastKitten(name){
  kittens.slice(-1)
  return kittens
}

function removeFirstKitten(){
  kittens.slice()
  return kittens
}