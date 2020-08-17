import React from "react";
import "./styles/index.scss";
import Button from "./components/Button/button";

import Alert from "./components/Alert/alert";

import Menu from "./components/Menu/menu";
import MenuItem from "./components/Menu/menuItem";
import SubMenu from "./components/Menu/subMenu";

import Tabs from "./components/Tabs/tabs";
import TabItem from "./components/Tabs/tabItem";

// import AutoComplete from './components/AutoComplete/autoComplete'

import Upload from "./components/Upload/upload";

import Input from "./components/Input/input";

import Icon from "./components/Icon/icon";

import Message from "./components/Message";
import { MessageType } from "./components/Message/message";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { fas } from "@fortawesome/free-solid-svg-icons";
// library.add(fas);

const TabLabel = (props: { title: string }) => {
  return <div>{props.title}</div>;
};

function showMessage(key: MessageType) {
  const res = Message[key]({
    message: key,
    duration: 0,
    onClose(id: string) {
      console.log(key + "---" + id);
    },
  });

  setTimeout(res, 5000);
}

function App() {
  return (
    <div className="App" style={{ padding: "20px" }}>
      <Button
        onClick={() => {
          showMessage("success");
        }}
      >
        success
      </Button>
      <Button
        onClick={() => {
          showMessage("info");
        }}
      >
        info
      </Button>
      <Button
        onClick={() => {
          showMessage("error");
        }}
      >
        error
      </Button>
      <Button
        onClick={() => {
          showMessage("warning");
        }}
      >
        warning
      </Button>
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={() => true}
      />
      <Input placeholder="漂亮的 Input" />
      <Input disabled placeholder="disabled input" />
      <Input icon="search" placeholder="input with icon" />
      <Input defaultValue="large size" size="lg" />
      <Input placeholder="small size" size="sm" />
      <Input defaultValue="prepend text" prepend="https://" />
      <Input append=".com" defaultValue="google" />
      <Icon icon="coffee" size="5x" theme="danger" />
      <Icon icon="arrow-down" size="5x" />
      <Tabs type="card">
        <TabItem label={<TabLabel title="我是自定义的"></TabLabel>}>
          tab1tab1
        </TabItem>
        <TabItem label="tab2">tab2tab2</TabItem>
        <TabItem disabled label="tab3">
          tab3tab3
        </TabItem>
      </Tabs>
      <Tabs>
        <TabItem label={<TabLabel title="我是自定义的"></TabLabel>}>
          tab1tab1
        </TabItem>
        <TabItem label="tab2">tab2tab2</TabItem>
        <TabItem disabled label="tab3">
          tab3tab3
        </TabItem>
      </Tabs>
      <Menu defaultIndex={"0"} defaultOpenMenu={["3"]}>
        <MenuItem>link1</MenuItem>
        <MenuItem disabled>link2</MenuItem>
        <MenuItem>link3</MenuItem>
        <SubMenu title="sub-menu">
          <MenuItem>sub-menu-1</MenuItem>
          <MenuItem disabled>sub-menu-2</MenuItem>
          <MenuItem>sub-menu-3</MenuItem>
        </SubMenu>
      </Menu>
      <Menu defaultIndex={"0"} mode="vertical" defaultOpenMenu={["1"]}>
        <MenuItem>link1</MenuItem>
        <MenuItem disabled>link2</MenuItem>
        <SubMenu title="sub-menu">
          <MenuItem>sub-menu-1</MenuItem>
          <MenuItem disabled>sub-menu-2</MenuItem>
          <MenuItem>sub-menu-3</MenuItem>
        </SubMenu>
        <MenuItem>link3</MenuItem>
      </Menu>
      <Button>hello</Button>
      <Button disabled>hello</Button>
      <Button btnType="primary" size="sm">
        hello
      </Button>
      <Button
        btnType="danger"
        size="lg"
        onClick={() => {
          alert(111);
        }}
      >
        hello
      </Button>
      <Button btnType="link" href="http://www.baidu.com" target="_blank">
        hello
      </Button>
      <Button disabled btnType="link" href="http://www.baidu.com">
        hello
      </Button>
      <div style={{ marginTop: "20px" }}>
        <Alert
          type="success"
          message="alert 提示语"
          onClose={() => {
            console.log(111);
          }}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Alert type="warning" message="alert 提示语" title="我是tittle" />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Alert type="info" message="alert 提示语" />
      </div>
      <div style={{ marginTop: "20px" }}>
        <Alert type="error" closable={false} message="alert 提示语" />
      </div>
    </div>
  );
}

export default App;
