import arrow_left from "../../../../assets/images/arrow_left.svg";
import arrow_right from "../../../../assets/images/arrow_right.svg";
import "./Pagination.css";

const Pagination = () => {
  return (
    <>
      <div className="Pagination">
        <button>
          <img src={arrow_left} alt="처음으로" />
        </button>
        <button className="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>
          <img src={arrow_right} alt="끝으로" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
