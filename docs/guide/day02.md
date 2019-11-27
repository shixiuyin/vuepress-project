# 第二章:变量|数据类型|运算符



## 一、关键字

### 1.1 含义

被java赋予了特殊含义，用作专门用途的字符串。例如:public:表示公共的    class:定义类  

**特点**:所有的单词都是小写 `goto`和`const`:表示`java`的预留关键字

### 1.2 Java关键字列表

| 用于定义数据类型的关键字   |           |        |        |          |
| -------------------------- | --------- | ------ | ------ | -------- |
| class                      | interface | enum   | byte   | short    |
| int                        | long      | float  | double | char     |
| boolean                    | void      |        |        |          |
| 用于定义数据类型值的关键字 |           |        |        |          |
| true                       | false     | null   |        |          |
| 用于定义流程控制的关键字   |           |        |        |          |
| if                         | else      | switch | case   | default  |
| while                      | do        | for    | break  | continue |
| return                     |           |        |        |          |

| 用于定义访问权限修饰符的关键字               |            |           |              |        |
| -------------------------------------------- | ---------- | --------- | ------------ | ------ |
| private                                      | protected  | public    |              |        |
| 用于定义类，函数，变量修饰符的关键字         |            |           |              |        |
| abstract                                     | final      | static    | synchronized |        |
| 用于定义类与类之间关系的关键字               |            |           |              |        |
| extends                                      | implements |           |              |        |
| 用于定义建立实例及引用实例，判断实例的关键字 |            |           |              |        |
| new                                          | this       | super     | instanceof   |        |
| 用于异常处理的关键字                         |            |           |              |        |
| try                                          | catch      | finally   | throw        | throws |
| 用于包的关键字                               |            |           |              |        |
| package                                      | import     |           |              |        |
| 其他修饰符关键字                             |            |           |              |        |
| native                                       | strictfp   | transient | volatile     | assert |



## 二、标识符

### 2.1 含义

Java 对各种<mark>变量</mark>、<mark>方法</mark>和<mark>类</mark>等要素命名时使用的字符序列称为标识符

凡是自己可以起名字的地方都叫标识符。



### 2.2 标识符命名规则

自定义标识符，必须符合标识符的**命名规则**。否则出现语法错误。主要规则如下:

``` xml
1.由26个英文字母大小写，数字：0-9 ，_或 $ 组成  
2.数字不可以开头。
3.不可以使用关键字和保留字，但能包含关键字和保留字。
4.Java中严格区分大小写，长度无限制。
5.标识符不能包含空格。

注意：取名满足见名知意，长度不宜过长。小于30个字符;
```

**案例:**

| 标识符                            | 含义                               |
| --------------------------------- | ---------------------------------- |
| <mark><del>&abc</del></mark>      | 错误：标识符不能包含&符号          |
| <mark><del>2abc</del></mark>      | 错误：标识符不能是数字开头         |
| <mark><del>class</del></mark>     | 错误：标识符不能使用关键字和保留字 |
| `class1`                          | 正确                               |
| `Animal`                          | 正确                               |
| `animal`                          | 正确                               |
| <mark><del>last name</del></mark> | 错误：标识符中间不能使用空格       |
| `a`                               | 正确                               |
| `age`                             | 正确                               |





### 2.3 标符命名规范

Java标识符的命名规范和命名规则不同；命名规则是必须遵守，否则出现异常信息。而命名规范不是语法强制的，但是很多公司都会对命名有严格的要求，比较通用规范有一下几种规范：

| 含义           | 规则                                              | 案例        |
| -------------- | ------------------------------------------------- | ----------- |
| 1.包名         | a.所有单词都是小写；b.多个层级使用(.)点隔开       | xxx.yyy.zzz |
| 2.类\|接口名   | a.首字母大写；b.多个单词组成，首字母都是大写      | XxxYyyZzz   |
| 3.方法\|变量名 | a.首个单词首字母小写,其余单词首字母大写(驼峰)     | xxxYyyZzz   |
| 4.常量         | a.常量的名称都是大写;b.多个单词组成使用下划线链接 | XXX_YYY_ZZZ |



