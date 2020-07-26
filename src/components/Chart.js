import React from 'react'
import {Bar,Doughnut,Pie,Radar,Bubble,Polar} from 'react-chartjs-2';
import Grid from '@material-ui/core/Grid';

const bar_data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Bar dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 2,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40,0]
      }
    ]
  };

  const doughnut_pie_data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

const radar_data = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56, 55, 40]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [28, 48, 40, 19, 96, 27, 100]
      }
    ]
  };
  
  const bubble_data = {
    labels: ['January'],
    datasets: [
      {
        label: 'My First dataset',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 2,
        pointHitRadius: 10,
        data: [{x:0,y:15,r:5},{x:5,y:5,r:15},{x:20,y:20,r:5},{x:12,y:10,r:10}]
      }
    ]
  };

  const polar_data = {
    datasets: [{
      data: [
        11,
        16,
        7,
        3,
        14
      ],
      backgroundColor: [
        '#FF6384',
        '#4BC0C0',
        '#FFCE56',
        '#E7E9ED',
        '#36A2EB'
      ],
      label: 'My dataset' // for legend
    }],
    labels: [
      'Red',
      'Green',
      'Yellow',
      'Grey',
      'Blue'
    ]
  };

export default function Chart() {

    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <h2>Bar Chart Demo</h2>
                    <Bar data={bar_data} width={100} height={150} options={{maintainAspectRatio: false}}/>
                </Grid>
                <Grid item xs={6}>
                    <h2>Doughnut Chart Demo</h2>
                    <Doughnut data={doughnut_pie_data}/>
                </Grid>
                <Grid item xs={6}>
                    <h2>Pie Chart Demo</h2>
                    <Pie data={doughnut_pie_data} />
                </Grid>
                <Grid item xs={6}>
                    <h2>Radar Chart Demo</h2>
                    <Radar data={radar_data} />
                </Grid>
                <Grid item xs={6}>
                    <h2>Bubble Chart Demo</h2>
                    <Bubble data={bubble_data} />
                </Grid>
                <Grid item xs={6}>
                    <h2>Polar Chart Demo</h2>
                    <Polar data={polar_data} />
                </Grid>
            </Grid>
        </div>
    )
}
