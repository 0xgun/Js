//global scope
const name = "John";

const logname = () => {
  console.log(name);
}

// logname();
//local scope
const logname1=()=>{
    const name="Ganesha";
    console.log(name);
    const anotherfunction=()=>{
        console.log(name);
    }
    anotherfunction(name);
}
logname1(name);
// console.log(name);

