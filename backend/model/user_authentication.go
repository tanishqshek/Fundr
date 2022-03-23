package model

import "github.com/jinzhu/gorm"

type User struct {
	gorm.Model
	Username string `json:"username" binding:"required,email"`
	UserId   string //`gorm:"primaryKey"`
	AuthId   string
	Name     string `json:"name" binding:"required"`
	Password string `json:"password" binding:"required"`
	Mobile   string `json:"mobile" binding:"required"`
	UserType string `json:"usertype" binding:"required"`
}

type Founder struct {
	gorm.Model
	FounderId string    //`gorm:"primaryKey" json:"founder_id"`
	User      User      `json:"id" gorm:"constraint:OnUpdate:CASCADE,OnDelete:SET NULL;"`
	Pitch     string    `json:"pitch" default:""`
	Matches   []Matches `json:"matches" gorm:"ForeignKey: Investor_id"`
}

type Investor struct {
	gorm.Model
	InvestorId string    //`gorm:"primaryKey" json:"investor_id"`
	User       User      `json:"id" gorm:"ForeignKey: UserId"`
	Matches    []Matches `json:"matches" gorm:"ForeignKey: Founder_id"`
	Rejects    []Rejects `json:"rejects" gorm:"ForeignKey: Founder_id"`
	Archive    []Archive `json:"archive" gorm:"ForeignKey: Founder_id"`
}

// var Users []*User
