package API

import (
	"github.com/tanishqshek/Fundr/backend/model"

	"github.com/gin-gonic/gin"

	"github.com/google/uuid"

	"net/http"
)

func HandleSwipe(c *gin.Context) {

	var fetched_user model.User
	var investor model.Investor
	var founder model.Founder

	var req struct {
		Username string `json:"username" binding:"required,email"`
		Action   string `json:"action" binding:"required"`
		Target   string `json:"target" binding:"required"`
	}

	model.DB.DB.First(&fetched_user, "Username = ?", req.Username)
	model.DB.DB.Model(&investor).Association("user").Find(&investor.User)
	model.DB.DB.First(&fetched_user, "Username = ?", req.Target)
	model.DB.DB.Model(&founder).Association("user").Find(&founder.User)

	action := ""
	if req.Action == "right" {
		action = "Match"
		match := model.Matches{
			Id:       uuid.NewString(),
			Investor: investor,
			Founder:  founder,
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

	} else if req.Action == "left" {

		action = "Reject"
		match := model.Rejects{
			Id:       uuid.NewString(),
			Investor: investor,
			Founder:  founder,
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
			Id:       uuid.NewString(),
			Investor: investor,
			Founder:  founder,
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
		"message": action + "Succesfull",
	})
	return
}
