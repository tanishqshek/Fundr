package API

import (
	"github.com/gin-contrib/sessions"
	"github.com/tanishqshek/Fundr/backend/model"

	"github.com/tanishqshek/Fundr/backend/internal/middleware"

	"golang.org/x/crypto/bcrypt"

	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

func SignIn(c *gin.Context) {

	session := sessions.Default(c)

	var fetched_user model.User

	var req struct {
		Username string `json:"username" binding:"required,email"`
		Password string `json:"password" binding:"required"`
	}

	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{
			"status":  "400",
			"message": err.Error(),
		})
		return
	}

	model.DB.DB.First(&fetched_user, "Username = ?", req.Username)

	if err := bcrypt.CompareHashAndPassword([]byte(fetched_user.Password), []byte(req.Password)); err != nil {
		// If the two passwords don't match, return a 401 status
		c.AbortWithStatusJSON(http.StatusUnauthorized, gin.H{
			"status":  "401",
			"message": err.Error(), //"Sign in failed.",
		})
		return
	}

	sessionToken := uuid.NewString()
	session.Set(middleware.SESSIONKEY, sessionToken)
	middleware.SessionMap[sessionToken] = fetched_user.UserId
	if err := session.Save(); err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{
			"status":  "500",
			"message": "Failed to save session"})
		return
	}

	var fetched_tags []model.User_tags
	var tags []string
	model.DB.DB.Find(&fetched_tags, "user_id = ?", fetched_user.UserId)
	for _, tag := range fetched_tags {
		tags = append(tags, tag.TagId)
	}

	if tags == nil {
		tags = append(tags, "")
	}

	c.JSON(http.StatusOK, gin.H{
		"status":  "200",
		"message": "Signed in successfully.",
		"user":    fetched_user.Username,
		"tags":    tags,
	})
	return
}
