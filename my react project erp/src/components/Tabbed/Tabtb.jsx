import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ItemView from '../Item/ItemView';
import ItemCreate from '../Item/ItemCreate';
 

function FillExample() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Item View">
        <ItemView/>
      </Tab>
      <Tab eventKey="profile" title="Item Create">
        <ItemCreate/>
      </Tab>
      <Tab eventKey="longer-tab" title="Loooonger Tab">
        Tab content for Loooonger Tab
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
        Tab content for Contact
      </Tab>
    </Tabs>
  );
}

export default FillExample;