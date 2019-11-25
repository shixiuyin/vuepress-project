

# 第一章：java语言概述

## 一、计算机基础知识

### 1.1 计算机的组成

常见的计算机主要由`软件`和`硬件`组成。硬件是软件运行的基础。软件的存在会让计算机功能变的更加的强大。

<a data-fancybox title="mark" href="http://image.shibapi.com/blog/20191119/0heLVyiCAXau.png">![mark](http://image.shibapi.com/blog/20191119/0heLVyiCAXau.png)</a>

### 1.2  计算机操作系统

不同的计算机可以安装不同的操作系统。常用的操作系统:

- Window： 平时个人常用的电脑。目前 win7,win10都使用较多

- Unix/Linux: 主要用做服务器。性能稳定

- Mac:苹果机

### 1.3 计算机的常用单位

字节是计算机中进行信息存储的基本单位。 

- 1 Byte(字节) = 8 bit(位)； 
- 1 KB = 1024 Byte；
- 1 MB = 1024 KB ；
- 1 GB = 1024 MB ；
- 1 TB = 1024 GB ；

java中一个字母占一个字节，一个中文占两个字节;

不同的编码方式下所占的字节数量是不确定的。一个中文可能是2，3，或者4个字节



### 1.4.计算机的交互方式



人类可以使用计算机程序来帮我们处理现实生活中的各种问题，例如可以通过12306来购买去丈母娘的车票。这时候就得让计算机程序知道我们要从哪里出发，去到哪里。只有这样，程序才会帮我们做事。这时候就牵扯到人与机器的交互问题。常用的人机交互主要以下两种方式:

- 图形化界面(GraphicalUser Interface GUI)这种方式简单直观，使用者易于接受，容易上手操作。

- **`命令行方式`**(Command Line Interface CLI)：需要有一个控制台，输入特定的指令，让计算机完成一些操作。较为麻烦，需要记录住一些命令。



### 1.5.常用的DOS命令

DOS命令是我们所接触的第一个`命令行`的交互方式。所以是最基本也是我们必须要掌握的问题。

- 常用的DOS命令
  - dir（directory） :    列出当前目录下的文件以及文件夹
  - md（make directory） :   创建目录
  - rd（remove  directory） :     删除目录
  - cd（change directory）:    进入指定目录
  - cd.. :  退回到上一级目录
  - cd \:    退回到根目录
  - exit :   退出 dos 命令行
- 具体操作如下

<a data-fancybox title="mark" href="http://image.shibapi.com/blog/20191119/cFMINBB1MIQU.png">![mark](http://image.shibapi.com/blog/20191119/cFMINBB1MIQU.png)</a>

<a data-fancybox title="mark" href="http://image.shibapi.com/blog/20191119/bTGmSlBLuRpa.png">![mark](http://image.shibapi.com/blog/20191119/bTGmSlBLuRpa.png)</a>

<a data-fancybox title="mark" href="http://image.shibapi.com/blog/20191119/7Cgv7WEV5rx9.png">![mark](http://image.shibapi.com/blog/20191119/7Cgv7WEV5rx9.png)</a>





### 1.6计算机程序语言

**语言：**是人与人之间用于沟通的一种方式。例如：中国人与中国人用普通话沟通。而中国人要和英国人交流，就要学习英语。

**计算机语言（编程语言）：**人与计算机交流的方式。如果人要与计算机交流，那么就要学习计算机语言。计算机语言有很多种，如：**C，C++，Java，PHP**等。



## 二、Java简介



### 2.1.java概述

#### 2.1.1java是什么?

​	学习之前需要了解,java是什么。java是sun公司推出的面向对象程序设计语言，特别适用于Interent应用程序开发,它的最大特点就是“一次编译，到处运行”,并且能够在各种操作系统上运行,例如:windows,linux等。

#### 2.1.2java名称的由来

​	Java是印度尼西亚爪哇岛的英文名称，因盛产咖啡而闻名。Java语言中的许多库类名称，多与咖啡有关，如JavaBeans(咖啡豆)、NetBeans(网络豆)以及ObjectBeans (对象豆)等等。SUN和JAVA的标识也正是一杯正冒着热气的咖啡。Java自1995诞生，至今已经20多年的历史。

#### 2.1.3为什么学习java?

​	java可以说是无处不在，其市场占有率也在不断攀升。他已经吸收了全球最大的开发者队伍---500W+开发者这是全球最大最具活力的开发团队。

​	目前采用java的设备已经超过45亿，其中报告8亿台个人计算机、15亿部移动电话及其其他手持设备、22亿智能卡，以及机顶盒、打印机、网络照相机、游戏、汽车导航系统、彩票终端、医疗设备、收费站等。

以下是最新的编程语言排行榜：

**2019年03月编程语言排行榜TOP 10 榜单**

https://hellogithub.com/report/tiobe/?url=/

| 排名 | 编程语言          | 流行度  | 对比上月 | 年度明星语言     |
| ---- | ----------------- | ------- | -------- | ---------------- |
| 1    | Java              | 14.880% | 0.996%   | 2015, 2005       |
| 2    | C                 | 13.305% | 0.881%   | 2017, 2008       |
| 3    | Python            | 8.262%  | 0.688%   | 2010, 2007, 2018 |
| 4    | C++               | 8.126%  | 0.682%   | 2003             |
| 5    | Visual Basic .NET | 6.429%  | 0.666%   |                  |
| 6    | C#                | 3.267%  | 0.421%   |                  |
| 7    | JavaScript        | 2.426%  | 0.422%   | 2014             |
| 8    | PHP               | 2.420%  | 0.149%   | 2004             |
| 9    | SQL               | 1.926%  | 0.026%   |                  |
| 10   | Objective-C       | 1.681%  | 0.234%   | 2012, 2011       |



### 2.2.java发展史

<a data-fancybox title="mark" href="http://image.shibapi.com/blog/20191119/avJEq53rIuFf.jpg">![mark](http://image.shibapi.com/blog/20191119/avJEq53rIuFf.jpg)</a>

- **1995年5月23日，Java语言诞生**

- 1996年1月，第一个[JDK](https://zh.wikipedia.org/wiki/JDK)-[JDK1.0](https://zh.wikipedia.org/w/index.php?title=JDK1.0&action=edit&redlink=1)诞生

- 1996年4月，10个最主要的[操作系统](https://zh.wikipedia.org/wiki/%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F)供应商申明将在其产品中嵌入JAVA技术

- 1996年9月，约8.3万个网页应用了JAVA技术来制作

- 1997年2月18日，[JDK1.1](https://zh.wikipedia.org/w/index.php?title=JDK1.1&action=edit&redlink=1)发布

- 1997年4月2日，JavaOne会议召开，参与者逾一万人，创当时全球同类会议规模之纪录

- 1997年9月，[JavaDeveloperConnection](https://zh.wikipedia.org/w/index.php?title=JavaDeveloperConnection&action=edit&redlink=1)社区成员超过十万

- 1998年2月，[JDK1.1](https://zh.wikipedia.org/w/index.php?title=JDK1.1&action=edit&redlink=1)被下载超过**2,000,000**次

- 1998年12月8日，[JAVA2](https://zh.wikipedia.org/w/index.php?title=JAVA2&action=edit&redlink=1)企业平台J2EE发布

- 1999年6月，SUN公司发布Java的三个版本：标准版（[J2SE](https://zh.wikipedia.org/wiki/J2SE)）、企业版（[J2EE](https://zh.wikipedia.org/wiki/J2EE)）和微型版（[J2ME](https://zh.wikipedia.org/wiki/J2ME)）

- 2000年5月8日，[JDK1.3](https://zh.wikipedia.org/w/index.php?title=JDK1.3&action=edit&redlink=1)发布

- 2000年5月29日，[JDK1.4](https://zh.wikipedia.org/w/index.php?title=JDK1.4&action=edit&redlink=1)发布

- 2001年6月5日，[NOKIA](https://zh.wikipedia.org/wiki/%E8%AF%BA%E5%9F%BA%E4%BA%9A)宣布，到2003年将出售1亿部支持Java的手机

- 2001年9月24日，[J2EE1.3](https://zh.wikipedia.org/w/index.php?title=J2EE1.3&action=edit&redlink=1)发布

- 2002年2月26日，[J2SE1.4](https://zh.wikipedia.org/w/index.php?title=J2SE1.4&action=edit&redlink=1)发布，自此Java的计算能力有了大幅提升

- **2004年9月30日18:00PM，[J2SE1.5](https://zh.wikipedia.org/wiki/J2SE1.5)发布，成为Java语言发展史上的又一里程碑。为了表示该版本的重要性，[J2SE1.5](https://zh.wikipedia.org/wiki/J2SE1.5)更名为Java SE 5.0**

- 2005年6月，[JavaOne大会](https://zh.wikipedia.org/wiki/JavaOne%E5%A4%A7%E4%BC%9A)召开，SUN公司公开Java SE 6。此时，Java的各种版本已经更名，以取消其中的数字“2”：J2EE更名为Java EE，J2SE更名为Java SE，J2ME更名为Java ME

- 2006年12月，SUN公司发布JRE6.0

- **2009年4月20日，Oracle以74亿美元收购Sun公司，取得了java的版权。**

- 2009年12月，SUN公司发布Java EE 6

- 2010年11月，由于Oracle公司对于Java社群的不友善，因此Apache扬言将退出JCP

- java之父James Gosling 加盟google

- 2011年7月28日，Oracle公司发布Java SE 7

- 2014年3月18日，Oracle公司发表Java SE 8

- 2017年9月21日，Oracle公司发表Java SE 9

- 2018年3月21日，Oracle公司发表Java SE 10

- 2018年9月25日，Java SE 11发布

  

### 2.3.Java语言特点

Sun公司在1995年推出java时，发布了一个java白皮书，并这样定义java语言：

**1.简单的（Simple）**
风格和C++很像，基本语法和C很像，但是摒弃了C++容易引发错误的地方，如指针、内存管理、头文件等。
提供了丰富的类库。 

**2.面向对象（Object-Oriented）**

简单的来说，面向对象设计就是一种程序设计技术。它将重点放在了数据（也就是对象）和对象的接口上。

**3.分布式的（Distributed）**

Java是针对Internet的分布式环境而设计的，所以它包含了一个支持HTTP和FTP等基于TCP/IP协议的子库，它能处理TCP/IP协议。Java应用程序可以凭借URL打开并访问网络上的对象。实际上使用URL访问资源与访问文件没有什么太大的区别。

**4.解释的（Interpreted）**

Java解释器可以在任何移植了解释器的机器上Java字节码。现在使用即时编译器将字节码翻译成机器码。

**5.健壮的（Robust）**

Java是强制类型的语言，它不仅在运行时检查代码，还在编译时就检查代码，消除有出错倾向的状态。
Java自己操纵内存，减少了内存出错的可能性。（垃圾回收功能）
实现了真数组，避免了覆盖数据的可能。

**6.安全性（Secure）**

指针和释放内存等C++功能被删除，避免了非法内存操作。
当Java用来创建浏览器时，语言功能和一些浏览器本身提供的功能结合起来，使它更安全。

**7.结构中立的（Architecture-neutral）**

编译器生成一个体系结构中立的高层次的与机器无关的byte-code格式语言，被设计在Java虚拟机上运行。这是一种编译过的代码，只要有Java运行时系统，就可以在许多处理机上运行。解释字节码会比全速运行机器指令慢很多，但是虚拟机有一个选项，可以将使用最频繁的字节码序列翻译成机器码，这一过程被称为及时翻译。

**8.可移植的（Portable）**

Java定义了独立于平台的基本数据类型及其运算，消除了代码移植时让人头痛的主要问题。二进制数据以固定的格式进行存储和传输，消除了字节顺序的困扰。

**9.高性能的（High-Performance）**

Java通过使用及时编译器，可以很容易的将字节码转换为运行这个应用程序的特定CPU的机器码。

**10.多线程的（Multi-Threaded）**

多线程可以提供更好的交互性能和实时控制性能。Java的设计目标之一是满足对创建交互式、网络化程序的现实需求。只需要考虑程序的特定行为，而不需要考虑多任务子系统。

**11.动态的（Dynamic）**

Java的动态性是其面向对象设计方法的拓展，它允许程序动态地装入运行过程中所需要的类。



**其中可以简单的概括为以下三个重要的特点:**

- 特点一：面向对象
  - 两个基本概念：类、对象
  - 三大特性：封装、继承、多态
- 特点二：健壮性
  - 吸收了C/C++语言的优点
  - 去掉影响程序健壮性的部分(指针、内存的申请与释放)
- 特点三：跨平台性
  - 依次编译多次执行
  - 主要通过Java为不同平台提供了对应的虚拟机(JVM)



### 2.4.java语言的构成

​	所谓java的构成，就是值java运行环境的组成，从核心到外围包括 **JIT、JVM、JRE、JDK**，四种区别如下：

- **JDK**:是**J**ava **D**evelop Tool**K**it的缩写，它里面有很多java所编写的开发工具(如:javac.exe、jar.exe),还包括了一个jre的调试环境。
- **JRE**:是**J**ava **R**untime **E**nvironment的缩写，是java运行的基础，它提供了java运行的API,Java程序必须有JRE才能正常运行。
- **JVM**:是**J**ava **V**itual **M**achine的缩写，它是java运行的虚拟机环境.
- **JIT**:是**J**ava **I**n **T**ime的缩写，即java即时编译器，是JVM的一部分，属于内核部分。







## 三、Java环境搭建

Oracle公司为Window,Linux,以及Mac等不同的平台提供完整的JDK(Java开发工具包)。并且一直在维护更新。官网提供最新的工具包下载。

### 3.1 基本概念

| 缩写    | 详细名称                             | 简介                                                         |
| ------- | ------------------------------------ | ------------------------------------------------------------ |
| **JDK** | **J**ava **D**evelop Tool**K**it     | Java开发工具包，很多java所编写的开发工具(如:javac.exe、jar.exe) |
| **JRE** | **J**ava **R**untime **E**nvironment | java运行的基础，提供了java运行的API,必须有JRE才能正常运行    |
| **JVM** | **J**ava **V**itual **M**achine      | 它是java运行的虚拟机环境                                     |
| **JIT** | **J**ava **I**n **T**ime             | java即时编译器，是JVM的一部分，属于内核部分                  |

其中的JVM是java运行的虚拟机环境，它是Java运行环境的重要一环。

JDK包含了JRE,JRE包含了JVM，具体关系图如下。

<a data-fancybox title="mark" href="http://image.shibapi.com/blog/20191119/EMHFaQyTX7KI.jpg">![mark](http://image.shibapi.com/blog/20191119/EMHFaQyTX7KI.jpg)</a>





### 3.2 下载及安装 JDK

#### 3.2.1 下载

官方网址：

https://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html、

<a data-fancybox title="mark" href="http://image.shibapi.com/blog/20191119/GS7R4dydJn5g.png">![mark](http://image.shibapi.com/blog/20191119/GS7R4dydJn5g.png)</a>

**安装JDK:**

​	- **傻瓜式安装**，下一步即可。

​	- 建议：安装路径不要有中文或者特殊符号如空格等。

​	- 当提示安装 JRE 时，可以选择不安装。

默认安装路径: C:\Program Files\Java

<a data-fancybox title="mark" href="http://image.shibapi.com/blog/20191119/XEd5IpEwL6rA.png">![mark](http://image.shibapi.com/blog/20191119/XEd5IpEwL6rA.png)</a>



#### 3.2.2  JDK安装目录介绍

<a data-fancybox title="mark" href="http://image.shibapi.com/blog/20191119/TxpafK5wBOyy.png">![mark](http://image.shibapi.com/blog/20191119/TxpafK5wBOyy.png)</a>



| 目录                   | 简介                                                     |
| ---------------------- | -------------------------------------------------------- |
| **bin**                | JDK工具命令，JDK开发工具的可执行文件(java.exe,javac.exe) |
| **include**            | 用于编译本地方法的文件                                   |
| **jre**                | java运行时环境文件                                       |
| **lib**                | 类库文件，存放的是JDK工具命令的实际执行程序              |
| **src.zip**            | 该压缩文件里面存放的就是Java所有核心类库的源代码         |
| **javafx-src.zip**     | JavaFX源代码                                             |
| **COPYRIGHT和LICENSE** | COPYRIGHT和LICENSE为版权和签证的说明性文档。             |



### 3.3配置环境变量

#### 3.3.1第一步

> 打开-计算机-属性-高级系统设置-环境变量-系统变量

<a data-fancybox title="mark" href="http://image.shibapi.com/blog/20191119/GYqF8ndNgsg0.png">![mark](http://image.shibapi.com/blog/20191119/GYqF8ndNgsg0.png)</a>



#### 3.3.2第二步

配置解析（JAVA_HOME,PATH,CLASSPATH）

- JAVA_HOME:另似给jdk全路径取一个别名。然后使用的时候直接使用别名
- PATH:通过PATH,在DOS命令行找到对应的命令。java  javac 
- CLASSPATH:JDK1.5之后，可以选择性安装，建议安装。最前面一定要配置一个.(点)

具体配置:

```java
JAVA_HOME = C:\Program Files\Java\jdk1.8.0_73
PATH = %JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;
CLASSPATH = .;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;
```

<a data-fancybox title="mark" href="http://image.shibapi.com/blog/20191119/3Ha2XJrTUtMx.png">![mark](http://image.shibapi.com/blog/20191119/3Ha2XJrTUtMx.png)</a>



#### 3.3.3 测试

<a data-fancybox title="mark" href="http://image.shibapi.com/blog/20191119/y1mxFODNjlqt.png">![mark](http://image.shibapi.com/blog/20191119/y1mxFODNjlqt.png)</a>



## 四、HelloWorld第一个程序



### 4.1 显示已知文件的扩展名

很多电脑，默认是无法查看和修改后缀名的。可以通过文件夹设置进行调节。方便后面修改想要的后缀。一下提高了win10 和 win7两种系统的设置方式。

**win10系统:**

<a data-fancybox title="mark" href="http://image.shibapi.com/blog/20191119/k448r0AvdCPb.png">![mark](http://image.shibapi.com/blog/20191119/k448r0AvdCPb.png)</a>

**win7系统:**

<a data-fancybox title="mark" href="http://image.shibapi.com/blog/20191119/MhGJ7z2JUHwb.png">![mark](http://image.shibapi.com/blog/20191119/MhGJ7z2JUHwb.png)</a>







### 4.2 编写源代码



#### 4.2.1 创建文件

在电脑的任意路径下创建文件，例如在`D:\java`创建<mark>HelloWorld.java</mark>

<a data-fancybox title="mark" href="http://image.shibapi.com/blog/20191119/dx8A6lKAj29B.png">![mark](http://image.shibapi.com/blog/20191119/dx8A6lKAj29B.png)</a>



#### 4.2.2 编写源代码

文件名必须和源代码中的class类名保持一致

```java
//HelloWorld由于被public 修饰，所有必须和文件名保持一致
public class HelloWorld{
//程序的入口
 public static void main(String[] args){
	//打印信息到控制台
	System.out.println("hello bj1901.....");
 }
}
```



#### 4.2.3.具体细节如下:

``` xml
- main的方法：
	Java应用程序的执行入口是main()方法。它有固定的书写格式：
	public static void main(String[] args)  {...}
     如果没有 main 方法则在运行时会抛出如下异常
	【java.lang.NoSuchMethodError:main】
- 想要和JVM来个互动，只要在main方法中加入一句System.out.println(“Hello World”);  
- 一个 Java 源文件中最多只能有一个 public  类。其它类的个数不限，
	如果源文件文件包含一个 public 类，它必	须是该类名命名。
- Java 语言严格区分大小写。
- Java方法由一条条语句构成，每个语句以分号结束。
```

#### 4.2.4.java注释

注释：用于解释说明程序的文字、提高了代码的阅读性

Java中的注释类型：

​	- 单行注释

​	- 多行注释

​	- 文档注释（java 特有）

注释是一个程序员必须要具有的良好编程习惯。将自己的思想通过注释先整理出来，再用代码去体现

<a data-fancybox title="mark" href="http://image.shibapi.com/blog/20191119/o7RMxRL8AYju.png">![mark](http://image.shibapi.com/blog/20191119/o7RMxRL8AYju.png)</a>



#### 2.3.6 编译

java提供了<kbd>javac</kbd>命令用于编译：

编译HelloWorld.java文件，编译成功会生成HelloWorld.class文件

<a data-fancybox title="mark" href="http://image.shibapi.com/blog/20191119/JVeTQcWmWxIf.png">![mark](http://image.shibapi.com/blog/20191119/JVeTQcWmWxIf.png)</a>



java 提供了<kbd>java</kbd>命令用于执行class文件:

<a data-fancybox title="mark" href="http://image.shibapi.com/blog/20191119/8T5VCUMRqJGQ.png">![mark](http://image.shibapi.com/blog/20191119/8T5VCUMRqJGQ.png)</a>

到此，java的环境变量和第一个<mark>HelloWorld</mark>入门程序已经搞定。



### 4.4案例

<a data-fancybox title="1533024580869" href="img/1533024580869.png">![1533024580869](img/1533024580869.png)</a>



```java
public class Test01{
	public static void main(String [] args){
		System.out.println("-------------------------");
		//注释：是一个制表符  tab键
		System.out.println("\t欢迎光临家乐福西乡店");
		System.out.println("机:15 \t 人:1082 \t 单:7596");
		System.out.println("\t\t\t\t\tRMB");
		System.out.println("商品号\t110 清风抽取式面纸  \t\t25.30");
		System.out.println("商品号\t111 统一方便面  \t\t12.56");
		System.out.println("-------------------------");
		System.out.println("总价\t\t\t\t\t37.86");
		System.out.println("-------------------------");
	}
}
```



### 4.5 练习

开发出如下界面:

**练习1:**

``` xml
**********************************
		魔法饰品分发系统
	1.登录系统
	2.退出
**********************************
请选择输入数字:
		
```

**练习2：**

``` xml
		魔法饰品分发系统
**********************************
		1.账号信息管理
		2.购物结算
		3.装备返点
		4.注销
***********************************
请选择输入数字:
```





## 三、java语言的运行机制

1.JVM(java虚拟机)

2.GC(垃圾回收器)

### 2.1 JVM

```java
概念:JVM是一个虚拟的计算机，具有指令集并使用不同的存储区域。负责执行指令，管理数据、内存、寄存器

java是跨平台的语言(windows,linux,mac):
	怎么实现跨平台的:因为不同的操作系统（平台）拥有不同的虚拟机。

Java虚拟机机制屏蔽了底层运行平台的差别，实现了“一次编译，到处运行”。
```

<a data-fancybox title="1552235860599" href="img\jvm.png">![1552235860599](img\jvm.png)</a>



### 2.2.GC 垃圾回收器

```java
1.系统开辟一个线程自动检测哪些对象不再被使用，然后将这些空闲的对象及资源进行回收。（c,c++需要手动回收）
2.在系统运行的时候，会自动去执行。我们人工无法精确的取控制和干预.
```



## 四、eclipse编译工具 使用

1.解压直接使用

2.第一次进来选择工作空间，就是存放代码的地方(建议放在D盘)

3.修改eclipse的编码方式(UTF-8:万国码，国标码:GB2312,GBK)



6.创建具体的java类

选中项目，然后先建class。然后设置class名称

<link rel="stylesheet" href="//cdn.bootcss.com/gitalk/1.5.0/gitalk.min.css">

<script src="//cdn.bootcss.com/gitalk/1.5.0/gitalk.min.js"></script>
<div id="gitalk-container"></div>
<script>
    var gitalk = new Gitalk({
    clientID: 'ea29097a2b9bf811f1db', // GitHub Application Client ID
    clientSecret: 'cdf360ca85cf7193dc4faa9467adf8c4068d9049', // GitHub Application Client Secret
    repo: 'blog-comments',              // 存放评论的仓库
    owner: 'shixiuyin',          // 仓库的创建者，
    admin: ['shixiuyin','hzittest'],        // 如果仓库有多个人可以操作，那么在这里以数组形式写出
    id: location.pathname,      // 用于标记评论是哪个页面的，确保唯一，并且长度小于50
    });
    gitalk.render('gitalk-container');    // 渲染Gitalk评论组件
 </script>
