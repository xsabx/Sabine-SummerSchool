class ProgrammingLanguages {
  constructor(name, type, releaseYear, stillGetUpdates) {
    this.name = name;
    this.type = type;
    this.releaseYear = releaseYear;
    this.stillGetUpdates = stillGetUpdates;
  }
  stillGetUpdates() {
    return (this.stillGetUpdates = true);
  }
  generalInfo() {
    console.log(`Languge ${this.name} is made in ${this.releaseYear}. `);
  }
}

module.exports = ProgrammingLanguages;

new ProgrammingLanguages("C++", "C type", 1950, true).generalInfo();
