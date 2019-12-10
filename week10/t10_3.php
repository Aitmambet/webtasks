<html>
<head>
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
    }  </style>
</head>

<body>
  <div class="cars">
      <div class='select'>
        <form action="t10_3.php" method="post">
                           <input type="text" name="maker">
          >
                </select>
            <input type="submit" name="submit" value="Filter">
        </form>
    </div>  
  <?php
    if(isset($_POST['submit'])){
        $op = $_POST['maker'];
        $mycon = mysqli_connect('localhost','root','','test');
        mysqli_select_db($mycon,'test');
        $query = "SELECT * FROM `cars2` INNER JOIN `carmake` ON `carmake`.`id`=`cars2`.`maker_id` WHERE `title`='$op'";
        $res = mysqli_query($mycon,$query);
        while($row = mysqli_fetch_array($res)){
            $image = $row['Image'];
            $maker = $row['title'];
            $model = $row['model'];
            $price = $row['Price'];
            $year = $row['Year'];
            $car = "<div id='sirt'>
                        <img  src='$image'/>
                        <div class='right'>
                            <div id='des'>$maker $model</div>
                        
                                <div ><div >Year:</div><div>$year</div></div>
                                <div ><div >Price:</div><div>$price$</div></div>            
                    
                        </div>
                    </div>";
            echo $car;
        }
      mysqli_close($mycon);
    }
  ?>
  </div>
</body>

</html>
