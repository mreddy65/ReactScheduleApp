var React                  = require('react');
var { Card, CardContent,Typography,Button,CardActions,TextareaAutosize  } = require('@material-ui/core');
var {makeStyles} = require('@material-ui/core/styles');
var Meals = require('./Meals.jsx');
class Bookings extends React.Component {
    constructor(props) {
        super(props);
        this.handleDateInfo= this. handleDateInfo.bind(this);
        this.handleGuestInfo= this.handleGuestInfo.bind(this);
        this.onbuttonClick= this.onbuttonClick.bind(this);
        this.state={
            date : [],
            guest:[],
            showComponent: false
          }
    }

    handleDateInfo(event){
        this.setState({
            [event.target.name]: event.target.value     
          })
    }
    handleGuestInfo(event) {
        this.setState({
            [event.target.name]: event.target.value     
          })
    }
    onbuttonClick(){

        const arr1 =  this.state.guest.split('\n');
        const arr2 = this.state.date.split('\n')     ;
        let result = {};        
        const insertAggs = (agg, result) => {
        
          while (result.aggs) {
            result = result.aggs
          }
        
          result.aggs = agg;
        }
        
        for (let i = 0; i < arr1.length; i++) {
          const aggName = arr1[i];
          const field = arr2[i];
          var dateArry= field.split("to");
          const agg = {
              [aggName]: {
               startdate: dateArry[0],
               enddate:dateArry[1]
              }
            };
        
          result.aggs ? insertAggs(agg, result) : result.aggs = agg;
        }        
    this.setState({
       resultvalue:result 
    })
            this.setState({
                showComponent: true,
            });
        
    }
    render() {
        // var otherDarkClasses   = 'btn-xs otherBtnDarkStd';     
    
          return (
            <Card style={{width:'100%'}}>
      <CardContent style={{width:'80%'}}>
      <TextareaAutosize onChange={this.handleDateInfo} value={this.state.date}  style={{ borderStyle:"none", borderColor:"Transparent",outline: "none"}} aria-label="empty textarea" name="date" placeholder="date" />
      <TextareaAutosize onChange={this.handleGuestInfo} value={this.state.guest}  style={{ borderStyle:"none", borderColor:"Transparent",outline: "none"}} aria-label="empty textarea" name="guest" placeholder="guest" />
        <button  onClick={this.onbuttonClick} >Generate Meal Schedule</button>   
        {this.state.showComponent ? <Meals guestschedule={this.state.resultvalue}/> : null } 
      </CardContent>
     </Card>

          )};
}
module.exports = Bookings;