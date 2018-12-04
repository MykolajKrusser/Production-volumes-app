import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import {connect} from 'react-redux';
import * as action from '../../store/actions/actionTypes';

import Control from '../../components/UI/Control/Control';
import Calendar from '../../components/UI/Calendar/Calendar';

import classes from './Main.css';

class Main extends Component{
    componentDidMount(){
        this.props.onProductionVolMonth();
        this.props.onProductionVolSum();
    }
    render(){
        return(
            <section className={classes.Main}>
                <div className={classes.Cont}>
                    <Bar
                        data={this.props.prodVolData}
                        width={100}
                        height={100}
                        options={{
                            maintainAspectRatio: false,
                            title: this.props.prodVolData.options.title
                        }}
                    />
                </div>
                <div className={classes.Control}>
                    <Control  type='text' 
                        input={this.props.onProductivityRatioHandler} 
                        value={this.props.productivityRatio}
                        title='0.5-2'
                        click={this.props.onProductionVolMonth}>
                    Production<br/> volume <br/> per year = {this.props.totalProdVol} parts.
                    </Control>
                    <Calendar/>
                </div>
                
            </section>
        );
    }
}

const mapStoP = state =>{
    return{
        prodVolData: state.prodVolData,
        totalProdVol: state.totalProdVol,
        productivityRatio: state.productivityRatio
    };
};

const mapDtoP = dispatch => {
    return{
        onProductionVolMonth: ()=> dispatch({type: action.PRODUCTION_VOL_MONTH}),
        onProductionVolSum: ()=> dispatch({type: action.PRODUCTION_VOL_SUM}),
        onProductivityRatioHandler: (event)=> dispatch({type: action.PRODUCTION_RATIO_HANDLER, event: event})
    }
}

export default connect(mapStoP, mapDtoP)(Main);