export class tweetsService{
    getTweets(){
        var tweet=[
            {
             imageUrl: "http://lorempixel.com/100/100/sports/1/", 
             name: "Arin G",
             tweethandle: "@arinhere",
             desc: "This is a demo tweet like design.",
             twetcount: 10,
             likestat: true
            },
            {
             imageUrl: "http://lorempixel.com/100/100/sports/2/", 
             name: "Arin G",
             tweethandle: "@arinhere",
             desc: "This is a demo tweet like design.",
             twetcount: 5,
             likestat: true
            },
            {
             imageUrl: "http://lorempixel.com/100/100/sports/3/", 
             name: "Arin G",
             tweethandle: "@arinhere",
             desc: "This is a demo tweet like design.",
             twetcount: 0,
             likestat: false
            }
        ];

        return tweet;
    }
}