import React, { Component, Fragment } from 'react'
import noImg from '../../images/no-img.png';
import PropTypes from 'prop-types';
import customTheme from './customTheme'; 
// MUI Stuff
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

import WithStyles from '@material-ui/core/styles/withStyles';

const styles = customTheme;

const ScreamSkeleton = (props) => {
    const classes = props.classes;
    
    const content = Array.from({ length: 5 }).map((item, index) => (
       <Card className={classes.card} key={index}>
           <CardMedia className={classes.cover} image={noImg} />
           <CardContent className={classes.cardContent}>
               <div className={classes.handle} />
               <div className={classes.date} />
               <div className={classes.fullLine} />
               <div className={classes.fullLine} />
               <div className={classes.halfLine} />
           </CardContent>
       </Card>
    ))
    
    return (<Fragment>{content}</Fragment>)
}

ScreamSkeleton.propTypes = {
   classes: PropTypes.object.isRequired
}

export default WithStyles(styles)(ScreamSkeleton);
