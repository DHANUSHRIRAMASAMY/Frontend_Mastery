interface Movie {
  id: number;
  title: string;
  genre: string;
  duration: number;
  ticketPrice: number;
  isAvailable: boolean;
}

const movie1: Movie = {
  id: 1,
  title: "Leo",
  genre: "Action",
  duration: 165,
  ticketPrice: 200,
  isAvailable: true
};

const movie2: Movie = {
  id: 2,
  title: "Jailer",
  genre: "Drama",
  duration: 170,
  ticketPrice: 180,
  isAvailable: false
};

const movies: Movie[] = [movie1, movie2];

function displayMovie(movie: Movie): void {
  console.log("Movie ID:", movie.id);
  console.log("Title:", movie.title);
  console.log("Genre:", movie.genre);
  console.log("Duration:", movie.duration, "minutes");
  console.log("Ticket Price: ₹", movie.ticketPrice);
  console.log("Available:", movie.isAvailable);
  console.log("------------------------");
}

movies.forEach(displayMovie);

function bookTicket(movie: Movie): void {
  if (movie.isAvailable) {
    console.log('Ticket booked successfully for {movie.title}');
  } else {
    console.log('{movie.title} is currently unavailable.');
  }
}

bookTicket(movie1);
bookTicket(movie2);