<!DOCTYPE html>
<html>

<style>
	#en{
		display: flex;
		flex-direction: column;
	}
	#en input{
		width: 250px;
		margin-bottom: 10px;
	}
</style>
<body>
<h3>Enter data car</h3>
<form id="en" action="sq.php" method="post">
<input type="text" name="maker" placeholder="maker">
<input type="text" name="model" placeholder="model">
<input type="text" name="year" placeholder="year">
<input type="text" name="price" placeholder="price">
<input type="text" name="image" placeholder="image">
<input type="submit" name="">
</form>
</body>
</html>