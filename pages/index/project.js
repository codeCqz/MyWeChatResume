// pages/index/project.js
Page({
  /**
   * 页面的初始数据
   */
  data:{

      id: 0,
      projectlist: [
      {
        id:0,
        name:'基于Sring Boot的英语单词学习系统',
        environment: ['前端: Vue + ElementUI','后端: Spring Boot + MyBatis + MySQL'],
        tools:['VS Code','IDEA','Navicat'],
        function:['1、实现了查询单词模块','2、实现了英语翻译模块','3、实现了单词学习模块',
        '4、实现了生词表模块','5、实现了学习方式选择模块'],
        images:['https://s1.ax1x.com/2022/09/02/vIP1Xj.png',
          'https://s1.ax1x.com/2022/08/30/v4FVoV.png',
          'https://s1.ax1x.com/2022/08/30/v4Fuz4.png',
          'https://s1.ax1x.com/2022/08/30/v4F8dx.png',
          'https://s1.ax1x.com/2022/08/30/v4FYFK.png',
          'https://s1.ax1x.com/2022/08/30/v4FaSe.png',
          'https://s1.ax1x.com/2022/08/30/v4FxmR.png',
          'https://s1.ax1x.com/2022/09/01/v5cref.png'
        ]
      },
      {
        id:1,
        name:'药品管理系统',
        environment: ['前端: Vue + ElementUI','后端: Shiro + Spring Boot + MyBatis + MySQL'],
        tools:['VS Code','IDEA','DBeaver'],
        function:['1、实现了添加供销商模块','2、实现了批量导入数据模块','3、实现了数据可视化模块',
        '4、实现了取药模块','5、实现了药品详细信息模块'],
        images:['https://s1.ax1x.com/2022/08/30/vhHV1O.png',
          'https://s1.ax1x.com/2022/09/01/v56HxI.png',
          'https://s1.ax1x.com/2022/09/01/v5cmi4.png',
          'https://s1.ax1x.com/2022/09/01/v5cnJJ.png',
          'https://s1.ax1x.com/2022/09/01/v5cKzR.png',
          'https://s1.ax1x.com/2022/09/01/v5clsx.png',
          'https://s1.ax1x.com/2022/09/01/v5c8eK.png'
        ]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      id: options.id
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})