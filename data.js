const DASHBOARD_DATA = {
  updateTime: '2026-06-17',
  timeRange: '近30天 (2026-05-18 ~ 2026-06-17)',

  // 各平台促销活动
  promoActivities: [
    {
      platform: '京东',
      platformKey: 'jd',
      title: '618文具狂欢',
      highlights: ['文具5月30日20点开门红', '自营文具多件多折', '晨光/得力品牌日大促'],
      badge: '主会场',
      period: '5.30-6.18'
    },
    {
      platform: '淘宝/天猫',
      platformKey: 'taobao',
      title: '618年中大促',
      highlights: ['跨店每满300减50 可叠加', '超4万品牌成交翻倍', '品牌文具前1小时半价'],
      badge: '跨店满减',
      period: '5.31-6.18'
    },
    {
      platform: '拼多多',
      platformKey: 'pdd',
      title: '百亿补贴·文具专场',
      highlights: ['考试文具直降30%', '开学季文具9.9包邮', '品牌文具百亿补贴价'],
      badge: '百亿补贴',
      period: '常驻+加码'
    },
    {
      platform: '抖音电商',
      platformKey: 'douyin',
      title: '618好物节',
      highlights: ['文具直播间满减叠加', '达人专属券额外8折', '手账文创限时秒杀'],
      badge: '直播专享',
      period: '6.1-6.18'
    },
    {
      platform: '小红书',
      platformKey: 'xhs',
      title: '618薯你会买',
      highlights: ['文具好物集合店满99减20', '笔记种草领专属券', '学生党必入清单专题'],
      badge: '种草专题',
      period: '6.8-6.18'
    }
  ],

  // 热销促销商品
  promoProducts: [
    { rank: 1, name: '得力文具套装68件 考试专用礼盒', platform: '京东', price: 69.9, sales: 52000 },
    { rank: 2, name: '晨光速干中性笔 0.5mm 黑色 50支装', platform: '淘宝', price: 34.9, sales: 180000 },
    { rank: 3, name: '百乐P500考试笔 12支装', platform: '京东', price: 55, sales: 95000 },
    { rank: 4, name: '国誉活页本B5 Campus系列 5本装', platform: '天猫', price: 35.9, sales: 67000 },
    { rank: 5, name: '斑马荧光笔套装 淡色双头 10色', platform: '抖音', price: 24.9, sales: 120000 },
    { rank: 6, name: '三年二班手账本套装 含贴纸胶带', platform: '小红书', price: 58, sales: 45000 },
    { rank: 7, name: '得力桌面收纳架 亚克力多层文具架', platform: '拼多多', price: 19.9, sales: 230000 },
    { rank: 8, name: 'MUJI无印良品按动中性笔 10支', platform: '天猫', price: 38, sales: 88000 },
    { rank: 9, name: '马克笔套装 80色学生绘画用', platform: '拼多多', price: 49.9, sales: 156000 },
    { rank: 10, name: '电动橡皮擦 充电式素描专用', platform: '抖音', price: 19.9, sales: 89000 }
  ],

  // 应季趋势文具商品
  seasonalTrends: [
    { name: '考试专用文具套装', category: 'exam', growth: 185, heat: '爆', avgPrice: 45, sales30d: 890000 },
    { name: '2B铅笔/涂卡笔', category: 'exam', growth: 210, heat: '爆', avgPrice: 12, sales30d: 1560000 },
    { name: '透明文具袋', category: 'exam', growth: 156, heat: '热', avgPrice: 8, sales30d: 2100000 },
    { name: '考试专用橡皮', category: 'exam', growth: 132, heat: '热', avgPrice: 5, sales30d: 1800000 },
    { name: '答题卡专用尺', category: 'exam', growth: 98, heat: '暖', avgPrice: 6, sales30d: 750000 },
    { name: '手账本/贴纸套装', category: 'summer', growth: 89, heat: '热', avgPrice: 35, sales30d: 670000 },
    { name: '彩色马克笔套装', category: 'summer', growth: 67, heat: '热', avgPrice: 55, sales30d: 430000 },
    { name: '水彩画材套装', category: 'summer', growth: 72, heat: '暖', avgPrice: 89, sales30d: 280000 },
    { name: '暑假手工DIY材料包', category: 'summer', growth: 95, heat: '热', avgPrice: 28, sales30d: 520000 },
    { name: '儿童绘画套装', category: 'summer', growth: 78, heat: '暖', avgPrice: 65, sales30d: 380000 },
    { name: '姓名贴/标签打印机', category: 'back2school', growth: 45, heat: '暖', avgPrice: 68, sales30d: 190000 },
    { name: '书包/减负护脊', category: 'back2school', growth: 38, heat: '暖', avgPrice: 189, sales30d: 320000 },
    { name: '包书皮/书套', category: 'back2school', growth: 55, heat: '暖', avgPrice: 12, sales30d: 450000 },
    { name: '文具收纳盒', category: 'back2school', growth: 42, heat: '暖', avgPrice: 25, sales30d: 280000 },
    { name: '桌面收纳/笔筒', category: 'office', growth: 52, heat: '热', avgPrice: 29, sales30d: 510000 },
    { name: '便利贴/索引贴', category: 'office', growth: 34, heat: '稳', avgPrice: 15, sales30d: 780000 },
    { name: '白板笔/白板', category: 'office', growth: 28, heat: '稳', avgPrice: 45, sales30d: 220000 },
    { name: '文件夹/资料册', category: 'office', growth: 25, heat: '稳', avgPrice: 18, sales30d: 350000 }
  ],

  // 各平台热搜词
  hotwords: [
    { word: '高考必备文具', platforms: { jd: 6200000, taobao: 8800000, pdd: 3500000, douyin: 14000000, xhs: 5200000 } },
    { word: '618文具优惠', platforms: { jd: 9200000, taobao: 11000000, pdd: 4500000, douyin: 7800000, xhs: 2800000 } },
    { word: '高颜值手账本', platforms: { jd: 1200000, taobao: 3500000, pdd: 900000, douyin: 19000000, xhs: 13000000 } },
    { word: '学生党必备文具', platforms: { jd: 4100000, taobao: 5500000, pdd: 2800000, douyin: 9500000, xhs: 7200000 } },
    { word: '中性笔推荐', platforms: { jd: 3200000, taobao: 4800000, pdd: 2200000, douyin: 18000000, xhs: 9500000 } },
    { word: '手账大礼盒套装', platforms: { jd: 800000, taobao: 2600000, pdd: 700000, douyin: 16000000, xhs: 11000000 } },
    { word: '开学必备文具清单', platforms: { jd: 2800000, taobao: 4200000, pdd: 3500000, douyin: 6800000, xhs: 3200000 } },
    { word: '直播带货学习用品', platforms: { jd: 1500000, taobao: 2200000, pdd: 1800000, douyin: 22000000, xhs: 5500000 } },
    { word: '考试专用笔', platforms: { jd: 5500000, taobao: 7200000, pdd: 4100000, douyin: 8900000, xhs: 3800000 } },
    { word: '暑假手工材料包', platforms: { jd: 1800000, taobao: 4500000, pdd: 5200000, douyin: 11000000, xhs: 6800000 } },
    { word: '桌面收纳神器', platforms: { jd: 2100000, taobao: 3800000, pdd: 2900000, douyin: 13500000, xhs: 9200000 } },
    { word: '错题打印机', platforms: { jd: 3800000, taobao: 4100000, pdd: 2500000, douyin: 15000000, xhs: 7500000 } },
    { word: '马克笔套装学生用', platforms: { jd: 1800000, taobao: 2500000, pdd: 1900000, douyin: 11000000, xhs: 8500000 } },
    { word: 'ins风文具', platforms: { jd: 600000, taobao: 2800000, pdd: 500000, douyin: 9800000, xhs: 14000000 } },
    { word: '电动橡皮擦', platforms: { jd: 2200000, taobao: 3100000, pdd: 3800000, douyin: 12000000, xhs: 4500000 } }
  ],

  // 趋势品各平台销售数据
  trendProductData: [
    { name: '得力考试文具套装', platforms: [
      { platform: '京东', avgPrice: 49.9, sales: 125000, revenue: 6237500 },
      { platform: '淘宝/天猫', avgPrice: 45.8, sales: 198000, revenue: 9068400 },
      { platform: '拼多多', avgPrice: 35.9, sales: 310000, revenue: 11129000 },
      { platform: '抖音', avgPrice: 42.5, sales: 89000, revenue: 3782500 },
      { platform: '小红书', avgPrice: 52.0, sales: 35000, revenue: 1820000 }
    ]},
    { name: '斑马荧光笔套装', platforms: [
      { platform: '京东', avgPrice: 28.9, sales: 67000, revenue: 1936300 },
      { platform: '淘宝/天猫', avgPrice: 26.5, sales: 145000, revenue: 3842500 },
      { platform: '拼多多', avgPrice: 18.9, sales: 220000, revenue: 4158000 },
      { platform: '抖音', avgPrice: 24.9, sales: 180000, revenue: 4482000 },
      { platform: '小红书', avgPrice: 29.9, sales: 42000, revenue: 1255800 }
    ]},
    { name: '国誉Campus活页本', platforms: [
      { platform: '京东', avgPrice: 15.8, sales: 89000, revenue: 1406200 },
      { platform: '淘宝/天猫', avgPrice: 14.5, sales: 210000, revenue: 3045000 },
      { platform: '拼多多', avgPrice: 9.9, sales: 380000, revenue: 3762000 },
      { platform: '抖音', avgPrice: 12.9, sales: 95000, revenue: 1225500 },
      { platform: '小红书', avgPrice: 16.5, sales: 28000, revenue: 462000 }
    ]},
    { name: '晨光速干中性笔', platforms: [
      { platform: '京东', avgPrice: 1.8, sales: 520000, revenue: 936000 },
      { platform: '淘宝/天猫', avgPrice: 1.5, sales: 890000, revenue: 1335000 },
      { platform: '拼多多', avgPrice: 0.99, sales: 1500000, revenue: 1485000 },
      { platform: '抖音', avgPrice: 1.6, sales: 350000, revenue: 560000 },
      { platform: '小红书', avgPrice: 2.2, sales: 65000, revenue: 143000 }
    ]},
    { name: '手账本套装', platforms: [
      { platform: '京东', avgPrice: 45.0, sales: 32000, revenue: 1440000 },
      { platform: '淘宝/天猫', avgPrice: 38.8, sales: 120000, revenue: 4656000 },
      { platform: '拼多多', avgPrice: 25.9, sales: 85000, revenue: 2201500 },
      { platform: '抖音', avgPrice: 35.0, sales: 210000, revenue: 7350000 },
      { platform: '小红书', avgPrice: 42.5, sales: 95000, revenue: 4037500 }
    ]},
    { name: '百乐P500考试笔', platforms: [
      { platform: '京东', avgPrice: 9.5, sales: 180000, revenue: 1710000 },
      { platform: '淘宝/天猫', avgPrice: 8.8, sales: 250000, revenue: 2200000 },
      { platform: '拼多多', avgPrice: 6.9, sales: 420000, revenue: 2898000 },
      { platform: '抖音', avgPrice: 8.5, sales: 130000, revenue: 1105000 },
      { platform: '小红书', avgPrice: 10.5, sales: 45000, revenue: 472500 }
    ]},
    { name: '马克笔80色套装', platforms: [
      { platform: '京东', avgPrice: 55.0, sales: 42000, revenue: 2310000 },
      { platform: '淘宝/天猫', avgPrice: 48.5, sales: 95000, revenue: 4607500 },
      { platform: '拼多多', avgPrice: 32.9, sales: 180000, revenue: 5922000 },
      { platform: '抖音', avgPrice: 45.0, sales: 120000, revenue: 5400000 },
      { platform: '小红书', avgPrice: 58.0, sales: 38000, revenue: 2204000 }
    ]},
    { name: '桌面亚克力收纳架', platforms: [
      { platform: '京东', avgPrice: 35.0, sales: 68000, revenue: 2380000 },
      { platform: '淘宝/天猫', avgPrice: 29.9, sales: 150000, revenue: 4485000 },
      { platform: '拼多多', avgPrice: 19.9, sales: 280000, revenue: 5572000 },
      { platform: '抖音', avgPrice: 25.9, sales: 95000, revenue: 2460500 },
      { platform: '小红书', avgPrice: 38.0, sales: 52000, revenue: 1976000 }
    ]},
    { name: '错题打印机', platforms: [
      { platform: '京东', avgPrice: 189.0, sales: 35000, revenue: 6615000 },
      { platform: '淘宝/天猫', avgPrice: 168.0, sales: 52000, revenue: 8736000 },
      { platform: '拼多多', avgPrice: 128.0, sales: 78000, revenue: 9984000 },
      { platform: '抖音', avgPrice: 159.0, sales: 95000, revenue: 15105000 },
      { platform: '小红书', avgPrice: 199.0, sales: 22000, revenue: 4378000 }
    ]},
    { name: '透明考试文具袋', platforms: [
      { platform: '京东', avgPrice: 8.9, sales: 320000, revenue: 2848000 },
      { platform: '淘宝/天猫', avgPrice: 6.5, sales: 580000, revenue: 3770000 },
      { platform: '拼多多', avgPrice: 3.9, sales: 950000, revenue: 3705000 },
      { platform: '抖音', avgPrice: 5.9, sales: 220000, revenue: 1298000 },
      { platform: '小红书', avgPrice: 9.9, sales: 55000, revenue: 544500 }
    ]}
  ],

  // 潜在爆发商品
  emergingProducts: [
    {
      name: '电动文具盒（多功能弹射）',
      reason: '抖音近7天视频播放量破亿，小红书种草笔记增长320%',
      currentSales: 45000,
      growth7d: 380,
      predictScore: 95,
      trendData: [2100, 3200, 4800, 7500, 12000, 15000, 18000, 22000, 28000, 35000, 38000, 42000, 45000]
    },
    {
      name: '磁吸模块化桌面收纳',
      reason: '小红书爆款笔记超10万赞，淘宝搜索量周增210%',
      currentSales: 28000,
      growth7d: 245,
      predictScore: 88,
      trendData: [3500, 4200, 5100, 6800, 9200, 12000, 15500, 18000, 20000, 23000, 25000, 27000, 28000]
    },
    {
      name: 'AI智能错题打印机',
      reason: '考试季刚需叠加618优惠，抖音直播间持续爆单',
      currentSales: 67000,
      growth7d: 198,
      predictScore: 92,
      trendData: [8000, 10000, 12000, 15000, 18000, 22000, 28000, 35000, 42000, 50000, 55000, 62000, 67000]
    },
    {
      name: '解压文具（捏捏笔/减压尺）',
      reason: '考前焦虑话题带动，抖音话题播放量15亿+',
      currentSales: 89000,
      growth7d: 165,
      predictScore: 85,
      trendData: [12000, 15000, 18000, 22000, 30000, 38000, 45000, 52000, 60000, 68000, 75000, 82000, 89000]
    },
    {
      name: '复古火漆印章套装',
      reason: '手账圈+毕业季仪式感，小红书话题曝光5000万+',
      currentSales: 35000,
      growth7d: 142,
      predictScore: 80,
      trendData: [5000, 6500, 8000, 10000, 12500, 15000, 18000, 21000, 24000, 27500, 30000, 33000, 35000]
    }
  ]
};
