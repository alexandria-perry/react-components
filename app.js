// TODO
var GroceryList = (props) => (
  <ul> 
    {props.list.map(lists =>
      <GroceryListItems lists={lists} />
      )}
  </ul>
  
)

class GroceryListItems extends React.Component{
  constructor(props){
    super(props)

    this.state ={
      done: false
  };
}

  MouseOver(){
    this.setState({
    done: !this.state.done
  });
}
  render(){
      var style = {
        fontWeight: this.state.done ? 'bold' : 'normal'
  };

      return(
      <li style={style} onMouseOver= {this.MouseOver.bind(this)}> {this.props.lists}</li> 
  
    )

    }

}


ReactDOM.render(<GroceryList list ={['Cucumber', 'Kale']} />, document.getElementById("app"));
