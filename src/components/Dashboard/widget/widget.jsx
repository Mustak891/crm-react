import React from 'react';
import "./widget.css";


const WidgetLarge = () => {
    const Button = ({ type }) => {
        return <button className={"widgetLgButton " + type}>{type}</button>;
      };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tbody>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/12793815/pexels-photo-12793815.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="img"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Mustak Ahamed</span>
          </td>
          <td className="widgetLgDate">4 june 2022</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="img"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Stefen Stefancik</span>
          </td>
          <td className="widgetLgDate">2 July 2022</td>
          <td className="widgetLgAmount">$100.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/775358/pexels-photo-775358.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="img"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Andrea Piacquadio</span>
          </td>
          <td className="widgetLgDate">10 Aug 2021</td>
          <td className="widgetLgAmount">$111.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/716411/pexels-photo-716411.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="img"
              className="widgetLgImg"
            />
            <span className="widgetLgName">Susan Carol</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$102.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default WidgetLarge;
