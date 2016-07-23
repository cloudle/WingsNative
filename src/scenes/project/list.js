import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

import * as appConst from '../../utils/const';
import { projectDetail } from '../../utils/routes';

class ProjectList extends Component {
  constructor (props) {
    super(props);
  }

  presentDetail () {
    this.props.navigator.push({
      ...projectDetail,
    });
  }

  renderProjects () {
    return this.props.projects.map((project, index) => {
      return <View style={styles.cardWrapper} key={index}>
        <Text numberOfLines={1} style={styles.headingText}>
          {project.title}
        </Text>
        <TouchableOpacity onPress={this.presentDetail.bind(this)} activeOpacity={0.6}>
          <View style={styles.contentWrapper}>
            <Image style={styles.thumbImage} source={require('./building.jpg')}/>
            <View style={styles.metaArea}>
              <Text numberOfLines={1} style={styles.investorText}>
                {project.investor.toUpperCase()}
              </Text>
              <Text numberOfLines={1} style={styles.addressText}>
                {project.address}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.tailWrapper}>
          <Text style={styles.counterText}>
            Đã bán {project.bookCount}
          </Text>
          <Text style={[styles.counterText, {textAlign: 'center' }]}>
            Đã đặt {project.soldCount}
          </Text>
          <Text style={[styles.counterText, {textAlign: 'right'}]}>
            Còn trống {project.remaining}
          </Text>
        </View>
      </View>
    });
  }

  render () {
    return <ScrollView style={styles.wrapper}>
      {this.renderProjects()}
    </ScrollView>
  }
}

function mapStateToProps (state) {
  return {
    scene: state.app.scene,
    projects: state.project.list,
  }
}

export default connect(mapStateToProps)(ProjectList);

import * as coreStyles from '../../styles/core';
const CARD_PADDING = 15;

let deviceWidth = Dimensions.get('window').width,
  thumbImageWidth = deviceWidth - (CARD_PADDING * 2),
  thumbImageHeight = thumbImageWidth * 0.6;

const styles = StyleSheet.create({
  wrapper: {
    ...coreStyles.sceneWrapper,
  },
  cardWrapper: {
    backgroundColor: 'white',
    marginBottom: 10,
    padding: CARD_PADDING,
  },
  headingText: {
    fontSize: 20,
    marginBottom: 10,
  },
  contentWrapper: {
    overflow: 'hidden',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
    borderWidth: 1,
    borderColor: '#f1f1f1',
  },
  thumbImage: {
    resizeMode: 'cover',
    width: thumbImageWidth,
    height: thumbImageHeight,
  },
  metaArea: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
  },
  investorText: {
    color: appConst.color.darkText,
    fontSize: 15,
    marginBottom: 4,
  },
  addressText: {
    color: appConst.color.darkText,
    fontSize: 12,
  },
  tailWrapper: {
    flexDirection: 'row',
    marginLeft: 5,
    marginRight: 5,
  },
  counterText: {
    flex: 1,
    color: appConst.color.darkText,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 30,
  },
});