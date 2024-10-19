const { genius } = require("../geniusAxios");
import getLyrics from "genius-lyrics-api/lib/getLyrics";
import extractLyrics from "genius-lyrics-api/lib/utils/extractLyrics";
class Genius {
  static async getSongs(song) {
    const res = await genius.get("/search", { params: { q: song } });
    const data = res.data.response.hits;

    data.filter((hit) => {
      if (hit.type == "song") {
        return true;
      } else {
        return false;
      }
    });

    return data;
  }
  
  static processLyrics(lyrics){
    lyrics = lyrics.replace(/\n+/g, " ").replace(/\[.*?\]/g, " ").replace(/\t+/g, "").trim().replace(/[^\w\s]/gi, '').toLowerCase()
    
    return lyrics
  }

  static calculateAvgWordLength(lyrics){
    const words = lyrics.split(" ")
    let total = 0
    for(let i = 0; i < words.length; i++){
      total += words[i].length
    }
    return total/words.length
  }

  static countWords(lyrics){
    return lyrics.split(" ").length
  }

  static async getSongDetails(id){
    const res = await genius.get('/songs/'+id)
    const song = res.data.response.song
    let lyrics = await extractLyrics(song.url)
    lyrics = Genius.processLyrics(lyrics)
    song["lyrics"] = lyrics;
    return song;
  }
}

export default Genius;
