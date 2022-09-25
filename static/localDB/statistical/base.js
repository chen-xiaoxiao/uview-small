export const baseMock = {
  moduleTabList: [
    {
      type: 'baseTab1',
      name: '数字底座趋势'
    },
    {
      type: 'baseTab2',
      name: '中台频道数据'
    },
    {
      type: 'baseTab3',
      name: '中台功能数据'
    },
    {
      type: 'baseTab4',
      name: '用户分析'
    }
  ],
  tableTabList: [
    {
      type: 'tableTab1',
      name: '全部中台'
    },
    {
      type: 'tableTab2',
      name: '业务中台'
    },
    {
      type: 'tableTab3',
      name: '数据中台'
    },
    {
      type: 'tableTab4',
      name: '能力中台'
    },
    {
      type: 'tableTab5',
      name: '技术中台'
    }
  ],
  columnTab1: [
    {
      title: '',
      children: [
        {
          title: '日期时间',
          dataIndex: 'time',
          width: 180
        }
      ]
    },
    {
      title: '基础指标',
      children: [
        {
          title: '浏览量(PV)',
          dataIndex: 'pv',
          width: 120
        },
        {
          title: '访客数(UV)',
          dataIndex: 'uv',
          scopedSlots: {
            customRender: 'uv'
          },
          width: 120
        }
      ],
    },
    {
      title: '质量指标',
      children: [
        {
          title: '跳出率',
          dataIndex: 'bounceRate',
          scopedSlots: {
            customRender: 'bounceRate'
          },
          width: 120
        },
        {
          title: '平均访问时长',
          dataIndex: 'avgAccessDuration',
          width: 180
        },
        {
          title: '最高访问功能',
          dataIndex: 'appMax',
          width: 180
        },
        {
          title: '最低访问功能',
          dataIndex: 'appMin',
          width: 180
        }
      ]
    }
  ],
  columnTab2: [
    {
      title: '',
      children: [
        {
          title: '中台名称',
          dataIndex: 'secondLevelName',
          width: 180
        }
      ]
    },
    {
      title: '基础指标',
      children: [
        {
          title: '浏览量(PV)',
          dataIndex: 'pv',
          width: 120
        },
        {
          title: '访客数(UV)',
          dataIndex: 'uv',
          scopedSlots: {
            customRender: 'uv'
          },
          width: 120
        }
      ],
    },
    {
      title: '质量指标',
      children: [
        {
          title: '跳出率',
          dataIndex: 'bounceRate',
          scopedSlots: {
            customRender: 'bounceRate'
          },
          width: 120
        },
        {
          title: '平均访问时长',
          dataIndex: 'avgAccessDuration',
          width: 180
        },
        {
          title: '最高访问功能',
          dataIndex: 'appMax',
          width: 180
        },
        {
          title: '最低访问功能',
          dataIndex: 'appMin',
          width: 180
        }
      ]
    }
  ],
  columnTab3: [
    {
      title: '',
      children: [
        {
          title: '功能名称',
          dataIndex: 'appName',
          width: 180
        }
      ]
    },
    {
      title: '基础指标',
      children: [
        {
          title: '浏览量(PV)',
          dataIndex: 'pv',
          width: 120
        },
        {
          title: '访客数(UV)',
          dataIndex: 'uv',
          scopedSlots: {
            customRender: 'uv'
          },
          width: 120
        }
      ],
    },
    {
      title: '质量指标',
      children: [
        {
          title: '跳出率',
          dataIndex: 'bounceRate',
          scopedSlots: {
            customRender: 'bounceRate'
          },
          width: 120
        },
        {
          title: '平均访问时长',
          dataIndex: 'avgAccessDuration',
          width: 180
        }
      ]
    }
  ],
  columnTab4: [
    {
      title: '日期时间',
      dataIndex: 'time'
    },
    {
      title: '账号',
      dataIndex: 'account'
    },
    {
      title: '姓名',
      dataIndex: 'username'
    },
    {
      title: '登录设备类别',
      dataIndex: 'loginDeviceType'
    },
    {
      title: '最近登录时间',
      dataIndex: 'lastLoginTime'
    },
    {
      title: '最近登录访问时长',
      dataIndex: 'lastLoginAccessTime'
    },
    {
      title: '最高访问功能',
      dataIndex: 'appMax'
    },
    {
      title: '地域(省)',
      dataIndex: 'province'
    },
    {
      title: '地域(市)',
      dataIndex: 'city'
    },
    {
      title: '联系方式',
      dataIndex: 'phone'
    }
  ],
  columnTable: [
    {
      title: '日期时间',
      dataIndex: 'time',
      width: 160
    },
    {
      title: '账号',
      dataIndex: 'account',
      width: 150
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
      width: 150
    },
    {
      title: '最低访问功能模块',
      dataIndex: 'appMin',
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
  tabList: [
    { name: '全部用户', value: 'uv' },
    { name: '跳出用户', value: 'bounceRate' }
  ]
}