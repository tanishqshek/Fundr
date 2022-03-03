package model

type Pitch_description struct {
	Id          uint `gorm:"primaryKey"`
	Description string
}
