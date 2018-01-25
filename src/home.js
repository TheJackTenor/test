import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "./actions";

import { AppRegistry, FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';

class Home extends Component {
// constructor(props) {
//     super(props);
//     this.state = {dataLoads : 0};
//     this.dataloader = this.dataloader.bind(this);
// }

  componentDidMount() {
    this.props.requestApiData();
    // this.dataloader(arr3.length);
  }

//   dataloader(dataLoadss){
//       this.setState({
//         dataLoads : dataLoadss
//       });
//   }


  img = (x, i) =>
  <Text>{x.title}</Text>;

render() {
    const arr3 = Object.values(this.props.data);
    return arr3.length ? <ScrollView>{arr3.map(this.img)}</ScrollView> : <View><Text>Memuat . . .</Text></View>;
}
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
