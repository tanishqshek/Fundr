package API

import (
	"github.com/gin-contrib/sessions"
	"github.com/tanishqshek/Fundr/backend/model"

	"golang.org/x/crypto/bcrypt"

	"net/http"

	"github.com/gin-gonic/gin"

	"github.com/google/uuid"

	"time"
)

func SignIn(c *gin.Context) {

	var fetched_user model.User
	// var w http.ResponseWriter
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
			"message": "Sign in failed.",
		})
	}

	sessionToken := uuid.NewString()
	session := sessions.Default(c)
	session.Set("id", sessionToken)
	session.Set("email", req.Username)
	session.Save()

	http.SetCookie(c.Writer, &http.Cookie{
		Name:    req.Username,
		Value:   sessionToken,
		Expires: time.Now().Add(120 * time.Second),
	})

	// c.SetCookie(req.Username, sessionToken, 9999999, "/", "localhost", false, true)

	c.JSON(http.StatusOK, gin.H{
		"status":  "200",
		"message": "Signed in successfully.",
	})
	return
}
