import React from 'react'
import PropTypes from 'prop-types';
import WithStyles from '@material-ui/core/styles/withStyles';
import noImg from '../../images/no-img.png';
// MUi Stuff
import Paper from '@material-ui/core/Paper';
// Icons
import LocationOn from '@material-ui/icons/LocationOn';
import LinkIcon from '@material-ui/icons/Link';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import customTheme from './customTheme';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = customTheme;

const ProfileSkeleton = (props) => {
     const { classes } = props;
    return (
        <Paper className={classes.paper}>
            <div className={classes.profile}>
                <div className='image-wrapper'>
                    <img src={noImg} alt="profile" className="profile-image" />
                </div> 
                <hr />
                <div classname="profile-details" >
                    <div className={classes.handle} />
                    <hr />
                    <div className={classes.fullLine} />
                    <div className={classes.fullLine} />
                    <hr />
                    <LocationOn color="primary"/> <span>Location</span>
                    <hr />
                    <LinkIcon color="primary"/> https://website.com
                    <hr />
                    <CalendarTodayIcon color="primary"/> Joined date
                </div>
            </div>
        </Paper>
    )
}

ProfileSkeleton.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ProfileSkeleton)
