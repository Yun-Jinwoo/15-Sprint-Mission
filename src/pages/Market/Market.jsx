import Header from "../../components/Header";
import BestItems from "./components/BestItems/BestItems";
import AllItems from "./components/AllItems/AllItems";
import Pagination from "./components/Pagination/Pagination";

const Market = () => {
  return (
    <>
      <Header location="market" />
      <BestItems />
      <AllItems />
      <Pagination />
    </>
  );
};

export default Market;
