var response = {
    status: '',//状态  'success'   'failure'
    message: '',//信息     '参数错误'
    result: {
        data: [
            {
                img: {
                    width: 0,
                    height: 0,
                    url: ''
                },
                txt: '',
                link: ''
            }
        ],//数据集合
        allPage: 10,//总页数
        nowPage: 0,//当前页
        allCount: 200,//数据总条数
        nowCount: 20//当前页的数据条数
    }
};