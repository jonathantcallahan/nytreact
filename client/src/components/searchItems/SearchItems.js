import React from 'react'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import PropTypes from 'prop-types'

const styles = {
    card: {
        minWidth: 275,
        margin: 30,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)'
    },
    title: {
        margin: 10,
        fontSize: 14,
    },
    pos: {
        marginBotton: 12,
    },
    btn: {
        margin: 10,
    }
}

function SearchItems(props) { 
    
        const { classes } = props

        return(
            <div id={props.key}>
                <Card className={classes.card}>
                    <a href={props.web_url}>
                        <Typography className={classes.title} color='textSecondary'>
                            {props.snippet}
                        </Typography>    
                    </a>
                    <Button size='small' variant='raised' color='default' className={classes.btn}
                        onClick={() => props.save(props.snippet, props.web_url, props.date, props._id)}>
                        {props.buttonT}
                    </Button>
                </Card>
            </div>
        )
    
}

SearchItems.propTypes = {
    classes: PropTypes.object.isRequired
}
    

export default withStyles(styles)(SearchItems )