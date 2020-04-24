// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases (array)
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
//console.log(returnRandBase());
function pAequorFactory(num,arrDNA){
  return {
    specimenNum:num,
    dna:arrDNA,
    mutate: function(){
      let randIndex=Math.floor(Math.random()*this.dna.length);
      let randBase=this.dna[randIndex];
      let newBase=returnRandBase();
      if (newBase===randBase){
        newBase=returnRandBase();
      }
    },
    compareDNA: function(pAequor){
      //compareDNA is to compare pAequor and dna
      let count=0;
      this.dna.forEach(element => {
        pAequor.forEach(item =>{
          if(item===element){
            count++;
          }
        })
      });
      return `specimen #1 and specimen #2 have ${count/pAequor.length*100} % DNA in common`
    },
    willLikelySurvive: function(){
      let count=0;
      this.dna.forEach(element =>{
        if (element==="C"||element==="G"){
          count++;
        }
      })
      if (count/this.dna.length>0.6){
        return true;
      }
      else{
        return false;
      }
    }
  }
}

console.log(mockUpStrand());
let DNAObj=pAequorFactory(4,['B', 'H', 'C', 'G']);
console.log(DNAObj.compareDNA(['B', 'H', 'G', 'C']));
console.log(DNAObj.willLikelySurvive());
var count=0;
var pAequorArr=[];
while (count<30){
  let mypAequor=pAequorFactory(count,mockUpStrand());
  if (mypAequor.willLikelySurvive()){
    pAequorArr.push(mypAequor);
    count++;
  }
}







