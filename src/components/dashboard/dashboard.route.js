import React, { Component } from 'react';
import {Route} from 'react-router';
import PersonalBreakdown from './personalbreakdown.component'
import PoliticalCandidates from './politicalcandidates.component'
import UploadReceipts from './uploadreceipts.component'

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
