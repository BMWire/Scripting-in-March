const seasons = ["S01", "S02", "S03", "S04"];
const episodes = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
function episodeChooser ()
{
    let chosen = "";    
    const ranEpisode = Math.floor(Math.random()*episodes.length);
    const ranSeason = Math.floor(Math.random()*seasons.length);
    chosen = seasons[ranSeason] + "." + ranEpisode;
    console.log(chosen);
}

episodeChooser();
