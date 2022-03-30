package model

import (
	"time"
)

type Pitch_master struct {
	// gorm.Model
	PitchId     string `gorm:"primary_key"`
	CreatedAt   time.Time
	UserId      string
	Description Pitch_description //`gorm:"ForeignKey:Id"`
	Deleted     bool
}
