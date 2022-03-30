package model

type tags_pitches struct {
	TagId   string `gorm:"primaryKey"`
	PitchId string `gorm:"primaryKey"`
}
