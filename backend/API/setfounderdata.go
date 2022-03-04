package API

import (
	"net/http"

	"github.com/gin-contrib/sessions"
	"github.com/gin-gonic/gin"
	"github.com/tanishqshek/Fundr/backend/internal/middleware"
	"github.com/tanishqshek/Fundr/backend/model"
)

func SetFounderData(c *gin.Context) {

	var founder model.User_description

	// var req struct {
	// 	Name        string
	// 	Username    string
	// 	Mobile      string
	// 	UserType    string
	// 	Description string
	// 	Gender      string
	// 	Education   string
	// 	City        string
	// 	State       string
	// 	Country     string
	// 	Address     string
	// }

	if err := c.ShouldBindJSON(&founder); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  "400",
			"message": err.Error(),
		})
		return
	}

	session := sessions.Default(c)
	key := session.Get(middleware.SESSIONKEY)

	SessionId := middleware.SessionMap[key.(string)]
	UserId := middleware.SessionMap[SessionId]

	founder.Id = UserId
	model.DB.DB.Save(&founder)
}
