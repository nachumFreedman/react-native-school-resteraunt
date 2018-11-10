import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity
} from "react-native";
import styles from "./styles";
import {
  CarouselScreen,
  LoadingIndicator
} from "../../components";
import {
  fetchCategoryList,
  fetchCategory,
  fetchUserById,
  getRestaurantInfo
} from "../../Stores/Actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "react-native-router-flux";
import i18n from '../../../i18n/i18n';

const datacarousel = [
  {
    id: 315635,
    imagePath:
      "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&h=350"
  },
  {
    id: 339964,
    // "title": "Food with delicios Taste",
    imagePath:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWpYwZGvfZZM72GevUDrhk5bw_AIwBMcQHOSiwloW7URjxKIKa"
  },
  {
    id: 339403,
    // "title": "Baby Driver",
    // "subtitle": "More than just a trend",
    imagePath:
      "https://www.hormelfoods.com/wp-content/uploads/HOME_20180327_Jennie-O-Turkey-Store-New-Products-Link.1522162381.jpg"
  }
];

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.disableYellowBox = true;
    this.state = { loading: true };
    this.props.fetchUserById();
    this.props.fetchCategoryList();
    this.props.fetchCategory();
    this.props.getRestaurantInfo();
  }

  componentDidMount() {
    // establishConnection("5a16b9c74c1bb8d4086e5a91");
  }
  componentWillUnmount() {
    // console.log("called will mount");
  }
  
  async componentWillReceiveProps(nextProps) {
    // console.log("props" + JSON.stringify(nextProps));
    if (!nextProps.loading) {
      await this.setState({
        loading: nextProps.loading
      });

      // console.log("next Props==" + this.state.loading);
    }
  }

  render() {
    if (this.state.loading) {
      return <LoadingIndicator />;
    }
    const {
      carousel,
      categoryContainer,
      category,
      categoryListContainer
    } = styles;
    return (
      <ScrollView>
        <View style={carousel}>
          <CarouselScreen datacarousel={datacarousel} />
        </View>
        <View style={categoryContainer}>
          <Text style={category}>{i18n.t('Category')}</Text>
          <View style={categoryListContainer}>
            <View>
              <FlatList
                data={this.props.categories}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={styles.categoryList}
                    onPress={() =>
                      Actions.productList({ categoryId: item._id })
                    }
                  >
                    <Image
                      source={{ uri: item.thumb }}
                      style={styles.categoryImg}
                    />
                    <View style={styles.categoryOverlay} />
                    <View style={styles.categoryWrapper}>
                      <Text style={styles.categoryTitle}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => item._id}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}


const mapStateToProps = ({ categoryList, auth }) => {
  //	console.log('home---' + JSON.stringify(categoryList.categories));
  const { categories, category, loading } = categoryList;
  const { user, isLoggedIn } = auth;
  const { _id, token } = user;
  return { categories, category, loading, _id, token, isLoggedIn };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchCategoryList,
      fetchCategory,
      getRestaurantInfo,
      fetchUserById
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
