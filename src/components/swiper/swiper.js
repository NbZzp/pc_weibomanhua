import React, { Component } from 'react'
import Swiper from "swiper"
import './swiper.css'

export default class Swiper1 extends Component{
    render(){
        return(
            <div className="swiper-container" ref = {(elem)=>{this.swiperContainer = elem}}>
                <div className="swiper-wrapper">
                    <div className="swiper-slide"><img className = "swiper-slide-img" alt = "swiper" src = {'http://img.manhua.weibo.com/adv/2017/11/21/1pEUckHJ.jpg'}/></div>
                    <div className="swiper-slide"><img className = "swiper-slide-img" alt = "swiper" src = {'http://img.manhua.weibo.com/adv/2017/11/27/aaSYdgo9.jpg'}/></div>
                    <div className="swiper-slide"><img className = "swiper-slide-img" alt = "swiper" src = {'http://img.manhua.weibo.com/adv/2017/11/21/vrgzCWtw.jpg'}/></div>
                    <div className="swiper-slide"><img className = "swiper-slide-img" alt = "swiper" src = {'http://img.manhua.weibo.com/adv/2016/02/05/RIB8TWZn.jpg'}/></div>
                    <div className="swiper-slide"><img className = "swiper-slide-img" alt = "swiper" src = {'http://img.manhua.weibo.com/adv/2017/11/27/aaSYdgo9.jpg'}/></div>
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>      
            </div>
        )
    }
    componentDidMount(){
        new Swiper(this.swiperContainer, {
            slidesPerView: 1,
            spaceBetween: 30,
            //无线循环
            loop: true,
            //自动播放
            autoplay: true,
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
              
            // 如果需要前进后退按钮
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },

		});
    }
}