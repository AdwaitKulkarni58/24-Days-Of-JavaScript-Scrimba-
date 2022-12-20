import podcasts from "./data.js";

function getFreePodcasts(data){
   let freePodcasts = data.filter(podcast => podcast.paid == false);
   return freePodcasts.map(podcast => [
       {
           title: podcast.title,
           rating: podcast.rating,
           paid: podcast.paid
       }
   ])
}

console.log(getFreePodcasts(podcasts));
