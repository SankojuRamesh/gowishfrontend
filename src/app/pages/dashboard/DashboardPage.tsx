import react from 'react';
import './dashboard.scss'
import { Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const DashboardPage = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Templates',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Users',
        data: [45, 39, 60, 70, 46, 30, 30],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      // legend: {
      //   position: 'top',
      // },
      title: {
        display: true,
        text: 'Monthly Sales Data',
      },
    },
  };
    return (
        <div className='p-20'>
          <div className='d-flex justify-content-between flex-wrap'>
          <Card
          bg={'primary'}
          // key={variant}
          text={'white'}
          style={{ width: '22rem' }}
          className="mb-2 mx-3"
        >
          <Card.Body className='mt-4 text-center'>
            <Card.Title className='fs-1'>20</Card.Title>
            <Card.Text className='fs-3'>
              Admins
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg={'info'}
          // key={variant}
          text={'white'}
          style={{ width: '22rem' }}
          className="mb-2 mx-3"
        >
          <Card.Body className='mt-4 text-center'>
            <Card.Title className='fs-1'>65</Card.Title>
            <Card.Text className='fs-3'>
              Employees
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg={'success'}
          // key={variant}
          text={'white'}
          style={{ width: '22rem' }}
          className="mb-2 mx-3"
        >
          <Card.Body className='mt-4 text-center'>
            <Card.Title className='fs-1'>258</Card.Title>
            <Card.Text className='fs-3'>
              Users
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          bg={'warning'}
          // key={variant}
          text={'white'}
          style={{ width: '22rem' }}
          className="mb-2 mx-3"
        >
          <Card.Body className='mt-4 text-center'>
            <Card.Title className='fs-1'>365</Card.Title>
            <Card.Text className='fs-3'>
              Templates
            </Card.Text>
          </Card.Body>
        </Card>
          </div>
        <div className='w-100 h-700px'>
          <Bar data={data} options={options} />
        </div>
        </div>
    )
}

export default DashboardPage;