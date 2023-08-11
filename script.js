//your code here

let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];
let ans=[]
const regex = new RegExp(`${"\\ba\\b"}|${"\\ban\\b"}|${"\\bthe\\b"}|${"\\bA\\b"}|${"\\bAn\\b"}|${"\\bThe\\b"}`, 'g');
for (const i of touristSpots) {
    ans.push(i.replace(regex,"").trim());
}
let ans1={};
for (let i=0;i<touristSpots.length;i++) {
    ans1[ans[i]]=touristSpots[i];
}
let sortedobj={};
// Object.keys(unsortedobj).sort().forEach
Object.keys(ans1).sort().forEach((i)=>{
    sortedobj[i]=ans1[i]
});
let finalAns=[];
for (const key in sortedobj) {
    finalAns.push(sortedobj[key])
}
return finalAns;