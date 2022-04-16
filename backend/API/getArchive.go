package API

import (
	"net/http"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/tanishqshek/Fundr/backend/internal/middleware"
	"github.com/tanishqshek/Fundr/backend/model"
)

func GetArchive(c *gin.Context) {

	session := sessions.Default(c)
	key := session.Get(middleware.SESSIONKEY)

	UserId := middleware.SessionMap[key.(string)]

	var fetched_user model.User

	var fetched_archive []model.Archive

	type investor_archive struct {
		Founder     string `json:"founder"`
		CompanyName string `json:"company_name"`
		Description string `json:"description"`
		ImageUrl    string `json:"image_url"`
	}

	model.DB.DB.First(&fetched_user, "user_id = ?", UserId)

	if fetched_user.UserType == "Investor" {
		model.DB.DB.Find(&fetched_archive, "investor_id = ?", UserId)
		var archives []investor_archive
		var pitch model.Pitch_description
		var founder model.User
		for _, archive := range fetched_archive {
			model.DB.DB.Find(&pitch, "pitch_id = ?", archive.PitchId)
			model.DB.DB.Find(&founder, "user_id = ?", archive.FounderId)
			temp_archive := investor_archive{
				Founder:     founder.Username,
				CompanyName: pitch.CompanyName,
				Description: pitch.Description,
				ImageUrl:    pitch.ImageUrl,
			}
			archives = append(archives, temp_archive)
		}
		c.JSON(http.StatusOK, gin.H{
			"status":  "200",
			"message": archives,
		})
		return
	} else {
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
			"status":  "401",
			"message": "You cannot view this page",
		})
		return
	}
}
