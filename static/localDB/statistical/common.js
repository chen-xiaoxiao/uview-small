export const commonMock = {
  // 时间搜索
  timeList: [
    {
      value: 'today',
      name: '今天'
    },
    {
      value: 'yesterday',
      name: '昨天'
    },
    {
      value: 'recently-7',
      name: '最近7天'
    },
    {
      value: 'recently-30',
      name: '最近30天'
    }
  ],
  // 登录设备类别
  equipmentList: [
    {
      value: '',
      name: '全部'
    },
    {
      value: 'PC',
      name: 'PC端'
    },
    {
      value: 'PAD',
      name: 'PAD端'
    }
  ],
  // 弹窗头部
  columnTable: [
    {
      title: '日期时间',
      dataIndex: 'time',
      width: 160
    },
    {
      title: '账号',
      dataIndex: 'account',
      ellipsis: true,
      scopedSlots: {
        customRender: 'account',
      },
      width: 100
    },
    {
      title: '姓名',
      dataIndex: 'username',
      width: 100
    },
    {
      title: '登录设备类别',
      dataIndex: 'loginDeviceType',
      width: 120
    },
    {
      title: '最近登录时间',
      dataIndex: 'lastLoginTime',
      width: 160
    },
    {
      title: '最高访问功能模块',
      dataIndex: 'appMax',
      ellipsis: true,
      scopedSlots: {
        customRender: 'appMax'
      },
      width: 150
    },
    {
      title: '最低访问功能模块',
      dataIndex: 'appMin',
      ellipsis: true,
      scopedSlots: {
        customRender: 'appMin'
      },
      width: 150
    },
    {
      title: '平均访问时长',
      dataIndex: 'avgAccessDuration',
      width: 120
    },
    {
      title: '地域(省)',
      dataIndex: 'province',
      width: 100
    },
    {
      title: '地域(市)',
      dataIndex: 'city',
      width: 100
    },
    {
      title: '联系方式',
      dataIndex: 'phone',
      width: 120
    }
  ],
  // 频道综合-全部频道弹框头部
  columnTableALLChannel: [
    {
      title: '日期时间',
      dataIndex: 'time',
      width: 160
    },
    {
      title: '账号',
      dataIndex: 'account',
      ellipsis: true,
      scopedSlots: {
        customRender: 'account',
      },
      width: 100
    },
    {
      title: '姓名',
      dataIndex: 'username',
      width: 100
    },
    {
      title: '登录设备类别',
      dataIndex: 'loginDeviceType',
      width: 120
    },
    {
      title: '最近登录时间',
      dataIndex: 'lastLoginTime',
      width: 160
    },
    {
      title: '平均访问时长',
      dataIndex: 'avgAccessDuration',
      width: 120
    },
    {
      title: '最多访问',
      ellipsis: true,
      scopedSlots: {
        customRender: 'appMax'
      },
      width: 150
    },
    {
      title: '地域(省)',
      dataIndex: 'province',
      width: 100
    },
    {
      title: '地域(市)',
      dataIndex: 'city',
      width: 100
    },
    {
      title: '联系方式',
      dataIndex: 'phone',
      width: 150
    }
  ],
  // 频道综合-行业方案，应用商店弹框头部
  columnTableChannel: [
    {
      title: '日期时间',
      dataIndex: 'time',
      width: 160
    },
    {
      title: '账号',
      dataIndex: 'account',
      ellipsis: true,
      scopedSlots: {
        customRender: 'account',
      },
      width: 100
    },
    {
      title: '姓名',
      dataIndex: 'username',
      width: 100
    },
    {
      title: '登录设备类别',
      dataIndex: 'loginDeviceType',
      width: 120
    },
    {
      title: '最近登录时间',
      dataIndex: 'lastLoginTime',
      width: 160
    },
    {
      title: '平均访问时长',
      dataIndex: 'avgAccessDuration',
      width: 120
    },
    {
      title: '最多访问应用',
      ellipsis: true,
      scopedSlots: {
        customRender: 'appMax'
      },
      width: 150
    },
    {
      title: '地域(省)',
      dataIndex: 'province',
      width: 100
    },
    {
      title: '地域(市)',
      dataIndex: 'city',
      width: 100
    },
    {
      title: '联系方式',
      dataIndex: 'phone',
      width: 150
    }
  ],
  // 搜索分析-弹窗头部
  columnTableSearch: [
    {
      title: '日期时间',
      dataIndex: 'time',
      width: 160
    },
    {
      title: '账号',
      dataIndex: 'account',
      ellipsis: true,
      scopedSlots: {
        customRender: 'account',
      },
      width: 100
    },
    {
      title: '姓名',
      dataIndex: 'username',
      width: 100
    },
    {
      title: '账号类别',
      dataIndex: 'loginDeviceType',
      width: 120
    },
    {
      title: '最近登录时间',
      dataIndex: 'lastLoginTime',
      width: 160
    },
    {
      title: '平均访问时长',
      dataIndex: 'avgAccessDuration',
      width: 120
    },
    {
      title: '最多访问应用',
      ellipsis: true,
      scopedSlots: {
        customRender: 'appMax'
      },
      width: 150
    },
    {
      title: '地域(省)',
      dataIndex: 'province',
      width: 100
    },
    {
      title: '地域(市)',
      dataIndex: 'city',
      width: 100
    },
    {
      title: '联系方式',
      dataIndex: 'phone',
      width: 120
    },
    {
      title: '预览/查看目标应用',
      dataIndex: '',
      width: 160
    }
  ],
  // 行业方案-场景弹窗头部
  columnSceneTable: [
    {
      title: '日期时间',
      dataIndex: 'time',
      width: 160
    },
    {
      title: '账号',
      ellipsis: true,
      scopedSlots: {
        customRender: 'account',
      },
      dataIndex: 'account',
      width: 100
    },
    {
      title: '姓名',
      dataIndex: 'username',
      width: 100
    },
    {
      title: '登录设备类别',
      dataIndex: 'loginDeviceType',
      width: 120
    },
    {
      title: '最近登录时间',
      dataIndex: 'lastLoginTime',
      width: 160
    },
    {
      title: '行业方案最高访问应用',
      ellipsis: true,
      scopedSlots: {
        customRender: 'appMax'
      },
      width: 190
    },
    {
      title: '行业方案最低访问应用',
      ellipsis: true,
      scopedSlots: {
        customRender: 'appMin'
      },
      width: 190
    },
    {
      title: '平均访问时长',
      dataIndex: 'avgAccessDuration',
      width: 120
    },
    {
      title: '地域(省)',
      dataIndex: 'province',
      width: 100
    },
    {
      title: '地域(市)',
      dataIndex: 'city',
      width: 100
    },
    {
      title: '联系方式',
      dataIndex: 'phone',
      width: 120
    }
  ],
  //站内访问TOP10
  columnVisit: [
    {
      title: '受访页面URL',
      key: 'url',
      ellipsis: true,
      scopedSlots: {
        customRender: 'address',
      }
    },
    {
      title: '所属频道',
      scopedSlots: {
        customRender: 'channel',
      },
      key: 'belongChannel',
      ellipsis: true
    },
    {
      title: '所属栏目',
      scopedSlots: {
        customRender: 'programa',
      },
      key: 'belongColumn',
      ellipsis: true
    },
    {
      title: '浏览量(PV)',
      dataIndex: 'pv',
      key: 'pv'
    },
    {
      title: '浏览占比',
      key: 'browseProportion',
      scopedSlots: {
        customRender: 'percent',
      }
    }
  ],
  //应用搜索TOP10
  columnSearch: [
    {
      title: '搜索词',
      scopedSlots: {
        customRender: 'search',
      },
      key: 'searchKeyword',
      ellipsis: true
    },
    {
      title: '浏览量(PV)',
      dataIndex: 'pv',
      key: 'pv'
    },
    {
      title: '访客数(UV)',
      dataIndex: 'uv',
      key: 'uv'
    },
    {
      title: '搜索占比',
      key: 'searchProportion',
      scopedSlots: {
        customRender: 'proportion',
      }
    }
  ],
  //页面停留时长TOP10
  columnPage: [
    {
      title: '页面URL',
      key: 'url',
      ellipsis: true,
      scopedSlots: {
        customRender: 'address',
      }
    },
    {
      title: '所属频道',
      key: 'channel',
      ellipsis: true,
      scopedSlots: {
        customRender: 'channel',
      }
    },
    {
      title: '所属栏目',
      scopedSlots: {
        customRender: 'programa',
      },
      key: 'programa',
      ellipsis: true
    },
    {
      title: '浏览量(PV)',
      minWidth: 120,
      dataIndex: 'pv',
      key: 'pv'
    },
    {
      title: '平均访问时长',
      minWidth: 120,
      key: 'avgAccessDuration',
      dataIndex: 'avgAccessDuration'
    }
  ],
  //访问地域TOP10
  columnRegion: [
    {
      title: '地区(市)',
      key: 'city',
      ellipsis: true,
      scopedSlots: {
        customRender: 'city',
      }
    },
    {
      title: '地区(省)',
      scopedSlots: {
        customRender: 'province',
      },
      key: 'province',
      ellipsis: true
    },
    {
      title: '浏览量(PV)',
      dataIndex: 'pv',
      key: 'pv'
    },
    {
      title: '访客数(UV)',
      dataIndex: 'uv',
      key: 'uv'
    }
  ],
  //全国各城市经纬度
  geoCoordMap: {
    '鄂尔多斯市':[109.781327,39.608266],
    '舟山市':[122.060,30.01],
    '齐齐哈尔市':[123.97,47.33],
    '盐城市':[120.13,33.38],
    '赤峰市':[118.87,42.28],
    '青岛市':[120.33,36.07],
    '金昌市':[102.188043,38.520089],
    '泉州市':[118.58,24.93],
    '日照市':[119.46,35.42],
    '南通市':[121.05,32.08],
    '拉萨市':[91.11,29.97],
    '云浮市':[112.02,22.93],
    '梅州市':[116.1,24.55],
    '上海市':[121.48,31.22],
    '攀枝花市':[101.718637,26.582347],
    '威海市':[122.1,37.5],
    '承德市':[117.93,40.97],
    '厦门市':[118.1,24.46],
    '汕尾市':[115.375279,22.786211],
    '潮州市':[116.63,23.68],
    '丹东市':[124.37,40.13],
    '曲靖市':[103.79,25.51],
    '烟台市':[121.39,37.52],
    '福州市':[119.3,26.08],
    '抚顺市':[123.97,41.97],
    '玉溪市':[102.52,24.35],
    '张家口市':[114.87,40.82],
    '阳泉市':[113.57,37.85],
    '湖州市':[120.1,30.86],
    '汕头市':[116.69,23.39],
    '宁波市':[121.56,29.86],
    '湛江市':[110.359377,21.270708],
    '揭阳市':[116.35,23.55],
    '连云港市':[119.16,34.59],
    '葫芦岛市':[120.836932,40.711052],
    '东莞市':[113.75,23.04],
    '河源市':[114.68,23.73],
    '淮安市':[119.15,33.5],
    '泰州市':[119.9,32.49],
    '南宁市':[108.33,22.84],
    '营口市':[122.18,40.65],
    '惠州市':[114.4,23.09],
    '韶关市':[113.62,24.84],
    '嘉峪关市':[98.289152,39.77313],
    '广州市':[113.23,23.16],
    '延安市':[109.47,36.6],
    '太原市':[112.53,37.87],
    '清远市':[113.01,23.7],
    '中山市':[113.38,22.52],
    '昆明市':[102.73,25.04],
    '盘锦市':[122.070714,41.119997],
    '长治市':[113.08,36.18],
    '深圳市':[114.07,22.62],
    '珠海市':[113.52,22.3],
    '宿迁市':[118.3,33.96],
    '咸阳市':[108.72,34.36],
    '铜川市':[109.11,35.09],
    '佛山市':[113.11,23.05],
    '海口市':[110.35,20.02],
    '江门市':[113.06,22.61],
    '肇庆市':[112.44,23.05],
    '大连市':[121.62,38.92],
    '临汾市':[111.5,36.08],
    '石嘴山市':[106.39,39.04],
    '沈阳市':[123.38,41.8],
    '苏州市':[120.62,31.32],
    '茂名市':[110.88,21.68],
    '嘉兴市':[120.76,30.77],
    '长春市':[125.35,43.88],
    '银川市':[106.27,38.47],
    '三门峡市':[111.19,34.76],
    '锦州市':[121.15,41.13],
    '南昌市':[115.89,28.68],
    '柳州市':[109.4,24.33],
    '三亚市':[109.511909,18.252847],
    '自贡市':[104.778442,29.33903],
    '吉林市':[126.57,43.87],
    '阳江市':[111.95,21.85],
    '泸州市':[105.39,28.91],
    '西宁市':[101.74,36.56],
    '宜宾市':[104.56,29.77],
    '呼和浩特市':[111.65,40.82],
    '成都市':[104.06,30.67],
    '大同市':[113.3,40.12],
    '镇江市':[119.44,32.2],
    '桂林市':[110.28,25.29],
    '张家界市':[110.479191,29.117096],
    '北海市':[109.12,21.49],
    '西安市':[108.95,34.27],
    '东营市':[118.49,37.46],
    '牡丹江市':[129.58,44.6],
    '遵义市':[106.9,27.7],
    '绍兴市':[120.58,30.01],
    '扬州市':[119.42,32.39],
    '常州市':[119.95,31.79],
    '潍坊市':[119.1,36.62],
    '重庆市':[106.54,29.59],
    '台州市':[121.420757,28.656386],
    '南京市':[118.78,32.04],
    '滨州市':[118.03,37.36],
    '贵阳市':[106.71,26.57],
    '无锡市':[120.29,31.59],
    '本溪市':[123.73,41.3],
    '克拉玛依市':[84.77,45.59],
    '渭南市':[109.5,34.52],
    '马鞍山市':[118.48,31.56],
    '宝鸡市':[107.15,34.38],
    '焦作市':[113.21,35.24],
    '北京市':[116.46,39.92],
    '徐州市':[117.2,34.26],
    '衡水市':[115.72,37.72],
    '包头市':[110,40.58],
    '绵阳市':[104.73,31.48],
    '乌鲁木齐市':[87.68,43.77],
    '枣庄市':[117.57,34.86],
    '杭州市':[120.19,30.26],
    '淄博市':[118.05,36.78],
    '鞍山市':[122.85,41.12],
    '安阳市':[114.35,36.1],
    '开封市':[114.35,34.79],
    '济南市':[117,36.65],
    '德阳市':[104.37,31.13],
    '温州市':[120.65,28.01],
    '九江市':[115.97,29.71],
    '邯郸市':[114.47,36.6],
    '兰州市':[103.73,36.03],
    '沧州市':[116.83,38.33],
    '临沂市':[118.35,35.05],
    '南充市':[106.110698,30.837793],
    '天津市':[117.2,39.13],
    '泰安市':[117.13,36.18],
    '郑州市':[113.65,34.76],
    '哈尔滨市':[126.63,45.75],
    '聊城市':[115.97,36.45],
    '芜湖市':[118.38,31.33],
    '唐山市':[118.02,39.63],
    '平顶山市':[113.29,33.75],
    '邢台市':[114.48,37.05],
    '德州市':[116.29,37.45],
    '济宁市':[116.59,35.38],
    '荆州市':[112.239741,30.335165],
    '宜昌市':[111.3,30.7],
    '丽水市':[119.92,28.45],
    '洛阳市':[112.44,34.7],
    '秦皇岛市':[119.57,39.95],
    '株洲市':[113.16,27.83],
    '石家庄市':[114.48,38.03],
    '莱芜市':[117.67,36.19],
    '常德市':[111.69,29.05],
    '保定市':[115.48,38.85],
    '湘潭市':[112.91,27.87],
    '金华市':[119.64,29.12],
    '岳阳市':[113.09,29.37],
    '长沙市':[113,28.21],
    '衢州市':[118.88,28.97],
    '廊坊市':[116.7,39.53],
    '菏泽市':[115.480656,35.23375],
    '合肥市':[117.27,31.86],
    '武汉市':[114.31,30.52],
    '大庆市':[125.03,46.58],
    '晋城市':[112.83,35.50],
    '朔州市':[112.43,39.33],
    '晋中市':[112.75,37.68],
    '运城市':[111.00,35.02],
    '忻州市':[112.73,38.42],
    '吕梁市':[111.13,37.52],
    '乌海市':[106.82,39.67],
    '通辽市':[122.28,43.63],
    '呼伦贝尔市':[119.77,49.22],
    '巴彦淖尔市':[107.42,40.75],
    '乌兰察布市':[113.12,40.98],
    '兴安盟':[122.90,46.73],
    '锡林郭勒盟':[116.53,43.73],
    '阿拉善盟':[105.67,38.83],
    '阜新市':[121.65,42],
    '辽阳市':[123.17,41.28],
    '铁岭市':[123.85,42.32],
    '朝阳市':[120.42,41.58],
    '四平市':[124.35,43.17],
    '辽源市':[125.15,42.97],
    '通化市':[125.75,41.68],
    '白山市':[126.42,41.93],
    '松原市':[124.82,45.13],
    '白城市':[122.46,45.38],
    '延边朝鲜族自治州':[129.50,42.88],
    '鸡西市':[130.97,45.30],
    '鹤岗市':[130.27,47.33],
    '双鸭山市':[131.15,46.63],
    '伊春市':[128.90,47.73],
    '佳木斯市':[130.37,46.82],
    '七台河市':[130.95,45.78],
    '黑河市':[127.53,50.22],
    '绥化市':[126.97,47.47],
    '大兴安岭地区':[124.12,50.42],
    '蚌埠市':[117.38,32.92],
    '淮南市':[117.00,32.63],
    '淮北市':[116.80,33.95],
    '铜陵市':[117.82,30.93],
    '安庆市':[117.05,30.52],
    '黄山市':[118.33,29.72],
    '滁州市':[118.32,32.30],
    '阜阳市':[115.82,32.90],
    '宿州市':[116.98,33.63],
    '巢湖市':[117.87,31.60],
    '六安市':[116.50,31.77],
    '亳州市':[115.78,33.88],
    '池州市':[117.48,30.67],
    '宣城市':[118.74,30.95],
    '莆田市':[119.00,25.43],
    '三明市':[117.61,26.23],
    '漳州市':[117.35,24.52],
    '南平市':[118.17,26.65],
    '龙岩市':[117.03,25.10],
    '宁德市':[119.31,26.40],
    '景德镇市':[117.17,29.27],
    '萍乡市':[113.85,27.63],
    '新余市':[114.92,27.81],
    '鹰潭市':[117.07,28.27],
    '赣州市':[114.93,25.83],
    '吉安市':[114.98,27.12],
    '宜春市':[114.38,27.80],
    '抚州市':[116.35,28.00],
    '上饶市':[117.97,28.45],
    '鹤壁市':[114.29,35.75],
    '新乡市':[113.90,35.30],
    '濮阳市':[115.03,35.77],
    '许昌市':[113.85,34.03],
    '漯河市':[114.00,33.58],
    '南阳市':[112.52,33.00],
    '商丘市':[115.65,34.45],
    '信阳市':[114.07,32.13],
    '周口市':[114.65,33.62],
    '驻马店市':[114.02,32.98],
    '河南省直辖县级行政区划':[113.52,34.77],
    '黄石市':[115.03,30.20],
    '十堰市':[110.78,32.65],
    '襄樊市':[112.20,32.08],
    '鄂州市':[114.88,30.40],
    '荆门市':[112.20,31.03],
    '孝感市':[113.54,30.55],
    '黄冈市':[114.88,30.45],
    '咸宁市':[114.28,29.87],
    '随州市':[113.37,31.72],
    '恩施土家族苗族自治州':[109.47,30.30],
    '湖北省直辖县级行政区划':[110.67,31.75],
    'DYS-当阳市':[111.78,30.82],
    '衡阳市':[112.85,26.42],
    '邵阳市':[111.28,27.14],
    '益阳市':[112.32,28.60],
    '郴州市':[113.02,25.78],
    '永州市':[111.62,26.43],
    '怀化市':[109.95,27.5],
    '娄底市':[112.01,27.74],
    '湘西土家族苗族自治州':[109.73,28.32],
    '梧州市':[111.34,23.51],
    '防城港市':[108.35,21.70],
    '钦州市':[108.62,21.95],
    '贵港市':[109.60,23.10],
    '玉林市':[110.17,22.63],
    '百色市':[106.62,23.91],
    '贺州市':[113.91,35.31],
    '河池市':[108.67,24.50],
    '来宾市':[109.23,23.73],
    '崇左市':[107.90,22.63],
    '海南省直辖县级行政区划':[110.80,19.55],
    '广元市':[105.83,32.43],
    '遂宁市':[105.57,30.5133],
    '内江市':[105.05,29.58],
    '乐山市':[103.761,29.582],
    '眉山市':[103.832,30.0483],
    '广安市':[106.63,30.47],
    '达州市':[107.50,31.22],
    '雅安市':[103.00,29.98],
    '巴中市':[106.77,31.85],
    '资阳市':[104.65,30.13],
    '阿坝藏族羌族自治州':[101.70,32.90],
    '甘孜藏族自治州':[99.98,31.62],
    '凉山彝族自治州':[101.28,27.93],
    '六盘水市':[104.83,26.60],
    '安顺市':[105.95,26.25],
    '铜仁地区':[109.18,27.72],
    '黔西南布依族苗族自治州':[107.52,26.27],
    '毕节地区':[105.29,27.32],
    '黔东南苗族侗族自治州':[107.97,26.58],
    '黔南布依族苗族自治州':[107.52,26.27],
    '保山市':[99.17,25.12],
    '昭通市':[103.72,27.33],
    '丽江市':[100.25,26.86],
    '普洱市':[100.58,22.46],
    '临沧市':[100.08,23.88],
    '楚雄彝族自治州':[101.55,25.03],
    '红河哈尼族彝族自治州':[103.40,23.37],
    '文山壮族苗族自治州':[104.25,23.37],
    '西双版纳傣族自治州':[100.80,22.02],
    '大理白族自治州':[100.23,25.60],
    '德宏傣族景颇族自治州':[98.58,24.43],
    '怒江傈僳族自治州':[98.85,25.85],
    '迪庆藏族自治州':[99.70,27.83],
    '汉中市':[107.02,33.07],
    '榆林市':[109.73,38.28],
    '安康市':[109.02,32.68],
    '商洛市':[109.93,33.87],
    '白银市':[104.18,36.55],
    '天水市':[106.13,34.75],
    '武威市':[102.63,37.93],
    '张掖市':[100.45,38.93],
    '平凉市':[106.67,35.55],
    '酒泉市':[94.33,39.63],
    '庆阳市':[107.63,35.73],
    '定西市':[104.62,35.58],
    '陇南市':[104.92,33.40],
    '临夏回族自治州':[103.22,35.60],
    '甘南藏族自治州':[102.92,34.98],
    '吴忠市':[106.10,37.57],
    '固原市':[106.28,36.00],
    '中卫市':[105.18,37.52],
    '海东地区':[102.12,36.50],
    '海北藏族自治州':[100.90,36.96],
    '黄南藏族自治州':[102.02,35.52],
    '海南藏族自治州':[100.62,36.28],
    '果洛藏族自治州':[100.23,34.48],
    '玉树藏族自治州':[97.02,33.00],
    '海西蒙古族藏族自治州':[99.02,37.30],
    '吐鲁番地区':[89.19,42.91],
    '哈密地区':[93.44,42.78],
    '昌吉回族自治州':[87.30,44.02],
    '博尔塔拉蒙古自治州':[82.07,44.90],
    '巴音郭楞蒙古自治州':[86.15,41.77],
    '阿克苏地区':[80.15,41.10],
    '克孜勒苏柯尔克孜自治州':[76.1728,39.7134],
    '喀什地区':[75.98,39.47],
    '和田地区':[79.93,37.10],
    '伊犁哈萨克自治州':[81.32,43.92],
    '塔城地区':[82.98,46.75],
    '阿勒泰地区':[88.07,47.52],
    '自治区直辖县级行政区划':[86.03,44.30],
    '昌都地区':[97.18,31.13],
    '山南地区':[91.77,29.23],
    '日喀则地区':[85.23,29.33],
    '那曲地区':[92.07,31.48],
    '阿里地区':[80.10,32.50],
    '林芝地区':[94.37,29.68],
    '台湾省':[121.50,25.03],
    '香港特别行政区':[114.15,22.15],
    '澳门特别行政区':[113.50,22.20],
  },
  // 频道综合-地图-table
  columnMap: [
    {
      title: '地区',
      children: [
        {
          title: '地区(省)',
          dataIndex: 'province',
          width: 100,
          scopedSlots: {
            customRender: 'province',
          }
        },
        {
          title: '地区(市)',
          dataIndex: 'city',
          width: 100,
          scopedSlots: {
            customRender: 'city',
          }
        }
      ],
    },
    {
      title: '基础指标',
      children: [
        {
          title: '浏览量(PV)',
          width: 100,
          dataIndex: 'pv',
          key: 'pv',
        },
        {
          title: '访客数(UV)',
          width: 100,
          dataIndex: 'uv',
          key: 'uv',
        },
      ],
    },
    {
      title: '质量指标',
      children: [
        {
          title: '平均访问时长',
          width: 100,
          dataIndex: 'avgAccessDuration',
          key: 'avgAccessDuration',
        },
        {
          title: '系统预览',
          width: 100,
          dataIndex: 'sysBrowse',
          key: 'sysBrowse',
        },
        {
          title: '加入购物车',
          width: 100,
          dataIndex: 'cartAdd',
          key: 'cartAdd',
        }
      ],
    },
    {
      title: '转化指标',
      children: [
        {
          title: '产生订单',
          width: 100,
          dataIndex: 'generateOrder',
          key: 'generateOrder',
        },
      ],
    },
  ],
  // 频道综合-全部频道，应用商店table
  channelAll: [
    {
      title: '',
      children: [
        {
          title: '日期时间',
          dataIndex: 'time',
          width: 150,
          key: 'time',
        },
      ],
    },
    {
      title: '基础指标',
      children: [
        {
          title: '浏览量(PV)',
          width: 100,
          dataIndex: 'pv',
          key: 'pv',
        },
        {
          title: '访客数(UV)',
          width: 100,
          dataIndex: 'uv',
          scopedSlots: {
            customRender: 'uv',
          },
          key: 'uv',
        },
      ],
    },
    {
      title: '质量指标',
      children: [
        {
          title: '跳出率',
          width: 100,
          dataIndex: 'bounceRate',
          scopedSlots: {
            customRender: 'jump',
          },
          key: 'bounceRate',
        },
        {
          title: '平均访问时长',
          width: 150,
          dataIndex: 'avgAccessDuration',
          key: 'avgAccessDuration',
        },
        {
          title: '系统预览',
          width: 150,
          dataIndex: 'sysBrowse',
          scopedSlots: {
            customRender: 'system',
          },
          key: 'sysBrowse',
        },
        {
          title: '加入购物车',
          width: 100,
          dataIndex: 'cartAdd',
          scopedSlots: {
            customRender: 'add',
          },
          key: 'cartAdd',
        },
      ],
    },
    {
      title: '转化指标',
      children: [
        {
          title: '产生订单',
          width: 100,
          dataIndex: 'generateOrder',
          scopedSlots: {
            customRender: 'order',
          },
          key: 'generateOrder',
        },
      ],
    },
  ],
  // 频道综合-行业方案table
  channelNoOrder:[
    {
      title: '',
      children: [
        {
          title: '日期时间',
          dataIndex: 'time',
          width: 150,
          key: 'time',
        },
      ],
    },
    {
      title: '基础指标',
      children: [
        {
          title: '浏览量(PV)',
          width: 100,
          dataIndex: 'pv',
          key: 'pv',
        },
        {
          title: '访客数(UV)',
          width: 100,
          dataIndex: 'uv',
          scopedSlots: {
            customRender: 'uv',
          },
          key: 'uv',
        },
      ],
    },
    {
      title: '质量指标',
      children: [
        {
          title: '跳出率',
          width: 100,
          dataIndex: 'bounceRate',
          scopedSlots: {
            customRender: 'jump',
          },
          key: 'bounceRate',
        },
        {
          title: '平均访问时长',
          width: 150,
          dataIndex: 'avgAccessDuration',
          key: 'avgAccessDuration',
        },
        {
          title: '系统预览',
          width: 150,
          dataIndex: 'sysBrowse',
          scopedSlots: {
            customRender: 'system',
          },
          key: 'sysBrowse',
        },
        {
          title: '加入购物车',
          width: 100,
          dataIndex: 'cartAdd',
          scopedSlots: {
            customRender: 'add',
          },
          key: 'cartAdd',
        },
      ],
    },
  ],
  // 频道综合-数字底座table
  channelNum: [
    {
      title: '',
      children: [
        {
          title: '日期时间',
          dataIndex: 'time',
          width: 150,
          key: 'time',
        },
      ],
    },
    {
      title: '基础指标',
      children: [
        {
          title: '浏览量(PV)',
          width: 100,
          dataIndex: 'pv',
          key: 'pv',
        },
        {
          title: '访客数(UV)',
          width: 100,
          dataIndex: 'uv',
          scopedSlots: {
            customRender: 'uv',
          },
          key: 'uv',
        },
      ],
    },
    {
      title: '质量指标',
      children: [
        {
          title: '跳出率',
          width: 100,
          dataIndex: 'bounceRate',
          scopedSlots: {
            customRender: 'jump',
          },
          key: 'bounceRate',
        },
        {
          title: '平均访问时长',
          width: 150,
          dataIndex: 'avgAccessDuration',
          key: 'avgAccessDuration',
        },
        {
          title: '最高访问功能',
          width: 150,
          dataIndex: 'appMax',
          key: 'appMax',
        },
        {
          title: '最低访问功能',
          width: 150,
          dataIndex: 'appMin',
          key: 'appMin',
        },
      ],
    },
  ],
  //行业方案- 行业方案趋势-table
  trendColumn: [
    {
      title: '',
      width: 120,
      children: [
        {
          width: 120,
          title: '日期时间',
          dataIndex: 'time',
          key: 'time'
        },
      ]
    },
    {
      title: '基础指标',
      children: [
        {
          width: 100,
          title: '浏览量（PV）',
          dataIndex: 'pv',
          key: 'pv',
        },
        {
          width: 100,
          title: '访客数（UV）',
          scopedSlots: {
            customRender: 'uv',
          },
          key: 'uv',
        },
        {
          width: 100,
          title: '跳出率',
          scopedSlots: {
            customRender: 'jump',
          },
          key: 'jump',
        }
      ],
    },
    {
      title: '质量指标',
      children: [
        {
          width: 120,
          title: '平均访问时长',
          dataIndex: 'avgAccessDuration',
          key: 'avgAccessDuration',
        },
        {
          width: 100,
          title: '系统预览',
          scopedSlots: {
            customRender: 'system'
          },
          key: 'system',
        },
        {
          width: 100,
          title: '加入购物车',
          scopedSlots: {
            customRender: 'add'
          },
          key: 'add',
        },
      ],
    }
  ],
  //行业方案- 行业方案趋势-我的存档-table
  trendMyColumn: [
    {
      title: '',
      width: 120,
      children: [
        {
          width: 120,
          title: '日期时间',
          dataIndex: 'time',
          key: 'time'
        },
      ]
    },
    {
      title: '基础指标',
      children: [
        {
          width: 100,
          title: '浏览量（PV）',
          dataIndex: 'pv',
          key: 'pv',
        },
        {
          width: 100,
          title: '访客数（UV）',
          scopedSlots: {
            customRender: 'uv',
          },
          key: 'uv',
        },
        {
          width: 100,
          title: '新增场景',
          scopedSlots: {
            customRender: 'scene',
          },
          key: 'scene',
        }
      ],
    },
    {
      title: '质量指标',
      children: [
        {
          width: 100,
          title: '跳出率',
          scopedSlots: {
            customRender: 'jump',
          },
          key: 'jump',
        },
        {
          width: 120,
          title: '平均访问时长',
          dataIndex: 'avgAccessDuration',
          key: 'avgAccessDuration',
        },
        {
          width: 100,
          title: '系统预览',
          scopedSlots: {
            customRender: 'system'
          },
          key: 'system',
        },
        {
          width: 100,
          title: '加入购物车',
          scopedSlots: {
            customRender: 'add'
          },
          key: 'add',
        },
      ],
    }
  ]
}