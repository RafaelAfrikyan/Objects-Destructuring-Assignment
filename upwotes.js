

let obj = { upvotes: 13, downvotes: 13 };

function getVoteCount(obj) {
    if(obj.upvotes > obj.downvotes) {
        return obj.upvotes
    }
    else if (obj.upvotes < obj.downvotes) {
        return obj.downvotes
    }
    else 
    return '0'
}
console.log(getVoteCount(obj))