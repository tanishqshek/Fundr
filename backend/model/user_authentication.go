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
	FounderId string    `gorm:"primaryKey" json:"founder_id"`
	User      User      `json:"id" gorm:"ForeignKey: UserId"`
	Pitch     string    `json:"pitch" default:""`
	Matches   []Matches `json:"matches" gorm:"ForeignKey: Investor_id"`
}

type Investor struct {
	InvestorId string    `gorm:"primaryKey" json:"investor_id"`
	User       User      `json:"id" gorm:"ForeignKey: UserId"`
	Matches    []Matches `json:"matches" gorm:"ForeignKey: Founder_id"`
	Rejects    []Rejects `json:"rejects" gorm:"ForeignKey: Founder_id"`
	Archive    []Archive `json:"archive" gorm:"ForeignKey: Founder_id"`
}

var Users []*User
