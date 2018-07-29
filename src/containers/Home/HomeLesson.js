import React, {Component} from 'react'
import {Link} from 'react-router-dom'

export default class HomeLesson extends Component {
    // constructor() {
    //     super()
    // }

    render() {
        return (
            <ul className={'lesson-wrap'}>
                {
                    this.props.lists.map((item, index) => {
                        return (

                            <li key={index}>
                                {/*data会放到location中;不好的地方是刷新后数据就会消失*/}
                                <Link to={{pathname:`/detail/${item.id}` ,data:item}}>
                                    <img src={item.imgurl} alt={item.title}/>
                                    <p><span>{item.title}</span></p>
                                </Link>
                            </li>
                        )
                    })
                }

            </ul>
        )
    }
}
