const fs = require("fs");

class BadCohesion {
    loadProcessAndStore() {
        var words = this.readWords();
        words = this.sortWords(words);
        this.storeWords(words); 
    }

    readWords() {
        var words = [];
        try {
            words = fs.readFileSync('./resources/words.txt').toString().split(" ");
            return words;
        }
        catch(e){
            throw new Error("Error reading file - ", e);
        }
    }

    sortWords(words) {
        words.sort();
        return words;
    }

    storeWords(words) {
        fs.writeFile('./resources/test/sorted.txt', words.join("\n"), (err) => {
            if (err) throw new Error("File write failed");
        });
    }
}

let temp = new BadCohesion();
temp.loadProcessAndStore();