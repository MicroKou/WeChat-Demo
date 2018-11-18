// pages/posts/posts.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var posts_content=[

      {
        date: "Sep 25 2018",
        title: "正是虾肥蟹壮时",
        post_image: "/images/post/crab.png",
        authro_img: "/images/avatar/1.png",
        content: "菊黄蟹正肥，品尝秋之味。徐志摩把, “看初花的荻芦”和“到楼外楼吃蟹”, 并列为秋天来杭州不能错过的风雅之事；用林妹妹的话讲是“螯封嫩玉双双满",
        view_num: "92",
        collect_num: "65"
      },

      {
          date: "Now 27 2018",
          title: "比利·林恩的中场故事",
          post_image: "/images/post/bl.png",
          authro_img: "/images/avatar/3.png",
          content: "-“李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。” ",
          view_num: "122",
          collect_num: "125"
      },

      {
        date: "Now 27 2018",
        title: "比利·林恩的中场故事",
        post_image: "/images/post/bl.png",
        authro_img: "/images/avatar/3.png",
        content: "-“李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。” ",
        view_num: "122",
        collect_num: "125"
      },

      {
        date: "Now 27 2018",
        title: "比利·林恩的中场故事",
        post_image: "/images/post/bl.png",
        authro_img: "/images/avatar/3.png",
        content: "-“李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。” ",
        view_num: "122",
        collect_num: "125"
      },

      {
        date: "Now 27 2018",
        title: "比利·林恩的中场故事",
        post_image: "/images/post/bl.png",
        authro_img: "/images/avatar/3.png",
        content: "-“李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。” ",
        view_num: "122",
        collect_num: "125"
      },

      {
        date: "Now 27 2018",
        title: "比利·林恩的中场故事",
        post_image: "/images/post/bl.png",
        authro_img: "/images/avatar/3.png",
        content: "-“李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。” ",
        view_num: "122",
        collect_num: "125"
      },

      {
        date: "Now 27 2018",
        title: "比利·林恩的中场故事",
        post_image: "/images/post/bl.png",
        authro_img: "/images/avatar/3.png",
        content: "-“李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。” ",
        view_num: "122",
        collect_num: "125"
      },

      {
        date: "Now 27 2018",
        title: "比利·林恩的中场故事",
        post_image: "/images/post/bl.png",
        authro_img: "/images/avatar/3.png",
        content: "-“李安是一位绝不会重复自己的导演，本片将极富原创性李安众所瞩目的新片《比利林恩漫长的中场休息》，正式更名《半场无战事》。” ",
        view_num: "122",
        collect_num: "125"
      }

    ]

    this.setData({
      posts_key:posts_content
      });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})