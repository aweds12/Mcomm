import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Components/Card";
import Header from "./Components/Header";
import { AppContainer } from "./Styles";

function App() {
  const [pages, setPages] = useState();
  const [activePage, setActivePage] = useState(1);
  const [minSlice, setMinSlice] = useState(0);
  const [products, setProducts] = useState();
  const pageSize = 6;

  useEffect(() => {
    try {
      const Fetch = async () => {
        const prods = await axios.get("https://dummyjson.com/products");

        setProducts(prods.data.products);

        const arr = [];
        const maxValueForLoop =
          prods.data.products.length -
            Math.floor(prods.data.products.length / pageSize) * pageSize ===
          0
            ? prods.data.products.length / pageSize
            : prods.data.products.length / pageSize + 1;

        for (let i = 1; i <= maxValueForLoop; i++) {
          arr.push(i);
        }
        setPages(arr);
      };
      Fetch();
    } catch (err) {
      console.log(err);
    }
  }, []);

  const changeSlice = (e) => {
    setActivePage(e.target.innerText);
    setMinSlice((e.target.innerText - 1) * pageSize);
  };

  return (
    <AppContainer>
      <Header />

      <div className="body">
        <div className="cards">
          {products?.slice(minSlice, minSlice + pageSize).map((x) => (
            <Card key={x.id} x={x} />
          ))}
        </div>

        <div className="pagination">
          {pages?.map((num) => (
            <button
              key={num}
              className={num === parseInt(activePage) ? "activePage" : ""}
              onClick={changeSlice}
            >
              {num}
            </button>
          ))}
        </div>
      </div>
    </AppContainer>
  );
}

export default App;
