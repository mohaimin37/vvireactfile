
import "./index.css"


function Anas(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img height="300px" width="300px" src={props.img} alt="motherly " />
          <div className="title">
            <h1> motherly </h1>

            <span> {props.title}</span>
            <br></br>

            <a href={props.link}>
              <button>watch now</button>
            </a>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
}
export default Anas