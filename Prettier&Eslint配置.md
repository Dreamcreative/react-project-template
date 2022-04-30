# Prettier&Eslint 配置

## 配置 prettier

```js
// 1. 安装 prettier
npm -D --exact prettier
// 2. 在根目录下创建.prettierrc.js配置文件及.prettierignore忽略文件
// 3. .prettierrc.js 文件中写入格式化规则
{
  "printWidth": 150,
  "tabWidth": 2,
  "trailingComma": "none",
  "arrowParens": "avoid",
  "endOfLine": "auto",
  "htmlWhitespaceSensitivity": "ignore",
  "singleQuote": true,
  "bracketSpacing": true,
  "jsxSingleQuote": true,
  "insertPragma": false,
  "semi": false
}
```

## 配置 eslint

```js
// 安装
npm i -D eslint
// 安装完毕
eslint --init // 生成一个配置文件
// 如果遇到 command not found: eslint
./node_modules/.bin/eslint --init
// 按照 eslint 提示的走完会默认安装 eslint 所需配置，同时会生成一个 .eslintrc.js 文件，生成默认配置
```

## 配置 scripts

```js
// 在 package.json 中的 scripts 添加命令
{
  "scripts":{
    // 需要生效的文件根据自己项目进行配置
    "format": "prettier --write \"src/**/*.js\" \"src/**/*.ts\" \"src/**/*.tsx\"",
  }
}

```

```bash
# 同时，可以在 .husky 文件中的 commit-msg 中添加 format 的启动命令

# 格式化检查
npm format
```

## 总结

> 按照以上流程走完，就能完成代码的格式化配置，`如果不生效，记得重启项目`

## 参考

- [command not found: eslint](https://github.com/eslint/eslint/issues/10192)
- [eslint 的安装与使用](https://www.cnblogs.com/lsgxeva/p/7994474.html)
