import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar";
import Filter from "./Components/Filter";
import Cards from "./Components/Cards";
import Spinner from "./Components/Spinner";
import { playersData, filterData } from "./data.js";
import { toast } from "react-toastify";

const App = () => {
  const [cricketers, setCricketers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    // Here we don’t fetch from API, just load local data
    setCricketers(playersData);
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
      <div>
        <Navbar />
      </div>

      <div className="bg-bgDark2">
        <div>
          <Filter filterData={filterData} category={category} setCategory={setCategory} />
        </div>

        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          {loading ? <Spinner /> : <Cards courses={cricketers} category={category} />}
        </div>
      </div>
    </div>
  );
};

export default App;
