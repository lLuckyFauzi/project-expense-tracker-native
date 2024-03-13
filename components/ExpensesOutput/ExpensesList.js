import React from "react";
import { FlatList, Text, View } from "react-native";
import ExpenseItem from "./ExpenseItem";

function renderItem(itemData) {
  return <ExpenseItem {...itemData.item} />;
}

const ExpensesList = (props) => {
  const { expenses } = props;

  return (
    <FlatList
      data={expenses}
      renderItem={renderItem}
      keyExtractor={(itemData) => itemData.id}
    />
  );
};

export default ExpensesList;
