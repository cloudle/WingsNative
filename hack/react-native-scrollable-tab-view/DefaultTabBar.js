const React = require('react');
const ReactNative = require('react-native');
const {
  StyleSheet,
  Text,
  View,
  Animated,
} = ReactNative;
const Button = require('./Button');
import ResponsibleTouchArea from '../../src/component/ResponsibleTouchArea';

const DefaultTabBar = React.createClass({
  propTypes: {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
    underlineColor: React.PropTypes.string,
    underlineHeight: React.PropTypes.number,
    backgroundColor: React.PropTypes.string,
    activeTextColor: React.PropTypes.string,
    inactiveTextColor: React.PropTypes.string,
    textStyle: Text.propTypes.style,
    tabStyle: View.propTypes.style,
  },

  getDefaultProps() {
    return {
      activeTextColor: 'navy',
      inactiveTextColor: 'black',
      underlineColor: 'navy',
      backgroundColor: null,
      underlineHeight: 4,
    };
  },

  renderTabOption(name, page) {
    const isTabActive = this.props.activeTab === page;
    let activeTextStyle = isTabActive ? this.props.activeTextStyle : {};

    return <ResponsibleTouchArea
      key={name}
      wrapperStyle={styles.tabWrapper}
      innerStyle={[styles.tabInner, this.props.tabStyle]}
      accessible={true}
      accessibilityLabel={name}
      accessibilityTraits='button'
      onPress={() => this.props.goToPage(page)}>
      <Text style={[this.props.textStyle, activeTextStyle, styles.tabBarText]}>
        {name}
      </Text>
    </ResponsibleTouchArea>;
  },

  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    let tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      height: this.props.underlineHeight,
      backgroundColor: this.props.underlineColor,
    };

    if (this.props.underlineTop) {
      tabUnderlineStyle.top = 0;
    } else {
      tabUnderlineStyle.bottom = 0;
    }

    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1, ], outputRange: [0,  containerWidth / numberOfTabs, ],
    });

    return (
      <View style={[styles.tabs, {backgroundColor: this.props.backgroundColor, }, this.props.style, ]}>
        {this.props.tabs.map((tab, i) => this.renderTabOption(tab, i))}
        <Animated.View style={[tabUnderlineStyle, { left, }, ]} />
      </View>
    );
  },
});

const styles = StyleSheet.create({
  tabWrapper: {
    flex: 1,
  },
  tabInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  tabs: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
    borderBottomColor: '#ccc',
  },
  tabBarText: {
    backgroundColor: 'transparent'
  }
});

module.exports = DefaultTabBar;
