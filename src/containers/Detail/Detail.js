import React, {Component} from 'react'
import Header from '../../components/Header'
import {getDetail} from '../../api/home'
import './detail.css'
export default class Detail extends Component {
    constructor() {
        super()
        this.state={
            data:{}
        }
    }

     componentWillMount(){
        let data = this.props.location.data || null
        if (data) {
            this.setState({
                data
            })

        }
        else {
            let id = this.props.match.params.lessonid
            let _this=this
            getDetail(id).then(function (res) {
                return res.json()
            }).then(function (j) {
                data=j.data
                console.log('----------')
                console.log(data)
                _this.setState({
                    data
                })
            })

        }


    }

    render() {

        return (
            <div>
                <Header>课程详情</Header>
                <p className={'detail'}><img src={this.state.data.imgurl} alt=""/></p>
            </div>
        )
    }
}
