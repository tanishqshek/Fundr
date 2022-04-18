package API

import (
	//"github.com/gin-contrib/sessions"
	"fmt"

	"github.com/tanishqshek/Fundr/backend/constants"
	"github.com/tanishqshek/Fundr/backend/model"
	mail "github.com/xhit/go-simple-mail/v2"

	"github.com/tanishqshek/Fundr/backend/internal/middleware"

	"net/http"

	"github.com/gin-gonic/gin"
	//"time"
)

func resetPassword(c *gin.Context) {

	var fetched_user model.User_description

	var req struct {
		Username string `json:"username" binding:"required,email"`
	}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  "400",
			"message": err.Error(),
		})
		return
	}

	model.DB.DB.First(&fetched_user, "Username = ?", req.Username)

	random_token := randSeq(6)

	middleware.ResetTokenMap[fetched_user.Username] = random_token

	server := mail.NewSMTPClient()
	server.Host = constants.EMAIL_SERVER
	server.Port = constants.EMAIL_PORT
	server.Username = constants.EMAIL_SENDER
	server.Password = constants.EMAIL_PASSWORD
	server.Encryption = mail.EncryptionTLS

	smtpClient, err := server.Connect()
	if err != nil {

		fmt.Println(err)
	}

	var htmlBody = `
	<html>
	<head>
	   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	   <title>Fundr Password Reset</title>
	</head>
	<body>
	   <p>Hello ` + fetched_user.Name + `,</p>
	   <p></p>
	   <p>Here is the token for you to reset your password:</p>
	   <p> ` + random_token + `</p>
	</body>
	`

	email := mail.NewMSG()
	email.SetFrom(constants.EMAIL_SENDER)
	email.AddTo(fetched_user.Username)

	email.SetSubject("Match Notification")

	email.SetBody(mail.TextHTML, htmlBody)

	fmt.Println("Sending mail to " + fetched_user.Username)
	err = email.Send(smtpClient)
	if err != nil {

		fmt.Println(err)
	}
	fmt.Println("Mail Sent")

	c.JSON(http.StatusOK, gin.H{
		"status":  "200",
		"message": "Token sent successfully.",
		"user":    fetched_user.Username,
	})
	return
}
