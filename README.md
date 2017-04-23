## Express完整项目说明

更新时间：`2017/04/23 15:34:44 ` 

### 通过这个项目应该学习到以下几点
    
**1、用户登录（登录状态保存-客户端、服务端）**

**2、模板的使用（ejs,jade...）**

**3、express中间件的使用**

**4、没有的内容（数据库读数据）**

### 前端开发目录结构,可根据约定进行修改

    . 
    ├─ data
    │   ├─ comment.json    # 模拟数据（评论页面）
    ├─ node_modules
    ├─ public      # 开发静态文件
    ├   ├─ css
    ├   ├─ html
    ├   ├   ├─ login.html
    ├   ├   ├─ comment.html
    ├   ├─ js
    ├   ├─ imgs
    ├   ├─ video
    ├   ├─ views   # 模板文件夹
    ├   ├   ├─ comment.ejs 
    ├   ├   ├─ footer.ejs
    ├   ├   ├─ header.ejs
    ├─ route
    ├   ├─comment.js# 评论路由文件 
    ├─ app.js       # 主控文件
    ├─ package.json # 插件配置
    ├─ README.md       



1. 初始安装 `npm install`

2. 启动开发 `node app.js`

	> 端口使用的`8080`，开发生成地址：`http://localhost:8080`
