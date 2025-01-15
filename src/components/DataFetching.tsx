import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";

type DataProps = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

function DataFetching() {
  const [data, setData] = useState<DataProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://themealdb.com/api/json/v1/1/filter.php?c=Seafood"
      );

      const result = await response.json();
      setData(result.meals);
    };

    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.idMeal}
        renderItem={({ item }) => (
          <View>
            <Text>{item.idMeal}</Text>
            <Text>{item.strMeal}</Text>
            <Image
              source={{ uri: item.strMealThumb }}
              style={{ width: 300, height: 100 }}
            />
          </View>
        )}
      />
    </View>
  );
}

export default DataFetching;
