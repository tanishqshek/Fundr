package model

type User struct {
	Username string `gorm:"primaryKey" json:"username" binding:"required,email"`
	UserId   string
	AuthId   string
	Name     string `json:"name" binding:"required"`
	Password string `json:"password" binding:"required"`
	Mobile   string `json:"mobile" binding:"required"`
	UserType string `json:"usertype" binding:"required"`
}

type Founder struct {
	Id      User   `json:"id" gorm:"ForeignKey: UserId"`
	Pitch   string `json:"pitch" default:""`
	Matches string `json:"matches" default:"[]"`
}

type Investor struct {
	Id      User   `json:"id" gorm:"ForeignKey: UserId"`
	Matches string `json:"matches" default:"[]"`
	Rejects string `json:"rejects" default:"[]"`
	Archive string `json:"archive" default:"[]"`
}

var Users []*User
