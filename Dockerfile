# 从一个基础镜像centos:6.8开始构建
FROM centos:6.8

# 维护者信息
MAINTAINER zhouhuafei "1123486116@qq.com"

# 创建项目目录
RUN mkdir -p /home/suibianxiexie/
# 指定项目目录
WORKDIR /home/suibianxiexie/
# 复制当前目录下所有文件到项目目录
COPY . /home/suibianxiexie/

# 安装nginx
RUN yum install -y nginx
# 运行nginx
RUN service nginx start

# 安装redis
RUN yum install -y redis
# 运行redis
RUN service redis start

# 安装mongodb
RUN yum install -y mongodb-org
# 运行mongodb
RUN service mongod start

# 安装nodejs
RUN yum install -y nodejs

# 安装npm中canvas模块需要的依赖
RUN yum install -y cairo cairo-devel cairomm-devel libjpeg-turbo-devel pango pango-devel pangomm pangomm-devel giflib-devel
# 安装npm的全局模块
RUN npm install -g nrm
RUN npm install -g bower
RUN npm install -g jest
RUN npm install -g n
RUN npm install -g pm2
RUN npm install -g nodemon
RUN npm install -g gulp
RUN npm install -g webpack
RUN npm install -g vue-cli
# 安装npm的其他模块
RUN npm install

# 暴露5551端口
EXPOSE 5551

# 使用命令 pm2 start app.js 之后, pm2 默认在后台运行, 如果使用了Docker后,容器运行并立即退出,需要手动给“pm2”指定参数 --no-daemon
CMD pm2 start pm2.json --no-daemon
