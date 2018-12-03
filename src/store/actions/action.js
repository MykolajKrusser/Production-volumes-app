import * as actionTypes from './actionTypes';

export const productionVolSum = ()=>{
    return{
        type: actionTypes.PRODUCTION_VOL_SUM
    };
};

export const productionVolMonth = ()=>{
    return{
        type: actionTypes.PRODUCTION_VOL_MONTH
    }; 
};

export const productivityRatioHandler = (event)=>{
    return{
        type: actionTypes.PRODUCTION_RATIO_HANDLER,
        event: event
    };
};

export const employerAmountHandler = (event)=>{
    return{
        type: actionTypes.EMPOLOYER_AMOUNT_HANDLER,
        event: event
    };
};

export const employersSalary = ()=>{
    return{
        type: actionTypes.EMPOLOYER_SALARY
    };
};

export const incomesBeforTax = ()=>{
    return{
        type: actionTypes.INCOMES_PER_MONTH
    };
};

export const tax = ()=>{
    return{
        type: actionTypes.TAX_MONTH
    };
};

export const netIncomes = ()=>{
    return{
        type: actionTypes.NET_INCOMES_MONTH
    };
};

export const changeControlHandler = (event)=>{
    return{
        type: actionTypes.CHANGE_CONTROL_HANDLER,
        event: event,
    };
};
