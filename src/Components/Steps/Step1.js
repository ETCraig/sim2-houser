import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Step1.css';
import Header from '../Header/Header';
import Inactive from './../../assets/step_inactive.png';
import Active from './../../assets/step_active.png';
import { connect } from 'react-redux';
import { addPropertyInfo, delPropertyInfo } from '../../Redux/reducer';

class Step1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: props.name,
            description: props.description,
            nextBtnDisable: false
        }//HANDLEING OF STATES FOR ALL INPUTS AND BUTTONS
        this.handleNameChnage = this.handleNameChnage.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleNextBtnClick = this.handleNextBtnClick.bind(this);
        this.handleCancelBtnClick = this.handleCancelBtnClick.bind(this);
    }//VAL = INPUT
    handleNameChnage(val) {
        this.setState({ name: val });
    }
    handleDescChange(val) {
        this.setState({ description: val });
    }//TAKES THE STATES AND PLACES THEM IN ADDPROPINFO
    handleNextBtnClick() {
        this.props.addPropertyInfo({
            name: this.state.name,
            description: this.state.description
        });
    }
    handleCancelBtnClick() {
        this.props.delPropertyInfo();
    }
    render() {
        return (
            <div className='App'>
                <Header />
                <div className='step1-content'>
                    <div className='step1-subHdr'>
                        Add New Listing
                            <Link to='/Dashboard'><button onClick={this.handleCancelBtnClick} className='step1-cancel-btn'>Cancel</button></Link>
                    </div>

                    <p>Step 1</p>
                    <div className='step1-indicator'>
                        <img src={Active} alt='step1-active-circle' />
                        <img src={Inactive} alt='step-innactive-circle' />
                        <img src={Inactive} alt='step-innactive-circle' />
                        <img src={Inactive} alt='step-innactive-circle' />
                        <img src={Inactive} alt='step-innactive-circle' />
                    </div>

                    <div className='step1-input-wpr'>
                        <div className='step1-input-title'>Property Name</div>
                        <input onChange={(e) => this.handleNameChnage(e.target.value)} className='step1-input-name' type='text' value={this.state.name} />
                        <div className='step1-input-title'>Property Description</div>
                        <textarea onChange={(e) => this.handleDescChange(e.target.value)} className='step1-input-description' type='text' value={this.state.description} />
                    </div>

                    <div className='step1-btn-wpr'>
                        <Link to='./Step-2'><button onClick={this.handleNextBtnClick} className='step1-btn-next' disable={this.state.nextBtnDisable}>Next Step</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        name: state.name,
        description: state.description
    }
}
//REDUCER IN USE
export default connect(mapStateToProps, { addPropertyInfo, delPropertyInfo })(Step1);