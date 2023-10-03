import React from 'react';
import styles from '@/styles/navbar.module.css';
import { Carousel } from 'antd';
const contentStyle = {
  height: '300px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  margin: '20px 0',
  width: '100%'
};
const Carasoul = () => (
  <Carousel autoplay>
    <div>
      <img style={contentStyle} src='/carasoul1.jpg'  className={styles.carasoul}  />
    </div>
    <div>
    <img style={contentStyle} src='/carsoul2.jpg' className={styles.carasoul}  />
    </div>
    <div>
    <img style={contentStyle} src='/carasoul3.jpg' className={styles.carasoul}   />
    </div>
    <div>
    <img style={contentStyle} src='/carasoul4.jpg' className={styles.carasoul}  />
    </div>
  </Carousel>
);
export default Carasoul;