import styles from "@/styles/footer.module.css";
import {
  GoogleOutlined,
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
  AppstoreOutlined,
  AppleOutlined
} from "@ant-design/icons";
import { Button } from "antd";
import { Input, Space } from "antd";


 


export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <h3>Connect with Us</h3>
        <div >
          <GoogleOutlined className={styles.icon}/>
          <FacebookOutlined className={styles.icon} />
          <InstagramOutlined className={styles.icon} />
          <WhatsAppOutlined  className={styles.icon}/>
          <YoutubeOutlined className={styles.icon}/>
        </div>
        <h3>Download our App </h3>
        <AppstoreOutlined className={styles.icon}/>
        <AppleOutlined className={styles.icon} />
      </div>
      <div className={styles.center}>
        <h3>My Account </h3>
        <ul className={styles.list}>
          <li>Orders</li>
          <li>Account setting</li>
          <li>Change Password</li>
        </ul>
        <h3>About </h3>
        <ul className={styles.list}>
          <li>Our Mission</li>
          <li>Careers</li>
          <li>Sitemap</li>
        </ul>
      </div>
      <div className={styles.right}>
        <h3>Newsletter</h3>
        <p>
          Do you want tp get updates about out news and offers?<br/> Signup and get
          10% discount
        </p>
        <Space direction="vertical">
          <Input
            placeholder="enter your email"
            style={{
              width: 200,
              marginTop: 10 
            }}
          />
        </Space>
        <br/>
        <Button danger size="small" className={styles.btn}>
          signup
        </Button>
      </div>
    </div>
  );
}
