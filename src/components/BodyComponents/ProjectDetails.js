import React from 'react';
import projectDetailsData from "../../data/project_details_data.json";

const projectDetails = projectDetailsData.details;

const ProjectDetails = (props) => {
	console.log(props)
	const projectDetail = projectDetails.filter(data => {
		  return data.url.match( props.projectDetailsURL );
	});
    return (
    	<div>
	        <div className="slide-menu-open active">
	          <div className="slide-menu-top">
	            <div className="title-slide-menu">
	              {projectDetail[0].name} ({projectDetail[0].year})
	            </div>
	            <div className="close-cross">
	              <a href="#projects-section" onClick={() => {props.parentCallback(null)}} className="close-slide"> <i className="fas fa-times" /></a>
	            </div>
	          </div>
	          <div className="slide-menu-middle scroll-bar-style clr_b">
	            <div className="inner-slide-menu">
	              <ul className="list-view">
	              	<div dangerouslySetInnerHTML={{ __html: projectDetail[0].body }} />
	              </ul>
	            </div>
	          </div>
	          <div className="slide-menu-footter">
	            <div className="inner-slide-footer">
	              <a href="#projects-section" onClick={() => {props.parentCallback(null)}} className="cancel_btn">Cancel</a>
	            </div>
	          </div>
	        </div>
	    </div>
    );
}

export default ProjectDetails;
