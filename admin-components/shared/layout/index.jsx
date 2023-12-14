import React, { useState } from 'react';
import Link from 'next/link'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';

const { Header, Sider, Content } = Layout;

const Layouts = ({children}) => {
  const [collapsed, setCollapsed] = useState(false);


  return (
    <Layout >
      <Sider style={{background:'#be185d'}} trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu 
          theme="blue"
          mode="inline"
          className='text-white font-semibold hover:bg-blue-500'
          style={{background:'#be185d'}}
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              label: <Link href='/admin/product'>Product</Link>,
            },
            {
              key: '2',
              label: <Link href='/admin/category'>Category</Link>,
            },
            {
              key: '3',
              label: <Link href='/admin/purchase'>Purchase</Link>,
            },
            {
              key: '4',
              label: <Link href='/admin/address'>Address</Link>,
            },
            {
              key: '5',
              label: <Link href='/admin/notification'>Notification</Link>,
            },
          ]}
        />
      </Sider>
      <Layout >
        <Header   style={{background:'#4338ca'}} className=' p-0'>
          <div className='flex justify-between items-center pr-[50px]'>
          <Button  className='text-white'
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />

          <div className='border px-5 py-2 bg-white pr-6'>
            <h1 className='font-semibold text-lg '>Admin : Nitish Kumar</h1>
          </div>
          </div>
        </Header>
        <Content 
          style={{
            minHeight: 700,
          }}
        >

          {children}


          
        </Content>
      </Layout>
    </Layout>
  );
};

export default Layouts;