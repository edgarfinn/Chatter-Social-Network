module.exports = function identifyCommandType(command) {
  var components = command.split(" ")
  var instruction = components[1];
  if (components.length === 1) {
    return "read";
  } else {
    switch (instruction) {
      case "->": return "post"
      break;
      case "wall":
      case "follows": return instruction
      break;
    }
  }
}
