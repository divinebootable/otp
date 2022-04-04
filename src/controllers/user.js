const bcrypt = require("bcrypt-nodejs");
const jwt = require("jsonwebtoken");
//const knex = require('knex');
const otpGenerator = require('otp-generator')
const hbs = require("nodemailer-express-handlebars");
const nodemailer = require("nodemailer");
const path = require("path");
const db = require("../../data/db");

require("dotenv").config();

const sendMail = (email, code)=>{
  console.log(email + " :email")
	var Transport = nodemailer.createTransport({
    host:"mail.globalfinanceagency.org",
		Port: 465,
    secure: false,
		auth: {
			user: "account@globalfinanceagency.org",
			pass: "megaman@mega"
		},
    tls: {
                rejectUnauthorized: false
            },

     from: "account@globalfinanceagency.org"
	});

	var mailOptions;
	let sender = "Global finance agency";
	mailOptions = {
		from: 'account@globalfinanceagency.org',
		to: `${email}`,
		subject: " Global Finance Email confirmation",
    html: `"<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
        <!-- Facebook sharing information tags -->
        <meta property="og:title" content="*|MC:SUBJECT|*">
        
        <title>*|MC:SUBJECT|*</title>
    
  </head>
    <body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="-webkit-text-size-adjust: none;margin: 0;padding: 0;background-color: #FAFAFA;width: 100% !important;">
      <center>
          <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="backgroundTable" style="margin: 0;padding: 0;background-color: #FAFAFA;height: 100% !important;width: 100% !important;">
              <tr>
                  <td align="center" valign="top" style="border-collapse: collapse;">
                        <!-- // Begin Template Preheader \\ -->
                        <table border="0" cellpadding="10" cellspacing="0" width="600" id="templatePreheader" style="background-color: #FAFAFA;">
                            <tr>
                                <td valign="top" class="preheaderContent" style="border-collapse: collapse;">
                                
                                  <!-- // Begin Module: Standard Preheader \ -->
                                    <table border="0" cellpadding="10" cellspacing="0" width="100%">
                                      <tr>
                                          <td valign="top" style="border-collapse: collapse;">
                                              <div mc:edit="std_preheader_content" style="color: #505050;font-family: Arial;font-size: 10px;line-height: 100%;text-align: left;">
                                                  Account activation
                                                </div>
                                            </td>
                                            <!-- *|IFNOT:ARCHIVE_PAGE|* -->
                      <td valign="top" width="190" style="border-collapse: collapse;">
                                              <div mc:edit="std_preheader_links" style="color: #505050;font-family: Arial;font-size: 10px;line-height: 100%;text-align: left;">
                                                  Is this email not displaying correctly?<br><a href="*|ARCHIVE|*" target="_blank" style="color: #336699;font-weight: normal;text-decoration: underline;">View it in your browser</a>.
                                                </div>
                                            </td>
                      <!-- *|END:IF|* -->
                                        </tr>
                                    </table>
                                  <!-- // End Module: Standard Preheader \ -->
                                
                                </td>
                            </tr>
                        </table>
                        <!-- // End Template Preheader \\ -->
                      <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateContainer" style="border: 1px solid #DDDDDD;background-color: #FFFFFF;">
                          <tr>
                              <td align="center" valign="top" style="border-collapse: collapse;">
                                    <!-- // Begin Template Header \\ -->
                                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateHeader" style="background-color: #FFFFFF;border-bottom: 0;">
                                        <tr>
                                            <td class="headerContent" style="border-collapse: collapse;color: #202020;font-family: Arial;font-size: 34px;font-weight: bold;line-height: 100%;padding: 0;text-align: center;vertical-align: middle;">
                                            
                                              <!-- // Begin Module: Standard Header Image \\ -->
                                              <img src="https://www.spcdn.org/images/Glossary/header-img/6.png" style="max-width: 600px;border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;" id="headerImage campaign-icon" mc:label="header_image" mc:edit="header_image" mc:allowdesigner mc:allowtext>
                                              <!-- // End Module: Standard Header Image \\ -->
                                            
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- // End Template Header \\ -->
                                </td>
                            </tr>
                          <tr>
                              <td align="center" valign="top" style="border-collapse: collapse;">
                                    <!-- // Begin Template Body \\ -->
                                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateBody">
                                      <tr>
                                            <td valign="top" class="bodyContent" style="border-collapse: collapse;background-color: #FFFFFF;">
                                
                                                <!-- // Begin Module: Standard Content \\ -->
                                                <table border="0" cellpadding="20" cellspacing="0" width="100%">
                                                    <tr>
                                                        <td valign="top" style="border-collapse: collapse;">
                                                            <div mc:edit="std_content00" style="color: #505050;font-family: Arial;font-size: 14px;line-height: 150%;text-align: left;">
                                                                <h1 class="h1" style="color: #202020;display: block;font-family: Arial;font-size: 34px;font-weight: bold;line-height: 100%;margin-top: 0;margin-right: 0;margin-bottom: 10px;margin-left: 0;text-align: left;">Email Verification</h1>
                                                                <strong> Welcome to Global Finace Agency</strong>
                                                                <br>
                                                                <br>
                                                               To verify your account click on the link below.<br> Use this code <b>${code}</b> to login<br> Click <a href="https://accounts.globalfinanceagency.org/access/" style="color: #336699;font-weight: normal;text-decoration: underline;">Here <a style="color: #336699;font-weight: normal;text-decoration: underline;"></a> to verify your email. Thanks
                                                            </a></div>
                            </td>
                                                    </tr>
                                                </table>
                                                <!-- // End Module: Standard Content \\ -->
                                                
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- // End Template Body \\ -->
                                </td>
                            </tr>
                          <tr>
                              <td align="center" valign="top" style="border-collapse: collapse;">
                                    <!-- // Begin Template Footer \\ -->
                                  <table border="0" cellpadding="10" cellspacing="0" width="600" id="templateFooter" style="background-color: #FFFFFF;border-top: 0;">
                                      <tr>
                                          <td valign="top" class="footerContent" style="border-collapse: collapse;">
                                            
                                                <!-- // Begin Module: Standard Footer \\ -->
                                                <table border="0" cellpadding="10" cellspacing="0" width="100%">
                                                    <tr>
                                                        <td valign="top" width="350" style="border-collapse: collapse;">
                                                            <div mc:edit="std_footer" style="color: #707070;font-family: Arial;font-size: 12px;line-height: 125%;text-align: left;">
                                <em>Copyright &copy; 2022 Global Finance Agency, All rights reserved.</em>
                                <br>
                                                            </div>
                                                        </td>
                                                        <td valign="top" width="190" id="monkeyRewards" style="border-collapse: collapse;">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2" valign="middle" id="utility" style="border-collapse: collapse;background-color: #FFFFFF;border: 0;">
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!-- // End Module: Standard Footer \\ -->
                                            
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- // End Template Footer \\ -->
                                </td>
                            </tr>
                        </table>
                        <br>
                    </td>
                </tr>
            </table>
        </center>
    </body>
</html>"`,
    //text: 'Hello! <br><br>Verification<br><br>',
		//html: `Press <a href=http://locahost:3000/verify/>Here <a/> to verify your email. Thanks`
	};

	Transport.sendMail(mailOptions, function(error, response){
		if(error){
			console.log(error);
		}else{
			console.log("Message sent")
		}
	});
}


