class Rover {// Write code here!
   constructor(position, mode = 'NORMAL', generatorWatts = 110){
      this.positon = position;
      this.mode = mode;
      this.generatorWatts= generatorWatts;
   }

}

module.exports = Rover;