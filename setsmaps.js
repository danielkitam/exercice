const ids = new Set(['Hi', "from", "set!!!!!!!!!!!!!!!"]);
ids.add(8);

if(ids.has('Hi')){
    ids.delete('Hi');
}
console.log(ids);

for(const entry of ids.entries()){
    console.log(entry[1]);
}