import React from "react";
import { storiesOf } from "@storybook/react";

const Welcome = () => {
  return (
    <>
      <h1>欢迎来到 arenas-ui 组件库</h1>
      <p>arenas-ui 是一套基于react+typescript的ui组件库</p>
      <h3>安装试试</h3>
      <p>npm install arenas-ui --save</p>
    </>
  );
};

storiesOf("开发指南", module).add("欢迎", Welcome, {
  info: {
    disable: true,
  },
});
