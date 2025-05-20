import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ItemView from '../Item/ItemView';
import ItemCreate from '../Item/ItemCreate';

const ItemMaster = () => {
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
    </Tabs>
  );
}

export default ItemMaster;