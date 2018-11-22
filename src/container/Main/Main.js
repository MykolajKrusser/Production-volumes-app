import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

import Input from '../../component/UI/Input/Input';
import Button from '../../component/UI/Button/Button';

import classes from './Main.css';

class Main extends Component{
    state = {
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
        prodVol: null,
        productivityRatio: 1.3
    }

    componentDidMount(){
        this.productivityRatio();
        this.totalProdVol();
    }

    productivityRatio = ()=>{
        const oldProdVolData = this.state.prodVolData;
        const updatedProdVolData = {...this.state.prodVolData};
        const updatedProdVolDataset = oldProdVolData.datasets[0].data.map((x)=>(
            Math.round(x * this.state.productivityRatio)
            )
        );
        updatedProdVolData.datasets[1].data = updatedProdVolDataset;
        this.setState({prodVolData: updatedProdVolData});
        this.totalProdVol();
    };

    totalProdVol = ()=>{
        const prodVolPerMonth = this.state.prodVolData.datasets[1].data
        const totalProdVol = prodVolPerMonth.reduce((sum, current)=>(
            sum + current
            ));
        this.setState({totalProdVol: totalProdVol})
    };

    productivityRatioHandler = (event)=>{
        this.setState({productivityRatio:  event.target.value })
    }
    render(){
        console.log(this.state.productivityRatio)
        return(
            <section className={classes.Main}>
                <div className={classes.Cont}>
                    <Bar
                        data={this.state.prodVolData}
                        width={100}
                        height={100}
                        options={{
                            maintainAspectRatio: false,
                            title: this.state.prodVolData.options.title
                        }}
                    />
                </div>
                <Input 
                    type='text' 
                    onChange={this.productivityRatioHandler} 
                    value={this.state.productivityRatio}
                    title='0.5-2'/>
                <Button onClick={this.productivityRatio}>Calc</Button>
                <p className={classes.TotalProd}>
                    Production volume per year = {this.state.totalProdVol} parts.
                </p>
            </section>
        );
    }
}

export default Main;