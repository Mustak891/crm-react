import React, { useEffect, useState } from 'react';
import "./Features.css";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { API_URL } from '../../api/api';

const Features = () => {

    //get employees
    const [employee, setEmployee] = useState([]);

    //get employees
    const getEmployee = async () => {
        const response = await fetch(`${API_URL}/api/getemployee`);
        const data = await response.json();
        setEmployee(data);
    }
     
    useEffect(() => {
    getEmployee();
    }, []);

    const strategicCRM1 = employee.filter(data => data.empwork === 'Strategic CRM');
    const strategicCRM = (strategicCRM1.length);  
    
    const operationalCRM1 = employee.filter(data => data.empwork === 'Operational CRM');
    const operationalCRM = (operationalCRM1.length);

    const analyticalCRM1 = employee.filter(data => data.empwork === 'Analytical CRM');
    const analyticalCRM = (analyticalCRM1.length);

    const collaborativeCRM1 = employee.filter(data => data.empwork === 'Collaborative CRM');
    const collaborativeCRM = (collaborativeCRM1.length);

    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Strategic CRM</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{strategicCRM}&nbsp;CUST</span>
                    <span className="featuredMoneyRate">
                        -11.4 <ArrowDownwardIcon className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Operational CRM</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{operationalCRM}&nbsp;CUST</span>
                    <span className="featuredMoneyRate">
                        -1.4 <ArrowDownwardIcon className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Analytical CRM</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{analyticalCRM}&nbsp;CUST</span>
                    <span className="featuredMoneyRate">
                        +2.4 <ArrowUpwardIcon className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

            <div className="featuredItem">
                <span className="featuredTitle">Collaborative CRM</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">{collaborativeCRM}&nbsp;CUST</span>
                    <span className="featuredMoneyRate">
                        +2.4 <ArrowUpwardIcon className="featuredIcon" />
                    </span>
                </div>
                <span className="featuredSub">Compared to last month</span>
            </div>

        </div>
    )
}

export default Features;