// IMPORTS - LIBRARIES
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

const ProfileList = React.createClass({
  _mapOverData: function(apiData){
    let mappedRes = apiData.map(function(legisObj){
      return <SingleProfile legisData={legisObj}/>
    })
    return mappedRes
  },

  render: function(){
    return (
      <div className="all-legis">
      {this._mapOverData(this.props.apiData)}
      </div>
    )
  }
})

const SingleProfile = React.createClass({
  render: function(){
    let givenLegisObj = this.props.legisData;
    return (
      <div className="legislator col-xs-12 col-sm-6 col-md-4 col-lg-4">
        <div className="legis-block thumbnail">
          <h3>{givenLegisObj.first_name} {givenLegisObj.last_name}</h3>
          <h4>{givenLegisObj.title}, {givenLegisObj.party} - {givenLegisObj.state_name}</h4>
          <ul>
            <li>Phone Number: {givenLegisObj.phone}</li>
            <li>Website: {givenLegisObj.website}</li>
            <li>Facebook: {givenLegisObj.facebook_id}</li>
            <li>Twitter: {givenLegisObj.twitter_id}</li>
          </ul>
          <p>Term Ends: {givenLegisObj.term_end}</p>
        </div>
      </div>
    )
  }
})

// API DATA FETCH & RENDER
$.getJSON("https://congress.api.sunlightfoundation.com/legislators?callback=?").then(function(serverRes){
  ReactDOM.render(<ProfileList apiData={serverRes.results}/>, document.querySelector(".route-container"))
})
