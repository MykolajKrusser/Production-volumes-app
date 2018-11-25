import * as actionsType from '../actions/actionTypes';

const initialState = {
    prodVolData:{
        labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        datasets:[
            {
                label: 'Employers amount',
                data:[142, 164, 146, 184, 154, 187, 195, 148, 164, 164, 187, 178],
                backgroundColor: [
                    "rgb(65, 131, 196)",
                    "rgb(65, 131, 196)",
                    "rgb(65, 131, 196)",
                    "rgb(65, 131, 196)",
                    "rgb(65, 131, 196)",
                    "rgb(65, 131, 196)",
                    "rgb(65, 131, 196)",
                    "rgb(65, 131, 196)",
                    "rgb(65, 131, 196)",
                    "rgb(65, 131, 196)",
                    "rgb(65, 131, 196)",
                    "rgb(65, 131, 196)",
                    "rgb(65, 131, 196)"
                ]
            },
            {
                label: 'Production Volumes',
                data:[],
                backgroundColor: [
                    "rgb(79, 83, 99)",
                    "rgb(79, 83, 99)",
                    "rgb(79, 83, 99)",
                    "rgb(79, 83, 99)",
                    "rgb(79, 83, 99)",
                    "rgb(79, 83, 99)",
                    "rgb(79, 83, 99)",
                    "rgb(79, 83, 99)",
                    "rgb(79, 83, 99)",
                    "rgb(79, 83, 99)",
                    "rgb(79, 83, 99)",
                    "rgb(79, 83, 99)",
                    "rgb(79, 83, 99)"
                ]
            }
        ],
        options:{
            title:{
                display: true,
                text: "Employers amount with productivity ratio",
                fontSize: 25
            }
        }
        
    },
    totalProdVol: null,
    productivityRatio: 1.3
}

const reducer = (state=initialState, actions)=>{
    switch(actions.type){
        case actionsType.PRODUCTION_VOL_MONTH:
            const oldProdVolData = state.prodVolData;
            const updatedProdVolData = {...oldProdVolData};
            const updatedProdVolDataset = updatedProdVolData.datasets[0].data.map((x)=>(
                Math.round(x * state.productivityRatio)
                )
            );
            updatedProdVolData.datasets[1].data = updatedProdVolDataset;

            const prodVolPerMont = state.prodVolData.datasets[1].data
            const totalProdVo = prodVolPerMont.reduce((sum, current)=>(
                sum + current
            ));
            return{
                ...state,
               prodVolData: updatedProdVolData,
               totalProdVol: totalProdVo
            };
        case actionsType.PRODUCTION_VOL_SUM:
            const prodVolPerMonth = state.prodVolData.datasets[1].data;
            const totalProdVol = prodVolPerMonth.reduce((sum, current)=>(
                sum + current
            ));
            return{
                ...state,
                totalProdVol: totalProdVol
            };
        case actionsType.PRODUCTION_RATIO_HANDLER:
            const eventValue = actions.event.target.value;
            return{
                ...state,
                productivityRatio: eventValue
            };
        case actionsType.EMPOLOYER_AMOUNT_HANDLER:
            const oldState = state.prodVolData;
            const updatedProdVol = {...oldState};
            const updatedEmployersData = updatedProdVol.datasets[0].data;
            
            updatedEmployersData[actions.event.target.id] = Number(actions.event.target.value)
            
            return{
                ...state,
                prodVolData: updatedProdVol
            };
        default :
            return state;
    }
}

export default reducer; 