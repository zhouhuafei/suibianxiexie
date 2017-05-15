//每个页面都要用到的数据
var PageTitle = require('../commons/page-title');//页面标题的数据
var PageConfig = require('../commons/page-config');//页面配置的数据
var FooterNav = require('../commons/footer-nav');//底部导航的数据

module.exports = {
    //页面标题到数据处理
    pageTitle(json){
        return new PageTitle(json || {}).result;
    },
    //页面配置的数据处理
    pageConfig(json){
        return new PageConfig(json || {}).result;
    },
    //页面底部导航的数据处理
    footerNav(json){
        return new FooterNav(json || {}).result;
    }
};