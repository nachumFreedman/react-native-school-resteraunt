import React from 'react';
import {
  View,
  Image,
  Text,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  fetchProductById,
  addFavouriteItem,
  checkFavouriteItem,
  removeFavouriteItem,
  addToCart,
} from '../../Stores/Actions';
import { Color } from '../../common/color/Color';
import { CrossPlatformIcon } from '../../common/CrossPlatformIcon/CrossPlatformIcon';
import { CountingBtn, Button, LoadingIndicator } from '../../components';
import styles from './styles';
import ToggleSwitch from 'toggle-switch-react-native';
import renderIf from '../../components/renderIf';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button';
import { Actions } from 'react-native-router-flux';
import i18n from '../../../i18n/i18n';

var radio_props = [{ label: 'param1', value: 0 }, { label: 'param2', value: 1 }];

class ProductDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
      value: 0,
      switchValue: false,
      sizeOption: {},
      extraOption: [],
      userReaction: 'DISLIKE',
      product: '',
      active: false,
      productPrice: this.props.productDetail.sortPrice,
      buttonToggle: true,
      buttonValue: 'checked',
      noExtraIngredient: 'No Extra Ingredient',
    };
    var { productId } = this.props.navigation.state.params;
    this.props.fetchProductById(productId);
    this.props.checkFavouriteItem(productId);

    console.log("properp in product detail page ", this.props.productDetail.extraIngredients);
  }

  componentDidMount() {
    //	console.log('call did mount');
  }
  componentWillUnmount() {
    //	console.log('called will mount');
  }

  // increase Product quantity
  add = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  // remove Product quantity
  remove = () => {
    if (this.state.count >= 1) {
      this.setState({
	count: this.state.count - 1,
      });
    } else {
      count: this.state.count;
    }
  };

  // select product size
  selectSize(size) {
    //	console.log('size and price--' + JSON.stringify(size));
    this.setState({ sizeOption: size, active: true, productPrice: size.specialPrice });
    size.selected = true;

    //	console.log('value' + this.state.value);
    this.props.productDetail.price.map(item => {
      if (size.pname != item.pname) {
	item.selected = false;
      }
    });
  }

  // add product into card
  async addToCart(productDetail) {
    if (this.state.active === false) {
      Alert.alert('Please!', ' Select Size and Prize !', [{ text: 'OK', onPress: () => console.log('ok') }], {
	cancelable: false,
      });
    } else {
      var product = {
	productId: productDetail._id,
	name: productDetail.title,
	imageUrl: productDetail.thumb,
	quantity: this.state.count - 1,
	sizeOption: this.state.sizeOption,
	//itemTotalPrice:0,
	price: 0,
	ratingFlag: 0,
	rating: 0,
      };
      //	console.log('product-->' + JSON.stringify(product));
      this.props.addCartItem(product);
      Actions.cart();
    }
  }

  onToggleChange = value => {
    //	console.log('toggle');
    this.setState({ switchValue: !this.state.switchValue });
  };

  // render extra ingredients
  renderItem({ item }) {
    if (item == undefined || item == null) {
      return;
    }
    return (
      <View>
	<Text style={styles.ingredient}>Add Extra Choice</Text>
	<View style={styles.extraIngredientPriceWrapper}>
	  <Text style={styles.ingredientText}>{item.name}</Text>
	</View>
      </View>
    );
  }
  
  // add to favourite items
  async addToFavourites(e) {
    console.log('isChecked ===' + JSON.stringify(this.props.isChecked));
    if (this.props.isLoggedIn != true) {
      Alert.alert(
	'Please Login First',
	'',
	[
	  {
	    text: 'Cancel',
	    onPress: Actions.detail(),
	    style: 'cancel',
	  },
	  { text: 'OK', onPress: () => Actions.login() },
	],
	{ cancelable: false }
      );
    } else if (!this.props.isChecked) {
      await this.setState({
        userReaction: 'LIKE',
	product: this.props.productDetail._id,
      });
      //	console.log('add==' + JSON.stringify(this.state));
      this.props.addFavouriteItem(this.state.userReaction, this.state.product);
    } else {
      await this.setState({
	userReaction: 'DISLIKE',
	product: this.props.productDetail._id,
      });
      //	console.log('remove==' + JSON.stringify(this.state));
      this.props.removeFavouriteItem(this.state.userReaction, this.state.product);
    }
  }
  
  //load data
  loadingData() {
    if (this.props.loading) {
      return <LoadingIndicator />;
    }
  }
  
  onSelect(index, value, size) {
    this.setState({
      text: `Selected index: ${index} , value: ${value}`,
      sizeOption: size,
      active: true,
    });
    size.selected = true;

    //	console.log('value' + this.state.value);
    this.props.productDetail.price.map(item => {
      if (size.pname != item.pname) {
	item.selected = false;
      }
    });
  }

  valueChange(item) {
    this.setState({
      buttonToggle: !this.state.buttonToggle,
    });
  }

  renderSize() {
    if (this.props.productDetail.price && this.props.productDetail.price.length > 0) {
      return (
	<RadioGroup
	  size={24}
	  thickness={2}
	  color={Color.Danger}
	  highlightColor={Color.Light}
	  onSelect={(index, value) => this.onSelect(index, value, this.props.productDetail.price[index])}
	>
	  {this.props.productDetail.price.map(item => {
	     return (
	       <RadioButton value={item.pname} key={item.pname}>
		 <Text>
		   {item.pname} {''} ${item.specialPrice}
		 </Text>
	       </RadioButton>
	     );
	  })}
	</RadioGroup>
      );
    }
  }

  renderExtraIngradient() {
    // console.log('render extra ingredient');
    if (this.props.productDetail.extraIngredients && this.props.productDetail.extraIngredients.length > 0) {
      return this.props.productDetail.extraIngredients.map((item,index) => (
	<View key={index}>
	  <Text style={styles.ingredient}>{i18n.t('ADD EXTRA CHOICE')}</Text>
	  <TouchableOpacity style={styles.extraIngredientPriceWrapper}>
	    <Text style={styles.ingredientText}>{item ? item.name : this.state.noExtraIngredient}</Text>
	    {renderIf(this.state.noExtraIngredient != 'No Extra Ingredient')(
	       <ToggleSwitch
	       isOn={false}
	       onColor={Color.Primary}
	       offColor={Color.Gray}
	       size="small"
	       onToggle={isOn => console.log('changed to : ', isOn)}
	       />
	     )}
	  </TouchableOpacity>
	</View>
      ));
    } else {
      return null;
    }
  }

  render() {
    const { productDetail } = this.props;
    const { extraIngredients } = productDetail;
    //	console.log('extra===' + JSON.stringify(extraIngredients));
    var _style;
    if (this.props.isChecked) {
      // clicked button style
      _style = {
	color: Color.Primary,
      };
    } else {
      // default button style
      _style = {
	color: Color.White,
      };
    }

    const {
      headerWrapper,
      headerTitle,
      ProductImg,
      PriceWrapper,
      price,
      favIconWrapper,
      checkoutBtn,
      orderBtnWrapper,
      subContainer,
      productTitle,
      productSubTitle,
      productWrapper,
      cartBtnWrapper,
      cartBtn,
      btnText,
      ingredient,
      ingredientText,
      ingredientPriceWrapper,
    } = styles;

    return (
      <ScrollView style={{ backgroundColor: Color.LightBlue }}>
	<View>{this.loadingData()}</View>
	<Image source={{ uri: this.props.productDetail.thumb }} style={ProductImg} />

	<View style={PriceWrapper}>
	  <Text style={price}>${this.props.productDetail.sortPrice}</Text>
	</View>
	<View style={favIconWrapper}>
	  <CrossPlatformIcon name="heart" style={_style} size={40} onPress={e => this.addToFavourites(e)} />
	</View>
	<View style={subContainer}>
	  <View>
	    <Text style={productTitle}>{this.props.productDetail.categoryTitle}</Text>
	    <Text style={productSubTitle}>{this.props.productDetail.description}</Text>
	  </View>
	  <View style={productWrapper}>
	    <CountingBtn
	    onPress={this.add}
	    onClick={this.remove}
	    counter={this.state.count ? this.state.count : 1}
	    />
	    <View style={cartBtnWrapper}>
	      <Button
		style={cartBtn}
		BtnTextStyle={btnText}
		onPress={() => this.addToCart(productDetail)}
	      >
		{i18n.t('ADD TO CART')}
	      </Button>
	    </View>
	  </View>
	  <View>
	    <Text style={ingredient}>{i18n.t('Size and Prices')}</Text>
	    <View style={styles.sizeWrapper}>{this.renderSize()}</View>
	    {this.renderExtraIngradient()}
	    <View style={orderBtnWrapper}>
	      <Button style={checkoutBtn} onPress={() => this.addToCart(productDetail)}>
		<Text style={styles.checkoutBtn}>{i18n.t('CHECKOUT')}</Text>
	      </Button>
	      <Button style={checkoutBtn} onPress={() => Actions.mainScreen()}>
		<Text style={styles.checkoutBtn}>{i18n.t('SHOPPING')}</Text>
	      </Button>
	    </View>
	  </View>
	</View>
      </ScrollView>
    );
  }
}

const mapStateToProps = ({ product, cartItems, favourite, auth }) => {
  //	console.log('list---' + JSON.stringify(product.productDetail));
  const { productDetail, loading } = product;
  const { item, isChecked } = favourite;
  const { isLoggedIn, user } = auth;
  //	console.log('first Loading' + JSON.stringify(product.loading));
  return { productDetail, loading, item, isChecked, isLoggedIn, user };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchProductById: fetchProductById,
      addFavouriteItem: addFavouriteItem,
      checkFavouriteItem: checkFavouriteItem,
      removeFavouriteItem: removeFavouriteItem,
      addCartItem: item => dispatch(addToCart(item)),
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
