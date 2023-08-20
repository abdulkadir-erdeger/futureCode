import React, { useEffect, useState } from "react";
import axios from "axios";
import { View, FlatList } from "react-native";
import ProductCard from "../../component/ProductCard";
import SearchBox from "../../component/SearchBox/SearchBox";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProduct();
  }, []);

  function getProduct() {
    try {
      axios
        .get("https://dummyjson.com/products")
        .then((res) => setProducts(res.data.products));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <ProductCard item={item} />}
        numColumns={2}
        ListHeaderComponent={() => <SearchBox />}
      />
    </View>
  );
};

export default ProductList;
