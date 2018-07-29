import React,{Component} from 'react'
//轮播图组件
import ReactSwipe from 'react-swipe';
export default class HomeSlider extends Component{
    constructor(){
        super()
        this.state={
            index:0
        }
    }

    render(){
        let _this=this
        let opts={continuous: true,
            speed: 400,
            auto: 1000,
            callback: function(index, elem) {
                _this.setState({
                    index:index
                })
            },
        }
        return (
            <div className={'loop'}>
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    {
                        this.props.lists.map((item, index) => {
                            return (
                                <div key={index}><img src={item.url} alt=""/></div>
                            )

                        })
                    }
                </ReactSwipe>
                <div className={'slider-dots'}>
                    {
                        this.props.lists.map((item, index) => {
                            return (
                                <span key={index} className={this.state.index===index ? 'active': ''}></span>
                            )

                        })
                    }

                </div>
            </div>

        )
    }
}