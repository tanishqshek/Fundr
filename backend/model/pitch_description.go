package model

type Pitch_description struct {
	UserId      string
	PitchId     string `gorm:"primaryKey"`
	ImageUrl    string
	CompanyName string
	Description string
}
