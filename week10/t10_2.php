 <style>
	#sirt{
		width: 400px;
		border:1px solid black;
		border-radius: 5px; 
		margin-right: 20px;
		margin-bottom: 20px;
		margin-top: 20px; 
		display: flex;
		flex-direction: row;

	}
	#sirt img{
		width: 200px;
		border-radius: 5px; 
		height: 100px;
	}
	#des{
		margin-top: 20px;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;

	}
	#des div{
		margin-left: 20px;
		margin-top: 2px;
	}#xa{
		width: auto;height:auto;display: flex;flex-direction:row;flex-wrap: wrap;justify-content: center;align-items: center;
	}
</style>

<form action="t10_2.php" method="post" style="display: flex;flex-direction: row;">	
<select name="makera" id="makera" >
	<option>Select</option>
</select>
<input type="submit" >
</form>





<div id="xa">
<?php
$c=0;
$arr = array();
$mysql = new mysqli('localhost','root','','task9');
$sql="SELECT id, Maker, Model,Year,Price,Image FROM task10_1";
$result0 = $mysql->query($sql);
if ($result0->num_rows > 0) {
    while($row = $result0->fetch_assoc()) {
    	if(!in_array($row["Maker"],$arr)){
    	array_push($arr,$row["Maker"]);
    	$c++;

    	}
}};


for($i =0; $i < $c ; $i++) {
		echo "<script>
		var a = document.createElement('option');
			a.innerHTML= ' $arr[$i] ';
		    document.getElementById('makera').appendChild(a);
			</script>";
	};


?>


<?php
if(isset($_POST["makera"])){
	$sql="SELECT * FROM task10_1 WHERE Maker='" . $_POST['makera'] . "'";
}else{
	$sql="SELECT id, Maker, Model,Year,Price,Image FROM task10_1";
}

$result = $mysql->query($sql);
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $maker=$row["Maker"];
		$marka=$row["Model"];
		$year=$row["Year"];
		$price=$row["Price"];
		$img=$row["Image"];

       echo "<div id='sirt'><img src='$img'><div id='des'><div style='font-weight:bold;'>$maker  $marka</div><div><span style='font-weight:bold;'>Year:</span> $year</div><div><span style='font-weight:bold;'>Price:</span> $price</div></div></div>";

}
}

	

?>
	
<!-- 

<?php
         $dbhost = 'localhost';
         $dbuser = 'root';
         $dbpass = '';
         $db = 'task9';
         $conn = mysqli_connect($dbhost, $dbuser, $dbpass, $db);
   
         
    $sql = "SELECT * FROM task10_1";
	$result = mysqli_query($conn,$sql);
    $num = mysqli_num_rows($result);
        ?>
<html>
<body>
    <form action="t10_2.php" style="display: flex">
        <select name="maker">
            <option value="-1">Select car</option>
            <?php 
                $arr = [];
                for ($i = 0; $i < $num; $i++) {
                    $row = mysqli_fetch_assoc($result);
                    if (!in_array($row['maker'], $arr)) { ?> 
                        <option value="<?php print $row['maker']; ?>" <?php if(isset($_GET['maker']) && $_GET['maker'] == $row['Maker']) print 'selected = "selected"';?> > <?php  print $row['Maker']; array_push($arr, $row['Maker']); ?>  </option>
                    <?php } ?>
                <?php } ?>
        </select>
        <input type="submit" value="Filter">
    </form>
    <?php 
        if (isset($_GET['maker'])) {
            $sql = "SELECT * FROM task10_1 WHERE Maker='" . $_GET['maker'] . "'";
        }
        else {
            $sql = "SELECT * FROM task10_1";
        }
        $result = mysqli_query($conn,$sql);
        $num = mysqli_num_rows($result);
    ?>
    <div class="cars">
        <?php 
        for ($i = 0; $i < $num; $i++) {
            $row = mysqli_fetch_assoc($result);
            echo "<div class='car'>";
            echo "<img src='" . $row['Image'] . "' style='width: 100px; height: 60px'>";
            echo "<div class='right'>";
            echo "<div class='title'>" .$row['Maker']. ' ' .$row['Model']. '</div>';
            echo "<div class='attributes'>";
            echo "<div class='row'><div class='name'>Price:</div><div>"  .$row['Price']. '$</div></div>';
            echo "<div class='row'><div class='name'>Year:</div><div>" .$row['Year']. '</div></div></div></div></div>'; 
    }
        mysqli_close($conn);
        ?>
    </div>
</body>
</html> -->