## 四、变量

### 1.概念

``` xml
内存中的一个存储区域;
该区域有自己的名称（变量名）和类型（数据类型）;
Java中每个变量必须先声明，后使用;
该区域的数据可以在同一类型范围内不断变化;
变量是通过使用变量名来访问这块区域的;
变量的作用域：一对{ }之间有效
```

### 2.定义格式

数据类型 变量名 = [初始值];

例如:int num1 = 90;

### 3.变量的分类

#### a.按照申明(创建)的位置划分

``` xml
1.成员变量|全局变量|属性
	a.定义在方法的外部，类的内部;
	b.范围在该类下所有的地方都可以使用,包括里面多个方法内部;
2.局部变量
	a.定义在方法或者代码块的内容;
	b.只在定义的方法或者代码块的{}里面使用;

之间的区别:
	a.定义位置不一样;
	b.局部变量在使用之前必须赋值。全局变量会生成对应数据类型的默认值;
```



#### b.按照数据类型划分

``` xml
1.基本数据类型
	数值型:	
			整数型:
				byte: 
				short: 
				int: 
				long: 
				默认的类型是int
			浮点型:
				float
				double:
				Java 的浮点型常量默认为 double 型，声明 float 型常量，须后加 ‘f’ 或 ‘F’。
	字符型:
		char:
			a.使用 '' 单引号定义内容;
			b.可以存放一个中文
			c.可以存放Java中还允许使用转义字符‘\’来将其后的字符转变为特殊字符型常量。例如：char c3 = 				'\n';  -- '\n'表示换行符
			d.直接使用 Unicode 值来表示字符型常量：‘\uXXXX’。其中，XXXX代表一个十六进制整数。如：				  \u000a 表示 \n。
			e.char 类型是可以进行运算的。因为它都对应有 Unicode 值。

	布尔型:
		boolean:
		boolean类型数据只允许取值true和false

2.引用数据类型
```

![mark](http://image.shibapi.com/blog/20191119/a5NnfhTT3OAB.png)

![mark](http://image.shibapi.com/blog/20191119/ltyUsco2LeOh.png)





### 4.数据类型的转换

![mark](http://image.shibapi.com/blog/20191119/pD4YNwIXeKYF.png)

``` xml
1.自动转换
	 从小到大；
	byte bt1 = 80;
	int num1 = bt1;

2.强制转换:语法 需要转换变量的前面 添加 （）
	long num1 = 900;
	int num2  = (int)num1;
	
char和byte,short不能只能转换,通过int

3.浮点型转换为整形，丢失精度
		double d1 = 99.9;
		int num3 = (int) d1;

		System.out.println("d1:" + d1);
		System.out.println("num3:" + num3);

```



## 五、运算符

``` xml
算术运算符
赋值运算符
比较运算符（关系运算符）
逻辑运算符
位运算符
三元运算符
```



### 1.算术运算符

![mark](http://image.shibapi.com/blog/20191119/R3Fj8uJA3yBS.png)

### 2.比较运算符

![mark](http://image.shibapi.com/blog/20191119/uKjXqUnaTvfd.png)

### 3.逻辑运算符

![mark](http://image.shibapi.com/blog/20191119/Iu5khzuXLluN.png)

![mark](http://image.shibapi.com/blog/20191119/mihO0LotHHSf.png)





### 4.三元运算符

格式: (条件运算符) ?结果1：结果2

​	条件运算符:true  取结果1

​	条件运算符:false 取结果2

``` java
// 判断num1是否大于等于100
// 如果条件为true ： result = num1
// 如果条件为false: reslut = 60
int result = (num1 >= 100) ? num1 : 60;

String str = (num1 >= 60) ? "优秀" : "不及格";
System.out.println("str=" + str);
```

