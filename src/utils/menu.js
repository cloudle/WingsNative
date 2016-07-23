import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import * as textStyles from '../styles/text';
import * as appConst from '../utils/const';

import Icon from '../utils/fontello';
import ResponsibleTouchArea from '../component/ResponsibleTouchArea';

function MenuItem ({ title, icon }) {
  return <ResponsibleTouchArea innerStyle={styles.menuItem}>
    <Icon name={icon} style={styles.menuIcon}/>
    <Text style={styles.menuText}>{title}</Text>
  </ResponsibleTouchArea>
}

class Menu extends Component {
  render () {
    let menuItems = [{
      title: 'Khách hàng',
      icon: 'users',
    }, {
      title: 'Công việc',
      icon: 'date',
    }, {
      title: 'Dự án',
      icon: 'science',
    }, {
      title: 'Chính sách',
      icon: 'notebook',
    }, {
      title: 'Tin tức',
      icon: 'news-paper',
    }, {
      title: 'Báo cáo',
      icon: 'graph1'
    }];

    return <View style={styles.wrapper}>
      <View style={styles.heading}>
        <Text>Nope</Text>
      </View>
      <View style={styles.companySelector}>
        <Text style={styles.companySelectorText}>
          <Text style={{color: '#acb4c6'}}>Sàn </Text>
          <Text>United Realtor</Text>
        </Text>
        <Icon style={styles.companySelectorArrow} name="right-open"/>
      </View>
      <View style={styles.content}>
        {menuItems.map((item, index) => {
          return <ResponsibleTouchArea key={index} rippleColor="lightgray" innerStyle={styles.menuItem}>
            <Icon style={styles.menuIcon} name={item.icon}/>
            <Text style={styles.menuText}>{item.title}</Text>
          </ResponsibleTouchArea>
        })}
      </View>
      <View style={styles.copyrightWrapper}>
        <Text style={styles.copyrightText}>
          <Text>Bản quyền thuộc </Text>
          <Text style={{color: appConst.mainBlue, fontWeight: '600'}}>Twin Software Solutions</Text>
        </Text>
        <Text style={styles.versionText}>
          <Text style={{fontWeight: '600'}}>Phiên bản 2.0 </Text>
          <Text>Cập nhật cuối 10:30 12/10/2016</Text>
        </Text>
      </View>
    </View>
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white'
  },
  heading: {
    height: 180,
    backgroundColor: '#3b5998',
  },
  companySelector: {
    backgroundColor: '#4264aa',
    padding: 14,
    flexDirection: 'row',
  },
  companySelectorText: {
    flex: 1,
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  companySelectorArrow: {
    color: 'white',
    fontSize: 18,
  },
  content: {
    flex: 1,
  },
  menuItem: {
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 18,
    paddingRight: 18,
    flexDirection: 'row',
  },
  menuText: {
    marginLeft: 10,
    lineHeight: 18,
    backgroundColor: 'transparent',
  },
  menuIcon: {
    fontSize: 20,
    color: '#555555',
    backgroundColor: 'transparent',
  },
  copyrightWrapper: {
    padding: 18,
    paddingTop: 5,
  },
  copyrightText: {
    fontSize: 12,
    marginBottom: 3,
  },
  versionText: {
    fontSize: 10,
    color: '#666666',
  }
});

function stateToProps (state) {
  return {
    counter: state.app.counter
  }
}

function dispatchToProps (state) {
  return {}
}

export default connect(stateToProps, dispatchToProps)(Menu);