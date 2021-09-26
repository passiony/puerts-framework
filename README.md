# puerts-framework

## 怎么跑这demo？

- 需要安装vscode，node，npm，typescript环境

- 下载node.js.安装程序[Node.js官网](https://nodejs.org/en/)，安装完毕后，使用`node -v`查看版本
- npm已经在Node.js安装的时候顺带装好了。我们在终端输入`npm -v`查看版本，npm是Node.js的包管理工具（package manager）
- 安装 TypeScript 到系统环境，终端输入` npm install typescript -g `安装

- 使用vscode 打开TsProj目录
- 打开vosde的终端命令行
- 执行`npm install`拉取项目依赖(package.json中配置)到本地项目，会生成一个node_modules文件夹，里面是项目依赖
- 执行`npm run dev`，编译ts到bundle.js的develop开发版本，bundle.js文件较大，且有.map映射文件，可调试，看日志堆栈
- 执行`npm run build`，编译ts到bundle.js的release发布版本，bundle.js文件较小，不可调试，日志无堆栈