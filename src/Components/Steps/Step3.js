import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Step3.css';
import Header from '../Header/Header';
import Inactive from './../../assets/step_inactive.png';
import Active from './../../assets/step_active.png';
import Completed from './../../assets/step_completed.png';
import { connect } from 'react-redux';
import { addPropertyInfo, delPropertyInfo } from '../../Redux/reducer'

class Step3 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            imgUrl: props.imgUrl,
            nextBtnDisable: false
        }//HANDLEING OF STATES FOR ALL INPUTS AND BUTTONS
        this.handleImgUrlChnage = this.handleImgUrlChnage.bind(this);
        this.handleNextBtnClick = this.handleNextBtnClick.bind(this);
        this.handleCancelBtnClick = this.handleCancelBtnClick.bind(this);
    }//VAL = INPUT
    handleImgUrlChnage(val) {
        this.setState({imgUrl: val});
    }//TAKES THE STATES AND PLACES THEM IN ADDPROPINFO
    handleNextBtnClick() {
        this.props.addPropertyInfo({
            imgUrl: this.state.imgUrl
        });
    }
    handleCancelBtnClick() {
        this.props.delPropertyInfo();
    }
    render() {
        return(
            <div className = 'App'>
                <Header />
                <div className = 'step3-content'>
                    <div className = 'step3-subHdr'>
                        Add New Listing
                        <Link to = '/Dashboard'><button onClick = {this.handleImgUrlChnage} className = 'step3-cancel-btn'>Cancel</button></Link>
                    </div>

                    <p>Step 3</p>
                    <div className = 'step3-indicator'>
                        <img src = {Completed} alt = 'step3-compCheck' />
                        <img src = {Completed} alt = 'step3-compCheck' />
                        <img src = {Active} alt = 'step3-active-circle' />
                        <img src = {Inactive} alt = 'step3-inactive-circle' />
                        <img src = {Inactive} alt = 'step3-inactive-circle' />
                    </div>

                    <div className = 'step3-input-wpr'>
                        <img src = {this.state.imgUrl} className = 'step3-img-preview' alt = '' />
                            <div className = 'step3-input-title'>Image URL</div>
                            <input onChange = {(e) => this.handleImgUrlChnage(e.target.value)} className = 'step3-input-url' type = 'text' value = {this.state.imgUrl} />
                    </div>

                    <div className = 'step3-btn-wpr'>
                        <Link to = './Step-2'><button className = 'step3-btn-prev'>Previous Step</button></Link>
                        <Link to = './Step-4'><button onClick = {this.handleNextBtnClick} className = 'step3-btn-next' disabled = {this.state.nextBtnDisable}>Next Step</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        imgUrl: state.imgUrl
    }
}
//REDUCER IN USE
export default connect(mapStateToProps, {addPropertyInfo, delPropertyInfo}) (Step3);