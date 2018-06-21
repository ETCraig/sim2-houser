import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Step2.css';
import Header from '../Header/Header';
import Inactive from './../../assets/step_inactive.png';
import Active from './../../assets/step_active.png';
import Completed from './../../assets/step_completed.png';
import { connect } from 'react-redux';
import { addPropertyInfo, delPropertyInfo } from '../../Redux/reducer'

class Step2 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            address: props.address,
            city: props.city,
            state: props.state,
            zip: props.zip,
            nextBtnDisabled: false
        }
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this);
        this.handleZipChange = this.handleZipChange.bind(this);
        this.handleNextBtnClick = this.handleNextBtnClick.bind(this);
        this.handleCancelBtnClick = this.handleCancelBtnClick.bind(this);
    }
    handleAddressChange(val) {
        this.setState({ address: val });
    }
    handleCityChange(val) {
        this.setState({ city: val });
    }
    handleStateChange(val) {
        this.setState({ state: val });
    }
    handleZipChange(val) {
        this.setState({ zip: val });
    }
    handleNextBtnClick() {
        this.props.addPropertyInfo({
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip
        });
    }
    handleCancelBtnClick() {
        this.props.delPropertyInfo()
    }
    render() {
        return (
            <div className='App'>
                <Header />
                <div className='step2-content'>
                    <div className='step2-subHdr'>
                        Add New Listing
                            <Link to='/Dashboard'><button onClick={this.handleCancelBtnClick} className='step2-cancel-btn'>Cancel</button></Link>
                    </div>

                    <p>Step 2</p>
                    <div className='step2-indicator'>
                        <img src={Completed} alt='step2-compCheck' />
                        <img src={Active} alt='step2-active-circle' />
                        <img src={Inactive} alt='step2-inactive-circle' />
                        <img src={Inactive} alt='step2-inactive-circle' />
                        <img src={Inactive} alt='step2-inactive-circle' />
                    </div>

                    <div className='step2-input-wpr'>
                        <div className='step2-input-title'>Address</div>
                        <input onChange={(e) => this.handleAddressChange(e.target.value)} className='step2-input-address' type='text' value={this.state.address} />
                        <div className='step2-input-subWpr'>
                            <div className='step-input-city-title'>City</div>
                            <input onChange={(e) => this.handleCityChange(e.target.value)} className='step2-input-city' type='text' value={this.state.city} />
                            <div className='step2-input-state-title'>State</div>
                            <input onChange={(e) => this.handleStateChange(e.target.value)} className='step2-input-state' type='text' value={this.state.state} />
                        </div>
                        <div className='step2-input-title'>Zip</div>
                        <input onChange={(e) => this.handleZipChange(e.target.value)} className='step2-input-zip' type='text' value={this.state.zip} />
                    </div>

                    <div className='step2-btn-wpr'>
                        <Link to='./Step-1'><button className='step2-btn-prev'>Previous Step</button></Link>
                        <Link to='./Step-3'><button onClick={this.handleNextBtnClick} className='step2-btn-next' disabled={this.state.nextBtnDisabled}>Next Step </button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        address: state.address,
        city: state.city,
        state: state.state,
        zip: state.zip
    }
}

export default connect(mapStateToProps, { addPropertyInfo, delPropertyInfo })(Step2);