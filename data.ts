import { Film, Director, Actor, Genre } from "types";

export const films: Film[] = [
  {
    id: 1,
    title: "Babylon",
    slug: "babylon",
    synopsis:
      "A tale of outsized ambition and outrageous excess, tracing the rise and fall of multiple characters during an era of unbridled decadence and depravity in early Hollywood.",
    year: 2023,
    directors: [
      {
        id: 1,
        name: "Damien Chazelle",
        slug: "damien-chazelle",
        films: [],
        thumbnail: "",
        biography: "",
        tmdb_link: "https://www.themoviedb.org/person/136495/",
      },
    ],
    cast: ["margot-robbie", "brad-pitt"],
    reviews: [
      {
        id: 1,
        user: {
          id: 1,
          username: "tyler",
          email: "email",
          password: "1234",
          avatar: "avatar.jpg",
          reviews: [],
        },
        publish_date: Date.now(),
        text: "in the name of the father (boogie nights), the son (the wolf of wall street), and the holy spirit (babylon)",
        likes: 7336,
        replies: [],
        punctuation: 5,
      },
      {
        id: 2,
        user: {
          id: 1,
          username: "tyler",
          email: "email",
          password: "1234",
          avatar: "avatar.jpg",
          reviews: [],
        },
        publish_date: Date.now(),
        text: "had such a great time. felt like i got cornered at a party by the lamest film major but was just drunk enough after the first 20 minutes to hear him out. tom cruise and brad pitt made two VERY different movies this year where they acknowledge their own legacy in the industry…and i don’t know how to expand on that but one being a record-breaking box office smash and the other being one of the biggest flops of the year is kinda funny. but i like pitt’s approach more, enough to forget bullet train ever happened. such a sequel to la la land it almost feels like that movie should be the cute pixar short that plays before this one. one of those movies where i’m gonna wake up tomorrow and be like “what happened last night?” i’m just rambling now.",
        likes: 300,
        replies: [],
        punctuation: 3,
      },
      {
        id: 3,
        user: {
          id: 1,
          username: "homero",
          email: "email",
          password: "1234",
          avatar: "avatar.jpg",
          reviews: [],
        },
        publish_date: Date.now(),
        text: "in the name of the father (boogie nights), the son (the wolf of wall street), and the holy spirit (babylon)",
        likes: 5000,
        replies: [],
        punctuation: 5,
      },
      {
        id: 4,
        user: {
          id: 1,
          username: "pepe",
          email: "email",
          password: "1234",
          avatar: "avatar.jpg",
          reviews: [],
        },
        publish_date: Date.now(),
        text: "I thoroughly enjoyed this movie despite some negative reviews.",
        likes: 7336,
        replies: [],
        punctuation: 5,
      },
    ],
    thumbnail: "babylon.jpg",
    background_thumbnail: "babylon-background.jpg",
    imdb_link: "http://www.imdb.com/title/tt10640346/maindetails",
    tmdb_link: "https://www.themoviedb.org/movie/615777/",
    runtime: 189,
    genres: [
      {
        id: 1,
        name: "Comedy",
        slug: "comedy",
      },
      {
        id: 2,
        name: "Drama",
        slug: "drama",
      },
    ],
    release: "19 January, 2023",
  },
  {
    id: 2,
    title: "Avatar: The Way of Water",
    slug: "avatar-the-way-of-water",
    synopsis:
      "Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na'vi race to protect their home.",
    year: 2022,
    directors: [
      {
        id: 2,
        name: "James Cameron",
        slug: "james-cameron",
        films: [],
        thumbnail: "",
        biography: "",
        tmdb_link: "https://www.themoviedb.org/person/2710/",
      },
    ],
    cast: [],
    reviews: [],
    thumbnail: "avatar-the-way-of-water.jpg",
    background_thumbnail: "avatar-the-way-of-water-background.png",
    imdb_link: "http://www.imdb.com/title/tt1630029/maindetails",
    tmdb_link: "https://www.themoviedb.org/movie/76600/",
    runtime: 192,
    genres: [
      {
        id: 3,
        name: "Science-fiction",
        slug: "science-fiction",
      },
      {
        id: 4,
        name: "Action",
        slug: "action",
      },
      {
        id: 5,
        name: "Adventure",
        slug: "adventure",
      },
    ],
    release: "16 Decemeber, 2022",
  },
  {
    id: 3,
    title: "The Menu",
    slug: "the-menu",
    synopsis:
      "A couple travels to a coastal island to eat at an exclusive restaurant where the chef has prepared a lavish menu, with some shocking surprises.",
    year: 2022,
    directors: [
      {
        id: 3,
        name: "Mark Mylod",
        slug: "mark-mylod",
        films: [],
        thumbnail: "",
        biography: "",
        tmdb_link: "https://www.themoviedb.org/person/57199/",
      },
    ],
    cast: ["ralph-fiennes", "anya-taylor-joy"],
    reviews: [],
    thumbnail: "the-menu.jpg",
    background_thumbnail: "the-menu-background.jpg",
    imdb_link: "http://www.imdb.com/title/tt9764362/maindetails",
    tmdb_link: "https://www.themoviedb.org/movie/593643/",
    runtime: 107,
    genres: [
      {
        id: 6,
        name: "Thriller",
        slug: "thriller",
      },
      {
        id: 7,
        name: "Horror",
        slug: "horror",
      },
    ],
    release: "18 November, 2022",
  },
  {
    id: 4,
    title: "Puss In Boots: The Last Wish",
    slug: "puss-in-cat-the-last-wish",
    synopsis:
      "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    year: 2023,
    directors: [
      {
        id: 4,
        name: "Joel Crawford",
        slug: "joel-crawford",
        films: [],
        thumbnail: "",
        biography: "",
        tmdb_link: "https://www.themoviedb.org/person/1450348/",
      },
    ],
    cast: [],
    reviews: [],
    thumbnail: "puss-in-boots.jpg",
    background_thumbnail: "puss-in-boots-the-last-wish-background.jpg",
    imdb_link: "http://www.imdb.com/title/tt3915174/maindetails",
    tmdb_link: "https://www.themoviedb.org/movie/315162/",
    runtime: 103,
    genres: [
      {
        id: 1,
        name: "Comedy",
        slug: "comedy",
      },
      {
        id: 5,
        name: "Adventure",
        slug: "adventure",
      },
      {
        id: 8,
        name: "Animation",
        slug: "animation",
      },
      {
        id: 9,
        name: "Family",
        slug: "family",
      },
      {
        id: 10,
        name: "Fantasy",
        slug: "fantasy",
      },
    ],
    release: "5 January, 2023",
  },
  {
    id: 5,
    title: "Top Gun: Maverick",
    slug: "top-gun-maverik",
    synopsis:
      "After more than thirty years of service as one of the Navy’s top aviators, and dodging the advancement in rank that would ground him, Pete “Maverick” Mitchell finds himself training a detachment of TOP GUN graduates for a specialized mission the likes of which no living pilot has ever seen. Facing an uncertain future and confronting the ghosts of his past, Maverick is drawn into a confrontation with his own deepest fears, culminating in a mission that demands the ultimate sacrifice from those who will be chosen to fly it.",
    year: 2022,
    directors: [
      {
        id: 5,
        name: "Joseph Kosinski",
        slug: "joseph-kosinski",
        films: [],
        thumbnail: "",
        biography: "",
        tmdb_link: "https://www.themoviedb.org/person/86270/",
      },
    ],
    cast: ["tom-cruise", "miles-teller"],
    reviews: [],
    thumbnail: "top-gun-maverick.jpg",
    background_thumbnail: "top-gun-maverick-background.jpg",
    imdb_link: "http://www.imdb.com/title/tt1745960/maindetails",
    tmdb_link: "https://www.themoviedb.org/movie/361743/",
    runtime: 131,
    genres: [
      {
        id: 2,
        name: "Drama",
        slug: "drama",
      },
      {
        id: 4,
        name: "Action",
        slug: "action",
      },
    ],
    release: "26 May, 2022",
  },
  {
    id: 6,
    title: "Knock at the Cabin",
    slug: "knock-at-the-cabin",
    synopsis:
      "While vacationing at a remote cabin, a young girl and her parents are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
    year: 2023,
    directors: [
      {
        id: 6,
        name: "M. Night Shyamalan",
        slug: "m-night-shyamalan",
        films: [],
        thumbnail: "",
        biography: "",
        tmdb_link: "https://www.themoviedb.org/person/11614/",
      },
    ],
    cast: [],
    reviews: [],
    thumbnail: "knock-at-the-cabin.jpg",
    background_thumbnail: "knock-at-the-cabin-background.jpg",
    imdb_link: "http://www.imdb.com/title/tt15679400/maindetails",
    tmdb_link: "https://www.themoviedb.org/movie/631842/",
    runtime: 100,
    genres: [
      {
        id: 6,
        name: "Thriller",
        slug: "thriller",
      },
      {
        id: 7,
        name: "Horror",
        slug: "horror",
      },
      {
        id: 11,
        name: "Mystery",
        slug: "mystery",
      },
    ],
    release: "3 February, 2023",
  },
  {
    id: 7,
    title: "Once Upon a Time... in Hollywood",
    slug: "once-upon-a-time-in-hollywood",
    synopsis:
      "Los Angeles, 1969. TV star Rick Dalton, a struggling actor specializing in westerns, and stuntman Cliff Booth, his best friend, try to survive in a constantly changing movie industry. Dalton is the neighbor of the young and promising actress and model Sharon Tate, who has just married the prestigious Polish director Roman Polanski…",
    year: 2019,
    directors: [
      {
        id: 7,
        name: "Quentin Tarantino",
        slug: "quentin-tarantino",
        films: [],
        thumbnail: "",
        biography: "",
        tmdb_link: "https://www.themoviedb.org/person/138/",
      },
    ],
    cast: ["margot-robbie", "brad-pitt"],
    reviews: [],
    thumbnail: "once-upon-a-time-in-hollywood.jpg",
    background_thumbnail: "once-upon-a-time-in-hollywood-background.jpg",
    imdb_link: "http://www.imdb.com/title/tt7131622/maindetails",
    tmdb_link: "https://www.themoviedb.org/movie/466272/",
    runtime: 162,
    genres: [
      {
        id: 6,
        name: "Thriller",
        slug: "thriller",
      },
      {
        id: 1,
        name: "Comedy",
        slug: "comedy",
      },
      {
        id: 2,
        name: "Drama",
        slug: "drama",
      },
    ],
    release: "22 August, 2019",
  },
  {
    id: 8,
    title: "The Batman",
    slug: "the-batman",
    synopsis:
      "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    year: 2022,
    directors: [
      {
        id: 8,
        name: "Matt Reeves",
        slug: "matt-reeves",
        films: [],
        thumbnail: "",
        biography: "",
        tmdb_link: "https://www.themoviedb.org/person/32278/",
      },
    ],
    cast: [],
    reviews: [],
    thumbnail: "the-batman.jpg",
    background_thumbnail: "the-batman-background.jpeg",
    imdb_link: "http://www.imdb.com/title/tt1877830/maindetails",
    tmdb_link: "https://www.themoviedb.org/movie/414906/",
    runtime: 177,
    genres: [
      {
        id: 6,
        name: "Thriller",
        slug: "thriller",
      },
      {
        id: 11,
        name: "Mystery",
        slug: "mystery",
      },
      {
        id: 12,
        name: "Crime",
        slug: "crime",
      },
    ],
    release: "2 March, 2022",
  },
  {
    id: 9,
    title: "Thor: Love and Thunder",
    slug: "thor-love-and-thunder",
    synopsis:
      "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now inexplicably wields Mjolnir as the Mighty Thor. Together, they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
    year: 2022,
    directors: [
      {
        id: 9,
        name: "Taika Waititi",
        slug: "taika-waititi",
        films: [],
        thumbnail: "",
        biography: "",
        tmdb_link: "https://www.themoviedb.org/person/55934/",
      },
    ],
    cast: [],
    reviews: [],
    thumbnail: "thor-love-and-thunder.jpg",
    background_thumbnail: "thor-love-and-thunder-background.jpg",
    imdb_link: "http://www.imdb.com/title/tt10648342/maindetails",
    tmdb_link: "https://www.themoviedb.org/movie/616037/",
    runtime: 119,
    genres: [
      {
        id: 1,
        name: "Comedy",
        slug: "comedy",
      },
      {
        id: 4,
        name: "Action",
        slug: "action",
      },
      {
        id: 10,
        name: "Fiction",
        slug: "fiction",
      },
    ],
    release: "8 July, 2022",
  },
  {
    id: 10,
    title: "Plane",
    slug: "plane-2023",
    synopsis:
      "After a heroic job of successfully landing his storm-damaged aircraft in a war zone, a fearless pilot finds himself between the agendas of multiple militias planning to take the plane and its passengers hostage.",
    year: 2023,
    directors: [
      {
        id: 10,
        name: "Jean-François Richet",
        slug: "jean-françois-richet",
        films: [],
        thumbnail: "jean-françois-richet.jpg",
        biography:
          "Jean-Francois Richet is a French screenwriter, director, and producer, born on July 2, 1966 in Paris. He grew up in Meaux, a suburb east of Paris.",
        tmdb_link: "https://www.themoviedb.org/person/58324/",
      },
    ],
    cast: [],
    reviews: [],
    thumbnail: "plane-2023.jpg",
    background_thumbnail: "plane-2023-background.jpg",
    imdb_link: "http://www.imdb.com/title/tt5884796/maindetails",
    tmdb_link: "https://www.themoviedb.org/movie/646389/",
    runtime: 107,
    genres: [
      {
        id: 5,
        name: "Adventure",
        slug: "adventure",
      },
      {
        id: 4,
        name: "Action",
        slug: "action",
      },
      {
        id: 6,
        name: "Thriller",
        slug: "thriller",
      },
    ],
    release: "27 January, 2023",
  },
  {
    id: 11,
    title: "Top Gun",
    slug: "top-gun",
    synopsis:
      "For Lieutenant Pete ‘Maverick’ Mitchell and his friend and co-pilot Nick ‘Goose’ Bradshaw, being accepted into an elite training school for fighter pilots is a dream come true. But a tragedy, as well as personal demons, will threaten Pete’s dreams of becoming an ace pilot.",
    year: 1986,
    directors: [
      {
        id: 11,
        name: "Tony Scott",
        slug: "tony-scott",
        films: [],
        thumbnail: "tony-scott.jpg",
        biography:
          "Jean-Francois Richet is a French screenwriter, director, and producer, born on July 2, 1966 in Paris. He grew up in Meaux, a suburb east of Paris.",
        tmdb_link: "https://www.themoviedb.org/person/58324/",
      },
    ],
    cast: ["tom-cruise", "kelly-mcgillis"],
    reviews: [],
    thumbnail: "top-gun.jpg",
    background_thumbnail: "top-gun-background.jpg",
    imdb_link: "http://www.imdb.com/title/tt0092099/maindetails",
    tmdb_link: "https://www.themoviedb.org/movie/744/",
    runtime: 110,
    genres: [
      {
        id: 2,
        name: "Drama",
        slug: "drama",
      },
      {
        id: 4,
        name: "Action",
        slug: "action",
      },
    ],
    release: "16 May, 1986",
  },
];

