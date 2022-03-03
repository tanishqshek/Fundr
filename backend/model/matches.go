package model

import (
	"time"
)

type Matches struct {
	Pitch_id      string `gorm:"primaryKey"`
	Investor_id   string `gorm:"primaryKey"`
	Founder_id    string `gorm:"primaryKey"`
	Creation_date time.Time
	Creation_time time.Time
}
