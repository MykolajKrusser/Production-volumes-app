import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Line} from 'react-chartjs-2';
import * as action from '../../store/actions/actionTypes';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

import classes from './Workflow.css';

class Workflow extends Component{
    
    render(){
        const months = this.props.prodVolData.labels;
        let employers = this.props.prodVolData.datasets[0].data;

        let employersList = employers.map((employer, index)=>{
            return <li key={employer * Math.random()}><Input id={index} onChange={this.props.onEmployerAmountHandler} value={employer} width='50px'/></li>
        })

        let monthsList = months.map(month=>{
            return <li key={month}>{month}</li>
        })

        const data = {
            labels: this.props.prodVolData.labels,
            datasets: [
                {
                  label: this.props.prodVolData.datasets[0].label,
                  fill: false,
                  lineTension: 0.1,
                  backgroundColor: '#1e70bf',
                  borderColor: '#1e70bf',
                  borderCapStyle: 'butt',
                  borderDash: [],
                  borderDashOffset: 0.0,
                  borderJoinStyle: 'miter',
                  pointBorderColor: '#1e70bf',
                  pointBackgroundColor: '#1e70bf',
                  pointBorderWidth: 1,
                  pointHoverRadius: 5,
                  pointHoverBackgroundColor: '#1e70bf',
                  pointHoverBorderColor: '#1e70bf',
                  pointHoverBorderWidth: 2,
                  pointRadius: 1,
                  pointHitRadius: 10,
                  data: this.props.prodVolData.datasets[0].data
                }
            ]
        }

        return(
            <section className={classes.Workflow}>
                <div className={classes.Table}>
                    <ol>
                        {monthsList}
                    </ol>
                    <ul>
                        {employersList}
                    </ul>
                    <div className={classes.Line}>
                        <Line 
                            data={data}
                            width={100}
                            height={100}
                            options={{
                                maintainAspectRatio: false,
                                title: this.props.prodVolData.options.title
                            }}
                        />
                    </div>
                </div>
            </section>
        );
    }
}

const mapStoP = state =>{
    return{
        prodVolData: state.prodVolData
    };
};

const mapDtoP = dispatch => {
    return{
        onEmployerAmountHandler: (event)=>dispatch({type: action.EMPOLOYER_AMOUNT_HANDLER, event: event})
    }
}

export default connect(mapStoP, mapDtoP)(Workflow);