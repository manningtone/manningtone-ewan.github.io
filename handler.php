 <?php 
    }  
else                /* send the submitted data */ 
    { 
    $name=$_REQUEST['name']; 
    $email=$_REQUEST['email']; 
    $message=$_REQUEST['mobile']; 
    if (($name=="")||($email=="")||($mobile=="")) 
        { 
        echo "All fields are required, please fill <a href=\"\">the form</a> again."; 
        } 
    else{         
        $from="From: $name<$email>\r\nReturn-path: $email"; 
        $subject="Message sent using your contact form"; 
        mail("ewanmannington@live.co.uk", $subject, $message, $from); 
        echo "Email sent!"; 
        } 
    }   
?> 
