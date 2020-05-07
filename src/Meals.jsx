var React                  = require('react');
var { Card,CardImg,CardTitle, CardContent,Typography,Button,CardActions,TextareaAutosize  } = require('@material-ui/core');
var {makeStyles} = require('@material-ui/core/styles');
var Schedule = require('./Schedule.jsx');
var Error=require('./Error.jsx');
var _  = require('immutable');
class Meals extends React.Component {
    constructor(props) {
        super(props);    
        
    }
    
    render() {
        var otherDarkClasses   = 'btn-xs otherBtnDarkStd';     
        var resValue=this.props.guestschedule.aggs ;
         
        const baseUrl = 'http://localhost:3001' // using for images
        return (
          _.Map(resValue).forEach(element => {
          var filterValues= Schedule.default.filter(x=> (x.date>=element.startdate && x.date<=element.enddate) && x.guest==element.key);
          if(filterValues!=null && filterValues.length>0)          
           {
              filterValues.map((guestschedule,index) => {
                return (
                  <div key = {guestschedule.id}  className = 'col-12 col-md-5 m-1'>
                    <p style={{display:"inline"}}>{index}</p>
                    <img style={{display:"inline"}} src={baseUrl+guestschedule.image}/>
                    <h1 style={{display:"inline"}}>{guestschedule.key}</h1>
                  </div>
                )
                         
                })
              }
              else
              {
                return(
                  <Error name={element.key}/>
                )
              }            
        }))
  }
}
module.exports = Meals;