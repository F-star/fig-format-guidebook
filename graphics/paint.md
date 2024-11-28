# 着色 paint

> WIP

## 纯色

`SOLID`

```json
{
"type": "SOLID",
"color": {
    "r": 0.7631543278694153,
    "g": 0.9063313603401184,
    "b": 0.6506586074829102,
    "a": 1
},
"opacity": 1,
"visible": true,
"blendMode": "NORMAL"
}
```

color 使用 rbga 格式。

- r：红色，取值范围 0 ~ 1；
- g：绿色，取值范围 0 ~ 1；
- b：蓝色，取值范围 0 ~ 1；
- a：alpha 通道，也就是透明度（不透明度）的值。1 表示完全不透明，0 表示完全透明。

## 线性渐变

`GRADIENT_LINEAR`

```json
{
  "type": "GRADIENT_LINEAR",
  "opacity": 1,
  "visible": true,
  "blendMode": "NORMAL",
  "stops": [
    {
      "color": {
        "r": 0.8638455867767334,
        "g": 0.8465206027030945,
        "b": 0.4307228624820709,
        "a": 1
      },
      "position": 0
    },
    {
      "color": {
        "r": 0.6971789002418518,
        "g": 0.4928666353225708,
        "b": 0.4928666353225708,
        "a": 1
      },
      "position": 1
    }
  ],
  "transform": {
    "m00": 0,
    "m01": 1,
    "m02": 0,
    "m10": -1,
    "m11": 0,
    "m12": 1
  },
  // 变量
  "stopsVar": [
    {
      "color": {
        "r": 0.8638455867767334,
        "g": 0.8465206027030945,
        "b": 0.4307228624820709,
        "a": 1
      },
      "colorVar": {
        "value": {
          "colorValue": {
            "r": 0.8638455867767334,
            "g": 0.8465206027030945,
            "b": 0.4307228624820709,
            "a": 1
          }
        },
        "dataType": "COLOR",
        "resolvedDataType": "COLOR"
      },
      "position": 0
    },
    {
      "color": {
        "r": 0.6971789002418518,
        "g": 0.4928666353225708,
        "b": 0.4928666353225708,
        "a": 1
      },
      "colorVar": {
        "value": {
          "colorValue": {
            "r": 0.6971789002418518,
            "g": 0.4928666353225708,
            "b": 0.4928666353225708,
            "a": 1
          }
        },
        "dataType": "COLOR",
        "resolvedDataType": "COLOR"
      },
      "position": 1
    }
  ]
}
       
```
