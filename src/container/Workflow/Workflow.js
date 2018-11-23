import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../store/actions/actionTypes';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import classes from './Workflow.css';



class Workflow extends Component{
    
    render(){
    
        const months = this.props.prodVolData.labels;
        let employers = this.props.prodVolData.datasets[0].data;

        let employersList = employers.map(employer=>{
            return <li key={employer * Math.random()}>{employer}</li>
        })
        let monthsList = months.map(month=>{
            return <li key={month}>{month}</li>
        })
        return(
            <section className={classes.Workflow}>
                <div className={classes.Table}>
                    <ol>
                        {monthsList}
                    </ol>
                    <ul>
                        {employersList}
                    </ul>
                </div>
            </section>
        );
    }
}

const mapStoP = state =>{
    return{
        prodVolData: state.prodVolData,
    };
};

const mapDtoP = dispatch => {
    return{
        
    }
}

export default connect(mapStoP, mapDtoP)(Workflow);