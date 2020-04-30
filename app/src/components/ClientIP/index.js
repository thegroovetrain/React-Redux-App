import React from 'react';

import { connect } from 'react-redux';
import { getClientIP } from '../../actions';

import Block from './Block';
import Header from './Header';

const ClientIP = props => {

    if (!props.fetchComplete) {
        props.getClientIP();
    }

    return (
        <ClientIP.Block>
            <ClientIP.Header>Your IP Address:</ClientIP.Header>
            {props.clientIP}
        </ClientIP.Block>
    );
}

ClientIP.Block = Block;
ClientIP.Header = Header;

const mapStateToProps = state => {
    return {
        clientIP: state.clientIP,
        fetchComplete: state.fetchComplete,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps, { getClientIP })(ClientIP);