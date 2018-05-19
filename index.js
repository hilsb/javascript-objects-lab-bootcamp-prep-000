function createRecipe(key, value) {
  return createRecipe;
}

var recipe = object(key, value);

function updateObjectWithKeyAndValue(object, key, value) {
  var recipe = {tortillas: "corn", tortillas2: "flour" };
  return recipe;
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var object = {key: value};
  recipe[key] = value;
  return recipe;
}

function deleteFromObjectByKey(object, key) {
  delete recipe[key];
  return recipe;
}

function destructivelyDeleteFromObjectByKey(object, key) {
  var obj = {[key]: value};
  return obj;
}
