package API

import (
	"fmt"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/tanishqshek/Fundr/backend/internal/middleware"
	"github.com/tanishqshek/Fundr/backend/model"

	"github.com/google/uuid"

	"net/http"

	mail "github.com/xhit/go-simple-mail/v2"
)

func HandleSwipe(c *gin.Context) {

	// var fetched_user model.User
	// var investor model.Investor
	// var founder model.Founder

	var req struct {
		// Username string `json:"username" binding:"required,email"`
		Action  string `json:"action" binding:"required"`
		Target  string `json:"target" binding:"required"`
		PitchId string `json:"pitch_id" binding:"required"`
	}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  "400",
			"message": err.Error(),
		})
		return
	}

	session := sessions.Default(c)
	key := session.Get(middleware.SESSIONKEY)

	UserId := middleware.SessionMap[key.(string)]

	// model.DB.DB.First(&fetched_user, "Username = ?", req.Username)
	// model.DB.DB.Model(&investor).Association("user").Find(&investor.User)
	// model.DB.DB.First(&fetched_user, "Username = ?", req.Target)
	// model.DB.DB.Model(&founder).Association("user").Find(&founder.User)

	action := ""
	if req.Action == "right" {
		action = "Match"
		match := model.Matches{
			MatchId:    uuid.NewString(),
			InvestorId: UserId,
			FounderId:  req.Target,
			PitchId:    req.PitchId,
		}

		result := model.DB.DB.Create(match)
		err := result.Error

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"status":  "500",
				"message": err.Error(),
			})
			return
		}
		var fetched_user model.User
		model.DB.DB.First(&fetched_user, "user_id = ?", UserId)
		sendMail(fetched_user.Username)

	} else if req.Action == "left" {

		action = "Reject"
		match := model.Rejects{
			RejectId:   uuid.NewString(),
			InvestorId: UserId,
			FounderId:  req.Target,
			PitchId:    req.PitchId,
		}

		result := model.DB.DB.Create(match)
		err := result.Error

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"status":  "500",
				"message": err.Error(),
			})
			return
		}
	} else {

		action = "Archive"
		match := model.Archive{
			ArchiveId:  uuid.NewString(),
			InvestorId: UserId,
			FounderId:  req.Target,
			PitchId:    req.PitchId,
		}

		result := model.DB.DB.Create(match)
		err := result.Error

		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{
				"status":  "500",
				"message": err.Error(),
			})
			return
		}
	}
	c.JSON(http.StatusOK, gin.H{
		"status":  "200",
		"message": action + " Succesfull",
	})
	return
}

func sendMail(to string) {

	fmt.Println(to)

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
	   <title>Match Notification</title>
	</head>
	<body>
	   <p>Hello</p>
	   <p></p>
	   <p>You have matched with the following Investor:</p>
	</body>
	`
	// Create email
	email := mail.NewMSG()
	email.SetFrom("noreply.fundr@gmail.com")
	email.AddTo(to)
	// email.AddCc("another_you@example.com")
	email.SetSubject("Match Notification")

	email.SetBody(mail.TextHTML, htmlBody)
	// email.AddAttachment("super_cool_file.png")

	// Send email
	fmt.Println("Sending mail to " + to)
	err = email.Send(smtpClient)
	if err != nil {
		// log.Fatal(err)
		fmt.Println(err)
	}
	fmt.Println("Mail Sent")
}
