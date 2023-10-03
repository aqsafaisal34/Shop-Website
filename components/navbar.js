import React from 'react';
import Link from 'next/link';
import styles from '@/styles/navbar.module.css';
import { ShoppingCartOutlined,HomeOutlined  } from '@ant-design/icons';
import { AudioOutlined } from '@ant-design/icons';

import { Button, Input, Space } from 'antd';
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navLeft}>
     <Link href={'/'}><p className={styles.logo}>SHOPSPOT</p></Link> 
      </div>
      <div className={styles.navcenter}>
         <Space direction='vertical'>
         <Search placeholder="input search text" onSearch={onSearch} className={styles.input}  style={{
         width: 450,
        
      }} enterButton  />
         </Space>
        </div>
      <div className={styles.navRight}>
        
       
        <Button danger className={styles.btn}> Account
        <HomeOutlined style={{ fontSize: '16px' }} className={styles.icon} />
         </Button>
        <Button  danger className={styles.btn}> Cart
        <ShoppingCartOutlined style={{ fontSize: '16px' }} className={styles.icon} /> 
         </Button>
      </div>
    </div>
  )
}

export default Navbar;
