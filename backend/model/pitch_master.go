package model

import (
	"time"
)

type Pitch_master struct {
	// gorm.Model
	PitchId   string `gorm:"primary_key" gorm:"ForeignKey:Id"`
	CreatedAt time.Time
	UserId    string
	// Description Pitch_description //
	Deleted bool
}
