import React, { useEffect, useState } from 'react';
import "./Newcust.css";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { API_URL } from '../../api/api';

const WidgetSmall = () => {

  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await fetch(`${API_URL}/api/getemployee?new=true`);
        const data = await res.json();
        setNewUsers(data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user) => (
          <li className="widgetSmListItem" key={user._id} >
            <img
              src={
                user.profilepic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt="none"
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.empname}</span>
            </div>
            <button className="widgetSmButton">
              <VisibilityIcon className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WidgetSmall;