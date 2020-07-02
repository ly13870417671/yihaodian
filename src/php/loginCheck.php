<?php

	header("content-type","text/html;charset=utf8");
	
	//1接收数据
	$username = $_GET["username"];
	$userpass = $_GET["userpass"];
	
	//2、在数据库中查询
	//1)、建立连接，并选择数据库
	$conn=mysqli_connect("localhost","root","root","mydb2001");
	if(!$conn){
		die('连接失败:'.mysqli_connect_error());
	}
	

	//2)、执行SQL语句（查询）
	$sqlStr="select * from vip where username='$username' and userpass='$userpass'";
	$result= mysqli_query($conn,$sqlStr);
	
	//3)、关闭连接
	mysqli_close($conn);
	//3、响应结果
	//获得$result的行数
	 // 把结果转换成数字类型，$login里面有个'num_rows'，值为0或1
	 $res=mysqli_num_rows($result);//判断是否为0
	// $arr = mysqli_fetch_all($result,MYSQLI_ASSOC);
	if($res>0){
		echo "1";
		}
		else{
		echo "0";
		} 
?>