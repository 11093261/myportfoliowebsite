const list = [
    {id:1,content:"you are known"},
    {id:2,content:"you are made of this now"},
    {id:3,content:"here we go"}
]

const total = list.reduce((cum,curr)=>cum +  Number(curr.content))
console.log(total)