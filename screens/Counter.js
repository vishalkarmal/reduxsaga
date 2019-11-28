// Imports: Dependencies
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { connect } from "react-redux";
import {
  reduxDecreaseCounter,
  reduxIncreaseCounter
} from "../actions/counterAction";
import { getUserData } from "../actions/userAction";

// Screen: Counter
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.getUserDataFromServer();
  }

  componentWillReceiveProps(nextProps) {
    const { isFetching } = nextProps;
    console.log("componentWillReceiveProps", isFetching);
  }
  getUserDataFromServer() {
    this.props.getUserData();
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.counterTitle}>
          {this.props.isFetching ? "Loading" : "Counter"}
        </Text>

        <View style={styles.counterContainer}>
          <TouchableOpacity onPress={this.props.reduxIncreaseCounter}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>

          <Text style={styles.counterText}>{this.props.counter}</Text>

          <TouchableOpacity onPress={this.props.reduxDecreaseCounter}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={this.props.getUserData}>
          <Text style={styles.counterTitle}>
            {this.props.employee_name == null
              ? "Get User Data"
              : this.props.employee_name}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  counterContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  counterTitle: {
    fontFamily: "System",
    fontSize: 32,
    fontWeight: "700",
    color: "#000"
  },
  counterText: {
    fontFamily: "System",
    fontSize: 36,
    fontWeight: "400",
    color: "#000"
  },
  buttonText: {
    fontFamily: "System",
    fontSize: 50,
    fontWeight: "300",
    color: "#007AFF",
    marginLeft: 40,
    marginRight: 40
  }
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = state => {
  console.log("State:");
  console.log(state);

  // Redux Store --> Component
  return {
    // counter: state.counterReducer.counter,
    counter: state.counter.counter,
    employee_name: state.user.userData.employee_name,
    isFetching: state.user.isFetching
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = dispatch => {
  // Action
  return {
    // Increase Counter
    reduxIncreaseCounter: () => dispatch(reduxIncreaseCounter()),
    // Decrease Counter
    reduxDecreaseCounter: () => dispatch(reduxDecreaseCounter()),
    //Get User Data
    getUserData: () => dispatch(getUserData())
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
//export default Counter
