import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Navigator,
} from 'react-native';

import Swiper from 'react-native-swiper';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Button from '../component/Button';

import * as appConst from '../utils/const';
import { signIn } from '../utils/routes';

export default class Greeting extends Component {
  constructor (props) {
    super(props);
  }

  navigateNext () {
    this.props.navigator.push({
      ...signIn,
      pushDirection: Navigator.SceneConfigs.FadeAndroid
    });
  }

  renderNextButton (flag) {
    if (flag) {
      return <Button
        caption="BẮT ĐẦU"
        wrapperStyle={styles.nextButton}
        weight="600"
        onPress={this.navigateNext.bind(this)}
        debounce={250}
      />
    }
  }

  render () {
    return <Swiper loop={false} dot={customDot} activeDot={customActiveDot}>
      {slides.map((slide, index) => {
        return <View style={styles.wrapper} key={index}>
          <Text style={styles.title}>{slide.title}</Text>
          <Ionicon
            name={slide.icon}
            style={styles.icon}/>
          <Text style={styles.benefits}>{slide.benefits}</Text>
          <Text style={styles.explain}>{slide.explain}</Text>
          {this.renderNextButton(slide.lastSlide)}
        </View>
      })}
    </Swiper>
  }

  renders () {
    return <ViewPager
      dataSource={slides}
      renderPage={this.renderSlide.bind(this)}
    />
  }
}

let deviceWidth = Dimensions.get('window').width,
  styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: appConst.mainBlue,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 20,
    },
    title: {
      color: 'white',
      fontSize: 22,
    },
    icon: {
      fontSize: 150,
      color: 'white',
      marginTop: 25,
    },
    benefits: {
      fontSize: 18,
      color: 'white',
      width: 220,
      textAlign: 'center',
      marginBottom: 20
    },
    explain: {
      fontSize: 14,
      color: 'white',
      width: 280,
      textAlign: 'center',
    },
    nextButton: {
      marginTop: 35,
      borderRadius: 2,
      width: 120,
    },
    dot: {
      backgroundColor:'rgba(0,0,0,.2)',
      width: 8,
      height: 8,
      borderRadius: 4,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
    },
    activeDot: {
      backgroundColor: 'white',
      width: 8,
      height: 8,
      borderRadius: 4,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
    }
  }),
  customDot = <View style={styles.dot}/>,
  customActiveDot = <View style={styles.activeDot}/>;

let slides = [{
  title: 'CHỦ ĐẦU TƯ',
  icon: 'ios-bulb',
  benefits: 'LÀM BRANDING, THU HÚT KHÁCH HÀNG',
  explain: 'Chi ngân sách cho branding marketing, tạo sự quan tâm của thị trường'
}, {
  title: 'CÔNG TY MÔI GIỚI',
  icon: 'ios-contacts',
  benefits: 'KẾT NỐI KHÁCH HÀNG QUAN TÂM',
  explain: 'Tìm kiếm, phân bổ, chăm sóc khách hàng hiệu quả. đẩy mạnh doanh số!',
}, {
  title: 'NHÂN VIÊN MÔI GIỚI',
  icon: 'ios-contact',
  benefits: 'TƯ VẤN, CHĂM SÓC KHÁCH HÀNG',
  explain: 'Tìm kiếm và truy cập thông tin khách hàng nhanh chóng trên mobile',
  lastSlide: true,
}];