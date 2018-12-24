import React from 'react';
import { connect } from 'react-redux';
import ApiAdapter from '../adapter';

class Picture extends React.Component{

  constructor(props){
    super(props)
    this.ApiAdapter = new ApiAdapter()
  }

  componentDidMount(){
    //NEXT STEPS: STORE.DISPATCH()
    this.ApiAdapter.fetchPicture(this.props.id).then(console.log)
  }

  render(){
    console.log(this.props.id)
    return (
      <div>hey</div>
    )
  }
}

const mapStateToProps = ({users: { user: {id} }}) => ({
  userId: id
})



export default connect(mapStateToProps)(Picture)
