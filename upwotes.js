

let obj = { upvotes: 13, downvotes: 25 };

function getVoteCount(obj) {
    if(obj.upvotes > obj.downvotes) {
        return obj.upvotes
    }
    else 
    return obj.downvotes
}
console.log(getVoteCount(obj))