let users = {
  realDonaldTrump: {
    id: "realDonaldTrump",
    name: "Donald J. Trump",
    avatarURL: "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg",
    tweets: ['8xf0y6ziyjabvozdd253nd', 'hbsc73kzqi75rg7v1e0i6a', '2mb6re13q842wu8n106bhk', '6h5ims9iks66d4m7kqizmv', '3sklxkf9yyfowrf0o1ftbb'],
  },
  BorisJohnson: {
    id: "BorisJohnson",
    name: "Boris Johnson",
    avatarURL: "https://pbs.twimg.com/profile_images/1200430685560983553/xRebdCDg_400x400.jpg",
    tweets: ['5c9qojr2d1738zlx09afby', 'f4xzgapq7mu783k9t02ghx', 'nnvkjqoevs8t02lzcc0ky', '4pt0px8l0l9g6y69ylivti', 'fap8sdxppna8oabnxljzcv', 'leqp4lzfox7cqvsgdj0e7', '26p5pskqi88i58qmza2gid', 'xi3ca2jcfvpa0i3t4m7ag'],
  },
  McConaughey: {
    id: "McConaughey",
    name: "Matthew McConaughey",
    avatarURL: "https://pbs.twimg.com/profile_images/1191381171164237824/jdS95Rtm_400x400.jpg",
    tweets: ['5w6k1n34dkp1x29cuzn2zn', 'czpa59mg577x1oo45cup0d', 'omdbjl68fxact38hk7ypy6', '3km0v4hf1ps92ajf4z2ytg', 'njv20mq7jsxa6bgsqc97', 'sfljgka8pfddbcer8nuxv', 'r0xu2v1qrxa6ygtvf2rkjw'],
  }
}

