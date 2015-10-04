<?php
    
//ini_set('display_errors',1);
//error_reporting(E_ALL);

##### Include languages helper
require ("languages.php");

##### Mail header #####
$headers  = "MIME-Version: 1.0\r\n"; 
$headers .= "Content-type: text/html; charset=utf-8\r\n";
$headers .= $language->$_POST['language']->from.": ".$_POST['domain_name']." ".$language->$_POST['language']->service;

    ##### Preparing content #####
        ### From
        $from_name = $_POST['from_name'];
        $from_email	= $_POST['from_email'];
        $from_message = nl2br($_POST['from_message']);        
        $date = date("m/d/Y H:i:s");
        ### To
        $to_email  = $_POST['to_email'];
        $to_subject = $_POST['to_subject'];

    ##### Mail content #####
    $email_header = "<h4>".$_POST['domain_name']." ".$language->$_POST['language']->service."</h4>
                     <h5>".$language->$_POST['language']->subtitle."</h5>";
    $email_body = "<h6>".$language->$_POST['language']->description.":</h6>".
                  "<p>".
                     ($from_name?"<b>".$language->$_POST['language']->name.": </b>".$from_name."<br>":"").
                     ($from_email?"<b>".$language->$_POST['language']->email.": </b>".$from_email."<br>":"").
                     ($from_message?"<b>".$language->$_POST['language']->message.": </b>".$from_message."<br>":"").
                  "</p>";
    $email_footer = "<h6><b>".$language->$_POST['language']->sent_date.": </b>".$date."</h6>";
    $email_content = $email_header.$email_body.$email_footer;

    ##### Sending the email #####
    $email_status_response = @mail($to_email, $to_subject, $email_content, $headers);

    ##### Check the email sending status #####
    if($email_status_response){
        //@ Success
	    echo TRUE;
    }else{
        //@ Fail
	    echo FALSE;
    }

?>