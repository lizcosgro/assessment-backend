module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["All your hard work will soon pay off.", "A pleasant surprise is waiting for you.", "Adventure can be real happiness.", "Courtesy is contagious.", "Do not make extra work for yourself."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getQuote: (req, res) => {
        const quotes = ["Be yourself; everyone else is already taken.", "Be the change that you wish to see in the world." , "It is never too late to be what you might have been.", "Do what you can, with what you have, where you are."];
      
        // choose random quote
        let randomIndex = Math.floor(Math.random() * quotes.length);
        let randomQuotes = quotes[randomIndex];
      
        res.status(200).send(randomQuotes);
    },

    getEmotions: (req, res) => {
        const emotions = ["You look great today!", "I appreciate you!", "You deserve a hug right now", "You are wonderful", "You are a gift to those around you"];
      
        // choose random quote
        let randomIndex = Math.floor(Math.random() * emotions.length);
        let randomEmotions = emotions[randomIndex];
      
        res.status(200).send(randomEmotions);
    }

};
