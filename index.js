
//Preliminaries

if( 5 > 3 ){
    console.log("is greater than")
}

if( "cat".length === 3 ){
    console.log("is the length")
}

if( "cat" === "dog"){
} else{
    console.log ("not the same")
}

//Bronze Medal

var person = {
    name: "Bobby",
    age: 12
  };

if(person.age >= 18){
      console.log("Bobby is allowed to go to the movie")
}else{
      console.log("Bobby is NOT allowed to go to the movie, Sorry!")
}

if(person.name[0] === "B" || person.age !=18){
    console.log("Bobby is allowed to go to the movie")
}else {
    console.log("Bobby is NOT allowed to go to the movie, Sorry!")
};


if(person.name[0] === "B" && person.age >=18){
    console.log("Bobby is allowed to go to the movie")
}else {
    console.log("Bobby is NOT allowed to go to the movie, Sorry!")
}

//Silver Medal

if(1 === "1"){
    console.log("strict")
}else if(1 == "1"){
    console.log("loose")
}else{
    console.log("not equal at all")
}
if(1 <=2 && 2 === 4){
    console.log("yes")
}else{
    console.log("no")
}


//Gold Medal

var dog = "dog"
if(typeof dog === "string"){
    console.log(true)
}