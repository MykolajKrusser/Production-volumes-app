import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';
import {connect} from 'react-redux';
import * as action from '../../store/actions/actionTypes';

import Input from '../../component/UI/Input/Input';
import Button from '../../component/UI/Button/Button';

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
                <Input 
                    type='text' 
                    onChange={this.props.onProductivityRatioHandler} 
                    value={this.props.productivityRatio}
                    title='0.5-2'/>
                <Button onClick={this.props.onProductionVolMonth}>Calc</Button>
                <p className={classes.TotalProd}>
                    Production volume per year = {this.props.totalProdVol} parts.
                </p>
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