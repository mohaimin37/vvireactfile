import  Anas from "./App";
import Heading from "./Heading"
function anas (val) {
    return(
        <>
        <Anas
        title={val.title}
        mname={val.mname}
        img={val.img}
        link={val.link}
      ></Anas>
      </>
    )

}

function Lists() {
  return (
    <>
     {Heading.map(anas)}

    <h1>hello sir how are you</h1>
     
    
    </>
  );
}
export default Lists;
