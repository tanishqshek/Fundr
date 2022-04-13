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

	var req struct {
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

	var fetched_user model.User

	model.DB.DB.Find(&fetched_user, "user_id = ?", UserId)

	if fetched_user.UserType != "Investor" {
		c.JSON(http.StatusUnauthorized, gin.H{
			"status":  "401",
			"message": "Unauthorized",
		})
	}

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
		var fetched_investor model.User
		var fetched_founder model.User
		var fetched_pitch model.Pitch_description
		model.DB.DB.First(&fetched_investor, "user_id = ?", UserId)
		model.DB.DB.First(&fetched_founder, "user_id = ?", req.Target)
		model.DB.DB.First(&fetched_pitch, "pitch_id = ?", req.PitchId)
		sendMail(fetched_investor, fetched_founder, fetched_pitch)

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
		"message": action + " Succesful",
	})
	return
}

func sendMail(to model.User, founder model.User, pitch model.Pitch_description) {

	server := mail.NewSMTPClient()
	server.Host = "smtp.gmail.com"
	server.Port = 587
	server.Username = "noreply.fundr@gmail.com"
	server.Password = "Fundr@1234"
	server.Encryption = mail.EncryptionTLS

	smtpClient, err := server.Connect()
	if err != nil {

		fmt.Println(err)
	}

	var htmlBody = `
	<html>
	<head>
	   <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	   <title>Match Notification</title>
	</head>
	<body>
	   <p>Hello ` + to.Name + `,</p>
	   <p></p>
	   <p>You have matched with the following Company:</p>
	   <p> Company: ` + pitch.CompanyName + `</p>
	   <p> Founder: ` + founder.Name + `</p>
	   <p> Email: ` + founder.Username + `</p>
	</body>
	`

	email := mail.NewMSG()
	email.SetFrom("noreply.fundr@gmail.com")
	email.AddTo(to.Username)

	email.SetSubject("Match Notification")

	email.SetBody(mail.TextHTML, htmlBody)

	fmt.Println("Sending mail to " + to.Username)
	err = email.Send(smtpClient)
	if err != nil {
		fmt.Println(err)
	}

	fmt.Println("Mail Sent")
}
