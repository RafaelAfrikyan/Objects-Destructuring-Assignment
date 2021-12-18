


function getVoteCount(obj) {
 let {upvotes, downvotes} = obj;
 return upvotes - downvotes;
}
console.log(getVoteCount({ upvotes: 2, downvotes: 33 }))