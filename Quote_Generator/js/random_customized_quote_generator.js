var wisdomQuote = [" The fool wonders, the wise man asks - Benjamin Disraeli",
                    "Knowledge speaks, but wisdom listens - Jimi Hendrix",
                   "Good judgment comes from experience, and a lot of that comes from bad judgment. - Will Rogers",
                   "Honesty is the first chapter in the book of wisdom. - Thomas Jefferson",
                   "Wisdom comes from experience. Experience is often a result of lack of wisdom. - Terry Pratchett",
                  "Wisdom is the knowledge of good and evil, not the strength to choose between the two - John Cheever", "One part of wisdom is knowing what you don’t need anymore and letting it go. - Jane Fonda", "Pain and foolishness lead to great bliss and complete knowledge, for Eternal Wisdom created nothing under the sun in vain. - Kahlil Gibran", "Follow your instincts. That’s where true wisdom manifests itself. - Oprah Winfrey", "If the fool would persist in his folly he would become wise. - William Blake", "Wisdom begins at the end. - Daniel Webster"]


var happinessQuote = ["Don’t cry because it’s over, smile because it happened. - Ludwig Jacobowski", "Doing what you like is freedom. Liking what you do is happiness. - Frank Tyger", "Life is 10 percent what happens to you and 90 percent how you respond to it. - Lou Holtz", "True happiness arises, in the first place, from the enjoyment of one’s self. - Joseph Addison", "Happiness, not in another place but this place…not for another hour, but this hour. - Walt Whitman", "Success is getting what you want. Happiness is wanting what you get. - Dale Carnegie", "If you aren’t grateful for what you already have, what makes you think you would be happy with more. - Roy T. Bennett", "Happiness is not something ready made. It comes from your own actions. - Dalai Lama", "The biggest adventure you can take is to live the life of your dreams. - Oprah Winfrey", "Indeed, man wishes to be happy even when he so lives as to make happiness impossible. - St. Augustine", "Be happy for this moment. This moment is your life. - Omar Khayyam"]


var beginning = ["this", "That", "The"];

var middle = ["dog", "lion", "cat", "hourse" , "tiger", ""];

var end = ["is brave", "is strong", "is happy","is fast" , "is clever"];

function chooseGenratorMethod() {

    var genrator = prompt("Enter your generator method! \n 1 : Random Genrator. \n 2 : Customized method. \n 0 : Quit");
    methodSelect(genrator);
}

function methodSelect(genrator) {


    switch (genrator) {

        case "1":
            console.log ("                            Random Quote Method");
            chooseRandom();
            break;

        case "2":
            chooseQuoteType();
            break;


        case "0":
            break;

        default:
            alert("you have to enter number between 0 and 2 only.");
            chooseGenratorMethod();

            break;

    };

}

function chooseRandom() {

    var choose = prompt("Enter your choice! \n 1 : Generate quote \n 0 : Quit."); 
    randomSelect(choose);

}


function randomSelect(choose) {

    switch (choose) {

        case "1":
            var result = randomItem(beginning) + " " + randomItem(middle) + " " + randomItem(end) + ".";
            console.log(result);
            chooseRandom();
            break;
            

        case "0":
            chooseGenratorMethod();
            break;
            
        default:
            alert("you have to enter 1 or 0 only.")
            chooseRandom();
            break;

    };
}

function chooseQuoteType() {

    var type = prompt("Enter your quote type! \n 1 : Wisdom Quotes \n 2 : Happiness quote. \n 0 : Quit");
    customizedSelect(type);

}

function chooseQuoteNumber(quoteType) {

    var number = prompt("Enter number of quotes betweein 1 to 5 \n 0 : Quit");
    if (number < 1 || number > 5) {
        alert("Number shoub be between 1 and 5 ");
        chooseQuoteNumber(quoteType);

    } else {
        genrate(number, quoteType);
    }
}

function genrate(number, quoteType) {
   console.log("                            Customized Quote Method ");
    if (quoteType == "1") {
    
        console.log("                            From Wisdom Quotes :")
    }
    else if (quoteType == "2"){
        
        console.log("                            From Happiness Quotes :")
    }
    for (var i = 0; i < number; i++) {
        if (quoteType == "1") {

            console.log((i + 1) + " - " + randomItem(wisdomQuote));
        } else if (quoteType == "2") {

            console.log((i + 1) + " - " + randomItem(happinessQuote));
        }
    }
}

function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function customizedSelect(quoteType) {

    switch (quoteType) {

        case "1":
            chooseQuoteNumber(quoteType);
            chooseQuoteType() 
            break;

        case "2":
            chooseQuoteNumber(quoteType);
            chooseQuoteType() 
            break;


        case "0":
            chooseGenratorMethod();
            break;

        default:
            alert("you have to enter number between 0 and 2 only.");
            chooseQuoteType();

            break;

    };
}





chooseGenratorMethod();