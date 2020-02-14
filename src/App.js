/*global kakao */
import React, { Component } from 'react';
import './App.css';


class App extends Component{

  componentDidMount() {          
    var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    var options = { //지도를 생성할 때 필요한 기본 옵션
      center: new kakao.maps.LatLng(37.535133,127.0), //지도의 중심좌표.
      level: 8 //지도의 레벨(확대, 축소 정도)
    };

    var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
  }


  render(){
    return(
      <>
      <div>
        <div id="map" style={{width:"100%", height:"100vh"}}></div>
      </div>

       
       </>
    );
  }
}
export default App;