const verificationMail = (email, code)=>{
  console.log(email + " :email")
  var Transport = nodemailer.createTransport({
    host:"mail.globalfinanceagency.org",
    Port: 465,
    secure: false,
    auth: {
      user: "account@globalfinanceagency.org",
      pass: "megaman@mega"
    },
    tls: {
                rejectUnauthorized: false
            }
  });

  var mailOptions;
  let sender = "Global finance agency";
  mailOptions = {
    from: 'account@globalfinanceagency.org',
    to: `${email}`,
    subject: "Second step verification",
    html: `<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
        <!-- Facebook sharing information tags -->
        <meta property="og:title" content="*|MC:SUBJECT|*">
        
        <title>*|MC:SUBJECT|*</title>
    
  </head>
    <body leftmargin="0" marginwidth="0" topmargin="0" marginheight="0" offset="0" style="-webkit-text-size-adjust: none;margin: 0;padding: 0;background-color: #FAFAFA;width: 100% !important;">
      <center>
          <table border="0" cellpadding="0" cellspacing="0" height="100%" width="100%" id="backgroundTable" style="margin: 0;padding: 0;background-color: #FAFAFA;height: 100% !important;width: 100% !important;">
              <tr>
                  <td align="center" valign="top" style="border-collapse: collapse;">
                        <!-- // Begin Template Preheader \\ -->
                        <table border="0" cellpadding="10" cellspacing="0" width="600" id="templatePreheader" style="background-color: #FAFAFA;">
                            <tr>
                                <td valign="top" class="preheaderContent" style="border-collapse: collapse;">
                                
                                  <!-- // Begin Module: Standard Preheader \ -->
                                    <table border="0" cellpadding="10" cellspacing="0" width="100%">
                                      <tr>
                                          <td valign="top" style="border-collapse: collapse;">
                                              <div mc:edit="std_preheader_content" style="color: #505050;font-family: Arial;font-size: 10px;line-height: 100%;text-align: left;">
                                                  Account activation
                                                </div>
                                            </td>
                                            <!-- *|IFNOT:ARCHIVE_PAGE|* -->
                      <td valign="top" width="190" style="border-collapse: collapse;">
                                              <div mc:edit="std_preheader_links" style="color: #505050;font-family: Arial;font-size: 10px;line-height: 100%;text-align: left;">
                                                  Is this email not displaying correctly?<br><a href="*|ARCHIVE|*" target="_blank" style="color: #336699;font-weight: normal;text-decoration: underline;">View it in your browser</a>.
                                                </div>
                                            </td>
                      <!-- *|END:IF|* -->
                                        </tr>
                                    </table>
                                  <!-- // End Module: Standard Preheader \ -->
                                
                                </td>
                            </tr>
                        </table>
                        <!-- // End Template Preheader \\ -->
                      <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateContainer" style="border: 1px solid #DDDDDD;background-color: #FFFFFF;">
                          <tr>
                              <td align="center" valign="top" style="border-collapse: collapse;">
                                    <!-- // Begin Template Header \\ -->
                                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateHeader" style="background-color: #FFFFFF;border-bottom: 0;">
                                        <tr>
                                            <td class="headerContent" style="border-collapse: collapse;color: #202020;font-family: Arial;font-size: 34px;font-weight: bold;line-height: 100%;padding: 0;text-align: center;vertical-align: middle;">
                                            
                                              <!-- // Begin Module: Standard Header Image \\ -->
                                              <img src="https://www.spcdn.org/images/Glossary/header-img/6.png" style="max-width: 600px;border: 0;height: auto;line-height: 100%;outline: none;text-decoration: none;" id="headerImage campaign-icon" mc:label="header_image" mc:edit="header_image" mc:allowdesigner mc:allowtext>
                                              <!-- // End Module: Standard Header Image \\ -->
                                            
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- // End Template Header \\ -->
                                </td>
                            </tr>
                          <tr>
                              <td align="center" valign="top" style="border-collapse: collapse;">
                                    <!-- // Begin Template Body \\ -->
                                  <table border="0" cellpadding="0" cellspacing="0" width="600" id="templateBody">
                                      <tr>
                                            <td valign="top" class="bodyContent" style="border-collapse: collapse;background-color: #FFFFFF;">
                                
                                                <!-- // Begin Module: Standard Content \\ -->
                                                <table border="0" cellpadding="20" cellspacing="0" width="100%">
                                                    <tr>
                                                        <td valign="top" style="border-collapse: collapse;">
                                                            <div mc:edit="std_content00" style="color: #505050;font-family: Arial;font-size: 14px;line-height: 150%;text-align: left;">
                                                                <h1 class="h1" style="color: #202020;display: block;font-family: Arial;font-size: 34px;font-weight: bold;line-height: 100%;margin-top: 0;margin-right: 0;margin-bottom: 10px;margin-left: 0;text-align: left;">Email Verification</h1>
                                                                <strong> Second Step Verification</strong>
                                                                <br>
                                                                <br>
                                                               To Login to your account click on the link below.<br> Use this code <b>${code}</b> <br> Click <a href="https://accounts.globalfinanceagency.org/access/" style="color: #336699;font-weight: normal;text-decoration: underline;">Here <a style="color: #336699;font-weight: normal;text-decoration: underline;"></a> to login to your account. Thanks
                                                            </a></div>
                            </td>
                                                    </tr>
                                                </table>
                                                <!-- // End Module: Standard Content \\ -->
                                                
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- // End Template Body \\ -->
                                </td>
                            </tr>
                          <tr>
                              <td align="center" valign="top" style="border-collapse: collapse;">
                                    <!-- // Begin Template Footer \\ -->
                                  <table border="0" cellpadding="10" cellspacing="0" width="600" id="templateFooter" style="background-color: #FFFFFF;border-top: 0;">
                                      <tr>
                                          <td valign="top" class="footerContent" style="border-collapse: collapse;">
                                            
                                                <!-- // Begin Module: Standard Footer \\ -->
                                                <table border="0" cellpadding="10" cellspacing="0" width="100%">
                                                    <tr>
                                                        <td valign="top" width="350" style="border-collapse: collapse;">
                                                            <div mc:edit="std_footer" style="color: #707070;font-family: Arial;font-size: 12px;line-height: 125%;text-align: left;">
                                <em>Copyright &copy; 2022 Global Finance Agency, All rights reserved.</em>
                                <br>
                                                            </div>
                                                        </td>
                                                        <td valign="top" width="190" id="monkeyRewards" style="border-collapse: collapse;">
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td colspan="2" valign="middle" id="utility" style="border-collapse: collapse;background-color: #FFFFFF;border: 0;">
                                                        </td>
                                                    </tr>
                                                </table>
                                                <!-- // End Module: Standard Footer \\ -->
                                            
                                            </td>
                                        </tr>
                                    </table>
                                    <!-- // End Template Footer \\ -->
                                </td>
                            </tr>
                        </table>
                        <br>
                    </td>
                </tr>
            </table>
        </center>
    </body>
</html>`
    //html: `Press <a href=http://locahost:3000/verify/>Here <a/> to verify your email. Thanks`
  };

  Transport.sendMail(mailOptions, function(error, response){
    if(error){
      console.log(error);
    }else{
      console.log("Message sent")
    }
  });
}



