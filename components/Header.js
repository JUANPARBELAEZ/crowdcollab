import React from 'react';
import { Menu } from 'semantic-ui-react';
import  { Link } from '../routes';


export default () => {
  return (
    <Menu style={{ marginLeft: '-50px', marginRight: '-50px' }}>
      <Link route="/">
        <a className="item">
          CrowdFundMove
        </a>
      </Link>

      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">
            Campaigns
          </a>
        </Link>

        <Link route="/campaigns/new">
          <a className="item">
            <i className='add icon'></i>
          </a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
