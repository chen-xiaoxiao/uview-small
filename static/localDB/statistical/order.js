export const orderMock = {
  columnOrder: [
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
      title: '汇总',
      children: [
        {
          title: '全部订单',
          scopedSlots: {
            customRender: 'all'
          },
          dataIndex: 'all',
          width: 100
        },
        {
          title: '全部未完成',
          scopedSlots: {
            customRender: 'unfinished'
          },
          dataIndex: 'unfinished',
          width: 110
        },
      ],
    },
    {
      title: '未完成订单',
      children: [
        {
          title: '待分配',
          scopedSlots: {
            customRender: 'wait'
          },
          dataIndex: 'wait',
          width: 100
        },
        {
          title: '待处理',
          scopedSlots: {
            customRender: 'toProcessed'
          },
          dataIndex: 'toProcessed',
          width: 100
        },
        {
          title: '处理中',
          scopedSlots: {
            customRender: 'processing',
          },
          dataIndex: 'processing',
          width: 100
        },
        {
          title: '待确认',
          scopedSlots: {
            customRender: 'toConfirmed',
          },
          dataIndex: 'toConfirmed',
          width: 100
        },
        {
          title: '待审核',
          scopedSlots: {
            customRender: 'toAudit',
          },
          dataIndex: 'toAudit',
          width: 100
        }
      ]
    },
    {
      title: '订单变更',
      children: [
        {
          title: '已完成',
          scopedSlots: {
            customRender: 'finished'
          },
          dataIndex: 'finished',
          width: 100
        },
        {
          title: '已取消',
          scopedSlots: {
            customRender: 'canceled'
          },
          dataIndex: 'canceled',
          width: 100
        },
        {
          title: '新产生订单',
          scopedSlots: {
            customRender: 'newOrder'
          },
          dataIndex: 'newOrder',
          width: 110
        }
      ]
    }
  ],
  tabList: [
    { name: '全部订单', value: 'all' },
    { name: '全部未完成订单', value: 'unfinished' },
    { name: '待分配', value: 'wait' },
    { name: '待处理', value: 'toProcessed' },
    { name: '处理中', value: 'processing' },
    { name: '待确认', value: 'toConfirmed' },
    { name: '待审核', value: 'toAudit' },
    { name: '已完成', value: 'finished' },
    { name: '已取消', value: 'canceled' },
    { name: '新产生订单', value: 'newOrder' }
  ],
  columnTable: [
    {
      title: '序号',
      scopedSlots: {
        customRender: 'index',
      },
      width: 80
    },
    {
      title: '订单号',
      dataIndex: 'orderNo',
      width: 280
    },
    {
      title: '客户经理',
      dataIndex: 'customerManager',
      width: 150
    },
    {
      title: '客户名称',
      dataIndex: 'customerName',
      width: 100
    },
    {
      title: '联系人',
      dataIndex: 'contactPerson',
      width: 100
    },
    {
      title: '联系方式',
      dataIndex: 'phoneNumber',
      width: 120
    },
    {
      title: '下单时间',
      dataIndex: 'createTime',
      width: 180
    },
    {
      title: '状态',
      dataIndex: 'status',
      width: 120
    },
    {
      title: '操作时间',
      dataIndex: 'operationTime',
      width: 180
    },
    {
      title: '操作',
      dataIndex: 'action',
      width: 100,
      fixed: 'right',
      scopedSlots: {
        customRender: 'action',
      }
    }
  ]
}
