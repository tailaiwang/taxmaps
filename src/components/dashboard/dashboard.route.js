import React, { Component } from 'react';
import {Route} from 'react-router';
import PersonalBreakdown from './personalBreakdown.component'
import PoliticalCandidates from './politicalCandidates.component'
import UploadReceipts from './uploadReceipts.component'

class DashboardRouter extends Component {
    render() {
        return (
            <div>
                <Route path="/personal-breakdown" component={PersonalBreakdown} />
                <Route path="/political-candidates" component={PoliticalCandidates} />
                <Route path="/upload-receipts" component={UploadReceipts} />
            </ div>
        );
    }
}

export default DashboardRouter;
