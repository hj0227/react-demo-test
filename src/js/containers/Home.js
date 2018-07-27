import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classnames from 'classNames';

import PureRenderMixin from 'react-addons-pure-render-mixin';
import reactMixin from 'react-mixin';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    componentWillMount() {
    }

    render() {
        
        return (
            <div className="homeView">
                欢迎来到    Home
            </div>
        )
    }
}

reactMixin(Home.prototype, PureRenderMixin);


function mapStateToProps(state) {
    return {
        app: state.app
    }
}

function mapDispatchToProps(dispatch) {
    return {
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);