package API

import (
	"net/http"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/tanishqshek/Fundr/backend/internal/middleware"
	"github.com/tanishqshek/Fundr/backend/model"
)

func GetMyPitch(c *gin.Context) {

	session := sessions.Default(c)
	key := session.Get(middleware.SESSIONKEY)

	UserId := middleware.SessionMap[key.(string)]

	// var fetched_user model.User

	var fetched_pitches []model.Pitch_description

	// type investor_match struct {
	// 	Founder     string `json:"founder"`
	// 	CompanyName string `json:"company_name"`
	// 	Description string `json:"description"`
	// 	ImageUrl    string `json:"image_url"`
	// }

	// type founder_match struct {
	// 	Investor    string `json:"investor"`
	// 	CompanyName string `json:"company_name"`
	// }

	model.DB.DB.Find(&fetched_pitches, "user_id = ?", UserId)

	c.JSON(http.StatusOK, gin.H{
		"status":  "200",
		"message": fetched_pitches,
	})

}
