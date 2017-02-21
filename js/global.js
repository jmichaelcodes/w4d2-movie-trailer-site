// 1. Make a class called Trailer that extends Movie
class Trailer extends Movie {

    // 2. Inside the class, add a constructor function that takes two arguments, a name and an id
    constructor(movieName, movieID) {

        // 3. Call the parent constructor function using the super function
        super();

        // 4. Assign a name and id   property to the incoming name and id arguments
        this.name = movieName;
        this.id = movieID;

        // 5. This method will show the button on the screen, no changes necessary
        this.renderButton()
    }
}

// 6. Create four instances of the Trailer class, passing in the name of a film as the first argument and its corresponding YouTube ID as the second argument
 var powerRangers = new Trailer('Power Rangers', '5kIe6UZHSXw');
 var reservoirDogs = new Trailer('Reservoir Dogs', 'vayksn4Y93A');
 var usualSuspects = new Trailer('Usual Suspects', 'oiXdPolca5w');
 var theMartian = new Trailer('The Martian', 'ej3ioOneTy8');