export const genres: Genre[] = [
  {
    id: 1,
    name: "Comedy",
    slug: "comedy",
  },
  {
    id: 2,
    name: "Drama",
    slug: "drama",
  },
  {
    id: 3,
    name: "Science-fiction",
    slug: "science-fiction",
  },
  {
    id: 4,
    name: "Action",
    slug: "action",
  },
  {
    id: 5,
    name: "Adventure",
    slug: "adventure",
  },
  {
    id: 6,
    name: "Thriller",
    slug: "thriller",
  },
  {
    id: 7,
    name: "Horror",
    slug: "horror",
  },
  {
    id: 8,
    name: "Animation",
    slug: "animation",
  },
  {
    id: 9,
    name: "Family",
    slug: "family",
  },
  {
    id: 10,
    name: "Fantasy",
    slug: "fantasy",
  },
  {
    id: 11,
    name: "Mystery",
    slug: "mystery",
  },
  {
    id: 12,
    name: "Crime",
    slug: "crime",
  },
];

export const directors: Director[] = [
  {
    id: 1,
    name: "Damien Chazelle",
    slug: "damien-chazelle",
    films: [1, 3],
    thumbnail: "damien-chazelle.jpg",
    biography:
      "Damien Sayre Chazelle (born January 19, 1985) is a French-American film director, screenwriter, and producer. He is known for directing the films Whiplash (2014), La La Land (2016), First Man (2018), and Babylon (2022). For Whiplash, he was nominated for the Academy Award for Best Adapted Screenplay. His biggest commercial success came with La La Land, which was nominated for 14 Academy Awards, winning six including Best Director, making him the youngest person to win the award at age 32. He made his television debut directing the Netflix limited series The Eddy (2020).",
    tmdb_link: "https://www.themoviedb.org/person/136495/",
  },
  {
    id: 2,
    name: "James Cameron",
    slug: "james-cameron",
    films: [],
    thumbnail: "james-cameron.jpg",
    biography:
      "James Cameron was born in Kapuskasing, Ontario, Canada, on August 16, 1954. He moved to the USA in 1971. The son of an engineer, he majored in physics at California State University but, after graduating, drove a truck to support his screen-writing ambition. He landed his first professional film job as art director, miniature-set builder, and process-projection supervisor on Roger Corman's Battle Beyond the Stars (1980) and debuted as a director with Piranha Part Two: The Spawning (1981) the following year. In 1984, he wrote and directed The Terminator (1984), a futuristic action-thriller starring Arnold Schwarzenegger, Michael Biehn, and Linda Hamilton. It was a huge success. After this came a string of successful science-fiction action films such as Aliens (1986) and Terminator 2: Judgment Day (1991). Cameron is now one of the most sought-after directors in Hollywood. He was formerly married to producer Gale Anne Hurd, who produced several of his films. He married Kathryn Bigelow in 1989.",
    tmdb_link: "https://www.themoviedb.org/person/2710/",
  },
  {
    id: 3,
    name: "Mark Mylod",
    slug: "mark-mylod",
    films: [],
    thumbnail: "mark-mylod.jpg",
    biography:
      "Mark Mylod is a British director and producer. He is known for his work on the television series Succession and Shameless, as well as for directing the horror-comedy film The Menu (2022).",
    tmdb_link: "https://www.themoviedb.org/person/57199/",
  },
  {
    id: 4,
    name: "Joel Crawford",
    slug: "joel-crawford",
    films: [],
    thumbnail: "joel-crawford.jpg",
    biography:
      "Joel Crawford is an American storyboard artist and director best known for his work on several DreamWorks Animation films, including The Croods: A New Age (2020) and Puss in Boots: The Last Wish (2022).",
    tmdb_link: "https://www.themoviedb.org/person/1450348/",
  },
  {
    id: 5,
    name: "Joseph Kosinski",
    slug: "joseph-kosinski",
    films: [],
    thumbnail: "joseph-kosinski.jpg",
    biography:
      'Joseph Kosinski (born May 3, 1974) is an American film director best known for the science-fiction films "Tron: Legacy" (2010) and "Oblivion" (2013), the drama-thriller "Only the Brave" (2017), and the action-thriller "Top Gun: Maverick" (2022). His previous work has primarily been in the field of CGI television commercials, most notably his 2007 commercials for the video games "Halo 3" and "Gears of War".',
    tmdb_link: "https://www.themoviedb.org/person/86270/",
  },
  {
    id: 6,
    name: "M. Night Shyamalan",
    slug: "m-night-shyamalan",
    films: [],
    thumbnail: "m-night-shyamalan.jpg",
    biography:
      'Manoj Nelliyattu "M. Night" Shyamalan, born August 6, 1970, is an American filmmaker and actor. He is known for making original films with contemporary supernatural plots and twist endings. He was born in Mahé, India, and raised in Penn Valley, Pennsylvania. The cumulative gross of his films exceeds $3 billion globally.He made his directorial debut in 1992 with his first movie Praying with Anger. His second movie was the comedy-drama film Wide Awake (1998). His most well-received films include the supernatural thriller The Sixth Sense (1999), the superhero thriller Unbreakable (2000), and the science fiction thriller Signs (2002). For The Sixth Sense, Shyamalan received nominations for the Academy Award for Best Director and the Academy Award for Best Original Screenplay. Afterward, Shyamalan released a series of poorly received but sometimes financially successful movies, including the period-piece thriller The Village (2004), the dark fantasy Lady in the Water (2006), the eco-thriller The Happening (2008)...',
    tmdb_link: "https://www.themoviedb.org/person/11614/",
  },
  {
    id: 7,
    name: "Quentin Tarantino",
    slug: "quentin-tarantino",
    films: [],
    thumbnail: "quentin-tarantino.jpg",
    biography:
      "Quentin Jerome Tarantino (born March 27, 1963) is an American film director, screenwriter, producer, cinematographer and actor. In the early 1990s he was an independent filmmaker whose films used nonlinear storylines and aestheticization of violence. His films have earned him a variety of Academy Award, Golden Globe, BAFTA and Palme d´Or Awards and he has been nominated for Emmy and Grammy Awards. In 2007, Total Film named him the 12th-greatest director of all time. Tarantino was born in Knoxville, Tennessee, the son of Connie McHugh Tarantino Zastoupil, a health care executive and nurse born in Knoxville, and Tony Tarantino, an actor and amateur musician born in Queens, New York. Tarantino´s mother allowed him to quit school at age 17, to attend an acting class full time. Tarantino gave up acting while attending the acting school, saying that he admired directors more than actors. Tarantino also worked in a video rental store before becoming a filmmaker, paid close attention to the types of films people liked to rent, and has cited that experience as inspiration for his directorial career.",
    tmdb_link: "https://www.themoviedb.org/person/138/",
  },
  {
    id: 8,
    name: "Matt Reeves",
    slug: "matt-reeves",
    films: [],
    thumbnail: "matt-reeves.jpg",
    biography:
      'Matthew George "Matt" Reeves (born April 27, 1966 in Rockville Center, New York, USA) is an American screenwriter, director, and producer. He began making movies at age eight, directing friends and using a wind-up camera. Reeves befriended filmmaker J.J. Abrams when both were 13 years old and they were making short films together. When Reeves and Abrams were 15 or 16 years old, Steven Spielberg hired them to transfer some of his own Super 8 films to videotape. Reeves began his career as a screenwriter for the films Under Siege 2: Dark Territory (1995) and The Pallbearer (1996), the latter of which marked his feature-length directorial debut. He then transitioned into television as a director and co-creator of the drama series Felicity (1998–2002) alongside J.J. Abrams. Reeves has since directed the horror film Cloverfield (2008), the romantic horror film Let Me In (2010), and the science fiction sequels Dawn of the Planet of the Apes (2014) and War for the Planet of the Apes (2017). In February 2017, Warner Bros. announced that Reeves would direct The Batman (2022) by DC, starring Robert Pattinson.',
    tmdb_link: "https://www.themoviedb.org/person/32278/",
  },
  {
    id: 9,
    name: "Taika Waititi",
    slug: "taika-waititi",
    films: [],
    thumbnail: "taika-waititi.jpg",
    biography:
      "Taika David Cohen ONZM (born 16 August 1975), known professionally as Taika Waititi, is a New Zealand film and television director, producer, screenwriter, actor, and comedian. He is the recipient of an Academy Award, BAFTA Award and a Grammy Award, and has been nominated for two Primetime Emmy Awards. His feature films Boy (2010) and Hunt for the Wilderpeople (2016) have each been the top-grossing New Zealand film. Waititi´s 2004 short film Two Cars, One Night earned him an Academy Award nomination for Best Live Action Short Film. He co-directed and starred in the horror comedy film What We Do in the Shadows (2014) with Jemaine Clement, which was adapted into a television series of the same name (2019–present). The series has been nominated for the Primetime Emmy Award for Outstanding Comedy Series. His most recent directing credits include the superhero film Thor: Ragnarok (2017)...",
    tmdb_link: "https://www.themoviedb.org/person/55934/",
  },
  {
    id: 10,
    name: "Jean-François Richet",
    slug: "jean-françois-richet",
    films: [],
    thumbnail: "jean-françois-richet.jpg",
    biography:
      "Jean-Francois Richet is a French screenwriter, director, and producer, born on July 2, 1966 in Paris. He grew up in Meaux, a suburb east of Paris.",
    tmdb_link: "https://www.themoviedb.org/person/58324/",
  },
  {
    id: 11,
    name: "Tony Scott",
    slug: "tony-scott",
    films: [],
    thumbnail: "tony-scott.jpg",
    biography:
      "Anthony David Leighton Scott (21 June 1944 – 19 August 2012) was an English and American film director, producer and actor. He was known for directing highly successful action and thriller films such as Top Gun (1986), Beverly Hills Cop II (1987), Days of Thunder (1990), The Last Boy Scout (1991), True Romance (1993), Crimson Tide (1995), Enemy of the State (1998), Man on Fire (2004), Déjà Vu (2006), and Unstoppable (2010).",
    tmdb_link: "https://www.themoviedb.org/person/893/",
  },
];

