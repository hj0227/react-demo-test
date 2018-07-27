import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classNames';

import PureRenderMixin from 'react-addons-pure-render-mixin';
import reactMixin from 'react-mixin';


import '../../css/app.css';
import {
    calculateNum,
} from '../actions/app';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedSignIconIndex:-1,
            signIconArry: [
                '加', '减', '乘', '除'
            ]
        }
    }

    componentWillMount() {
    }
    _calculate(index) {
        const { calculateNum } = this.props;
        let a = (this.refs.num1.value).replace(/\s/g, '');
        let b = (this.refs.num2.value).replace(/\s/g, '');
        if(!a){
            window.alert('请输入第一个数');
            return false;
        }
        if(!b){
            window.alert('请输入第二个数');
            return false;
        }
        if(isNaN(a)){
            window.alert('第一个数，请输入正确的数字');
            return false;
        }
        if(isNaN(b)){
            window.alert('第二个数，请输入正确的数字');
            return false;
        }
        calculateNum(a, b,index);
        this.setState({
            selectedSignIconIndex:index,
        })
    }
    _goHome(){
        window.location.hash="#/Home";
    }

    render() {
        const { app } = this.props;
        const { selectedSignIconIndex, signIconArry } = this.state;
        return (
            <div className="pageView">
                <p style={{color:'red',textAlign:'center',fontSize:'26px'}}>react-demo</p>
                <div className="pageContainer">
                    <div className="flex2">
                        <div><span>请输入第一个数：</span>
                            <input className="numInput" ref="num1" />
                        </div>
                        <div className="mt-100">
                            <span>请输入第二个数：</span>
                            <input className="numInput" ref="num2" />
                        </div>
                    </div>

                    <div className="flex1">
                        {
                            signIconArry && signIconArry.length > 0 ? (
                                signIconArry.map((item, index) => {
                                    return (
                                        <div className={classnames('equal',{'checkedIcon':selectedSignIconIndex==index})} key={index} onClick={() => this._calculate(index)}>
                                            {item}
                                        </div>
                                    )
                                })
                            ) : null
                        }
                    </div>
                    <div className="flex1 result">{app.lastNum}</div>
                </div>
                <p className="routerBtn" onClick={()=>this._goHome()}>react-router   test  btn</p>
            </div>
        )
    }
}

reactMixin(App.prototype, PureRenderMixin);


function mapStateToProps(state) {
    return {
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
        calculateNum: bindActionCreators(calculateNum, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);