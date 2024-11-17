# 矢量网格

`VECTOR`

Vector 是 Figma 的一种特殊的矢量网格（vector network）图形，类似 SVG 的 path，但功能更强大。

它能够表达任意其他类型的图形，所以其他图形经常可以通过一些操作转换为矢量网格类型。

比如双击矩形，给它加一个路径点，然后确认，此时其实它就不再是矩形了，而是矢量网格了。或执行 Flatten 命令。

## vectorData

矢量数据。

## vectorData.vectorNetwork

矢量网格数据。

- vertices：顶点坐标数组；
- segments：片段数组，片段指的是两个顶点的形成的线段，可能还会有控制点（可表示为三阶贝塞尔曲线）：
- regions：需要填充的区域；
- normalizedSize：图形的包围矩形宽高；
- styleOverrideTable：样式 id 对应的 handleMirroring 方式（这个见 [图形基础属性](./basic.md#handlemirroring)）；

## vectorData.cornerSmoothing

圆角平滑度。

## 结尾

简单来说，Figma 数据上表达矢量网格的方式是：

记录每个顶点坐标和对应的编号（使用顶点数组的索引值）。

然后描述所有的 segments（曲线片段）：使用哪两个顶点，以及可能有的两个控制点。

最后还要描述填充区域：记录需要围成区域的顶点 id，以及使用的绕数规则。

这样就描述完一个完整的矢量网格了。