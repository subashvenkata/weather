import React from 'react'
import {convertTemp,convertDate} from '../../common/utility'
import Map from '../googlemap/google-map'

const Row = props => {
    const row = props.data;
    return(
        <tr>
            <td>{convertTemp(row.main.temp)}</td>
            <td>{row.main.humidity}</td>
            <td>{convertTemp(row.main.temp_min)}</td>
            <td>{convertTemp(row.main.temp_max)}</td>
            <td>{convertDate(row.dt)}</td>
            
            
            </tr>
    )
}
const Table = props =>{
    const list =props.data;
    return(
    <table className="table table-boardered table-  hover table-striped table-responsive">
    
    <thead>
        <th>currentTemp</th>
        <th>humidity</th>
        <th>Min_temperature</th>
        <th>max_temperatue</th>
        <th>Time</th>
        
        </thead>
        <tbody>
            {
                list.map((ls, ind) =>{
                    return <Row data={ls} Key={ind}/>
                })
            }
            </tbody>
            </table>
    )

}
const WeatherTable = props =>{
    const data = props.data;
    return(
        <div className="container">
        <div className="panel panel-default">
        <div className="panel panel-heading">{data.city.name}
        <Map 
        lat = {data.city.coord.lat}
        lng = {data.city.coord.lon}
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
/>
        
        
        
        </div>
        <div className="panel panel-body">
        <Table data = {data.list}/>
        </div>
        </div>
        </div>
    )
}
export default WeatherTable;