# Exporting a Godot game

When exporting a game, you will have to update some of the generated code to get it to work.

1. Open the Game.js file and save it to auto-format the file
2. Search for "findEventTarget"
3. Replace the `target = maybeCStringToJsString(target);` line with:
   1. `target = '#wrap canvas';`;
