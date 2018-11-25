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

export const EmployerAmountHandler = (event)=>{
    return{
        type: actionTypes.EMPOLOYER_AMOUNT_HANDLER,
        event: event
    };
};