const createAccount = (req, res, otp) => {
   console.log(req.body)
   const value = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
    otp = value;
  const{
    investmentplan,
    firstname,
    middlename,
    lastname,
    dob,
    country,
    passportnumber,
    email,
    phone_number,
    areacode,
    password,
    created_on
  } = req.body;
    const hash = bcrypt.hashSync(password);
  db("users")
    .insert({
      investmentplan,
      firstname,
      middlename,
      lastname,
      dob,
      country,
      passportnumber,
      email,
      phone_number,
      areacode,
      hash,
      otp,
      created_on
    })
    .returning("*")
    .then(data => {
       console.log(data)
      sendMail(email,otp);
      res.status(200).json(data);
    })
    .catch((err) => res.status(500).json({ dbError: "db error" }));
};


const verifyAccount = (req, res)=>{
  db.select('email','otp').from('users')
  .where('email','=',req.body.email)
  .then(data=>{
     if(req.body.otp === data[0].otp){
       return db.select('*').from('users')
         .where('email','=',req.body.email)
         .then(profile=>{
           jwt.sign({profile}, 'secretKey', {expiresIn: "1day"},(err,token)=>{
              var user={
                 token:token,
                 profile:profile
              }
             res.status(200).json({user})
           })
         })
         .catch(err=>res.status(400).json("Username and Password Incorrect"))
     }else{
         res.status(401).json("Code Incorrect")
       }
  })
  .catch(err=>res.status(500).json("Server Error"))

}


const signIn = (req, res)=>{
  console.log(req.body)
     db.select('email', 'hash').from("users")
    .where('email','=',req.body.email)
    .then(data=>{
      const isValid = bcrypt.compareSync(req.body.password,data[0].hash);
      if(isValid){
         const value = otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false });
          otp = value;
          db("users").update({otp}).where('email',req.body.email)
          .returning("*")
          .then(data=>{
            verificationMail(req.body.email,otp);
            res.status(200).json(data);
          })
          .catch((err=>res.status(401).json("otp failed")))
         //res.json("ok")
       
      }else{
        res.status(400).json("Wrong Credential")
      }
    })
    .catch(err=>res.status(500).json("Wrong Credentials"))
}

const getAccount = (req, res) => {
  db.select("*")
    .from("users")
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) =>
      res.status(500).json({
        dbError: "Unbale to get users",
      })
    );
};

module.exports = {
  createAccount,
  verifyAccount,
  signIn,
  getAccount,
};
