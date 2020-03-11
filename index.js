function updateObjectWithKeyAndValue() {
  return Object.assign({}, object, {[key: value]});
}

function destructivelyUpdateObjectWithKeyAndValue(){
  obj[key] = value;
  return obj;
}
