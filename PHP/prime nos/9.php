<?php    
$n1=$_POST["n1"];
$n2=$_POST["n2"];
 for($i=$n1;$i<=$n2;$i++)
 	{
 		$c=0;
 		for($j=2;$j<=$i;$j++)
 		{
 			if($i%$j==0)
 			{
 				$c++;
 			}
 		}
 		if($c==1)
 		{
 			echo$i." ";
 		}
 	}
?>
