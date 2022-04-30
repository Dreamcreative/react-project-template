# commit 规范配置

## 基本格式

> `<type>(<scope>): <subject>`

## type 类型 （必须）

> 本次 commit 的原因

- init：项目初始化（用于项目初始化或其他某种行为的开始描述，不影响代码）
- feat：新功能（feature）
- fix：修补 bug
- docs：文档（documentation）
- opt：优化和改善，比如弹窗进行确认提示等相关的，不会改动逻辑和具体功能等
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
- test：增加测试
- other：用于难以分类的类别（不建议使用，但一些如删除不必要的文件，更新.ignore 之类的可以使用）

## scope （可选）

> 本次 commit 的影响范围

## subject （必须）

> 本次 commit 的改动内容

## 项目中如何配置

1. 校验 commit 依赖

> 对 commit 信息进行校验

```js
// 依赖
npm install -D @commitlint/config-conventional @commitlint/cli
```

```js
// 添加 commitlint.config.js 文件
module.exports = {
  extends: ['@commitlint/config-conventional']
}
```

2. git hook

> 通过 git hook 在 pre-commit 进行 eslint，在 commit-msg 阶段进行 commit message lint。

```js
// 安装
npm install husky -D
// 在当前目录下生成.husky文件夹 同时删除 .gitignore，否则无法将 .husky 文件夹下的文件提交 git 仓库
npm husky install
// 在.husky文件夹下创建 commit-msg 文件
npx husky add .husky/commit-msg
```

```bash
# 在.husky/commit-msg文件中写入

#!/bin/sh
. "$(dirname "$0")/\_/husky.sh"
# 提交记录检查
npm commitlint --edit $1

# 配置在 package.json 中 scripts 的命令

# 格式化检查
npm format
# eslint 检查
npm lint
```

## 总结

> 以上的内容配置完成后，就会在 `git commit -m "xxx"`时，进行 commit 内容的规范校验和，format 格式检查等验证

## 参考

- [angular 日志规范](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.uyo6cb12dt6w)
- [husky+commitlint 配置步骤](https://www.1024sou.com/article/480131.html)
