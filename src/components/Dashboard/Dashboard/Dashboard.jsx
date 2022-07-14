import React from 'react';
import './Dashboard.css';
import Sidebar from '../Sidebar/Sidebar';
import Features from '../Features/Features';
import Charts from '../charts/charts';
import Table from '../Table/Table';
import WidgetLarge from '../widget/widget';
import WidgetSmall from '../newUsers/Newcust';

const Dashboard = () => {

  return (
    <div className='dashboard'>
      <div className='dashside'>
        <Sidebar />
      </div>
      <div className='dashfeature'>
      <Features />
      <div className='dashcharts'>
      <Charts />
      </div>
      <div className='tablecharts'>
      <Table />
      </div>
      <div className='widget'>
      <WidgetLarge />
      <WidgetSmall />
      </div>
      </div>
    </div>
  )
}

export default Dashboard
