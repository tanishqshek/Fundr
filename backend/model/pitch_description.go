package model

type Pitch_description struct {
	Id          string //`gorm:"primaryKey"`
	ImageUrl    string
	CompanyName string
	Description string
}
