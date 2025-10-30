# 更新属性

试验修改图形的属性，figma 会怎么通信，注意这里是 **当前 design 只有一个用户的场景**。

修改图形的 x，将 -23 修改为 0，会发出以下消息。

```json
{
  type: 'NODE_CHANGES',
  sessionID: 2,
  ackID: 7,
  sentTimestamp: 1761837117470n,
  nodeChanges: [
    // 画布的信息也更新了，目前不了解这些字段的作用
    {
      guid: { sessionID: 0, localID: 1 },
      editInfo: {
        userId: '1166195885685703702',
        lastEditedAt: 1761837117,
        createdAt: 0
      },
      editScopeInfo: {
        snapshots: [
          {
            frames: [
              {
                stack: [
                  {
                    type: 'USER',
                    label: 'update-transform-properties',
                    editorType: 'DESIGN'
                  },
                  {
                    type: 'SYSTEM',
                    label: 'update-edit-info',
                    editorType: 'DESIGN'
                  }
                ]
              }
            ],
            nodeChangeFieldNumbers: [ 331 ]
          }
        ]
      }
    },
    {
      // 标识这个矩形被修改
      guid: { sessionID: 2, localID: 2 },
      // transform 发生了改变
      transform: { m00: 1, m01: 0, m02: 0, m10: 0, m11: 1, m12: -261 },
      editScopeInfo: {
        snapshots: [
          {
            frames: [
              {
                stack: [
                  {
                    type: 'USER',
                    label: 'update-transform-properties',
                    editorType: 'DESIGN'
                  }
                ]
              }
            ],
            nodeChangeFieldNumbers: [ 12 ]
          }
        ]
      }
    }
  ]
}
```

接着会接收到下面信息。

看来是广播到自己了，相比发送的数据，多了 `reconnectSequenceNumber` 和 `blobBaseIndex` 字段。

> 下面是 AI 对这里两个字段的理解，目前还是意义不明
> - reconnectSequenceNumber：重连序号，用于判断是否是重连消息；
> - blobBaseIndex：blob 索引，用于判断 blob 数据是否需要更新；

```json
{
  type: 'NODE_CHANGES',
  ackID: 7,
  reconnectSequenceNumber: 4,
  sessionID: 2,
  blobBaseIndex: 0,
  nodeChanges: [
    {
      guid: { sessionID: 0, localID: 1 },
      editInfo: {
        userId: '1166195885685703702',
        lastEditedAt: 1761837117,
        createdAt: 0
      },
      editScopeInfo: {
        snapshots: [
          {
            frames: [
              {
                stack: [
                  {
                    type: 'USER',
                    label: 'update-transform-properties',
                    editorType: 'DESIGN'
                  },
                  {
                    type: 'SYSTEM',
                    label: 'update-edit-info',
                    editorType: 'DESIGN'
                  }
                ]
              }
            ],
            nodeChangeFieldNumbers: [ 331 ]
          }
        ]
      }
    },
    {
      guid: { sessionID: 2, localID: 2 },
      transform: { m00: 1, m01: 0, m02: 0, m10: 0, m11: 1, m12: -261 },
      editScopeInfo: {
        snapshots: [
          {
            frames: [
              {
                stack: [
                  {
                    type: 'USER',
                    label: 'update-transform-properties',
                    editorType: 'DESIGN'
                  }
                ]
              }
            ],
            nodeChangeFieldNumbers: [ 12 ]
          }
        ]
      }
    }
  ]
}
```

至此结束。