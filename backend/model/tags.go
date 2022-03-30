package model

type Pitch_tags struct {
	TagId   string `gorm:"primary_key"`
	PitchId string `gorm:"primary_key"`
}
