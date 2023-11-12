const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {
// 7 tests here!
it("constructor sets position and default values for mode and generatorWatts",function(){
  let testPosition = new Rover(98382, 'NORMAL', 110);
  expect(testPosition).toBeInstanceOf(Rover);
  expect(testPosition.position).toEqual(98382);
  //expect(testPosition.mode).toEqual('NORMAL');
  //expect(testPosition.generatorWatts).toEqual(110);
});
it("response returned by receiveMessage contains the name of the message", function(){

})

});
