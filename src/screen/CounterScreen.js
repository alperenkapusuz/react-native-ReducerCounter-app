import React, { useReducer } from "react";
import { View, Text, StyleSheet } from "react-native";
import Counter from "../components/Counter";

const COUNTER_INCREMENT = 1;

const reducer = (state, action) => {
  switch (action.incOrDec) {
    case "increment":
      return { ...state, count: state.count + action.amount };
    case "decrement":
      return { ...state, count: state.count - action.amount };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View>
      <Counter
        increaseOrDecrease={() =>
          dispatch({ incOrDec: "increment", amount: COUNTER_INCREMENT })
        }
      />
      <Counter
        increaseOrDecrease={() =>
          dispatch({ incOrDec: "decrement", amount: COUNTER_INCREMENT })
        }
      />
      <View>
        <Text>{state.count}</Text>
      </View>
    </View>
  );
};

export default CounterScreen;
