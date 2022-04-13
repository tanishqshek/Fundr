package API

import (
	//"github.com/gin-contrib/sessions"
	"fmt"
	"math/rand"

	"github.com/tanishqshek/Fundr/backend/model"
	mail "github.com/xhit/go-simple-mail/v2"

	"github.com/tanishqshek/Fundr/backend/internal/middleware"

	"net/http"

	"github.com/gin-gonic/gin"
	//"time"
)

var letters = []rune("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")

func randSeq(n int) string {
	b := make([]rune, n)
	for i := range b {
		b[i] = letters[rand.Intn(len(letters))]
	}
	return string(b)
}

func GenResetToken(c *gin.Context) {

	// session := sessions.Default(c)

	var fetched_user model.User
	// var w http.ResponseWriter
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

	// generate random token

	random_token := randSeq(6)

	middleware.ResetTokenMap[fetched_user.Username] = random_token

	server := mail.NewSMTPClient()
	server.Host = "smtp.gmail.com"
	server.Port = 587
	server.Username = "noreply.fundr@gmail.com"
	server.Password = "Fundr@1234"
	server.Encryption = mail.EncryptionTLS

	smtpClient, err := server.Connect()
	if err != nil {
		// log.Fatal(err)
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
	// Create email
	email := mail.NewMSG()
	email.SetFrom("noreply.fundr@gmail.com")
	email.AddTo(fetched_user.Username)
	// email.AddCc("another_you@example.com")
	email.SetSubject("Match Notification")

	email.SetBody(mail.TextHTML, htmlBody)
	// email.AddAttachment("super_cool_file.png")

	// Send email
	fmt.Println("Sending mail to " + fetched_user.Username)
	err = email.Send(smtpClient)
	if err != nil {
		// log.Fatal(err)
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
