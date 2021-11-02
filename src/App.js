import React, {useState} from 'react';
import './App.css';
import Icon from '@ant-design/icons';
import { Layout, Avatar, Menu, Breadcrumb, Button } from 'antd';
import Title from 'antd/lib/typography/Title';
import SubMenu from 'antd/lib/menu/SubMenu';

import { Cricketer, ODICareer, Batting, Bowling, TestCareer } from './Cricketer';
import CareerDetails from './CareerDetails';


const { Header, Footer, Sider, Content } = Layout;


function App() {
  const [selectedPlayer, setSelectedPlayer] = useState('');
  const [visible, setVisible] = useState(false);
  const onSelect = name => {
    setSelectedPlayer(name);
    setVisible(true);
  }
  const ViewProfileButton =({name}) => {
    return <Button type='dashed' style={{float:'right'}} onClick={()=>onSelect(name)}>View Full Profile </Button>
  }

  const onClose = () => setVisible(false);
  return (
    <div className="App">
      <Layout>
        <Header style={{ padding: 10}}>
          <Avatar style={{ float: 'right' }} src='./dp.png'/>
          <Title style={{ color: 'white' }} level={3}>OMAR</Title>
        </Header>
        <Layout>
          <Sider>
            <Menu
            defaultSelectedKeys={['Dashboard']}
            mode="inline"
            >
               <Menu.Item key='Dashboard'>
                Dashboard
            </Menu.Item>
              <SubMenu
                title={
                  <span>
                    <Icon type="mail" />
                    <span>About US</span>
                  </span>
                }
              >
                <Menu.ItemGroup key='AboutUS' title='Country 1'>
                  <Menu.Item key='location1'> Location 1</Menu.Item>
                  <Menu.Item key='location2'> Location 2</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ background: '#fff', padding: 24, minHeight: 580 }}>
                <Cricketer name='Babar Azam' team='PAK' avatarSrc='./ba.webp'>
                  <ODICareer matches='83' >
                    <Batting runs='3,985' score='158' />
                    <br></br>
                    <Bowling wickets='0' bowlingAvg='0' />
                  </ODICareer>
                  <TestCareer matches='35' >
                    <Batting runs='3985' score='143' />
                  </TestCareer>
                  <ViewProfileButton name='Babar Azam'/>
                </Cricketer>
                <Cricketer name='Shaheen Afridi' team='PAK' avatarSrc='./sa.webp'>
                  <TestCareer matches='19' >
                    <Bowling wickets='76' bowlingAvg='25.25' />
                  </TestCareer>
                  <ViewProfileButton name='Shaheen Afridi'/>
                </Cricketer>
              </div>
            </Content>
            <CareerDetails player={selectedPlayer} visible={visible} onClose={onClose} />
            <Footer style={{ textAlign: 'center' }}>Ant Design Layout example</Footer>
          </Layout>      
          </Layout>
          </Layout>
    </div>
  );
}

export default App;
