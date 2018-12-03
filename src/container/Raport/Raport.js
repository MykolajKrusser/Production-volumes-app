import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as action from '../../store/actions/actionTypes';
import classes from './Raport.css';

import Control from '../../components/UI/Control/Control';

class Raport extends Component{
    componentDidMount(){
        this.props.onEmployersSalary();
        this.props.onProductionVolMonth();
        this.props.onIncomesBeforTax();
        this.props.onIncomesTaxesMonth();
        this.props.onNetIncomeMonth();
    }
    
    forcedCall = ()=>{
        this.props.onEmployersSalary();
        this.props.onProductionVolMonth();
        this.props.onIncomesBeforTax();
        this.props.onIncomesTaxesMonth();
        this.props.onNetIncomeMonth();
    }

    render(){
        const months = this.props.prodVolData.labels.map((month, index)=>{
            return <div key={index}>{month}</div>
        });

        const empl = this.props.prodVolData.datasets[0].data.map((empl, index)=>{
            return <div key={index}>{empl}</div>
        });

        const salary = this.props.employersSalary.map((emplSal, index)=>{
            return <div key={index}>{emplSal} $</div>
        });

        const prodVolum = this.props.prodVolData.datasets[1].data.map((vol, index)=>{
            return <div key={index}>{vol} parts</div>
        });

        const incomesBTax = this.props.incomesBeforTax.map((inc, index)=>{
            return <div key={index}>{inc} $</div>
        });

        const taxesMonth = this.props.taxesMonth.map((tax, index)=>{
            return <div key={index}>{tax} $</div>
        });

        const netIncome = this.props.netIncome.map((net, index)=>{
            return <div key={index}>{net} $</div>
        });

        return(
            <section className={classes.Raport}>
                <div className={classes.Table}>
                    <div className={classes.Header}>
                        <h2>Months</h2>
                        {months}
                    </div>
                    <div className={classes.Header}>
                        <h2>Employers amount</h2>
                        {empl}
                    </div>
                    <div className={classes.Header}>
                        <h2>Employers salary</h2>
                        {salary}
                    </div>
                    <div className={classes.Header}>
                        <h2>ProdVolumes</h2>
                        {prodVolum}
                    </div>
                    <div className={classes.Header}>
                        <h2>Incomes before Taxes</h2>
                        {incomesBTax}
                    </div>
                    <div className={classes.Header}>
                        <h2>Taxes</h2>
                        {taxesMonth}
                    </div>
                    <div className={classes.Header}>
                        <h2>Net income</h2>
                        {netIncome}
                    </div>
                </div>
                <div className={classes.ControlPanel}>
                    <Control
                        value={this.props.salaryPerHour}
                        input={this.props.onChangeControlHandler}
                        click={this.forcedCall}
                    >Employers salary per hour</Control>
                    <Control
                        value={this.props.workTimeMonth}
                        input={this.props.onChangeworkTimeMonth}
                        click={this.forcedCall}
                    >Work hours per month</Control>
                    <Control
                        value={this.props.pricePerPart}
                        input={this.props.onChangepricePerPart}
                        click={this.forcedCall}
                    >Production price</Control>
                    <Control
                        value={this.props.tax}
                        input={this.props.onChangetax}
                        click={this.forcedCall}
                    >Taxes rate</Control>
                </div>
            </section>
        );
    };
};


const mapStoP = state =>{
    return{
        prodVolData: state.prodVolData,
        totalProdVol: state.totalProdVol,
        productivityRatio: state.productivityRatio,
        employersSalary: state.employersSalary,
        salaryPerHour: state.salaryPerHour,
        incomesBeforTax: state.incomesBeforTax,
        taxesMonth: state.taxesMonth,
        netIncome: state.netIncome,
        workTimeMonth: state.workTimeMonth,
        pricePerPart: state.pricePerPart,
        tax: state.tax
    }
}

const mapDtoP = dispatch => {
    return{
        onEmployersSalary: ()=> dispatch({type: action.EMPOLOYER_SALARY}),
        onProductionVolMonth: ()=> dispatch({type: action.PRODUCTION_VOL_MONTH}),
        onIncomesBeforTax: ()=>dispatch({type: action.INCOMES_PER_MONTH}),
        onIncomesTaxesMonth: ()=>dispatch({type: action.TAX_MONTH}),
        onNetIncomeMonth: ()=>dispatch({type: action.NET_INCOMES_MONTH}),
        onChangeControlHandler: (event)=>dispatch({type: action.CHANGE_CONTROL_HANDLER, event: event}),
        onChangeworkTimeMonth: (event)=>dispatch({type: action.CHANGE_WORKTIME_HANDLER, event: event}),
        onChangepricePerPart: (event)=>dispatch({type: action.CHANGE_PRICEPART_HANDLER, event: event}),
        onChangetax: (event)=>dispatch({type: action.CHANGE_TAX_HANDLER, event: event}),
    }
}
export default connect(mapStoP, mapDtoP)(Raport);