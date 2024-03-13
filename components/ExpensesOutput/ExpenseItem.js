import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../../constants/styles";
import { getFormattedDate } from "../../utils/date";
import { useNavigation } from "@react-navigation/native";

const ExpenseItem = (props) => {
  const { id, description, amount, date } = props;

  const navigation = useNavigation();

  const expensePressHandler = () => {
    navigation.navigate("ManageExpense", {
      expenseId: id,
    });
  };

  return (
    <Pressable
      onPress={expensePressHandler}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.expenseItem}>
        <View>
          <Text style={[styles.textBase, styles.description]}>
            {description}
          </Text>
          <Text style={styles.textBase}>{getFormattedDate(date)}</Text>
        </View>
        <View style={styles.amountContainer}>
          <Text style={styles.amount}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ExpenseItem;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
  expenseItem: {
    padding: 10,
    elevation: 4,
    borderRadius: 8,
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: GlobalStyles.colors.primary500,

    shadowRadius: 4,
    shadowOpacity: 0.5,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: GlobalStyles.colors.gray500,
  },
  textBase: {
    color: GlobalStyles.colors.primary50,
  },
  description: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
  },
  amountContainer: {
    borderRadius: 6,
    paddingVertical: 4,
    alignItems: "center",
    paddingHorizontal: 12,
    justifyContent: "center",
    backgroundColor: "white",
    minWidth: 80,
  },
  amount: {
    fontWeight: "bold",
    color: GlobalStyles.colors.primary500,
  },
});
