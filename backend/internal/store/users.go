package store

type User struct {
	// UserId   string `json:"userid"`
	Name     string   `json:"name" binding:"required"`
	Username string   `json:"username" binding:"required,email"`
	Password [32]byte `json:"password" binding:"required"`
	Mobile   string   `json:"mobile" binding:"required"`
	UserType string   `json:"usertype" binding:"required"`
}

var Users []*User
