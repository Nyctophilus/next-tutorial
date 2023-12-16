"use client";

import { useEffect, useState } from "react";

const Data = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const result = await res.json();

      setProducts(result);
    };

    fetchData();
  }, []);

  return products.map(({ id, title, body }) => (
    <section key={id} className="m-4 border py-2 px-4">
      <h1 className="text-amber-600 text-lg">{title}</h1>
      <p className="text-cyan-600 text-sm"> {body}</p>
    </section>
  ));
};
export default Data;
