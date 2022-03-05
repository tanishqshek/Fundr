package model

type Pitch_description struct {
	Id          string `gorm:"primaryKey"`
	CompanyName string
	Description string
}