let tweets = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    text: "Healthy young child goes to doctor, gets pumped with massive shot of many vaccines, doesn't feel good and changes - AUTISM. Many such cases!",
    author: "realDonaldTrump",
    timestamp: 1518122597860,
    likes: ['BorisJohnson'],
    replies: ['fap8sdxppna8oabnxljzcv', '3km0v4hf1ps92ajf4z2ytg'],
    replyingTo: null,
  },
  "5c9qojr2d1738zlx09afby": {
    id: "5c9qojr2d1738zlx09afby",
    text: "I can hardly condemn Ukip as a bunch of boss-eyed, foam-flecked euro hysterics, when I have been sometimes not far short of boss-eyed, foam-flecked hysteria myself",
    author: "BorisJohnson",
    timestamp: 1518043995650,
    likes: ['realDonaldTrump', 'McConaughey'],
    replies: ['njv20mq7jsxa6bgsqc97'],
    replyingTo: null,
  },
  "f4xzgapq7mu783k9t02ghx": {
    id: "f4xzgapq7mu783k9t02ghx",
    text: "My chances of being PM are about as good as the chances of finding Elvis on Mars, or my being reincarnated as an olive.",
    author: "BorisJohnson",
    timestamp: 1517043995650,
    likes: ['McConaughey'],
    replies: [],
    replyingTo: null,
  },
  "hbsc73kzqi75rg7v1e0i6a": {
    id: "hbsc73kzqi75rg7v1e0i6a",
    text: "Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don't feel so stupid and insecure,it's not your fault",
    author: "realDonaldTrump",
    timestamp: 1516043995650,
    likes: ['BorisJohnson'],
    replies: ['leqp4lzfox7cqvsgdj0e7', 'sfljgka8pfddbcer8nuxv'],
    replyingTo: null,
  },
  "5w6k1n34dkp1x29cuzn2zn": {
    id: "5w6k1n34dkp1x29cuzn2zn",
    text: "Alright, Alright, Alright",
    author: "McConaughey",
    timestamp: 1515043995650,
    likes: ['realDonaldTrump'],
    replies: [],
    replyingTo: null,
  },
  "czpa59mg577x1oo45cup0d": {
    id: "czpa59mg577x1oo45cup0d",
    text: "Alright, Alright, Alright",
    author: "McConaughey",
    timestamp: 1515043995650,
    likes: ['BorisJohnson', 'realDonaldTrump'],
    replies: ['3sklxkf9yyfowrf0o1ftbb'],
    replyingTo: null,
  },
  "2mb6re13q842wu8n106bhk": {
    id: "2mb6re13q842wu8n106bhk",
    text: "Russian leaders are publicly celebrating Obama's reelection.  They can't wait to see flexible Obama will be now.",
    author: "realDonaldTrump",
    timestamp: 1514043995650,
    likes: ['McConaughey'],
    replies: ['26p5pskqi88i58qmza2gid'],
    replyingTo: null,
  },
  "nnvkjqoevs8t02lzcc0ky": {
    id: "nnvkjqoevs8t02lzcc0ky",
    text: "I'd like thousands of schools as good as the one I went to, Eton.",
    author: "BorisJohnson",
    timestamp: 1513043995650,
    likes: [],
    replies: [],
    replyingTo: null,
  },
  "omdbjl68fxact38hk7ypy6": {
    id: "omdbjl68fxact38hk7ypy6",
    text: "Alright, Alright, Alright",
    author: "McConaughey",
    timestamp: 1512043995650,
    likes: [],
    replies: [],
    replyingTo: null,
  },
  "4pt0px8l0l9g6y69ylivti": {
    id: "4pt0px8l0l9g6y69ylivti",
    text: "My speaking style was criticised by no less an authority than Arnold Schwarzenegger. It was a low moment, my friends, to have my rhetorical skills denounced by a monosyllabic Austrian cyborg.",
    author: "BorisJohnson",
    timestamp: 1511043995650,
    likes: ['McConaughey'],
    replies: [],
    replyingTo: null,
  },
  "6h5ims9iks66d4m7kqizmv": {
    id: "6h5ims9iks66d4m7kqizmv",
    text: "Windmills are the greatest threat in the US to both bald and golden eagles. Media claims fictional 'global warming' is worse.",
    author: "realDonaldTrump",
    timestamp: 1510043995650,
    likes: ['McConaughey', 'BorisJohnson'],
    replies: ['xi3ca2jcfvpa0i3t4m7ag', 'r0xu2v1qrxa6ygtvf2rkjw'],
    replyingTo: null,
  },
  "fap8sdxppna8oabnxljzcv": {
    id: "fap8sdxppna8oabnxljzcv",
    author: "BorisJohnson",
    text: "I think I was once given cocaine but I sneezed so it didn't go up my nose. In fact, it may have been icing sugar.",
    timestamp: 1518122677860,
    likes: ['realDonaldTrump'],
    replyingTo: "8xf0y6ziyjabvozdd253nd",
    replies: [],
  },
  "3km0v4hf1ps92ajf4z2ytg": {
    id: "3km0v4hf1ps92ajf4z2ytg",
    author: "McConaughey",
      text: "Alright, Alright, <span class='hash-tag'>#Alright</span>",
    timestamp: 1518122667860,
    likes: [],
    replyingTo: "8xf0y6ziyjabvozdd253nd",
    replies: [],
  },
  "njv20mq7jsxa6bgsqc97": {
    id: "njv20mq7jsxa6bgsqc97",
    author: "McConaughey",
    text: "Alright, Alright, Alright",
    timestamp: 1518044095650,
    likes: ['BorisJohnson'],
    replyingTo: "5c9qojr2d1738zlx09afby",
    replies: [],
  },
  "leqp4lzfox7cqvsgdj0e7": {
    id: "leqp4lzfox7cqvsgdj0e7",
    author: "BorisJohnson",
    text: "He's a rather engaging geezer",
    timestamp: 1516043255650,
    likes: [],
    replyingTo: "hbsc73kzqi75rg7v1e0i6a",
    replies: [],
  },
  "sfljgka8pfddbcer8nuxv": {
    id: "sfljgka8pfddbcer8nuxv",
    author: "McConaughey",
    text: "Alright, Alright, Alright",
    timestamp: 1516045995650,
    likes: ['realDonaldTrump', 'BorisJohnson'],
    replyingTo: "hbsc73kzqi75rg7v1e0i6a",
    replies: [],
  },
  "3sklxkf9yyfowrf0o1ftbb": {
    id: "3sklxkf9yyfowrf0o1ftbb",
    author: "realDonaldTrump",
    text: "Despite the constant negative press covfefe",
    timestamp: 1515044095650,
    likes: ['McConaughey'],
    replyingTo: "czpa59mg577x1oo45cup0d",
    replies: [],
  },
  "26p5pskqi88i58qmza2gid": {
    id: "26p5pskqi88i58qmza2gid",
    author: "BorisJohnson",
    text: "It is easy to make promises - it is hard work to keep them.",
    timestamp: 1514044994650,
    likes: ['realDonaldTrump'],
    replyingTo: "2mb6re13q842wu8n106bhk",
    replies: [],
  },
  "xi3ca2jcfvpa0i3t4m7ag": {
    id: "xi3ca2jcfvpa0i3t4m7ag",
    author: "BorisJohnson",
    text: "Jolly good.",
    timestamp: 1510043995650,
    likes: [],
    replyingTo: "6h5ims9iks66d4m7kqizmv",
    replies: [],
  },
  "r0xu2v1qrxa6ygtvf2rkjw": {
    id: "r0xu2v1qrxa6ygtvf2rkjw",
    author: "McConaughey",
    text: "Alright, Alright, Alright",
    timestamp: 1510044395650,
    likes: ['BorisJohnson'],
    replyingTo: "6h5ims9iks66d4m7kqizmv",
    replies: [],
  },
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getTweets () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...tweets}), 1000)
  })
}

export function _saveLikeToggle ({ id, hasLiked, authedUser }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      tweets = {
        ...tweets,
        [id]: {
          ...tweets[id],
          likes: hasLiked === true
            ? tweets[id].likes.filter((uid) => uid !== authedUser)
            : tweets[id].likes.concat([authedUser])
        }
      }

      res()
    }, 500)
  })
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

function formatTweet ({ author, text, replyingTo = null }) {
  return {
    author,
    id: generateUID(),
    likes: [],
    replies: [],
    text,
    timestamp: Date.now(),
    replyingTo,
  }
}

export function _saveTweet ({ text, author, replyingTo }) {
  return new Promise((res, rej) => {
    const formattedTweet = formatTweet({
      text,
      author,
      replyingTo
    })

    setTimeout(() => {
      tweets = {
        ...tweets,
        [formattedTweet.id]: formattedTweet,
      }

      users = {
        ...users,
        [author]: {
          ...users[author],
          tweets: users[author].tweets.concat([formattedTweet.id])
        }
      }

      res(formattedTweet)
    }, 1000)
  })
}
