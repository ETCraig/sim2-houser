import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Step4.css';
import Header from '../Header/Header';
import Inactive from './../../assets/step_inactive.png';
import Active from './../../assets/step_active.png';
import Completed from './../../assets/step_completed.png';
import { connect } from 'react-redux';
import { addPropertyInfo, delPropertyInfo } from '../../Redux/reducer'

class Step4 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            loan: props.loan,
            mortgage: props.mortgage,
            nextBtnDisable: false
        }
        this.handleLoanChnage = this.handleLoanChnage.bind(this);
        this.handleMortgageChnage = this.handleMortgageChnage.bind(this);
        this.handleNextBtnClick = this.handleNextBtnClick.bind(this);
        this.handleCancelBtnClick = this.handleCancelBtnClick.bind(this);
    }
    handleLoanChnage(val) {
        this.setState({ loan: val });
    }
    handleMortgageChnage(val) {
        this.setState({ mortgage: val });
    }
    handleNextBtnClick() {
        this.props.addPropertyInfo({
            loan: this.state.loan,
            mortgage: this.state.mortgage
        });
    }
    handleCancelBtnClick() {
        this.props.delPropertyInfo();
    }
    render() {
        return (
            <div className='App'>
                <Header />
                <div className='step4-content'>
                    <div className='step4-subHdr'>
                        Add New Listing
                        <Link to='/Dashboard'><button onClick={this.handleCancelBtnClick} className='step4-cancel-btn'>Cancel</button></Link>
                    </div>

                    <p>Step 4</p>
                    <div className='step4-indicator'>
                        <img src={Completed} alt='step4-compCheck' />
                        <img src={Completed} alt='step4-compCheck' />
                        <img src={Completed} alt='step4-compCheck' />
                        <img src={Active} alt='step4-active-circle' />
                        <img src={Inactive} alt='step4-inactive-circle' />
                    </div>

                    <div className='step4-input-wpr'>
                        <div className='step4-input-title'>Loan Amount</div>
                        <input onChange={(e) => this.handleLoanChnage(e.target.value)} className='step4-input-loan' type='text' value={this.state.loan} />
                        <div className='step4-input-title'>Monthly Mortgage</div>
                        <input onChange={(e) => this.handleMortgageChnage(e.target.value)} className='step4-input-mortgage' type='text' value={this.state.mortgage} />
                    </div>

                    <div className='step4-btn-wpr'>
                        <Link to='./Step-3'><button className='step4-btn-prev'>Previous Page</button></Link>
                        <Link to='./Step-5'><button onClick={this.handleNextBtnClick} className='step4-btn-next' disabled={this.state.nextBtnDisable}>Next Step</button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        loan: state.loan,
        mortgage: state.mortgage
    }
}

export default connect(mapStateToProps, { addPropertyInfo, delPropertyInfo })(Step4);