---
id: quick-start
title: 快速上手
sidebar_label: 快速上手
---

## 快速开始

```bash
npx create-dahlia-app myapp
cd myapp
npm start
```

它将在当前文件夹中创建一个名为 myapp 的目录，目录结构如下：

```bash
.
├── package.json
├── src
│   └── pages
│       └── index.tsx
└── tsconfig.json
```

启动成功后，然后访问浏览器：

<img src="http://forsigner.com/images/dahlia/dahlia-app.png" width="900" />

## 几种初始化应用方式

### 使用 npx

```bash
npx create-dahlia-app myapp
```

## 使用 npm

```bash
npm init dahlia-app myapp
```

## 使用 yarn

```bash
yarn create dahlia-app myapp
```

## 全局安装

```bash
npm i -g create-dahlia-app
create-dahlia-app myapp
```

## 可用脚本

- `npm run start` - 启动开发服务器
- `npm run build` - 生产环境打包
- `npm run test` - 启动单元测试
