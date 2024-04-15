//Exercise 1: Get the array of all Artists.

function getAllArtists(songs){   
    const result= songs.map(song => song.artist);
    console.log(result);
    return result;
    
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(songs){
    const result2 = (artistName) => songs.filter(song => song.artist === artistName);
    console.log(result2);
    return result2;
};

//Exercise 3: Alphabetic order by title
function orderAlphabetically(){
    const result3 = () => songs.sort((a, b) => a.title.localeCompare(b.title));
    console.log(result3);
    return result3;
};

//Exercise 4: Order by year, ascending
function orderByYear(){
    const result4 = () => songs.sort((a, b) => a.year - b.year);
    console.log(result4);
    return result4;
};

//Exercise 5: Filter songs by genre
function songsByGenre() {
    //Write your code here
};

//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds() {
    //Write your code here
};

//Exercise 7: Get the longest song
function getLongestSong(){
    //Write your code here
};

//Exercise 8: Get the shortest song
//Write the getShortestSong() function




export { getAllArtists, getSongsFromArtist, orderAlphabetically, orderByYear, songsByGenre, minutsToSeconds, getLongestSong };
