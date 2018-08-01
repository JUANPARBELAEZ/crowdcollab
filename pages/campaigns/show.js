import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes';


class CampaignShow extends Component {
  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      address: props.query.address,
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
      campaignDescription: summary[5]
    };
  }

  renderCards() {
    const {
      minimumContribution,
      balance,
      requestsCount,
      approversCount,
      manager,
      campaignDescription,
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Address of Manager',
        description: 'The manager created this campaign and can create requests to withdraw money',
        style: {overflowWrap: 'break-word'},
      },
      {
        header: minimumContribution,
        description: 'You must contribute at least this much wei to become an approver',
        meta: 'Contribution (wei)',
      },
      {
        header: requestsCount,
        description: 'A request asks to withdraw money from the campaign to develop the project',
        meta: 'Number of Requests',
      },
      {
        header: approversCount,
        description: 'Number of people who have donated to this campaign',
        meta: 'Number of approvers',
      },
      {
        header: web3.utils.fromWei(balance, 'ether'),
        description: 'The balance is how much money this campaign has to spend',
        meta: 'Balance of the campaign (ether)',
      },
    ];

    return (
      <div>
        <h3>{campaignDescription}</h3>
        <Card.Group items={items} />
      </div>
    );
  }

  render () {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Row>
            <Grid.Column width={10}>
              {this.renderCards()}
            </Grid.Column>
            <Grid.Column width={6}>
              <ContributeForm address={this.props.address} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>

            <Link route={`/campaigns/${this.props.address}/requests`}>
              <a>
                <Button primary>View Requests</Button>
              </a>
              </Link>
            </Grid.Column>
          </Grid.Row>

        </Grid>
      </Layout>
    );
  };
};

export default CampaignShow;
