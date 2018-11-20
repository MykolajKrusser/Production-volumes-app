import React, {Component} from 'react';
import {Line, Bar} from 'react-chartjs-2';

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
                    data:[142, 164, 146, 184, 154, 187, 195, 148, 164, 164, 187, 178],
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
            ]
        },
        productivityRatio: 1.6
    }

    componentDidMount(){
        this.productivityRatio();
    }

    productivityRatio = ()=>{
        
    }

    render(){
        console.log(this.state.prodVolData.datasets[0].data)
        return(
            <section>
                <Bar
                    data={this.state.prodVolData}
                    width={100}
                    height={400}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </section>
        );
    }
}

export default Main;