export const actors: Actor[] = [
  {
    id: 1,
    name: "Brad Pitt",
    slug: "brad-pitt",
    films: [],
    thumbnail: "brad-pitt.jpg",
    biography:
      "William Bradley Pitt (born December 18, 1963) is an American actor and film producer. He is the recipient of various accolades, including an Academy Award, a British Academy Film Award, and two Golden Globe Awards for his acting, in addition to a second Academy Award, a second British Academy Film Award, a third Golden Globe Award, and a Primetime Emmy Award as a producer under his production company, Plan B Entertainment.",
    tmdb_link: "https://www.themoviedb.org/person/287/",
  },
  {
    id: 2,
    name: "Margot Robbie",
    slug: "margot-robbie",
    films: [],
    thumbnail: "margot-robbie.jpg",
    biography:
      "Margot Elise Robbie (born 2 July 1990) is an Australian actress and producer. Known for her work in both blockbuster and independent films, she has received several accolades, including nominations for two Academy Awards, four Golden Globe Awards, and five British Academy Film Awards. Time magazine named her one of the 100 most influential people in the world in 2017 and she was ranked as one of the world's highest-paid actresses by Forbes in 2019.",
    tmdb_link: "https://www.themoviedb.org/person/234352/",
  },
  {
    id: 3,
    name: "Ralph Fiennes",
    slug: "ralph-fiennes",
    films: [],
    thumbnail: "ralph-fiennes.jpg",
    biography:
      "Ralph Nathaniel Twisleton-Wykeham-Fiennes (born December 22, 1962) is an English actor, film producer, and director. Since 1999, Fiennes has served as an ambassador for UNICEF UK. A Shakespeare interpreter, he first achieved success onstage at the Royal National Theatre. He made his film debut playing Heathcliff in Emily Brontë's Wuthering Heights. A noted Shakespeare interpreter, he first achieved success onstage at the Royal National Theatre. Fiennes' portrayal of Nazi war criminal Amon Göth in Schindler's List (1993) earned him nominations for the Academy Award for Best Supporting Actor and the Golden Globe Award for Best Supporting Actor, and he won the BAFTA Award for Best Actor in a Supporting Role. His performance as Count Almásy in The English Patient (1996) garnered him a second Academy Award nomination, for Best Actor, as well as BAFTA and Golden Globe nominations.",
    tmdb_link: "https://www.themoviedb.org/person/5469/",
  },
  {
    id: 4,
    name: "Anya Taylor-Joy",
    slug: "anya-taylor-joy",
    films: [],
    thumbnail: "anya-taylor-joy.jpg",
    biography:
      "Anya-Josephine Marie Taylor-Joy (born 16 April 1996) is a British-American actress and model. She left school at age sixteen and began to pursue an acting career. After small television roles, she made her film debut with the lead role of Thomasin in the horror film The Witch (2015). She went on to star in the horror film Split and the black comedy Thoroughbreds (both 2017). She also appeared in the drama miniseries The Miniaturist (2017), the fifth and sixth series of Peaky Blinders (2019–2022) and The Dark Crystal: Age of Resistance (2019), and the superhero film Glass (2019), reprising her role from Split. Taylor-Joy will voice Princess Peach in the upcoming Mario film (2022) and portray the title character in Furiosa (2024).",
    tmdb_link: "https://www.themoviedb.org/person/1397778/",
  },
  {
    id: 5,
    name: "Tom Cruise",
    slug: "tom-cruise",
    films: [],
    thumbnail: "tom-cruise.jpg",
    biography:
      "Thomas Cruise Mapother IV (born July 3, 1962), known professionally as Tom Cruise, is an American actor and producer. One of the world's highest-paid actors, he has received various accolades, including an Honorary Palme d'Or and three Golden Globe Awards, in addition to nominations for three Academy Awards. His films have grossed over $4 billion in North America and over $11.1 billion worldwide, making him one of the highest-grossing box office stars of all time.",
    tmdb_link: "https://www.themoviedb.org/person/500/",
  },
  {
    id: 6,
    name: "Miles Teller",
    slug: "miles-teller",
    films: [],
    thumbnail: "miles-teller.jpg",
    biography:
      "Miles Alexander Teller (born February 20, 1987) is an American actor and musician. Born in Downingtown, Pennsylvania and an alumnus of NYU's Tisch School of Arts, he appeared in several short films and television movies before making his feature film debut in Rabbit Hole (2010). He had supporting roles in Footloose (2011) and Project X (2012), before garnering critical acclaim for his leading performance as Sutter Keely in The Spectacular Now (2013), for which he was awarded the Sundance Film Festival Special Jury Prize for Dramatic Acting and his role as Andrew Neiman in Whiplash, for which he was nominated for the Gotham Independent Film Award for Best Actor, the Satellite Award for Best Actor - Motion Picture, and the BAFTA Rising Star Award. His other films include: Divergent (2014), Bleed for This (2016), War Dogs (2016) and Top Gun: Maverick (2022).",
    tmdb_link: "https://www.themoviedb.org/person/996701/",
  },
];
